import styled from "styled-components";

export const HeaderNav = styled.ul`
  display: inline-block;
  list-style-type: none;
  margin: 0;
  margin-left: auto;
  padding: 0;
  background-color: #333;

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 1rem 1.2rem;
    text-decoration: none;
  }

  li a:hover {
    background-color: #111;
  }
`;
