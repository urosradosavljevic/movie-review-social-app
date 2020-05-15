import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const MainContentWrapper = styled.main`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;

  ${breakpoint("desktop")`
    grid-template-columns: 3fr 6fr 3fr;
  `}
`;
