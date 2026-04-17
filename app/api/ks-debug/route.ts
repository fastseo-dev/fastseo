import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID ?? "";
  const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET ?? "";
  const secret = process.env.KEYSTATIC_SECRET ?? "";

  const { searchParams, origin } = new URL(req.url);
  const code = searchParams.get("code");

  const info = {
    clientId_preview: clientId ? `${clientId.slice(0, 6)}... (len ${clientId.length})` : "MISSING",
    clientSecret_preview: clientSecret ? `${clientSecret.slice(0, 4)}... (len ${clientSecret.length})` : "MISSING",
    secret_set: secret ? `yes (len ${secret.length})` : "MISSING",
  };

  if (code) {
    // Test WITHOUT redirect_uri (same as Keystatic does it)
    const url1 = new URL("https://github.com/login/oauth/access_token");
    url1.searchParams.set("client_id", clientId);
    url1.searchParams.set("client_secret", clientSecret);
    url1.searchParams.set("code", code);

    const res1 = await fetch(url1.toString(), {
      method: "POST",
      headers: { Accept: "application/json" },
    });
    const body1 = await res1.json();

    // Test WITH redirect_uri (in case GitHub requires it to match auth step)
    const url2 = new URL("https://github.com/login/oauth/access_token");
    url2.searchParams.set("client_id", clientId);
    url2.searchParams.set("client_secret", clientSecret);
    url2.searchParams.set("code", code);
    url2.searchParams.set("redirect_uri", `${origin}/api/ks-debug`);

    const res2 = await fetch(url2.toString(), {
      method: "POST",
      headers: { Accept: "application/json" },
    });
    const body2 = await res2.json();

    return NextResponse.json({
      info,
      without_redirect_uri: { status: res1.status, response: body1 },
      with_redirect_uri: { status: res2.status, response: body2 },
    });
  }

  return NextResponse.json({ info, note: "Add ?code=XXX to test token exchange" });
}
