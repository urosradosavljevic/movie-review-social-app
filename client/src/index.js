import React from "react";
import { render } from "react-dom";
import { DATABASE_URI } from "./constants/database";

// components
import { App } from "./view/App/App";

// context
import { StoreContext } from "redux-react-hook";
import store from "./redux/store";

// apollo
import { ApolloProvider } from "react-apollo";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

// apollo client setup
const link = new createUploadLink({
  uri: DATABASE_URI,
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

render(
  <ApolloProvider client={apolloClient}>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
