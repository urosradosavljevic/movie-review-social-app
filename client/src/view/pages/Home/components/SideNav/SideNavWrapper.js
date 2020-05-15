import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const SideNavWrapper = styled.div`
  display: none;

  ${breakpoint("desktop")`
  margin: 0 1rem;
    display: block;
  `}
`;
