import styled from "styled-components";
import NextImage from "next/image";

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

interface ImageProps {
  src: string;
  alt: string;
  objectFit?: "fill" | "contain" | "cover";
}

export const Image: React.VFC<ImageProps> = ({
  src,
  alt,
  objectFit = "contain",
}) => (
  <ImageContainer>
    <NextImage
      src={src}
      alt={alt}
      layout="fill"
      objectFit={objectFit}
      placeholder="blur"
      blurDataURL={src}
    />
  </ImageContainer>
);
