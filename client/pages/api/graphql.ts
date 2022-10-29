import { ApolloServer, gql } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";

// GraphQL Scheme
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
// Apollo Server RUN
// helloクエリを呼ぶと返り値がStringということ

// Resolvers
