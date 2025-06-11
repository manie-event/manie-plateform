import { d as defineStore, a as axiosServices } from "../server.mjs";
const useBlogStore = defineStore({
  id: "blog",
  state: () => ({
    blogposts: [],
    recentPosts: [],
    blogSearch: "",
    sortBy: "newest",
    selectedPost: []
  }),
  getters: {
    // Get Post from Getters
    getPosts(state) {
      return state.blogposts;
    }
  },
  actions: {
    // Fetch Blog from action
    async fetchPosts() {
      try {
        const data = await axiosServices.get("/api/data/blog/BlogPosts");
        this.blogposts = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchPost(title) {
      try {
        const response = await axiosServices.post("/api/data/blog/post", { title });
        this.selectedPost = response.data.post;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  }
});
export {
  useBlogStore as u
};
//# sourceMappingURL=blog-DVMJJEFA.js.map
