import { NextRequest, NextResponse } from "next/server";
import { prettyJson } from "@/lib/utils";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const tiktokvid_url = searchParams.get("tiktokvid_url");

    if (!tiktokvid_url) {
      return prettyJson({ status: false, error: "Parameter 'tiktokvid_url' is required" }, 400);
    }

    const redirectUrl = new URL("/api/downloader/tiktokdownloader", req.nextUrl.origin);
    redirectUrl.searchParams.set("tiktokvid_url", tiktokvid_url);
    
    return NextResponse.redirect(redirectUrl.toString());
}
