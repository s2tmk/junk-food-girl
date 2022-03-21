import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { Header } from "../atoms/Header";
import { Paragraph } from "../atoms/Paragraph";

const ContactSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 4em;
  opacity: 0.1;
  transform: translate(0, 64px);
  transition: all 1000ms;
  &.scrollin {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const ProfMainDiv = styled.div`
  width: 62.8%;
  margin-top: 2em;
  line-height: 1.618em;
  text-align: justify;
`;

export const ContactSection = () => {
  const { ref, inView } = useInView();

  return (
    <ContactSectionDiv ref={ref} className={inView ? "scrollin" : ""}>
      <Header header="Contact" />
      <ProfMainDiv>
        <Paragraph text={`${process.env.NEXT_PUBLIC_CONTACT_TEXT}`} />
      </ProfMainDiv>
    </ContactSectionDiv>
  );
};
