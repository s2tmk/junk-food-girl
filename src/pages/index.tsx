import { Fragment } from "react";
import { TopSection } from "../components/templates/TopSection";
import { GlobalStyle } from "../globalStyle";

export default function Index() {
  return (
    <Fragment>
      <GlobalStyle />
      <TopSection />
    </Fragment>
  );
}
