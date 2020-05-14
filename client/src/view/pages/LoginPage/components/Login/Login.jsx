import React, { useState, useEffect } from "react";
import { useDispatch } from "redux-react-hook";
import { useHistory } from "react-router-dom";
import * as actions from "./../../../../../constants/action_types";
import * as routes from "./../../../../../constants/routes";

import { Formik, Form, Field } from "formik";
import { loginValidationSchema } from "../../../../../constants/validationSchema";
import useLoginQuery from "./useLoginQuery";
import { FormWrapper } from "../../../../shared-components/Form/FormWrapper";
import { FormInput } from "../../../../shared-components/Form/FormInput";
import { TextInput } from "../../../../shared-components/Form/TextInput/TextInput";

export const Login = () => {
  const [login, { error, data }] = useLoginQuery();

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const opa = async () => {
      const { _id, email, token, following } = await data.login;

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

  const submit = async (values, { setSubmitting }) => {
    await login({
      variables: values,
    });

    setSubmitting(false);

    return;
  };

  return (
    <FormWrapper>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="email" title="Email address" component={TextInput} />
            <Field
              name="password"
              type="password"
              title="Password"
              component={TextInput}
            />
            {error && <span style={{ color: "red" }}>{error.message}</span>}
            <FormInput
              type="submit"
              value={isSubmitting ? "Loading.." : "Log in"}
              submit
            />
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
