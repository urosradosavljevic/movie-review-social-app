import React, { useState, useEffect } from "react";

import { useDispatch } from "redux-react-hook";
import { useHistory } from "react-router-dom";

import * as routes from "./../../../../../constants/routes";
import * as actions from "./../../../../../constants/action_types";

import { Formik, Form, Field } from "formik";
import { registerValidationSchema } from "../../../../../constants/validationSchema";
import useRegisterMutation from "./useRegisterMutation";
import { FormWrapper } from "../../../../shared-components/Form/FormWrapper";
import { TextInput } from "../../../../shared-components/Form/TextInput/TextInput";
import { FormInput } from "../../../../shared-components/Form/FormInput";

export const Register = () => {
  const [createUser, { loading, error, data }] = useRegisterMutation();

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const func = async () => {
      const { _id, email, token, following } = await data.createUser;

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

  const submit = async (values, { setSubmitting }) => {
    await createUser({ variables: values });
    setSubmitting(false);
  };

  return (
    <FormWrapper>
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={{
          email: "",
          name: "",
          password: "",
          confirm: "",
        }}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              name="email"
              title="Email address / username"
              component={TextInput}
            />
            <Field name="name" title="Full name" component={TextInput} />
            <Field
              name="password"
              type="password"
              title="Password"
              component={TextInput}
            />
            <Field
              name="confirm"
              type="password"
              title="Confirm Password"
              component={TextInput}
            />
            <div>
              <span style={{ color: "red" }}>
                {(error && error.message) || ""}
              </span>
            </div>
            <FormInput
              type="submit"
              value={isSubmitting ? "Verifying..." : "Register"}
              submit
            />
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
