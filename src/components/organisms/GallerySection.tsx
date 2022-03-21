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
  transform: translate(0, 64px);
  transition: all 1000ms;
  &.scrollin {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const GalleryMainDiv = styled.div`
  width: 100%;
  margin-top: 2em;
  margin-bottom: 3em;
`;

export const GallerySection = () => {
  const sliderSetting = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 2000,
    centerMode: true,
    centerPadding: "32px",
    arrows: false,
  };

  const pushToGalleryPage = () => {
    console.log("clicked!");
  };

  // HACK: CMSなどから取得したい。
  const imageNames = [
    "dummy-image-1.jpeg",
    "dummy-image-2.jpeg",
    "dummy-image-3.jpeg",
    "dummy-image-4.jpeg",
    "dummy-image-5.jpeg",
  ];

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <GallerySectionDiv ref={ref} className={inView ? "scrollin" : ""}>
      <Header header="Gallery" />
      <GalleryMainDiv>
        <Slider {...sliderSetting}>
          {imageNames.map((name) => (
            <Image
              src={`/${name}`}
              alt={`work name: ${name}`}
              objectFit="cover"
              height="512px"
              key={name}
            />
          ))}
        </Slider>
      </GalleryMainDiv>
      <Button label="MORE" onClick={pushToGalleryPage} />
    </GallerySectionDiv>
  );
};
