import styled from "styled-components";

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 2rem;
`;

export const UserImage = styled.div`
  width: 200px;
  height: 200px;
  margin-top: 1rem;
  border-radius: 50%;
  background: lightgray;
  text-align: center;
  line-height: 200px;
  text-transform: uppercase;
  font-size: 80px;
  font-weight: 700;
  color: #333;
`;

export const UserName = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
