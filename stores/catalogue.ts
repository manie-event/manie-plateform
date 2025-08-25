import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

// Minimal API types
interface ApiService {
  uuid: string;
  name: string;
}
interface ApiKeyword {
  uuid: string;
  name: string;
}
interface SectorData {
  services: ApiService[];
  keywords: ApiKeyword[];
}

const normalize = (s?: string): string => {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '')
    .trim();
};

export const useCatalogStore = defineStore('catalogue', () => {
  const sectorDataBySectionId = ref<Record<string, SectorData>>({});
  const loadingBySectionId = ref<Record<string, boolean>>({});
  const loadedBySectionId = ref<Record<string, boolean>>({});
  const errorBySectionId = ref<Record<string, string | undefined>>({});

  const serviceNameToUuidBySectionId = computed<Record<string, Record<string, string>>>(() => {
    const out: Record<string, Record<string, string>> = {};
    for (const [sectionId, data] of Object.entries(sectorDataBySectionId.value)) {
      out[sectionId] = Object.fromEntries(
        (data.services || []).map((s) => [normalize(s.name), s.uuid])
      );
    }
    return out;
  });

  const keywordNameToUuidBySectionId = computed<Record<string, Record<string, string>>>(() => {
    const out: Record<string, Record<string, string>> = {};
    for (const [sectionId, data] of Object.entries(sectorDataBySectionId.value)) {
      out[sectionId] = Object.fromEntries(
        (data.keywords || []).map((k) => [normalize(k.name), k.uuid])
      );
    }
    return out;
  });

  const setSectorData = (sectionId: string, data: SectorData) => {
    sectorDataBySectionId.value[sectionId] = data;
    loadedBySectionId.value[sectionId] = true;
    loadingBySectionId.value[sectionId] = false;
    errorBySectionId.value[sectionId] = undefined;
  };

  const setLoading = (sectionId: string, v: boolean) => {
    loadingBySectionId.value[sectionId] = v;
  };

  const setLoaded = (sectionId: string, v: boolean) => {
    loadedBySectionId.value[sectionId] = v;
  };

  const setError = (sectionId: string, msg?: string) => {
    errorBySectionId.value[sectionId] = msg;
  };

  const clearSection = (sectionId: string) => {
    delete sectorDataBySectionId.value[sectionId];
    delete loadingBySectionId.value[sectionId];
    delete loadedBySectionId.value[sectionId];
    delete errorBySectionId.value[sectionId];
  };

  const reset = () => {
    sectorDataBySectionId.value = {};
    loadingBySectionId.value = {};
    loadedBySectionId.value = {};
    errorBySectionId.value = {};
  };

  // helpers
  const getSectorData = (sectionId: string): SectorData | undefined => {
    return sectorDataBySectionId.value[sectionId];
  };
  const isLoading = (sectionId: string): boolean => {
    return !!loadingBySectionId.value[sectionId];
  };
  const isLoaded = (sectionId: string): boolean => {
    return !!loadedBySectionId.value[sectionId];
  };
  const getError = (sectionId: string): string | undefined => {
    return errorBySectionId.value[sectionId];
  };

  const ensureSectorLoaded = async (
    sectionId: string,
    fetcher: (sector: string) => Promise<SectorData | undefined>
  ) => {
    if (isLoaded(sectionId) || isLoading(sectionId)) return;
    setLoading(sectionId, true);
    setError(sectionId, undefined);
    try {
      const data = await fetcher(sectionId);
      if (data) setSectorData(sectionId, data);
      else throw new Error('No sector data returned');
    } catch (e: any) {
      setError(sectionId, e?.message || 'Failed to load sector');
      setLoading(sectionId, false);
    }
  };

  return {
    sectorDataBySectionId,
    loadingBySectionId,
    loadedBySectionId,
    errorBySectionId,
    serviceNameToUuidBySectionId,
    keywordNameToUuidBySectionId,
    setSectorData,
    setLoading,
    setLoaded,
    setError,
    clearSection,
    reset,
    getSectorData,
    isLoading,
    isLoaded,
    getError,
    ensureSectorLoaded,
  };
});
