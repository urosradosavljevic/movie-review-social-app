import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const HeaderNav = styled.ul`
  display: none;
  background-color: #333;
  list-style-type: none;
  margin: 0;
  margin-top: 3rem;
  padding: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  font-size: 1.4rem;

  li {
    float: none;
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

  &.expanded {
    display: block;
  }

  ${breakpoint("desktop")`  
    display: inline-block;
    height: auto;
    width:auto;
    margin: 0;
    margin-left: auto;
    font-size: 1rem;
  
    li{
      float: left;     
     }
  `}
`;
