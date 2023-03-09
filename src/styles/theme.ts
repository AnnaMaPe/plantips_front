import "../../node_modules/@fontsource/quicksand/400.css";
import "../../node_modules/@fontsource/inter/400.css";
import "../../node_modules/@fontsource/inter/700.css";
import { DefaultTheme } from "./styled";

export const theme: DefaultTheme = {
  palette: {
    primary: "#325a3e",
    secondary: "#afe195",
    terciary: "#999",
    warning: "#d65745",
  },
  fonts: {
    title: "Quicksand",
    titleFontSize: "75px",
    text: "Inter",
  },
  inputs: {
    borderRadius: "15px",
  },
};
