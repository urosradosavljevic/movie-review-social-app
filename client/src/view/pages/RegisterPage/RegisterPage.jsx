import React from "react";
import { Register } from "./components/Register/Register";
import { Section } from "./../../shared-components/Section";
import { LogoHeading } from "./../../shared-components/LogoHeading";
import { RegisterWrapper } from "./components/RegisterWrapper";

import { Link } from "react-router-dom";
import * as routes from "./../../../constants/routes";

export const RegisterPage = () => {
  return (
    <RegisterWrapper>
      <div>
        <Section>
          <LogoHeading>SocialMap</LogoHeading>
          <Register />
        </Section>
        <Section>
          <p>
            Already have an account? <Link to={routes.LOGIN}>Log in</Link>
          </p>
        </Section>
      </div>
    </RegisterWrapper>
  );
};
