import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { Image } from "../atoms/Image";
import { Paragraph } from "../atoms/Paragraph";

const TopSectionDiv = styled.div`
  position: relative;
  width: 100%;
  transition: all 1000ms;
  &.fadein {
    opacity: 1;
  }
`;

const ImageDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100vw;
  @media (min-width: 1025px) {
    height: 80vh;
  }
`;

const InformationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ea8aa0;
  height: 10em;
  width: 100%;
  padding: 1em;
  bottom: 0;
  box-sizing: border-box;
`;

export const TopSection = () => {
  const { ref, inView } = useInView();

  return (
    <TopSectionDiv ref={ref} className={inView ? "fadein" : ""}>
      <ImageDiv>
        <Image
          src="/images/elco_resized.jpg"
          alt="cover girl photo"
          objectFit="cover"
        />
      </ImageDiv>

      <InformationDiv>
        <Paragraph text={`${process.env.NEXT_PUBLIC_DATE}`} color="white" />
        <Paragraph text={`${process.env.NEXT_PUBLIC_TIME}`} color="white" />
        <Paragraph text={`${process.env.NEXT_PUBLIC_PLACE}`} color="white" />
      </InformationDiv>
    </TopSectionDiv>
  );
};
