import styled from "styled-components";
import { Image } from "../atoms/Image";
import { Title } from "../atoms/Title";

const TopSectionDiv = styled.div`
  width: 100vw;
  height: 100vh;
`;

const CoverTitleDiv = styled.div`
  position: absolute;
  right: 4em;
  top: 6.472em;
`;

export const TopSection = () => (
  <TopSectionDiv>
    <Image src="/dummy-1.jpg" alt="girl eating tacos" objectFit="cover" />
    <CoverTitleDiv>
      <Title title="ジャンクフード×女性" />
    </CoverTitleDiv>
  </TopSectionDiv>
);
