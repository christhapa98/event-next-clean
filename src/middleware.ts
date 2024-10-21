import { NextResponse, NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    console.log(pathname)
    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/api/:path*"],
}