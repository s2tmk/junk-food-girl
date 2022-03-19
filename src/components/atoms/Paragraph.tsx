import styled from "styled-components";

const P = styled.p``;

interface ParagraphProps {
  text: string;
}

export const Paragraph: React.VFC<ParagraphProps> = ({ text }) => <P>{text}</P>;
