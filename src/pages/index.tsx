import styled from "styled-components";
import { ProfSection } from "../components/templates/ProfSection";
import { TopSection } from "../components/templates/TopSection";
import { GlobalStyle } from "../globalStyle";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Index() {
  return (
    <Container>
      <GlobalStyle />
      <TopSection />
      <ProfSection />
    </Container>
  );
}
