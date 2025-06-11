import { d as defineStore } from "../server.mjs";
const config = {
  Sidebar_drawer: null,
  Customizer_drawer: false,
  mini_sidebar: false,
  setHorizontalLayout: false,
  // Horizontal layout
  setRTLLayout: false,
  // RTL layout
  actTheme: "BLUE_THEME",
  boxed: true,
  setBorderCard: false
};
const useCustomizerStore = defineStore({
  id: "customizer",
  state: () => ({
    Sidebar_drawer: config.Sidebar_drawer,
    Customizer_drawer: config.Customizer_drawer,
    mini_sidebar: config.mini_sidebar,
    setHorizontalLayout: config.setHorizontalLayout,
    // Horizontal layout
    setRTLLayout: config.setRTLLayout,
    // RTL layout
    actTheme: config.actTheme,
    boxed: config.boxed,
    setBorderCard: config.setBorderCard
  }),
  getters: {},
  actions: {
    SET_SIDEBAR_DRAWER() {
      this.Sidebar_drawer = !this.Sidebar_drawer;
    },
    SET_MINI_SIDEBAR(payload) {
      this.mini_sidebar = payload;
    },
    SET_CUSTOMIZER_DRAWER(payload) {
      this.Customizer_drawer = payload;
    },
    SET_LAYOUT(payload) {
      this.setHorizontalLayout = payload;
    },
    SET_THEME(payload) {
      this.actTheme = payload;
    },
    SET_CARD_BORDER(payload) {
      this.setBorderCard = payload;
    }
  }
});
export {
  useCustomizerStore as u
};
//# sourceMappingURL=customizer-CM6PVnj3.js.map
