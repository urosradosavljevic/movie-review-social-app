import React from "react";
import { Select } from "./Select";
import { Label } from "../Label";
import { renderRate } from "../../../../helpers";

export const SelectField = ({
  title,
  options,
  name,
  onChange,
  value,
  ...props
}) => {
  return (
    <div>
      <Label htmlFor={name}>{title}</Label>
      <Select name={name} onChange={onChange} value={value} {...props}>
        {options &&
          options.map((option, index) => (
            <option key={index} value={option}>
              {renderRate(option)}
            </option>
          ))}
      </Select>
    </div>
  );
};
