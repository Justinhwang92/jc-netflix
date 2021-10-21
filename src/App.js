import React from "react";
import { JumbotronContainer } from "./Containers/Jumbtron";
import { FooterContainer } from "./Containers/Footer";
import { FaqsContainer } from "./Containers/Faqs";

export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
