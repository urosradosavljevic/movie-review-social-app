import React, { useState, useEffect } from "react";

import { Form } from "../Form/Form";
import { FormInput } from "../Form/FormInput";
import { UploadReviewImage } from "./../UploadReviewImage/UploadReviewImage";
import { AddMovieReviewWrapper } from "./components/AddMovieReviewWrapper";
import { Button } from "./../Buttons";
import { AddReviewHeader } from "./components/AddReviewHeader";
import { TextInput } from "../Form/TextInput/TextInput";
import { TextField } from "../Form/TextField/TextField";

import useCreateReviewMutation from "./useCreateReviewMutation";
import { query as reviewsQuery } from "./../../../apollo-queries/reviewsQuery";
import useAuthUser from "../../../redux/hooks/useAuthUser";
import { SelectField } from "../Form/SelectField/SelectField";

export const AddMovieReview = () => {
  const [createReview, { loading, error, data }] = useCreateReviewMutation();

  const { authUser } = useAuthUser();

  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [director, setDirector] = useState("");
  const [rate, setRate] = useState(5);
  const [reviewImagePath, setReviewImagePath] = useState(null);

  const [addReviewError, setAddReviewError] = useState(null);
  const [addReviewExpand, setAddReviewExpand] = useState(true);

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
              id="cancel-expand-review"
              onClick={() => setAddReviewExpand(false)}
            >
              x
            </span>
            <TextInput
              title="Movie Title"
              name="title"
              onChange={handleChange(setTitle)}
              value={title}
            />
            <TextInput
              title="Director"
              name="director"
              onChange={handleChange(setDirector)}
              value={director}
            />
            <TextField
              title="Movie Review"
              name="review"
              onChange={handleChange(setReview)}
              value={review}
              rows={4}
            />
            <SelectField
              options={[1, 2, 3, 4, 5]}
              title="Rating"
              name="rating"
              onChange={handleChange(setRate)}
              value={rate}
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
            <div>
              <FormInput
                type="submit"
                value={loading ? "Adding.." : "Add review"}
                submit
              />
            </div>
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
