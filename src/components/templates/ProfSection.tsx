import styled from "styled-components";
import { Image } from "../atoms/Image";
import { Header } from "../atoms/Header";
import { Paragraph } from "../atoms/Paragraph";

const ProfSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
`;

const ProfMainDiv = styled.div`
  width: 62.8%;
  display: flex;
  align-items: center;
`;

const ProfIntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.414em;
  gap: 1.618em;
  margin-left: 2em;
`;

export const ProfSection = () => (
  <ProfSectionDiv>
    <Header header="Profile" />
    <ProfMainDiv>
      <Image
        src="/murakami.jpg"
        alt="girl eating tacos"
        width="400px"
        height="400px"
      />
      <ProfIntroDiv>
        <Header isPrimary={false} header="Ryo Murakami" />
        <Paragraph text={`${process.env.NEXT_PUBLIC_PROFILE_TEXT}`} />
      </ProfIntroDiv>
    </ProfMainDiv>
  </ProfSectionDiv>
);
