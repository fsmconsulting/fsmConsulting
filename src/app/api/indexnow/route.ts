import { NextResponse } from "next/server";

const INDEXNOW_KEY = "f5a8c9e24b714902a78103d1593c8e42";
const HOST = "fsmconsulting.org";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const urls: string[] = body.urls && Array.isArray(body.urls) && body.urls.length > 0
      ? body.urls
      : [`https://${HOST}/`];

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    const status = response.status;
    const responseText = await response.text();

    return NextResponse.json({
      success: response.ok,
      status,
      message: responseText || (response.ok ? "Submitted to IndexNow successfully" : "Failed"),
      submittedUrls: urls,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "active",
    host: HOST,
    keyLocation: KEY_LOCATION,
    usage: "Send POST with JSON { urls: ['https://fsmconsulting.org/...'] } to submit URLs to IndexNow.",
  });
}
