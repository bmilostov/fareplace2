import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  font-family: "Open Sans Condensed";
  padding: 0;
  margin: 0;
  background: #f1f1f1;
}

a {
  text-decoration: none;
  color: #000;
}

*{
  box-sizing: border-box;
}
`;
