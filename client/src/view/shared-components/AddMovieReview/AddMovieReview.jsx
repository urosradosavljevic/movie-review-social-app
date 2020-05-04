import React, { useState, useEffect } from "react";

import { Form } from "./../Form";
import { FormInput } from "./../FormInput";
import { UploadReviewImage } from "./../UploadReviewImage/UploadReviewImage";

// apollo
import useCreateReviewMutation from "./useCreateReviewMutation";
import { query as reviewsQuery } from "./../../../apollo-queries/reviewsQuery";
import useAuthUser from "../../../redux/hooks/useAuthUser";

export const AddMovieReview = ({ addReviewExpand, setAddReviewExpand }) => {
  const [createReview, { loading, error, data }] = useCreateReviewMutation();

  const { authUser } = useAuthUser();

  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [director, setDirector] = useState("");
  const [rate, setRate] = useState("");
  const [reviewImagePath, setReviewImagePath] = useState("");

  const [addReviewError, setAddReviewError] = useState(null);

  useEffect(() => {
    error !== addReviewError && setAddReviewError(error);
  }, [error]);

  useEffect(() => {
    const clear = () => {
      setTitle("");
      setReview("");
      setDirector("");
      setRate("");
      setReviewImagePath("");
      setAddReviewExpand(false);
    };
    data && data.createReview !== undefined && clear();
  }, [data]);

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      title !== "" && review !== "" && director !== "" && rate !== ""
        ? createReview({
            variables: {
              title,
              review,
              director,
              rate: parseInt(rate),
              img: reviewImagePath,
              userId: authUser._id,
            },
            refetchQueries: [{ query: reviewsQuery }],
          })
        : setAddReviewError({ message: "All fields are required" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {addReviewExpand ? (
        <>
          <Form onSubmit={submit}>
            <span
              id="cancel-expand-review"
              onClick={() => setAddReviewExpand(false)}
            >
              x
            </span>
            <FormInput
              onChange={handleChange(setTitle)}
              value={title}
              placeholder="Movie Title"
            />
            <FormInput
              onChange={handleChange(setReview)}
              value={review}
              placeholder="Movie Review"
            />
            <FormInput
              onChange={handleChange(setDirector)}
              value={director}
              placeholder="Director"
            />
            <FormInput
              onChange={handleChange(setRate)}
              value={rate}
              placeholder="Rating"
            />
            <div>
              <span style={{ color: "red" }}>
                {addReviewError ? addReviewError.message : ""}
              </span>
            </div>
            <FormInput
              type="submit"
              value={loading ? "Posting" : "Post"}
              submit
            />
          </Form>
          <UploadReviewImage setReviewImagePath={setReviewImagePath} />
        </>
      ) : (
        <p onClick={() => setAddReviewExpand(true)}>Add review</p>
      )}
    </>
  );
};
