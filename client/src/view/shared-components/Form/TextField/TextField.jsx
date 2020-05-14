import React from "react";
import { getIn } from "formik";

import { TextArea } from "./TextArea";
import { Label } from "../Label";
import { InputError } from "../InputError";

export const TextField = ({ title, name, form, field, ...props }) => {
  const errorText =
    getIn(form.touched, form.fieldname) && getIn(form.errors, field.name);
  return (
    <div>
      <Label htmlFor={name}>{title}</Label>
      <TextArea {...props} {...field} />
      <InputError>{errorText && errorText}</InputError>
    </div>
  );
};
