import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export default function middleware(request: NextRequest) {
    const url = new URL(request.url)
    const hostname = url.hostname.split(".")
    const path = url.pathname

    if (hostname.length <= 1) {
        // Then there are no subdomains
        return NextResponse.next();
    }

    hostname.pop() // Removing main domain from hostname
    hostname.reverse()  // Reversing the order of remaining subdomains
    const subdomain = "/" + hostname.join("/")

    // console.log("URL:", request.url)
    console.log("PATH:", path)
    console.log();

    const resource = path.split("/")[0] // Grabbing last part of path that specifies resource
    if (resource.includes(".")) {
        // I.e. is it a file
        return NextResponse.next()
    }


    return NextResponse.rewrite(new URL(subdomain + path, request.url))
}
