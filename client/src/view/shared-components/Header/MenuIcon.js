import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const MenuIcon = styled.button`
  position: absolute;
  outline: none;
  border: 0;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0.5rem 0.5rem;
  background-color: #333;
  color: white;
  svg {
    vertical-align: middle;
  }

  ${breakpoint("desktop")`  
    display: none;
  `}
`;
