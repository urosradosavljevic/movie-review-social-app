export const type = `
    scalar Upload
`;
export const query = `
    files: [String]
`;
export const mutation = `
  uploadReviewImage(file:Upload!): String!
`;
