import styled from "styled-components";
import { Paragraph } from "../atoms/Paragraph";

const FooterDiv = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8em;
  line-height: 1.618em;
  margin-top: 4em;
  background-color: #462930;
  color: white;
`;

export const Footer = () => (
  <FooterDiv>
    <Paragraph text="&copy; 2022 ムラカミリョウ" />
  </FooterDiv>
);
