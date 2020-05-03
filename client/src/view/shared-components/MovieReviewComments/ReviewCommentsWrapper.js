import styled from "styled-components";

export const ReviewCommentsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    .comments-existing {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 10px;
    }

    .comments-more {
      padding: 2px;
      font-size: 0.8rem;
      color: blue;
      cursor: pointer;
    }

    .comment-single {
      position: relative;
      font-size: 0.9rem;
      border-top: 1px solid #f0f0f0;
      padding: 3px;
      width: 100%;
      flex-direction: column;
      margin: 3px;
    }
    .comment-single.more {
      display: none;
    }
    .comment-user {
      padding-right: 4px;
      color: blue;
    }

    .comment-time {
      font-size: 0.7rem;
    }

    .comment-input {
      width: 100%;
      box-shadow: none;
      margin: 0 auto;
      font-size: 0.9rem;
    }
    .comment-delete {
      font-size: 0.7rem;
      position: absolute;
      cursor: pointer;
      right: 6px;
      top: 3px;
    }
`;
