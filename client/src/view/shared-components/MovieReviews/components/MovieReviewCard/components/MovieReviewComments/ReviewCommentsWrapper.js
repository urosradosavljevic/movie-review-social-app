import styled from "styled-components";

export const ReviewCommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .comments-existing {
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    margin-top: 5px;
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
    margin: 0 auto 10px auto;
    font-size: 0.9rem;
    border-radius: 5px;
    border: 1px solid #ddd;
    outline: none;
    padding: 3px;
  }
  .comment-delete {
    font-size: 0.7rem;
    position: absolute;
    cursor: pointer;
    right: 6px;
    top: 3px;
  }
`;
