import styled from "styled-components";

const TitleText = styled.text`
  font-size: 2.618em;
  writing-mode: vertical-rl;
  color: white;
  font-family: "Yu Mincho", "Hiragino Mincho ProN", sans-serif;
`;

interface TitleProps {
  title: string;
}

export const Title: React.VFC<TitleProps> = ({ title }) => (
  <TitleText>{title}</TitleText>
);
