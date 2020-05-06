import styled, { css } from "styled-components";

export const Button = styled.button`
  border: none;
  height: 30px;
  background-color: #333;
  color: white;
  font-weight: 700;
  font-size: 12px;
  font-family: Arial;
  border-radius: 5px;

  padding: 0 10px;
  cursor: pointer;
  ${(props) =>
    props.addReview &&
    css`
      width: 100%;
      margin-top: 10px;
      background-color: #fff;
      font-weight: 600;
      color: #333;
      text-align: left;
      font-size: 15px;
      outline: none;
    `}
`;
