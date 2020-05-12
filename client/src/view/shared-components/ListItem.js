import styled from "styled-components";

export const ListItem = styled.li`
  text-decoration: none;
  list-style-type: none;
  padding: 10px;
  cursor: pointer;

  background-color: ${(props) => props.selected && "rgba(0, 0, 0, 0.05)"};
  border-radius: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }
`;
