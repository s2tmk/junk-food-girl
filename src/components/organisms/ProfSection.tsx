import styled from "styled-components";
import media from "styled-media-query";
import { Image } from "../atoms/Image";
import { Header } from "../atoms/Header";
import { Paragraph } from "../atoms/Paragraph";
import { Twitter, Instagram } from "react-feather";
import { useInView } from "react-intersection-observer";

const ProfSectionDiv = styled.div`
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
  line-height: 1.618em;
  text-align: justify;
  gap: 1em;
  margin-top: 2em;
  ${media.greaterThan("medium")`
    margin-top: 0em;
    margin-left: 2em
  `}
`;

const ProfSnsDiv = styled.div`
  display: flex;
  gap: 0.618em;
`;

export const ProfSection = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <ProfSectionDiv ref={ref} className={inView ? "scrollin" : ""}>
      <Header header="Profile" />
      <ProfMainDiv>
        <Image
          src="/ryomurakami-icon.png"
          alt="photographer profile icon"
          width="256px"
          height="256px"
        />
        <ProfIntroDiv>
          <Header isPrimary={false} header="ムラカミリョウ" />
          <Paragraph text={`${process.env.NEXT_PUBLIC_PROFILE_TEXT}`} />
          <ProfSnsDiv>
            <Twitter />
            <Instagram />
          </ProfSnsDiv>
        </ProfIntroDiv>
      </ProfMainDiv>
    </ProfSectionDiv>
  );
};
