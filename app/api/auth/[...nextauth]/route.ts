import { createAppClient, viemConnector } from "@farcaster/auth-client";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextRequest, NextResponse } from "next/server";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in with Farcaster",
      credentials: {
        message: {
          label: "Message",
          type: "text",
          placeholder: "0x0",
        },
        signature: {
          label: "Signature",
          type: "text",
          placeholder: "0x0",
        },
        // In a production app with a server, these should be fetched from
        // your Farcaster data indexer rather than have them accepted as part
        // of credentials.
        name: {
          label: "Name",
          type: "text",
          placeholder: "0x0",
        },
        pfp: {
          label: "Pfp",
          type: "text",
          placeholder: "0x0",
        },
      },
      async authorize(credentials) {
        const csrfToken = (credentials as any).csrfToken as string;

        console.log("credentials", credentials, csrfToken);

        const appClient = createAppClient({
          ethereum: viemConnector(),
        });

        const toVerify = {
          message: credentials?.message as string,
          signature: credentials?.signature as `0x${string}`,
          domain: "ysh.li",
          nonce: csrfToken,
        };

        const verifyResponse = await appClient.verifySignInMessage(toVerify);
        const { success, fid } = verifyResponse;

        if (!success) {
          console.error("Failed to verify signature", {
            fid,
            credentials,
            toVerify,
          });
          return null;
        }

        const sessionUser = {
          id: fid.toString(),
          fname: credentials?.name,
          avatar: credentials?.pfp,
        };

        return sessionUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, user, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          fid: token.id,
          fname: token.fname,
          avatar: token.avatar,

          // message: token.message,
          // signature: token.signature,
        },
      };
    },
  },
};

async function handler(req: NextRequest, res: NextResponse) {
  return await NextAuth(
    req as unknown as NextApiRequest,
    res as unknown as NextApiResponse,
    authOptions,
  );
}

export { handler as GET, handler as POST };
