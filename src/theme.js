import colors from "tailwindcss/colors";

export const theme = {
  typography: {
    fontFamily: "'Inter', sans-serif"
  },
  palette: {
    primary: {
      light: colors.yellow[500],
      main: colors.yellow[600],
      dark: colors.yellow[700]
    },
    secondary: {
      light: colors.cyan[500],
      main: colors.cyan[600],
      dark: colors.cyan[700]
    },
    grey: {
      50: colors.warmGray[50],
      100: colors.warmGray[100],
      200: colors.warmGray[200],
      300: colors.warmGray[300],
      400: colors.warmGray[400],
      500: colors.warmGray[500],
      600: colors.warmGray[600],
      700: colors.warmGray[700],
      800: colors.warmGray[800],
      90: colors.warmGray[90]
    }
  }
};
