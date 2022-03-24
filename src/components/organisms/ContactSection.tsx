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
  transition: all 1000ms;
  &.scrollin {
    opacity: 1;
  }
`;

const ContactMainDiv = styled.div`
  width: 80%;
  margin-top: 4em;
  line-height: 1.618em;
  text-align: justify;
`;

export const ContactSection = () => {
  const { ref, inView } = useInView();

  return (
    <ContactSectionDiv ref={ref} className={inView ? "scrollin" : ""}>
      <Header
        isPrimary={true}
        fontFamily="Futura"
        header="Contact"
        position="left"
      />
      <ContactMainDiv>
        <Paragraph text={`${process.env.NEXT_PUBLIC_CONTACT_TEXT}`} />
      </ContactMainDiv>
    </ContactSectionDiv>
  );
};
