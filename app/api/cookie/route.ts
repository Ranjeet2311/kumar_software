import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("authToken")?.value;

  // console.log(`authToken API found : `, authToken);

  if (!authToken) {
    return new Response(JSON.stringify({ message: "No token found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(authToken), { status: 200 });
}
