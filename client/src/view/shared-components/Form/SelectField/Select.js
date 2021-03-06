import styled from "styled-components";

export const Select = styled.select`
  padding: 8px 5px;
  margin: 5px 0 15px 0;
  display: inline-block;
  border: 1px solid #000;
  border-radius: 5px;
  outline: none;
  font-size: 0.8rem;
  resize: none;

  &:focus {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;
