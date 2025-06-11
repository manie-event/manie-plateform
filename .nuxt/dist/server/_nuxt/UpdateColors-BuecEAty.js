import { computed } from "vue";
import { F as AQUA_THEME, P as PURPLE_THEME, G as GREEN_THEME, H as CYAN_THEME, O as ORANGE_THEME, I as DARK_AQUA_THEME, J as DARK_PURPLE_THEME, K as DARK_GREEN_THEME, L as DARK_CYAN_THEME, M as DARK_ORANGE_THEME, N as DARK_BLUE_THEME, Q as BLUE_THEME } from "../server.mjs";
import { u as useCustomizerStore } from "./customizer-CM6PVnj3.js";
function customizer() {
  const cst = useCustomizerStore();
  return cst.actTheme;
}
const getPrimary = computed(() => {
  const custmizer = customizer();
  if (custmizer === "AQUA_THEME") {
    return AQUA_THEME.colors.primary;
  } else if (custmizer === "PURPLE_THEME") {
    return PURPLE_THEME.colors.primary;
  } else if (custmizer === "GREEN_THEME") {
    return GREEN_THEME.colors.primary;
  } else if (custmizer === "CYAN_THEME") {
    return CYAN_THEME.colors.primary;
  } else if (custmizer === "ORANGE_THEME") {
    return ORANGE_THEME.colors.primary;
  } else if (custmizer === "DARK_AQUA_THEME") {
    return DARK_AQUA_THEME.colors.primary;
  } else if (custmizer === "DARK_PURPLE_THEME") {
    return DARK_PURPLE_THEME.colors.primary;
  } else if (custmizer === "DARK_GREEN_THEME") {
    return DARK_GREEN_THEME.colors.primary;
  } else if (custmizer === "DARK_CYAN_THEME") {
    return DARK_CYAN_THEME.colors.primary;
  } else if (custmizer === "DARK_ORANGE_THEME") {
    return DARK_ORANGE_THEME.colors.primary;
  } else if (custmizer === "DARK_BLUE_THEME") {
    return DARK_BLUE_THEME.colors.primary;
  } else {
    return BLUE_THEME.colors.primary;
  }
});
computed(() => {
  const custmizer = customizer();
  if (custmizer === "AQUA_THEME") {
    return AQUA_THEME.colors.lightprimary;
  } else if (custmizer === "PURPLE_THEME") {
    return PURPLE_THEME.colors.lightprimary;
  } else if (custmizer === "GREEN_THEME") {
    return GREEN_THEME.colors.lightprimary;
  } else if (custmizer === "CYAN_THEME") {
    return CYAN_THEME.colors.lightprimary;
  } else if (custmizer === "ORANGE_THEME") {
    return ORANGE_THEME.colors.lightprimary;
  }
  if (custmizer === "DARK_AQUA_THEME") {
    return DARK_AQUA_THEME.colors.lightprimary;
  } else if (custmizer === "DARK_PURPLE_THEME") {
    return DARK_PURPLE_THEME.colors.lightprimary;
  } else if (custmizer === "DARK_GREEN_THEME") {
    return DARK_GREEN_THEME.colors.lightprimary;
  } else if (custmizer === "DARK_CYAN_THEME") {
    return DARK_CYAN_THEME.colors.lightprimary;
  } else if (custmizer === "DARK_ORANGE_THEME") {
    return DARK_ORANGE_THEME.colors.lightprimary;
  } else if (custmizer === "DARK_BLUE_THEME") {
    return DARK_BLUE_THEME.colors.lightprimary;
  } else {
    return BLUE_THEME.colors.lightprimary;
  }
});
const getSecondary = computed(() => {
  const custmizer = customizer();
  if (custmizer === "AQUA_THEME") {
    return AQUA_THEME.colors.secondary;
  } else if (custmizer === "PURPLE_THEME") {
    return PURPLE_THEME.colors.secondary;
  } else if (custmizer === "GREEN_THEME") {
    return GREEN_THEME.colors.secondary;
  } else if (custmizer === "CYAN_THEME") {
    return CYAN_THEME.colors.secondary;
  } else if (custmizer === "ORANGE_THEME") {
    return ORANGE_THEME.colors.secondary;
  } else if (custmizer === "DARK_AQUA_THEME") {
    return DARK_AQUA_THEME.colors.secondary;
  } else if (custmizer === "DARK_PURPLE_THEME") {
    return DARK_PURPLE_THEME.colors.secondary;
  } else if (custmizer === "DARK_GREEN_THEME") {
    return DARK_GREEN_THEME.colors.secondary;
  } else if (custmizer === "DARK_CYAN_THEME") {
    return DARK_CYAN_THEME.colors.secondary;
  } else if (custmizer === "DARK_ORANGE_THEME") {
    return DARK_ORANGE_THEME.colors.secondary;
  } else if (custmizer === "DARK_BLUE_THEME") {
    return DARK_BLUE_THEME.colors.secondary;
  } else {
    return BLUE_THEME.colors.secondary;
  }
});
computed(() => {
  const custmizer = customizer();
  if (custmizer === "AQUA_THEME") {
    return AQUA_THEME.colors.lightsecondary;
  } else if (custmizer === "PURPLE_THEME") {
    return PURPLE_THEME.colors.lightsecondary;
  } else if (custmizer === "GREEN_THEME") {
    return GREEN_THEME.colors.lightsecondary;
  } else if (custmizer === "CYAN_THEME") {
    return CYAN_THEME.colors.lightsecondary;
  } else if (custmizer === "ORANGE_THEME") {
    return ORANGE_THEME.colors.lightsecondary;
  }
  if (custmizer === "DARK_AQUA_THEME") {
    return DARK_AQUA_THEME.colors.lightsecondary;
  } else if (custmizer === "DARK_PURPLE_THEME") {
    return DARK_PURPLE_THEME.colors.lightsecondary;
  } else if (custmizer === "DARK_GREEN_THEME") {
    return DARK_GREEN_THEME.colors.lightsecondary;
  } else if (custmizer === "DARK_CYAN_THEME") {
    return DARK_CYAN_THEME.colors.lightsecondary;
  } else if (custmizer === "DARK_ORANGE_THEME") {
    return DARK_ORANGE_THEME.colors.lightsecondary;
  } else if (custmizer === "DARK_BLUE_THEME") {
    return DARK_BLUE_THEME.colors.lightsecondary;
  } else {
    return BLUE_THEME.colors.lightsecondary;
  }
});
const getTextGrey100 = computed(() => {
  const custmizer = customizer();
  if (custmizer === "AQUA_THEME") {
    return AQUA_THEME.colors.grey100;
  } else if (custmizer === "PURPLE_THEME") {
    return PURPLE_THEME.colors.grey100;
  } else if (custmizer === "GREEN_THEME") {
    return GREEN_THEME.colors.grey100;
  } else if (custmizer === "CYAN_THEME") {
    return CYAN_THEME.colors.grey100;
  } else if (custmizer === "ORANGE_THEME") {
    return ORANGE_THEME.colors.grey100;
  }
  if (custmizer === "DARK_AQUA_THEME") {
    return DARK_AQUA_THEME.colors.grey100;
  } else if (custmizer === "DARK_PURPLE_THEME") {
    return DARK_PURPLE_THEME.colors.grey100;
  } else if (custmizer === "DARK_GREEN_THEME") {
    return DARK_GREEN_THEME.colors.grey100;
  } else if (custmizer === "DARK_CYAN_THEME") {
    return DARK_CYAN_THEME.colors.grey100;
  } else if (custmizer === "DARK_ORANGE_THEME") {
    return DARK_ORANGE_THEME.colors.grey100;
  } else if (custmizer === "DARK_BLUE_THEME") {
    return DARK_BLUE_THEME.colors.grey100;
  } else {
    return BLUE_THEME.colors.grey100;
  }
});
const getLightborder = computed(() => {
  const custmizer = customizer();
  if (custmizer === "AQUA_THEME") {
    return AQUA_THEME.colors.borderColor;
  } else if (custmizer === "PURPLE_THEME") {
    return PURPLE_THEME.colors.borderColor;
  } else if (custmizer === "GREEN_THEME") {
    return GREEN_THEME.colors.borderColor;
  } else if (custmizer === "CYAN_THEME") {
    return CYAN_THEME.colors.borderColor;
  } else if (custmizer === "ORANGE_THEME") {
    return ORANGE_THEME.colors.borderColor;
  }
  if (custmizer === "DARK_AQUA_THEME") {
    return DARK_AQUA_THEME.colors.borderColor;
  } else if (custmizer === "DARK_PURPLE_THEME") {
    return DARK_PURPLE_THEME.colors.borderColor;
  } else if (custmizer === "DARK_GREEN_THEME") {
    return DARK_GREEN_THEME.colors.borderColor;
  } else if (custmizer === "DARK_CYAN_THEME") {
    return DARK_CYAN_THEME.colors.borderColor;
  } else if (custmizer === "DARK_ORANGE_THEME") {
    return DARK_ORANGE_THEME.colors.borderColor;
  } else if (custmizer === "DARK_BLUE_THEME") {
    return DARK_BLUE_THEME.colors.borderColor;
  } else {
    return BLUE_THEME.colors.borderColor;
  }
});
const getWarning = computed(() => {
  const custmizer = customizer();
  if (custmizer === "AQUA_THEME") {
    return AQUA_THEME.colors.warning;
  } else if (custmizer === "PURPLE_THEME") {
    return PURPLE_THEME.colors.warning;
  } else if (custmizer === "GREEN_THEME") {
    return GREEN_THEME.colors.warning;
  } else if (custmizer === "CYAN_THEME") {
    return CYAN_THEME.colors.warning;
  } else if (custmizer === "ORANGE_THEME") {
    return ORANGE_THEME.colors.warning;
  }
  if (custmizer === "DARK_AQUA_THEME") {
    return DARK_AQUA_THEME.colors.warning;
  } else if (custmizer === "DARK_PURPLE_THEME") {
    return DARK_PURPLE_THEME.colors.warning;
  } else if (custmizer === "DARK_GREEN_THEME") {
    return DARK_GREEN_THEME.colors.warning;
  } else if (custmizer === "DARK_CYAN_THEME") {
    return DARK_CYAN_THEME.colors.warning;
  } else if (custmizer === "DARK_ORANGE_THEME") {
    return DARK_ORANGE_THEME.colors.warning;
  } else if (custmizer === "DARK_BLUE_THEME") {
    return DARK_BLUE_THEME.colors.warning;
  } else {
    return BLUE_THEME.colors.warning;
  }
});
const getError = computed(() => {
  const custmizer = customizer();
  if (custmizer === "AQUA_THEME") {
    return AQUA_THEME.colors.error;
  } else if (custmizer === "PURPLE_THEME") {
    return PURPLE_THEME.colors.error;
  } else if (custmizer === "GREEN_THEME") {
    return GREEN_THEME.colors.error;
  } else if (custmizer === "CYAN_THEME") {
    return CYAN_THEME.colors.error;
  } else if (custmizer === "ORANGE_THEME") {
    return ORANGE_THEME.colors.error;
  }
  if (custmizer === "DARK_AQUA_THEME") {
    return DARK_AQUA_THEME.colors.error;
  } else if (custmizer === "DARK_PURPLE_THEME") {
    return DARK_PURPLE_THEME.colors.error;
  } else if (custmizer === "DARK_GREEN_THEME") {
    return DARK_GREEN_THEME.colors.error;
  } else if (custmizer === "DARK_CYAN_THEME") {
    return DARK_CYAN_THEME.colors.error;
  } else if (custmizer === "DARK_ORANGE_THEME") {
    return DARK_ORANGE_THEME.colors.error;
  } else if (custmizer === "DARK_BLUE_THEME") {
    return DARK_BLUE_THEME.colors.error;
  } else {
    return BLUE_THEME.colors.error;
  }
});
const getLight100 = computed(() => {
  const custmizer = customizer();
  if (custmizer === "AQUA_THEME" || custmizer === "PURPLE_THEME" || custmizer === "GREEN_THEME" || custmizer === "CYAN_THEME" || custmizer === "ORANGE_THEME") {
    return AQUA_THEME.colors.grey100;
  } else if (custmizer === "DARK_AQUA_THEME" || custmizer === "DARK_PURPLE_THEME" || custmizer === "DARK_GREEN_THEME" || custmizer === "DARK_CYAN_THEME" || custmizer === "DARK_ORANGE_THEME" || custmizer === "DARK_BLUE_THEME") {
    return DARK_AQUA_THEME.colors.grey100;
  } else {
    return BLUE_THEME.colors.grey100;
  }
});
export {
  getSecondary as a,
  getTextGrey100 as b,
  getLightborder as c,
  getLight100 as d,
  getWarning as e,
  getError as f,
  getPrimary as g
};
//# sourceMappingURL=UpdateColors-BuecEAty.js.map
