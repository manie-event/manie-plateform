import { d as defineStore, a as axiosServices } from './server.mjs';

const useGalleryStore = defineStore({
  id: "Gallery",
  state: () => ({
    gallery: []
  }),
  getters: {},
  actions: {
    // Fetch followers from action
    async fetchGallery() {
      try {
        const response = await axiosServices.get("/api/gallery/list");
        this.gallery = response.data.gallery;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  }
});

export { useGalleryStore as u };
//# sourceMappingURL=gallery-DT_0CU6z.mjs.map
