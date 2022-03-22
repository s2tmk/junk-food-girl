import styled from "styled-components";
import { Grid } from "../molecules/Grid";
// import Image from "next/image";
import { Image } from "../atoms/Image";

const GridsDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageDiv = styled.div`
  width: 256px;
  height: 256px;
`;

export const WorkGrid = () => {
  const imageNames = [1, 2, 3, 4, 5].map((num) => `dummy-image-${num}.jpeg`);
  const gridContents = imageNames.map((name) => (
    <ImageDiv>
      <Image src={`/${name}`} alt={name} objectFit="cover" key={name} />
    </ImageDiv>
  ));

  return (
    <GridsDiv>
      <Grid
        // gridContents={imageNames.map((name) => (
        //   <Image src={`/${name}`} alt={name} key={name} />
        // ))}
        gridContents={gridContents}
      />
    </GridsDiv>
  );
};
