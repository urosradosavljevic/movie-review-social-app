import styled, { css } from "styled-components";

export const FormInput = styled.input`
  padding: 8px 15px;
  margin: 0 20px 15px;
  display: inline-block;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  border-radius: 0.1rem;
  font-size: 0.8rem;

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
`;
