import styled from "styled-components";
import { Image } from "../atoms/Image";
import { Header } from "../atoms/Header";
import Slider from "react-slick";

const GallerySectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4em;
  width: 100%;
`;

const GalleryMainDiv = styled.div`
  width: 100%;
  margin-top: 2em;
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

  // HACK: CMSなどから取得したい。
  const imageNames = ["dummy-1.jpg", "dummy-2.jpg", "dummy-3.jpg"];

  return (
    <GallerySectionDiv>
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
    </GallerySectionDiv>
  );
};
