import styled from "styled-components";

export const UserCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin-bottom: 10px;
  a {
    text-decoration: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const UserCredentials = styled.p`
  display: inline-block;
  margin: 0;
  padding: 0;
  padding-left: 10px;
  line-height: 40px;
  color: #000;
  text-transform: capitalize;
`;

export const UserIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const UserWrapper = styled.div`
  display: flex;
`;
