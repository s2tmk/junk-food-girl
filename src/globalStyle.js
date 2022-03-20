import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    color: #333;
    width: 100vw;
    overflow-x: hidden;
    };
  * {
    font-family: 'Futura', 'Noto Sans JP', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN W3', 'HiraKakuProN-W3', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', sans-serif
  }
  body::-webkit-scrollbar {
    display: none;
  }
`;
