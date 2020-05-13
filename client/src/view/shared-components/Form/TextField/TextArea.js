import styled from "styled-components";

export const TextArea = styled.textarea`
  padding: 8px 10px;
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
