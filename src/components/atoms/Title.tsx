import styled from "styled-components";

const TitleText = styled.text<{
  isVertical: boolean;
  isSideways: boolean;
  isRotate: boolean;
}>`
  font-size: 4em;
  writing-mode: ${({ isVertical }) => (isVertical ? "vertical-rl" : "")};
  text-orientation: ${({ isSideways }) => (isSideways ? "sideways" : "")};
  color: white;
  font-family: "GAGAGAGA-FREE", "Yu Mincho", "Hiragino Mincho ProN", sans-serif;
`;

interface TitleProps {
  title: string;
  isVertical?: boolean;
  isSideways?: boolean;
  isRotate?: boolean;
}

export const Title: React.VFC<TitleProps> = ({
  title,
  isVertical = false,
  isSideways = false,
  isRotate = false,
}) => (
  <TitleText
    isVertical={isVertical}
    isSideways={isSideways}
    isRotate={isRotate}
  >
    {title}
  </TitleText>
);
