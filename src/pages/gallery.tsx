import { useRouter } from "next/router";
import styled from "styled-components";
import { Button } from "../components/atoms/Button";
import { GalleryGrid } from "../components/organisms/GalleryGrid";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 8em;
  box-sizing: border-box;
  /* position: relative; */
`;

const BackButtonDiv = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 8em;
`;

const Gallery = () => {
  const router = useRouter();

  const BackToTopPage = () => {
    router.push("/");
  };

  return (
    <Container>
      <GalleryGrid />
      <BackButtonDiv>
        <Button label="BACK" onClick={BackToTopPage} />
      </BackButtonDiv>
    </Container>
  );
};

export default Gallery;
