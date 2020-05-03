import styled from "styled-components";

export const AppContainer = styled.main`
  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;

    font-family: Arial, Helvetica, sans-serif;
  }

  display: flex;
  background: #f4f4f4;
  min-height: 100vh;
`;
