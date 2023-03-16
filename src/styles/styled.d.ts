import "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    palette: {
      primary: string;
      secondary: string;
      terciary: string;
      activeLink: string;
      warning: string;
    };
    fonts: {
      title: string;
      titleFontSize: string;
      text: string;
    };
    inputs: {
      borderRadius: string;
      fontSize: string;
    };
  }
}

export default DefaultTheme;
