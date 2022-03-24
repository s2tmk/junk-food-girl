import styled from "styled-components";

const GridDiv = styled.div`
  width: 100%;
  display: grid;
  gap: 64px;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
`;

interface GridProps {
  gridContents: React.ReactNode[];
}

export const Grid: React.VFC<GridProps> = ({ gridContents }) => {
  return <GridDiv>{gridContents}</GridDiv>;
};
