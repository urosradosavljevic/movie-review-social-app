import styled, { css } from "styled-components";

export const FormInput = styled.input`
  padding: 8px 10px;
  margin-top: 5px;
  display: inline-block;
  border: 1px solid #333;
  border-radius: 3px;
  outline: none;
  font-size: 0.8rem;

  &:focus {
    background-color: rgba(0, 0, 0, 0.02);
  }

  ${(props) =>
    props.submit &&
    css`
      border: none;
      height: 30px;
      background-color: #333;
      color: white;
      font-weight: 700;
      font-size: 14px;
      margin-top: 10px;
      font-family: Arial;
      border-radius: 5px;

      &:active {
        opacity: 0.7;
      }
    `}
  ${(props) =>
    props.edit &&
    css`
      border: none;
      height: 30px;
      background-color: transparent;
      display: block;
      font-size: 1.5em;
      margin: 0;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
      margin-top: 4px;
      font-family: Arial;
      padding: 0;

      &:active {
        opacity: 0.7;
      }
    `}
`;
