import { d as defineStore, a as axiosServices } from "../server.mjs";
const useFollowersStore = defineStore({
  id: "followers",
  state: () => ({
    followers: []
  }),
  getters: {},
  actions: {
    // Fetch followers from action
    async fetchFollowers() {
      try {
        const response = await axiosServices.get("/api/followers/list");
        this.followers = response.data.followers;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  }
});
export {
  useFollowersStore as u
};
//# sourceMappingURL=followers-CuyIjZTz.js.map
