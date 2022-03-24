import styled from "styled-components";
import { ContactSection } from "../components/organisms/ContactSection";
import { GallerySection } from "../components/organisms/GallerySection";
import { ProfSection } from "../components/organisms/ProfSection";
import { TopSection } from "../components/organisms/TopSection";
import { GlobalStyle } from "../globalStyle";

import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import { Footer } from "../components/organisms/Footer";

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1025px) {
    width: 80%;
  }
`;

const Index = () => (
  <RootContainer>
    <GlobalStyle />
    <MainContainer>
      <TopSection />
      <ProfSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </MainContainer>
  </RootContainer>
);

export default Index;
