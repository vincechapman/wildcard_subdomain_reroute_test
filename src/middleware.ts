import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export default function middleware(request: NextRequest) {
    console.log("MIDDLEWARE: ", new URL(request.url).hostname);
    return NextResponse.json(new URL(request.url).hostname);
}
