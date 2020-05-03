import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import path from "path";
import { createWriteStream } from "fs";
import moment from "moment";
import { SERVER_URL_IMAGES } from "./../../constants/server";

import User from "./../../mongoose/models/user";
import MovieReview from "./../../mongoose/models/movie-review";
import Comment from "./../../mongoose/models/comment";

export default {
  User: {
    reviews: (parent, args) => {
      return MovieReview.findOne({ userId: parent.id });
    },
  },
  MovieReview: {
    user: (parent, args) => {
      return User.findById(parent.userId);
    },
    comments: (parent, args) => {
      return Comment.find({ reviewId: parent._id });
    },
  },
  Comment: {
    user: (parent, args) => {
      return User.findById(parent.userId);
    },
  },
  Query: {
    login: async (parent, args) => {
      try {
        const user = await User.findOne({ email: args.email });
        if (!user) throw new Error("Email does not exist");
        const passwordIsValid = await bcrypt.compareSync(
          args.password,
          user.password
        );
        if (!passwordIsValid) throw new Error("Password incorrect");
        const token = jwt.sign({ id: user._id }, "mysecret");
        return { token, password: null, ...user._doc };
      } catch (err) {
        throw err;
      }
    },
    verifyToken: async (parent, args) => {
      try {
        const decoded = jwt.verify(args.token, "mysecret");
        const user = await User.findOne({ _id: decoded.id });
        return { ...user._doc, password: null };
      } catch (err) {
        throw err;
      }
    },
    review: async (parent, args) => {
      try {
        const { id } = args;
        const review = await MovieReview.findById(id);
        return review;
      } catch (err) {
        throw err;
      }
    },
    reviews: async () => {
      try {
        const reviews = await MovieReview.find({});
        return reviews;
      } catch (err) {
        throw err;
      }
    },
    reviewComments: async (parent, args) => {
      try {
        const { reviewId } = args;

        const comments = await Comment.find({ reviewId });

        return comments;
      } catch (err) {
        throw err;
      }
    },
    comment: async (parent, args) => {
      try {
        const { id } = args;
        const comment = await Comment.findOne({ id });
        return comment;
      } catch (err) {
        throw err;
      }
    },
    comments: async (parent, args) => {
      try {
        const { _id } = args;
        const reviews = await MovieReview.find({ _id });
        const totalReviews = MovieReview.count();
        return { reviews, totalReviews };
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      try {
        const { email, password, confirm, name } = args;
        const existingUser = await User.findOne({ email });
        if (existingUser) throw new Error("User already exists");
        if (password !== confirm) throw new Error("Passwords are inconsistent");
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User(
          {
            email,
            name,
            password: hashedPassword,
          },
          (err) => {
            if (err) throw err;
          }
        );
        user.save();
        // if user is registered without errors
        // create a token
        const token = jwt.sign({ id: user._id }, "mysecret");

        return { token, password: null, ...user._doc };
      } catch (err) {
        throw err;
      }
    },
    createReview: async (parent, args) => {
      try {
        const { title, review, director, rate, img, userId } = args;
        const existingReview = await MovieReview.findOne({ title });
        if (existingReview) throw new Error("Movie review already exists");
        const movieReview = new MovieReview(
          {
            title,
            review,
            director,
            rate,
            img,
            userId,
          },
          (err) => {
            if (err) throw err;
          }
        );
        movieReview.save();
        return { ...movieReview._doc };
      } catch (err) {
        throw err;
      }
    },
    deleteReview: async (parent, args) => {
      try {
        const { reviewId } = args;

        await MovieReview.deleteOne({ _id: reviewId }, (err) => {
          console.error(err);
        });

        return true;
      } catch (err) {
        throw err;
      }
    },
    likeReview: async (parent, args) => {
      try {
        const { userId, reviewId } = args;
        const review = await MovieReview.findOne({ _id: reviewId });
        if (review.likes) {
          const index = review.likes.indexOf(userId);
          if (index >= 0) {
            review.likes.splice(index, 1);
          } else {
            review.likes.push(userId);
          }
        }
        await review.save();
        // const review = await MovieReview.findById(reviewId);
        // if (!review) throw new Error("Movie review doesn't exists");
        // if (review.likes) {
        //   const index = review.likes.indexOf(userId);
        //   if (index >= 0) {
        //     await MovieReview.updateOne(
        //       { _id: reviewId },
        //       {
        //         $pull: { likes: userId },
        //       }
        //     );
        //   } else {
        //     await MovieReview.updateOne(
        //       { _id: reviewId },
        //       {
        //         $push: { likes: userId },
        //       }
        //     );
        //   }
        // }
        return review;
      } catch (err) {
        throw err;
      }
    },
    commentReview: async (parent, args) => {
      try {
        const { userId, reviewId, text } = args;

        const comment = new Comment(
          {
            userId,
            reviewId,
            text,
            time: moment().format(),
          },
          (err) => {
            console.error(err);
          }
        );
        comment.save();

        return { ...comment._doc };
      } catch (err) {
        throw err;
      }
    },
    deleteCommentReview: async (parent, args) => {
      try {
        const { commentId } = args;

        await Comment.deleteOne({ _id: commentId }, (err) => {
          console.error(err);
        });

        return true;
      } catch (err) {
        throw err;
      }
    },

    uploadReviewImage: async (parent, { file }) => {
      try {
        const { createReadStream, filename } = await file;

        await new Promise((res) =>
          createReadStream()
            .pipe(
              createWriteStream(
                path.join(__dirname, "./../../images", filename)
              )
            )
            .on("close", res)
        );

        return `${SERVER_URL_IMAGES}${filename}`;
      } catch (err) {
        throw err;
      }
    },
  },
};
