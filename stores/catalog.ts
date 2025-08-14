import { defineStore } from 'pinia';

// Minimal API types
interface ApiService { uuid: string; name: string }
interface ApiKeyword { uuid: string; name: string }
interface SectorData { services: ApiService[]; keywords: ApiKeyword[] }

function normalize(s?: string): string {
  return (s || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '')
    .trim();
}

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    sectorDataBySectionId: {} as Record<string, SectorData>,
    loadingBySectionId: {} as Record<string, boolean>,
    loadedBySectionId: {} as Record<string, boolean>,
    errorBySectionId: {} as Record<string, string | undefined>,
  }),

  getters: {
    // Mapping nom normalisé -> uuid, par section
    serviceNameToUuidBySectionId(state): Record<string, Record<string, string>> {
      const out: Record<string, Record<string, string>> = {};
      for (const [sectionId, data] of Object.entries(state.sectorDataBySectionId)) {
        out[sectionId] = Object.fromEntries((data.services || []).map(s => [normalize(s.name), s.uuid]));
      }
      return out;
    },
    keywordNameToUuidBySectionId(state): Record<string, Record<string, string>> {
      const out: Record<string, Record<string, string>> = {};
      for (const [sectionId, data] of Object.entries(state.sectorDataBySectionId)) {
        out[sectionId] = Object.fromEntries((data.keywords || []).map(k => [normalize(k.name), k.uuid]));
      }
      return out;
    },
  },

  actions: {
    setSectorData(sectionId: string, data: SectorData) {
      this.sectorDataBySectionId[sectionId] = data;
      this.loadedBySectionId[sectionId] = true;
      this.loadingBySectionId[sectionId] = false;
      this.errorBySectionId[sectionId] = undefined;
    },

    async ensureSectorLoaded(sectionId: string, fetcher: (sector: string) => Promise<SectorData | undefined>) {
      if (this.loadedBySectionId[sectionId] || this.loadingBySectionId[sectionId]) return;
      this.loadingBySectionId[sectionId] = true;
      this.errorBySectionId[sectionId] = undefined;
      try {
        const data = await fetcher(sectionId);
        if (data) this.setSectorData(sectionId, data);
        else throw new Error('No sector data returned');
      } catch (e: any) {
        this.errorBySectionId[sectionId] = e?.message || 'Failed to load sector';
        this.loadingBySectionId[sectionId] = false;
      }
    },
  },
});