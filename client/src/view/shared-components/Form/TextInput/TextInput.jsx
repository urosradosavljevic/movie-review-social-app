import React from "react";
import { FormInput } from "../FormInput";
import { Label } from "../Label";

export const TextInput = ({ title, name, onChange, value, ...props }) => {
  return (
    <div>
      <Label htmlFor={name}>{title}</Label>
      <FormInput
        text
        name={name}
        onChange={onChange}
        value={value}
        {...props}
      />
    </div>
  );
};
