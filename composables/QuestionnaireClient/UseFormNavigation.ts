import { chunkArray } from '@/utils/form.utils';
import { computed, ref } from 'vue';
import type { PageInfo, SectionSchema } from '~/models/questionnaire/QuestionnaireClient';

export function useFormNavigation(sections: SectionSchema[]) {
  const currentPageIndex = ref(0);

  /**
   * Divise les sections en pages (première section seule, puis par paires)
   */
  const pages = computed((): PageInfo[] => {
    if (!sections || sections.length === 0) return [];

    const [first, ...rest] = sections;
    const paired = chunkArray(rest, 2);

    const pagesData = [{ sections: [first] }, ...paired.map((pair) => ({ sections: pair }))];

    console.log(
      'Pages générées:',
      pagesData.map((p, i) => ({
        page: i,
        sections: p.sections.map((s) => s.id),
      }))
    );

    return pagesData;
  });

  /**
   * Modèle pour la pagination (1-indexed)
   */
  const paginationModel = computed({
    get: (): number => currentPageIndex.value + 1,
    set: (value: number): void => {
      currentPageIndex.value = value - 1;
    },
  });

  /**
   * Détermine si on est sur la dernière page
   */
  const isLastPage = computed((): boolean => {
    return currentPageIndex.value === pages.value.length - 1;
  });

  /**
   * Titre de la page courante (basé sur les titres des sections)
   */
  const currentPageTitle = computed((): string => {
    const page = pages.value[currentPageIndex.value];
    if (!page) return '';
    return page.sections.map((s) => s.title).join(' + ');
  });

  /**
   * Sections de la page courante
   */
  const currentPageSections = computed((): SectionSchema[] => {
    const page = pages.value[currentPageIndex.value];
    return page ? page.sections : [];
  });

  /**
   * Navigation vers la page suivante
   */
  const nextPage = (): void => {
    if (currentPageIndex.value < pages.value.length - 1) {
      currentPageIndex.value += 1;
    }
  };

  /**
   * Navigation vers la page précédente
   */
  const prevPage = (): void => {
    if (currentPageIndex.value > 0) {
      currentPageIndex.value -= 1;
    }
  };

  return {
    currentPageIndex,
    pages,
    paginationModel,
    isLastPage,
    currentPageTitle,
    currentPageSections,
    nextPage,
    prevPage,
  };
}
