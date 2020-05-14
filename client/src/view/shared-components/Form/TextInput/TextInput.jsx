import React from "react";
import { getIn } from "formik";
import { FormInput } from "../FormInput";
import { Label } from "../Label";
import { InputError } from "../InputError";

export const TextInput = ({ comment, title, name, field, form, ...props }) => {
  const errorText =
    getIn(form.touched, form.fieldname) && getIn(form.errors, field.name);
  return (
    <div>
      {!comment && <Label htmlFor={name}>{title}</Label>}
      <FormInput text {...props} {...field} />
      {!comment && <InputError>{errorText && errorText}</InputError>}
    </div>
  );
};
