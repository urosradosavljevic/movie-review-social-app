import React, { useState, useEffect } from "react";
import { useDispatch } from "redux-react-hook";
import { useHistory } from "react-router-dom";
import * as actions from "./../../../../../constants/action_types";
import * as routes from "./../../../../../constants/routes";

// apollo
import useLoginQuery from "./useLoginQuery";
import { Form } from "../../../../shared-components/Form/Form";
import { FormInput } from "../../../../shared-components/Form/FormInput";
import { TextInput } from "../../../../shared-components/Form/TextInput/TextInput";

// components

export const Login = () => {
  const [login, { loading, error, data }] = useLoginQuery();

  const dispatch = useDispatch();
  const history = useHistory();

  const [loginError, setLoginError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  useEffect(() => {
    error !== loginError && setLoginError(error);
  }, [error]);

  useEffect(() => {
    const opa = async () => {
      const { _id, token, following } = await data.login;

      dispatch({
        type: actions.SET_AUTH_USER,
        authUser: {
          _id,
          email,
          following,
        },
      });

      localStorage.setItem("SocialAppToken", token);

      history.push(routes.HOME);
    };
    data !== undefined && opa();
  }, [data]);

  const submit = async (e) => {
    e.preventDefault();

    await login({
      variables: { email, password },
    });
  };

  return (
    <Form onSubmit={submit}>
      <TextInput
        value={email}
        onChange={handleChange(setEmail)}
        title="Email address"
      />
      <TextInput
        value={password}
        onChange={handleChange(setPassword)}
        type="password"
        title="Password"
      />
      {loginError && <span style={{ color: "red" }}>{loginError.message}</span>}
      <FormInput
        type="submit"
        value={loading ? "Loading.." : "Log in"}
        submit
      />
    </Form>
  );
};
