import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { Image } from "../atoms/Image";
import { Title } from "../atoms/Title";

const TopSectionDiv = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.1;
  transition: all 1000ms;
  &.fadein {
    opacity: 1;
  }
`;

const CoverTitleDiv = styled.div`
  position: absolute;
  right: 4em;
  top: 6.472em;
`;

export const TopSection = () => {
  const { ref, inView } = useInView();
  return (
    <TopSectionDiv ref={ref} className={inView ? "fadein" : ""}>
      <Image
        src="/dummy-image-0.jpeg"
        alt="girl eating tacos"
        objectFit="cover"
      />
      <CoverTitleDiv>
        <Title title="ジャンクフード×女性" />
      </CoverTitleDiv>
    </TopSectionDiv>
  );
};
