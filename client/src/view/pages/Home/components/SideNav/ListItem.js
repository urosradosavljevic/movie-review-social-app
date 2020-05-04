import styled from "styled-components";

export const ListItem = styled.li`
  text-decoration: none;
  list-style-type: none;
  padding: 10px;
  cursor: pointer;

  background-color: ${(props) => (props.selected ? "rgba(0, 0, 0, 0.05)" : "")};

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
/* display: inline-block;
  list-style-type: none;
  margin: 0;
  margin-left: auto;
  padding: 0;
  background-color: #333;

  li {
    float: left;
  }

  li a { */
