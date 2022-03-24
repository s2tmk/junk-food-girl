import styled from "styled-components";
import { Image } from "../atoms/Image";
import { Header } from "../atoms/Header";
import { Name } from "../atoms/Name";
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
  transition: all 1000ms;
  &.scrollin {
    opacity: 1;
  }
`;

const ProfMainDiv = styled.div`
  width: 80%;
  align-items: center;
  flex-direction: column;
  display: flex;
  margin-top: 4em;
  @media (min-width: 1025px) {
    flex-direction: row;
  }
`;

const ProfImageDiv = styled.div`
  min-width: 192px;
  height: 192px;
`;

const ProfIntroDiv = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.618em;
  text-align: justify;
  gap: 1em;
  margin-top: 2em;
  @media (min-width: 1025px) {
    margin-top: 0em;
    margin-left: 4em;
  }
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
      <Header
        isPrimary={true}
        fontFamily={"Futura"}
        header="Profile"
        position="left"
      />
      <ProfMainDiv>
        <ProfImageDiv>
          <Image
            src="/images/ryo.png"
            alt="photographer profile icon"
            objectFit="contain"
          />
        </ProfImageDiv>
        <ProfIntroDiv>
          <Name isPrimary={false} fontFamily="memoir" name="ムラカミリョウ" />
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
