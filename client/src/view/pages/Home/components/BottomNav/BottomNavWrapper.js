import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const BottomNavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 100;
  display: flex;
  width: 100%;
  background-color: #333;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  font-size: 20px;

  button {
    border: 0;
    background-color: transparent;
    color: #b3b3b3;
    outline: none;
    margin: 0.3rem;

    &.active {
      color: white;
    }
    svg {
      vertical-align: middle;
    }
  }

  ${breakpoint("desktop")`
    display: none;
  `}
`;
