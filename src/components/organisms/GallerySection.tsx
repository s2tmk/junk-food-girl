import styled from "styled-components";
import { Image } from "../atoms/Image";
import { Header } from "../atoms/Header";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { Button } from "../atoms/Button";

const GallerySectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4em;
  width: 100%;
  opacity: 0.1;
  transition: all 1000ms;
  &.scrollin {
    opacity: 1;
  }
`;

const GalleryMainDiv = styled.div`
  width: 100%;
  margin-top: 4em;
  margin-bottom: 3em;
`;

const ImageDiv = styled.div`
  margin: auto;
  width: 256px;
  height: 256px;
  @media (min-width: 1025px) {
    width: 512px;
    height: 512px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GallerySection = () => {
  const sliderSetting = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 3000,
    centerMode: true,
    centerPadding: "64px",
    arrows: false,
  };

  const pushToGalleryPage = () => {
    console.log("clicked!");
  };

  // HACK: CMSなどから取得したい。
  const imageNames = [
    "elco_resized.jpg",
    "hamburger_resized.jpg",
    "noa_resized.jpg",
    "rie_resized.jpg",
  ];

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <GallerySectionDiv ref={ref} className={inView ? "scrollin" : ""}>
      <Header
        isPrimary={true}
        fontFamily="Futura"
        header="Gallery"
        position="right"
      />
      <GalleryMainDiv>
        <Slider {...sliderSetting}>
          {imageNames.map((name) => (
            <ImageContainer key={name}>
              <ImageDiv>
                <Image
                  src={`/images/${name}`}
                  alt={`work name: ${name}`}
                  objectFit="cover"
                />
              </ImageDiv>
            </ImageContainer>
          ))}
        </Slider>
      </GalleryMainDiv>
      <Button label="MORE" onClick={pushToGalleryPage} />
    </GallerySectionDiv>
  );
};
