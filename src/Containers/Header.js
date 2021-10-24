import React from "react";
// Components
import { Header } from "../components/Header";
// Routes
import * as ROUTES from "../Constants/routes";
// Logo
import Logo from "../logo.svg";

export const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="JC-Netflix" src={Logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
};
