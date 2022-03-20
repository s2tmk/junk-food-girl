import styled from "styled-components";
import { GallerySection } from "../components/templates/GallerySection";
import { ProfSection } from "../components/templates/ProfSection";
import { TopSection } from "../components/templates/TopSection";
import { GlobalStyle } from "../globalStyle";

import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export default function Index() {
  return (
    <Container>
      <GlobalStyle />
      <TopSection />
      <ProfSection />
      <GallerySection />
    </Container>
  );
}
