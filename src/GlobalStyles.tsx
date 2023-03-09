import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, 
::before,
::after {
  box-sizing: border-box
}

ul, 
ol {
  list-style: none;
  padding: 0;
}

a,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  font-size: inherit;
  background-color: transparent;
}
`;

export default GlobalStyles;
