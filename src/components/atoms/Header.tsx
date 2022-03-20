import styled from "styled-components";

const HeaderText = styled.text<{ fontSize: "1.618em" | "1.414em" }>`
  font-size: ${({ fontSize }) => fontSize};
`;

interface HeaderProps {
  header: string;
  isPrimary?: boolean;
}

export const Header: React.VFC<HeaderProps> = ({
  header,
  isPrimary = true,
}) => (
  <HeaderText fontSize={isPrimary ? "1.618em" : "1.414em"}>{header}</HeaderText>
);
