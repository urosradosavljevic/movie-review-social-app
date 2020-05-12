import React, { useState, useEffect } from "react";

import { Form } from "./../Form";
import { FormInput } from "./../FormInput";
import { UploadReviewImage } from "./../UploadReviewImage/UploadReviewImage";
import { AddMovieReviewWrapper } from "./components/AddMovieReviewWrapper";
import { Button } from "./../Buttons";

// apollo
import useCreateReviewMutation from "./useCreateReviewMutation";
import { query as reviewsQuery } from "./../../../apollo-queries/reviewsQuery";
import useAuthUser from "../../../redux/hooks/useAuthUser";
import { AddReviewHeader } from "./components/AddReviewHeader";

export const AddMovieReview = () => {
  const [createReview, { loading, error, data }] = useCreateReviewMutation();

  const { authUser } = useAuthUser();

  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [director, setDirector] = useState("");
  const [rate, setRate] = useState("");
  const [reviewImagePath, setReviewImagePath] = useState(null);

  const [addReviewError, setAddReviewError] = useState(null);
  const [addReviewExpand, setAddReviewExpand] = useState(false);

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
    <AddMovieReviewWrapper>
      {addReviewExpand ? (
        <>
          <AddReviewHeader>New review</AddReviewHeader>
          <Form onSubmit={submit}>
            <span
              id="cancel-add-review"
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
            <UploadReviewImage
              reviewImagePath={reviewImagePath}
              setReviewImagePath={setReviewImagePath}
            />
            <FormInput
              type="submit"
              value={loading ? "Adding.." : "Add review"}
              submit
            />
          </Form>
        </>
      ) : (
        <Button addReview onClick={() => setAddReviewExpand(true)}>
          Add a review..
        </Button>
      )}
    </AddMovieReviewWrapper>
  );
};
