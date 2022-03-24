import styled from "styled-components";
import { Grid } from "../molecules/Grid";
// import Image from "next/image";
import { Image } from "../atoms/Image";

const GridSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const GalleryGrid = () => {
  const imageNames = [1, 2, 3, 4, 5].map((num) => `dummy-image-${num}.jpeg`);
  const gridContents = imageNames.map((name) => (
    <Image src={`/${name}`} alt={name} objectFit="cover" key={name} />
  ));

  return (
    <GridSection>
      <Grid gridContents={gridContents} />
    </GridSection>
  );
};
