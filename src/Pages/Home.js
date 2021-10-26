import React from "react";
// Containers
import { JumbotronContainer } from "../Containers/Jumbtron";
import { FooterContainer } from "../Containers/Footer";
import { FaqsContainer } from "../Containers/Faqs";
import { HeaderContainer } from "../Containers/Header";
// Components
import { OptForm } from "../components/Opt-form";
import { Feature } from "../components/Feature";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited flims, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anyware. Cancel at any time.
          </Feature.SubTitle>

          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
