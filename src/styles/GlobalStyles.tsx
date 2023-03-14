import { createGlobalStyle } from "styled-components";
import "../../node_modules/@fontsource/quicksand/400.css";
import "../../node_modules/@fontsource/inter/400.css";
import "../../node_modules/@fontsource/inter/700.css";

const GlobalStyles = createGlobalStyle`

*, 
::before,
::after {
  box-sizing: border-box;

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

h1, h2, h3{
  margin: 0;
}

button {
  font-family: inherit;
  font-size: inherit;
  background-color: transparent;
  border-radius: 50px;
  border: none;
  color: #fff;
  cursor: pointer;
  
}

.container {
  padding: 20px; 
  width: 100vw;
}


`;

export default GlobalStyles;
