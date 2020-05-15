import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 1000;
  display: flex;
  width: 100%;
  height: 3rem;
  background-color: #333;

  ${breakpoint("desktop")`
    position: fixed;
    z-index: 1000;
    flex-direction: row;
    width: 100%;
    background-color: #333;
  `}
`;
