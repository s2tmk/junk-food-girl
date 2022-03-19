import styled from "styled-components";
import NextImage from "next/image";

const ImageDiv = styled.div<{
  width: string;
  height: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
`;

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  objectFit?: "fill" | "contain" | "cover";
}

export const Image: React.VFC<ImageProps> = ({
  src,
  alt,
  width = "100%",
  height = "100%",
  objectFit = "contain",
}) => (
  <ImageDiv width={width} height={height}>
    <NextImage
      src={src}
      alt={alt}
      layout="fill"
      objectFit={objectFit}
      placeholder="blur"
      blurDataURL="/"
    />
  </ImageDiv>
);
