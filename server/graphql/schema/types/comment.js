export const type = `
type Comment {
  _id: ID
  time: String
  text: String
  user: User
}
`;
export const query = `
  comment(id: ID!): Comment
  comments: [Comment]
`;
export const mutation = `
  deleteCommentReview(commentId: ID!): Boolean
  commentReview(userId: ID!, reviewId: ID!, text: String!): Comment
`;
