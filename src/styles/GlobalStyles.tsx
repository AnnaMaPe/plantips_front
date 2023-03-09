import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*, 
::before,
::after {
  box-sizing: border-box
}

body {
  margin: 0px;
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
  border-radius: 50px;
  border: none;
  color: #fff;
  background-color: ${(props) => props.theme.palette.primary};
  
  
}

.container {
  margin: 20px 
}
`;

export default GlobalStyles;
