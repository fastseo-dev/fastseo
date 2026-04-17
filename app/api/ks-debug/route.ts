import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID ?? "";
  const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET ?? "";
  const secret = process.env.KEYSTATIC_SECRET ?? "";

  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  const info: Record<string, string> = {
    clientId_preview: clientId ? `${clientId.slice(0, 6)}... (len ${clientId.length})` : "MISSING",
    clientSecret_preview: clientSecret ? `${clientSecret.slice(0, 4)}... (len ${clientSecret.length})` : "MISSING",
    secret_set: secret ? `yes (len ${secret.length})` : "MISSING",
  };

  if (code) {
    const url = new URL("https://github.com/login/oauth/access_token");
    url.searchParams.set("client_id", clientId);
    url.searchParams.set("client_secret", clientSecret);
    url.searchParams.set("code", code);

    const tokenRes = await fetch(url.toString(), {
      method: "POST",
      headers: { Accept: "application/json" },
    });

    const body = await tokenRes.json();
    return NextResponse.json({ info, github_status: tokenRes.status, github_response: body });
  }

  return NextResponse.json(info);
}
