import styled, { css } from "styled-components";

export const Label = styled.label`
  text-align: left;
  font-size: 13px;
  font-weight: 400;

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
