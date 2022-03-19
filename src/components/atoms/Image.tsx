import styled from "styled-components";
import NextImage from "next/image";

const ImageDiv = styled.div`
  position: reactive;
`;

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const Image: React.VFC<ImageProps> = ({ src, alt, width, height }) => (
  <ImageDiv>
    <NextImage
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      placeholder="blur"
      blurDataURL="/cover_message_title.png"
      width={width ? width : "100%"}
      height={height ? height : "100%"}
    />
  </ImageDiv>
);
