import styled from "styled-components";

const TitleText = styled.text`
  font-size: 1.618em;
  writing-mode: vertical-rl;
  color: white;
`;

interface TitleProps {
  title: string;
}

export const Title: React.VFC<TitleProps> = ({ title }) => (
  <TitleText>{title}</TitleText>
);
