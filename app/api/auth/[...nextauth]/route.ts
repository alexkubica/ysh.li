import { authOptions } from "../../../auth";
import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import { NextRequest, NextResponse } from "next/server";

async function handler(req: NextRequest, res: NextResponse) {
  return await NextAuth(
    req as unknown as NextApiRequest,
    res as unknown as NextApiResponse,
    authOptions,
  );
}

export { handler as GET, handler as POST };
