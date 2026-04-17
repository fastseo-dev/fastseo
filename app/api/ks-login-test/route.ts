import { redirect } from "next/navigation";

export async function GET(req: Request) {
  const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID ?? "";
  const { origin } = new URL(req.url);

  const url = new URL("https://github.com/login/oauth/authorize");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("redirect_uri", `${origin}/api/ks-debug`);

  redirect(url.toString());
}
