import styled from "styled-components";
import media from "styled-media-query";
import { Header } from "../atoms/Header";
import { Paragraph } from "../atoms/Paragraph";

const ContactSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 4em;
`;

const ProfMainDiv = styled.div`
  width: 62.8%;
  margin-top: 2em;
  line-height: 1.618em;
  text-align: justify;
`;

export const ContactSection = () => (
  <ContactSectionDiv>
    <Header header="Contact" />
    <ProfMainDiv>
      <Paragraph text={`${process.env.NEXT_PUBLIC_CONTACT_TEXT}`} />
    </ProfMainDiv>
  </ContactSectionDiv>
);
