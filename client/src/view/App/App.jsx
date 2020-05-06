import React, { useCallback } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useMappedState } from "redux-react-hook";

import { Home } from "../pages/Home/index";
import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { NotFound } from "../pages/NotFound";
import { UserProfile } from "../pages/UserProfile/UserProfile";
import { AppContainer } from "./components/AppContainer";

import { useWithAuth } from "./useWithAuth";
import * as routes from "../../constants/routes";

export const App = () => {
  useWithAuth();

  const mapState = useCallback(
    (state) => ({
      loading: state.sessionState.loading,
    }),
    []
  );
  const { loading } = useMappedState(mapState);

  if (loading) return <h1>Loading...</h1>;

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppContainer>
        <Switch>
          <Route exact path={routes.HOME} component={Home} />
          <Route exact path={routes.LOGIN} component={LoginPage} />
          <Route exact path={routes.SIGN_UP} component={RegisterPage} />
          <Route exact path={routes.USERS} component={UserProfile} />
          <Route component={NotFound} />
        </Switch>
      </AppContainer>
    </Router>
  );
};
