import React from "react";
// Containers
import { JumbotronContainer } from "../Containers/Jumbtron";
import { FooterContainer } from "../Containers/Footer";
import { FaqsContainer } from "../Containers/Faqs";
import { HeaderContainer } from "../Containers/Header";
// Components
import { OptForm } from "../components/Opt-form";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
        </OptForm>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
