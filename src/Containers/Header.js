import React from "react";
import { Header } from "../components/Header";
import * as ROUTES from "../Constants/routes";
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
