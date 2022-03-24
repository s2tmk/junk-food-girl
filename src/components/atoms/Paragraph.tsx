import styled from "styled-components";

const P = styled.p<{ color: string }>`
  color: ${({ color }) => color};
  line-height: 1.618em;
`;

interface ParagraphProps {
  text: string;
  color?: string;
}

export const Paragraph: React.VFC<ParagraphProps> = ({
  text,
  color = "#333",
}) => <P color={color}>{text}</P>;
