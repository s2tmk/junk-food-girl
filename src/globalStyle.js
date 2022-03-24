import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    color: #333;
    width: 100vw;
    overflow-x: hidden;
    font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;

  };

  body::-webkit-scrollbar {
    display: none;
  }
`;
