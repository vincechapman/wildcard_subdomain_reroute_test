import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export default function middleware(request: NextRequest) {
    const url = new URL(request.url)
    const subdomain = url.hostname.split(".")[0]
    const path = url.pathname
    return NextResponse.rewrite("/" + subdomain + path)
}
