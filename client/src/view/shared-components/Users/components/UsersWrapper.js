import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const UsersWrapper = styled.section`
  display: none;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f4f4f4;

  &.expanded {
    display: block;
  }

  ${breakpoint("desktop")`
    display: block;
    position: static;
    width: auto;
    height: auto;
    background-color: transparent;
  `}
`;
