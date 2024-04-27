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
import LinkButton from "../components/LinkButton";

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
              {session ? (
                <LinkButton onClick={signOut} url={""}>
                  sign out
                </LinkButton>
              ) : (
                <SignInButton
                  nonce={getNonce}
                  onSuccess={handleSuccess}
                  onError={() => setError(true)}
                  onSignOut={() => signOut()}
                />
              )}
              {error && <div>Unable to sign in at this time.</div>}
            </div>
            <div className="pt-24" style={{ textAlign: "center" }}>
              <h1>Tip comments on cast</h1>
              <Profile />
            </div>
          </div>
        </AuthKitProvider>
      </div>
    </SessionProvider>
  );
}

function Profile() {
  const [amount, setAmount] = useState(10);
  const [cast, setCast] = useState("https://warpcast.com/alexk/");
  const [tipType, setTipType] = useState<"degen" | "ham">("degen");
  const { status, data } = useSession();
  const [submitLoading, setSubmitLoading] = useState(false);

  const user = data?.user as { fid: string; fname: string; avatar: string };

  const onSubmit = async () => {
    setSubmitLoading(true);

    try {
      const res = await fetch("/tip/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cast, amount, tipType }),
      });
      if (res.ok) {
        const serverResponse = await res.text();
        window.alert(`cast tipped successfully ⚡️
server: ${serverResponse}`);
      } else {
        window.alert("there was an error with tipping");
      }
    } catch (error) {
      window.alert("there was an error with tipping");
    } finally {
      setSubmitLoading(false);
    }
  };

  if (status === "loading") return <p>Loading...</p>;

  if (status === "unauthenticated" || !data)
    return <p style={{ color: "red" }}>Not signed in</p>;

  if (user.fid !== "14879")
    return <p>Only @alexk is authorized to use this page</p>;

  return (
    <div className="container mx-auto max-w-xs">
      <p>Signed in as @{user.fname}</p>

      <div className="label">
        <span className="label-text">Enter a cast url</span>
      </div>
      <div>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          value={cast}
          onChange={(e) => {
            setCast(e.target.value);
          }}
        />
      </div>
      <div>
        <div className="label">
          <span className="label-text">Amount to split</span>
        </div>
        <input
          className="input input-bordered w-full max-w-xs"
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(parseInt(e.target.value));
          }}
        />
      </div>

      <div
        className="form-control"
        onClick={() => {
          setTipType("degen");
        }}
      >
        <label className="label cursor-pointer">
          <span className="label-text">🎩 $DEGEN</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-purple-500"
            checked={tipType === "degen"}
          />
        </label>
      </div>
      <div
        className="form-control"
        onClick={() => {
          setTipType("ham");
        }}
      >
        <label className="label cursor-pointer">
          <span className="label-text">🍖 ham</span>
          <input
            type="radio"
            name="radio-10"
            checked={tipType === "ham"}
            className="radio checked:bg-red-500"
          />
        </label>
      </div>
      <button
        onClick={onSubmit}
        className="btn btn-accent"
        disabled={submitLoading}
      >
        {submitLoading && <span className="loading loading-spinner"></span>}
        Tip comments on cast
      </button>
      <p></p>
    </div>
  );
}
