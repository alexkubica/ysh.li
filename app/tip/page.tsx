"use client";

import {
  AuthKitProvider,
  SignInButton,
  StatusAPIResponse,
} from "@farcaster/auth-kit";
import "@farcaster/auth-kit/styles.css";
import { Session } from "next-auth";
import {
  SessionProvider,
  getCsrfToken,
  signIn,
  signOut,
  useSession,
  getSession,
} from "next-auth/react";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

const config = {
  rpcUrl: "https://mainnet.optimism.io",
  domain: "ysh.li",
  siweUri: "https://ysh.li/tip",
};

export default function HomePage() {
  const [error, setError] = useState(false);

  const getNonce = useCallback(async () => {
    const nonce = await getCsrfToken();
    if (!nonce) throw new Error("Unable to generate nonce");
    return nonce;
  }, []);

  const handleSuccess = useCallback((res: StatusAPIResponse) => {
    signIn("credentials", {
      message: res.message,
      signature: res.signature,
      name: res.username,
      pfp: res.pfpUrl,
      redirect: false,
    });
  }, []);

  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    async function loadSession() {
      const loadedSession = await getSession();
      setSession(loadedSession);
    }

    loadSession();
  }, []);

  return (
    <SessionProvider session={session}>
      <Head>
        <title>Tip bot</title>
      </Head>
      <div
        dir="ltr"
        data-theme="alex"
        className="min-h-screen flex flex-col justify-between"
      >
        <AuthKitProvider config={config}>
          <div>
            <div style={{ position: "fixed", top: "12px", right: "12px" }}>
              <SignInButton
                nonce={getNonce}
                onSuccess={handleSuccess}
                onError={() => setError(true)}
                onSignOut={() => signOut()}
              />
              {error && <div>Unable to sign in at this time.</div>}
            </div>
            <div style={{ paddingTop: "33vh", textAlign: "center" }}>
              <h1>@farcaster/auth-kit + NextAuth</h1>
              <Profile />
            </div>
          </div>
        </AuthKitProvider>
      </div>
    </SessionProvider>
  );
}

function Profile() {
  const { data: session } = useSession();

  return session ? (
    <div style={{ fontFamily: "sans-serif" }}>
      <p>Signed in as {session.user?.name}</p>
      <p>
        <button
          type="button"
          style={{ padding: "6px 12px", cursor: "pointer" }}
          onClick={() => signOut()}
        >
          Click here to sign out
        </button>
      </p>
    </div>
  ) : (
    <p>
      Click the &quot;Sign in with Farcaster&quote; button above, then scan the
      QR code to sign in.
    </p>
  );
}
