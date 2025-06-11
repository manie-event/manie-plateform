import { d as defineStore, a as axiosServices } from './server.mjs';

const useFrinedsStore = defineStore({
  id: "Frineds",
  state: () => ({
    friends: []
  }),
  getters: {},
  actions: {
    // Fetch followers from action
    async fetchFrineds() {
      try {
        const response = await axiosServices.get("/api/friends/list");
        this.friends = response.data.friends;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  }
});

export { useFrinedsStore as u };
//# sourceMappingURL=friends-BnR5n084.mjs.map
