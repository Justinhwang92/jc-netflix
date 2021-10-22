import React from "react";
// Containers
import { JumbotronContainer } from "../Containers/Jumbtron";
import { FooterContainer } from "../Containers/Footer";
import { FaqsContainer } from "../Containers/Faqs";

const Home = () => {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
