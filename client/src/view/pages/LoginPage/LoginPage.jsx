import React from "react";
import { Link } from "react-router-dom";

import { Login } from "./components/Login/Login";
import { LogoHeading } from "../../shared-components/LogoHeading";
import { Section } from "./../../shared-components/Section";
import { LoginFormWrapper } from "./components/LoginFormWrapper";
import { LoginPageWrapper } from "./components/LoginPageWrapper";
import { AppPreview } from "./components/AppPreview/AppPreview";

import * as routes from "./../../../constants/routes";

export const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <AppPreview>App Preview</AppPreview>
      <LoginFormWrapper>
        <Section>
          <LogoHeading>SocialMap</LogoHeading>
          <Login />
        </Section>
        <Section>
          <p>
            Don't have an account? <Link to={routes.SIGN_UP}>Register</Link>
          </p>
        </Section>
      </LoginFormWrapper>
    </LoginPageWrapper>
  );
};
