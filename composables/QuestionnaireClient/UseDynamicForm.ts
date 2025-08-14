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
  const { isFieldVisible, getDynamicOptions } = useConditionalLogic(formState);
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
   * Détermine si une section doit afficher un contrôleur (switch)
   */
  const shouldShowSectionController = (section: SectionSchema): boolean => {
    // Pas de switch sur la première page
    if (currentPageIndex.value === 0) return false;

    // Afficher un switch si la section contient un checkbox non-multiple (ancien contrôleur)
    return section.fields.some((f) => f.type === 'checkbox' && !f.multiple);
  };

  /**
   * Trouve le champ de contrôle d'une section ou crée un virtuel
   */
  const getVisibleField = (section: SectionSchema): FieldSchema => {
    // Prendre le premier checkbox non-multiple comme source de label
    const controlling = section.fields.find((f) => f.type === 'checkbox' && !f.multiple);
    const virtualField: FieldSchema = {
      id: `__section_${section.id}_toggle`,
      label: controlling?.label || 'Activer cette section',
      type: 'checkbox',
      multiple: false,
    };
    console.log(`Champ de contrôle virtuel pour ${section.id}:`, virtualField.id);
    return virtualField;
  };

  /**
   * Valeur du switch
   */
  const getSectionControllerValue = (section: SectionSchema): boolean => {
    const field = getVisibleField(section);
    const value = !!formState[field.id];
    return value;
  };

  /**
   * Au toggle: on met à jour, on charge le secteur, et on force/retire la visibilité des keywords
   */
  const setSectionControllerValue = async (
    section: SectionSchema,
    value: boolean,
    getSectorsApi: Function
  ): Promise<void> => {
    const field = getVisibleField(section);

    formState[field.id] = value;
    clearFieldError(field.id);

    // Contrôleur interne (ex: *_deja_trouve) qui pilote showIf des keywords
    const dejaTrouve = section.fields.find(
      (f) => f.type === 'checkbox' && !f.multiple && /deja|trouve/i.test(f.id)
    );

    if (value && field.type === 'checkbox' && !field.multiple) {
      try {
        await loadSectorData(section.id, getSectorsApi);
      } catch (error) {
        // Ignorer
      }
      if (dejaTrouve) {
        formState[dejaTrouve.id] = true;
      }
    } else if (!value) {
      // Masquer les keywords en désactivant le contrôleur interne
      if (dejaTrouve) {
        formState[dejaTrouve.id] = false;
      }
    }
  };

  /**
   * Gère les changements sur les checkboxes multiples avec limite max
   */
  const onMultiCheckboxChange = (field: FieldSchema, nextValue: any[]): void => {
    if (typeof field.max === 'number' && Array.isArray(nextValue) && nextValue.length > field.max) {
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

    return payload;
  };

  /**
   * Soumission du formulaire
   */
  const submitForm = async (getSectorsApi: Function): Promise<EventCreatePayload | null> => {
    const isValid = validatePage(currentPageSections.value, formState, isFieldVisible);
    if (!isValid) {
      return null;
    }

    try {
      const services = buildServiceSelections(props.sections, formState);
      const payload = buildEventPayload(services);
      return payload;
    } catch (error) {
      return null;
    }
  };

  /**
   * Initialisation des valeurs par défaut
   */
  const initializeDefaults = (): void => {
    props.sections?.forEach((section) => {
      section.fields.forEach((field) => {
        if (field.type === 'checkbox' && field.multiple) {
          if (!Array.isArray(formState[field.id])) {
            formState[field.id] = [];
          }
        } else if (field.type === 'checkbox' && !field.multiple) {
          if (typeof formState[field.id] !== 'boolean') {
            formState[field.id] = false;
          }
        } else if (formState[field.id] === undefined) {
          formState[field.id] = undefined;
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

    // Contrôleurs de section
    shouldShowSectionController,
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
