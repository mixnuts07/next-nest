import { ApolloServer, gql } from "apollo-server-micro";
import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GraphQL Scheme
// helloクエリを呼ぶと返り値がStringということ
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    hello: String
    users: [User]
  }
`;
const users = [
  { id: "1", name: "John Doe", email: "john@test.com" },
  { id: "2", name: "Jane Doe", email: "jane@example.com" },
];

interface Context {
  prisma: PrismaClient;
}
// Resolvers
const resolvers = {
  Query: {
    hello: () => "Hello Apollo Micro",
    users: async (parent: undefined, args: {}, context: Context) => {
      return await context.prisma.user.findMany();
    },
  },
};

// Apollo Server RUN
// Apollo Server のインスタンスにはQuery , Resolversが必要
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    prisma,
  },
});

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // CORSの設定。apollo studio以外のアクセスの制限
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
