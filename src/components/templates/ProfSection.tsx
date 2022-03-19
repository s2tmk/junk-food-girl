import styled from "styled-components";
import media from "styled-media-query";
import { Image } from "../atoms/Image";
import { Header } from "../atoms/Header";
import { Paragraph } from "../atoms/Paragraph";
import { Twitter, Instagram } from "react-feather";

const ProfSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
`;

const ProfMainDiv = styled.div`
  width: 62.8%;
  align-items: center;
  display: flex;
  ${media.lessThan("medium")`
    margin-top: 2em;
    flex-direction: column
  `}
`;

const ProfIntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  line-height: 1.414em;
  gap: 1em;
  margin-left: 2em;
  ${media.lessThan("medium")`
    margin-top: 2em`}
`;

const ProfSnsDiv = styled.div`
  display: flex;
  gap: 1em;
`;

export const ProfSection = () => (
  <ProfSectionDiv>
    <Header header="Profile" />
    <ProfMainDiv>
      <Image
        src="/ryomurakami-icon.png"
        alt="artist profile icon"
        width="256px"
        height="256px"
      />
      <ProfIntroDiv>
        <Image
          src="/ryomurakami-name-no-spacing.png"
          alt="artist profile name"
          height="16px"
          width="140.78px"
          objectFit="contain"
        />
        <Paragraph text={`${process.env.NEXT_PUBLIC_PROFILE_TEXT}`} />
        <ProfSnsDiv>
          <Twitter />
          <Instagram />
        </ProfSnsDiv>
      </ProfIntroDiv>
    </ProfMainDiv>
  </ProfSectionDiv>
);
