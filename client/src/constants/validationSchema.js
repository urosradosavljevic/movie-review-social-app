import * as yup from "yup";

export const registerValidationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  confirm: yup.string().required(),
});

export const loginValidationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const movieReviewValidationSchema = yup.object({
  title: yup.string().required(),
  director: yup.string().required(),
  review: yup.string().required(),
  rating: yup.string().required(),
});
