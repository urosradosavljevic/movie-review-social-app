import React from "react";
import styled from "styled-components";

//components
import { Header } from "../../shared-components/Header/Header";
import { MainContentWrapper } from "./../../shared-components/MainContentWrapper";
import { MovieReviews } from "../../shared-components/MovieReviews/MovieReviews";
import useUserQuery from "./useUserQuery";

export const UserImage = styled.div`
  width: 200px;
  height: 200px;
  margin: 2rem;
  border-radius: 50%;
  background: lightgray;
  text-align: center;
  line-height: 200px;
`;

export const UserName = styled.div`
  margin: 2rem;
`;

export const UserProfile = ({
  match: {
    params: { slug },
  },
}) => {
  const { loading, error, data } = useUserQuery(slug);
  if (loading) return <h2>Loading..</h2>;

  return (
    <>
      <Header />
      <MainContentWrapper>
        <div>
          User info
          <UserImage>User image</UserImage>
          <UserName>
            <h2>{data.user.name}</h2>
          </UserName>
        </div>
        {console.log(data.user.reviews)}
        <MovieReviews reviewsIds={data.user.reviews} />
        <h3>Chat</h3>
      </MainContentWrapper>
    </>
  );
};
