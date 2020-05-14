import styled from "styled-components";

export const FormWrapper = styled.div`
  margin-top: 15px;

  form {
    display: flex;
    flex-direction: column;
    margin: 15px 30px 0 30px;

    & > div {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }

    #cancel-expand-review {
      position: absolute;
      right: 25px;
      top: 15px;
      cursor: pointer;
    }
  }
`;
