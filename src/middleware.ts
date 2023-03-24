import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export default function middleware(request: NextRequest) {
    return NextResponse.json(new URL(request.url).hostname.split(".")[0]);
}
