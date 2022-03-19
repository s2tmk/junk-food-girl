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
}

export const Image: React.VFC<ImageProps> = ({
  src,
  alt,
  width = "100%",
  height = "100%",
}) => (
  <ImageDiv width={width} height={height}>
    <NextImage
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      placeholder="blur"
      blurDataURL="/"
    />
  </ImageDiv>
);
