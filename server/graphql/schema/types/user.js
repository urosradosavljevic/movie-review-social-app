export const type = `
type User {
  _id: ID
  email: String
  password: String
  name: String
  token: String
  reviews: [MovieReview]  
  following: [String]
}
`;
export const query = `
  user(email: String): User
  users: [User]
  login(email: String!, password: String!): User
  verifyToken(token: String!): User
  userReviews(userId: ID!): [MovieReview]
  `;
export const mutation = `
  createUser(
    email: String!
    name: String!
    password: String!
    confirm: String!
    ): User
    followUser(userId: ID!, idToFollow: ID!): User
`;
