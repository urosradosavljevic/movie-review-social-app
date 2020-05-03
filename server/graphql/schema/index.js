import * as user from "./types/user";
import * as review from "./types/movie-review";
import * as comment from "./types/comment";
import * as image from "./types/image";

const types = [];
const queries = [];
const mutations = [];

const schemas = [user, review, comment, image];

schemas.forEach((s) => {
  types.push(s.type);
  queries.push(s.query);
  mutations.push(s.mutation);
});

const schema = `
  ${types.join("\n")}
  
type Query {
  ${queries.join("\n")}
}

type Mutation {
  ${mutations.join("\n")}
}
`;

export default schema;
