import React from "react";
import { TextArea } from "./TextArea";
import { Label } from "../Label";

export const TextField = ({ title, name, onChange, value, ...props }) => {
  return (
    <div>
      <Label htmlFor={name}>{title}</Label>
      <TextArea name={name} onChange={onChange} value={value} {...props} />
    </div>
  );
};
