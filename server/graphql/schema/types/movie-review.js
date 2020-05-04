export const type = `
type MovieReview {
  _id: ID
  createdAt: String
  title: String
  review: String
  director: String
  rate: String
  img: String
  user: User
  likes: [ID]
  comments: [Comment]
}
`;
export const query = `
  review(id: ID!): MovieReview
  reviews: [MovieReview]
  reviewComments(reviewId: ID!): [Comment]
`;
export const mutation = `
  createReview(
    title: String!
    review: String!
    director: String!
    rate: Int!
    img: String!
    img: String!
    userId: String!
  ): MovieReview

  deleteReview(reviewId: ID!): Boolean
  
  likeReview(userId: ID!, reviewId: ID!): MovieReview!
`;
