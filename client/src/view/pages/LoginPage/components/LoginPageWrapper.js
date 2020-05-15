import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const LoginPageWrapper = styled.article`
  margin: 3rem auto;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;

  ${breakpoint("desktop")`
    max-width: 80%;
    grid-template-columns: 1fr 1fr;
  `}
`;
