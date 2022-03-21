import styled from "styled-components";
import { ContactSection } from "../components/organisms/ContactSection";
import { GallerySection } from "../components/organisms/GallerySection";
import { ProfSection } from "../components/organisms/ProfSection";
import { TopSection } from "../components/organisms/TopSection";
import { GlobalStyle } from "../globalStyle";

import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import { Footer } from "../components/organisms/Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const Index = () => (
  <Container>
    <GlobalStyle />
    <TopSection />
    <ProfSection />
    <GallerySection />
    <ContactSection />
    <Footer />
  </Container>
);

export default Index;
