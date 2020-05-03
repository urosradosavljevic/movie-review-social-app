import express from "express";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import mongoose from "mongoose";
import path from "path";

import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

console.log("**************************");
import { DATABASE_PORT, DATABASE_URI } from "./constants/database";

const mongooseSetup = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  options: {
    formatError: (err) => {
      console.log(err.stack);
      return err;
    },
  },
});

const app = express();
app.use("/images", express.static(path.join(__dirname, "/images")));
server.applyMiddleware({ app, path: "/graphql" });

const main = async () => {
  try {
    await mongoose.connect(DATABASE_URI, mongooseSetup);
    app.listen({ port: DATABASE_PORT }, () =>
      console.log(
        `Server is listening on: http://localhost:${DATABASE_PORT}${server.graphqlPath}`
      )
    );
  } catch (err) {
    console.error(err);
  }
};

main();
