import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as routes from "../../../../../../../constants/routes";
import moment from "moment";

import useCommentReviewMutation from "./useCommentReviewMutation";
import { ReviewCommentsWrapper } from "./ReviewCommentsWrapper";
import useDeleteCommentReview from "./useDeleteCommentReview";
import useReviewCommentsQuery from "./useReviewCommentsQuery";

export const MoviewReviewComments = ({ reviewId, user }) => {
  const [displayMore, setDisplayMore] = useState(true);
  const [moreFlag, setMoreFlag] = useState(false);
  const [comment, setComment] = useState("");
  const { loading, error, data: reviewComments } = useReviewCommentsQuery(
    reviewId
  );
  const commentReviewMutation = useCommentReviewMutation();
  const deleteCommentReviewMutation = useDeleteCommentReview();

  const deleteComment = (id) => {
    deleteCommentReviewMutation(id, reviewId);
  };

  const commentReview = (e) => {
    e.preventDefault();
    commentReviewMutation(reviewId, user, comment);
    setComment("");
  };

  useEffect(() => {
    reviewComments && reviewComments.reviewComments.length > 3
      ? setMoreFlag(true)
      : setMoreFlag(false);
  }, [reviewComments]);

  if (loading) return <h3>UCITAVAM KOMENTARE</h3>;

  if (error) return <span>{error}</span>;

  return (
    <ReviewCommentsWrapper>
      <div className="comments-existing">
        {reviewComments.reviewComments.map((comment, index) => (
          <div
            key={comment._id}
            className={
              index > 2
                ? `comment-single ${displayMore && "more"}`
                : "comment-single"
            }
          >
            <div>
              <span className="comment-user">
                <Link to={routes.USER + comment.user.email}>
                  {comment.user.name}
                </Link>
              </span>
              <span>{comment.text}</span>
            </div>
            <span className="comment-time">
              {moment(comment.time).fromNow()}
            </span>
            {comment.user._id === user._id && (
              <span
                onClick={() => deleteComment(comment._id)}
                className="comment-delete"
              >
                x
              </span>
            )}
          </div>
        ))}
        <span
          className="comments-more"
          onClick={() => setDisplayMore(!displayMore)}
        >
          {moreFlag && (displayMore ? "Show more.." : "Show less..")}
        </span>
      </div>
      <form onSubmit={commentReview}>
        <input
          type="text"
          className="comment-input"
          placeholder="Place comment.."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </form>
    </ReviewCommentsWrapper>
  );
};
