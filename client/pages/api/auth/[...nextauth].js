import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const authOptions = () => {
  // configure ONE or MORE authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // .. add more providers HERE!!!!
  ];
};

export default NextAuth(authOptions);
