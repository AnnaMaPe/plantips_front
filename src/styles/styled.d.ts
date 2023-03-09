import "styled-components";

declare module "styled-components" {}
export interface DefaultTheme {
  palette: {
    primary: string;
    secondary: string;
    terciary: string;
    warning: string;
  };
  fonts: {
    title: string;
    titleFontSize: string;
    text: string;
  };
  inputs: {
    borderRadius: string;
  };
}
