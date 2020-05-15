import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const AppPreview = styled.section`
  display: none;

  ${breakpoint("desktop")`
    display: block;
    height: 80vh;
    margin: auto;
    
      img {
        height:100%;
        width: auto;
      }
  `}
`;
