import styled from "styled-components";

const NameText = styled.text<{ isPrimary: boolean; fontFamily?: string }>`
  font-size: ${({ isPrimary }) => (isPrimary ? "1.618em" : "1.414em")};
  font-family: ${({ fontFamily }) => fontFamily};
`;

interface NameProps {
  name: string;
  isPrimary: boolean;
  fontFamily?: string;
  position?: "center" | "left" | "right";
}

export const Name: React.VFC<NameProps> = ({ name, isPrimary, fontFamily }) => (
  <NameText isPrimary={isPrimary} fontFamily={fontFamily}>
    {name}
  </NameText>
);
