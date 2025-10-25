import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const DARK_BLUE_THEME: ThemeTypes = {
  name: 'DARK_BLUE_THEME',
  dark: true,
  variables: {
    'border-color': '#ffffff',
    'shadow-color': 'rgba(255, 255, 255, 0.2)',
    'border-opacity': 1,
  },
  colors: {
    primary: '#0085db',
    secondary: '#7C8FAC',
    info: '#5AC8FA',
    success: '#f39454',
    successStatus: '#4bd08b',
    warning: '#F8B15D',
    error: '#FB977D',
    indigo: '#8763DA',
    lightprimary: '#1b394f',
    lightinfo: '#1a3247',
    lightsecondary: '#2f3f4c',
    lightsuccess: '#102d35',
    lighterror: '#72483d',
    lightwarning: '#282b32',
    textPrimary: '#EAEFF4',
    textSecondary: '#fff',
    lightindigo: '#1d233e',
    borderColor: '#ffffff',
    inputBorder: '#465670',
    containerBg: '#111C2D',
    background: '#16293e',
    hoverColor: '#333f55',
    surface: '#111C2D',
    grey100: '#7C8FAC',
    grey200: '#EAEFF4',
    darkbg: '#111936',
    bglight: '#16293e',
    bgdark: '#16293e',
    title: '#fff',
  },
};

export { DARK_BLUE_THEME };
