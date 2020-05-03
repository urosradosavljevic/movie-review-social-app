import styled, { css } from "styled-components";

export const FormInput = styled.input`
padding: 0.5rem 0.5rem;
margin: 0 2.8rem 0.5rem;
display: inline-block;
border: 1px solid #ccc;
outline: none;
border-radius: 0.1rem;
font-size: 0.8rem;
background: #f4f4f4;

${props =>
  props.submit &&
  css`
    background-color: #50a9fc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;

    &:active {
      opacity: 0.7;
    }
    &:disabled {
      opacity: 0.3;
    cursor: context-menu;
    }
  `}
`;