import React, { useState, useEffect } from "react";

import { useDispatch } from "redux-react-hook";
import { useHistory } from "react-router-dom";

import * as routes from "./../../../../../constants/routes";
import * as actions from "./../../../../../constants/action_types";

import { Form } from "../../../../shared-components/Form";
import { FormInput } from "../../../../shared-components/FormInput";

import useRegisterMutation from "./useRegisterMutation";

export const Register = () => {
  const [createUser, { loading, error, data }] = useRegisterMutation();

  const [registerError, setRegisterError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    error !== registerError && setRegisterError(error);
  }, [error]);

  useEffect(() => {
    const func = async () => {
      const { _id, token, following } = await data.createUser;

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
    data !== undefined && func();
  }, [data]);

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();

    if (email !== "" && password !== "" && confirm !== "" && name !== "") {
      createUser({ variables: { email, password, confirm, name } });
    } else {
      setRegisterError({ message: "All fields are required" });
    }
  };

  return (
    <Form onSubmit={submit}>
      <FormInput
        onChange={handleChange(setEmail)}
        value={email}
        placeholder="Email address / username"
      />
      <FormInput
        onChange={handleChange(setName)}
        value={name}
        placeholder="Full name"
      />
      <FormInput
        onChange={handleChange(setPassword)}
        value={password}
        type="password"
        placeholder="Password"
      />
      <FormInput
        onChange={handleChange(setConfirm)}
        value={confirm}
        type="password"
        placeholder="Confirm Password"
      />
      <div>
        <span style={{ color: "red" }}>
          {(registerError && registerError.message) || ""}
        </span>
      </div>
      <FormInput
        type="submit"
        value={loading ? "Verifying" : "Register"}
        submit
      />
    </Form>
  );
};
