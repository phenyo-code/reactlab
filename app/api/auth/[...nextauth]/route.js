import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,  // Ensure secret is set properly
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to the home page after login
      return `${baseUrl}/`;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
