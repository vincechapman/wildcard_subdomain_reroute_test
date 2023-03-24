import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export default function middleware(request: NextRequest) {
    const url = new URL(request.url)
    // return NextResponse.next()
    return NextResponse.json({
        subdomain: url.hostname.split(".")[0],
        path: url.pathname
    });
}
