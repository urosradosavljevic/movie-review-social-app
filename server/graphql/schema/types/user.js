export const type = `
type User {
  _id: ID
  email: String
  password: String
  name: String
  token: String
  reviews: [MovieReview]
}
`;
export const query = `
  login(email: String!, password: String!): User
  verifyToken(token: String!): User
`;
export const mutation = `
  createUser(
    email: String!
    name: String!
    password: String!
    confirm: String!
  ): User
`;
