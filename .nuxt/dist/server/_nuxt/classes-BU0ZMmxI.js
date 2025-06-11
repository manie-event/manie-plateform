import { d as defineStore, a as axiosServices } from "../server.mjs";
const useClassesStore = defineStore({
  id: "Classes",
  state: () => ({
    classinfo: []
  }),
  getters: {
    // Get Post from Getters
    getPosts(state) {
      return state.classinfo;
    }
  },
  actions: {
    // Fetch Blog from action
    async fetchPosts() {
      try {
        const data = await axiosServices.get("/api/classes");
        this.classinfo = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchPost(title) {
      try {
        const response = await axiosServices.post("/api/classes/details", { title });
        this.classinfo = response.data.post;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  }
});
export {
  useClassesStore as u
};
//# sourceMappingURL=classes-BU0ZMmxI.js.map
