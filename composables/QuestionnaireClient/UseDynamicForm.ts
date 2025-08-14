import type {
  EventCreatePayload,
  FieldSchema,
  FormState,
  SectionSchema,
  ServiceSelection,
} from '~/models/questionnaire/QuestionnaireClient';
import { useConditionalLogic } from './UseConditionalLogic';
import { useFormNavigation } from './UseFormNavigation';
import { useServiceMapping } from './UseServiceMapping';
import { useFormValidation } from './UserFormValidation';
import { reactive, onMounted } from 'vue';
import { humanizeEventName, computeDateRange } from '@/utils/form.utils';

interface UseDynamicFormProps {
  sections: SectionSchema[];
  modelValue?: Record<string, any>;
  organisatorUuid: string;
}

export function useDynamicForm(props: UseDynamicFormProps) {
  // État réactif du formulaire
  const formState = reactive<FormState>({ ...(props.modelValue || {}) });

  // Composables spécialisés
  const { loadSectorData, buildServiceSelections } = useServiceMapping();
  const { fieldErrors, pageErrors, validatePage, clearFieldError, clearPageErrors } =
    useFormValidation();
  const { isFieldVisible, getDynamicOptions, isSectionSkipped } = useConditionalLogic(formState);
  const {
    currentPageIndex,
    pages,
    paginationModel,
    isLastPage,
    currentPageTitle,
    currentPageSections,
    nextPage: navigateNext,
    prevPage: navigatePrev,
  } = useFormNavigation(props.sections);

  /**
   * Trouve le champ de contrôle d'une section (champ avec visibleSection: true)
   */
  const getVisibleField = (section: SectionSchema): FieldSchema => {
    const field = section.fields.find((f) => f.visibleSection);
    if (field) {
      console.log(`Champ de contrôle pour ${section.id}:`, field.id);
      return field;
    }

    const virtualField: FieldSchema = {
      id: `__section_${section.id}_toggle`,
      label: section.title,
      type: 'checkbox',
      multiple: false,
    };
    console.log(`Champ de contrôle virtuel pour ${section.id}:`, virtualField.id);
    return virtualField;
  };

  /**
   * Récupère la valeur du contrôleur de section (switch)
   */
  const getSectionControllerValue = (section: SectionSchema): boolean => {
    const field = getVisibleField(section);
    const value = !!formState[field.id];
    console.log(`Valeur du contrôleur ${section.id}:`, value);
    return value;
  };

  /**
   * Met à jour la valeur du contrôleur de section et charge les données si nécessaire
   */
  const setSectionControllerValue = async (
    section: SectionSchema,
    value: boolean,
    getSectorsApi: Function
  ): Promise<void> => {
    const field = getVisibleField(section);



    console.log(`🔄 Mise à jour du contrôleur:`, {
      section: section.id,
      field: field.id,
      oldValue: formState[field.id],
      newValue: value,
    });

    // Mettre à jour la valeur
    formState[field.id] = value;
    clearFieldError(field.id);

    // Charger les données du secteur si le switch est activé
    if (value && field.type === 'checkbox' && !field.multiple) {
      try {
        console.log(`📡 Chargement du secteur: ${section.id}`);
        await loadSectorData(section.id, getSectorsApi);
        console.log(`✅ Secteur ${section.id} chargé avec succès`);
      } catch (error) {
        console.error(`❌ Erreur lors du chargement du secteur ${section.id}:`, error);
        // Optionnel: remettre le switch à false en cas d'erreur
        // formState[field.id] = false;
      }
    }
  };

  /**
   * Gère les changements sur les checkboxes multiples avec limite max
   */
  const onMultiCheckboxChange = (field: FieldSchema, nextValue: any[]): void => {
    if (typeof field.max === 'number' && Array.isArray(nextValue) && nextValue.length > field.max) {
      console.log(`Limitation à ${field.max} éléments pour ${field.id}`);
      formState[field.id] = nextValue.slice(-field.max);
    }
    clearFieldError(field.id);
  };

  /**
   * Navigation avec validation
   */
  const nextPage = (): void => {
    const isValid = validatePage(currentPageSections.value, formState, isFieldVisible);

    if (!isValid) {
      console.log('❌ Validation échouée, impossible de passer à la page suivante');
      return;
    }

    clearPageErrors();
    navigateNext();
  };

  const prevPage = (): void => {
    clearPageErrors();
    navigatePrev();
  };

  /**
   * Construction du payload final pour l'événement
   */
  const buildEventPayload = (services: ServiceSelection[]): EventCreatePayload => {
    console.log("🏗️ Construction du payload d'événement...");

    const peopleNum = Number(formState.nb_personnes || 0);
    const budget =
      formState.budget_type === 'par_personne'
        ? Number(formState.budgetParPersonne || 0) * peopleNum
        : Number(formState.budget || 0);

    const payload: EventCreatePayload = {
      organisatorUuid: props.organisatorUuid,
      date: computeDateRange(formState),
      budget,
      location: String(formState.localisation || ''),
      name: formState.theme ? String(formState.theme) : humanizeEventName(formState.evenement),
      people: String(formState.nb_personnes ?? ''),
      services,
    };

    console.log('📦 Payload final:', payload);
    return payload;
  };

  /**
   * Soumission du formulaire
   */
  const submitForm = async (getSectorsApi: Function): Promise<EventCreatePayload | null> => {
    console.log('🚀 Soumission du formulaire...');

    // Validation finale
    const isValid = validatePage(currentPageSections.value, formState, isFieldVisible);
    if (!isValid) {
      console.log('❌ Validation finale échouée');
      return null;
    }

    try {
      // Construction des services
      const services = buildServiceSelections(props.sections, formState);

      if (services.length === 0) {
        console.warn('⚠️ Aucun service sélectionné');
      }

      // Construction du payload final
      const payload = buildEventPayload(services);

      console.log('✅ Formulaire soumis avec succès');
      return payload;
    } catch (error) {
      console.error('❌ Erreur lors de la soumission:', error);
      return null;
    }
  };

  /**
   * Initialisation des valeurs par défaut
   */
  const initializeDefaults = (): void => {
    console.log('🔧 Initialisation des valeurs par défaut...');

    props.sections?.forEach((section) => {
      section.fields.forEach((field) => {
        if (field.type === 'checkbox' && field.multiple) {
          if (!Array.isArray(formState[field.id])) {
            formState[field.id] = [];
            console.log(`Initialisation ${field.id} = []`);
          }
        } else if (field.type === 'checkbox' && !field.multiple) {
          if (typeof formState[field.id] !== 'boolean') {
            formState[field.id] = false;
            console.log(`Initialisation ${field.id} = false`);
          }
        } else if (formState[field.id] === undefined) {
          formState[field.id] = undefined;
          console.log(`Initialisation ${field.id} = undefined`);
        }
      });
    });
  };

  // Initialisation au montage
  onMounted(() => {
    initializeDefaults();
  });

  return {
    // État
    formState,
    fieldErrors,
    pageErrors,

    // Navigation
    currentPageIndex,
    pages,
    paginationModel,
    isLastPage,
    currentPageTitle,
    currentPageSections,
    nextPage,
    prevPage,

    // Logique métier
    isFieldVisible,
    getDynamicOptions,
    isSectionSkipped,

    // Contrôleurs de section
    getVisibleField,
    getSectionControllerValue,
    setSectionControllerValue,

    // Validation
    validatePage: (sections: SectionSchema[]) => validatePage(sections, formState, isFieldVisible),
    clearFieldError,
    clearPageErrors,

    // Handlers
    onMultiCheckboxChange,

    // Soumission
    submitForm,
    buildServiceSelections: () => buildServiceSelections(props.sections, formState),
  };
}
