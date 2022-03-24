import styled from "styled-components";

const HeaderTextDiv = styled.div<{ position: string }>`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: ${({ position }) => position};
`;

const Accent = styled.div`
  height: 1px;
  width: 84px;
  background-color: black;
  margin-right: 1em;
`;

const HeaderText = styled.text<{ isPrimary: boolean; fontFamily?: string }>`
  font-size: ${({ isPrimary }) => (isPrimary ? "1.618em" : "1.414em")};
  font-family: ${({ fontFamily }) => fontFamily};
`;

interface HeaderProps {
  header: string;
  isPrimary: boolean;
  fontFamily?: string;
  position?: "center" | "left" | "right";
}

export const Header: React.VFC<HeaderProps> = ({
  header,
  isPrimary,
  fontFamily,
  position = "center",
}) => (
  <HeaderTextDiv position={position}>
    <Accent />
    <HeaderText isPrimary={isPrimary} fontFamily={fontFamily}>
      {header}
    </HeaderText>
  </HeaderTextDiv>
);
