import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import type { AdminSession } from "@/lib/session";

const sessionOptions = {
  cookieName: "admin_session",
  password: process.env.IRON_SESSION_SECRET as string,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax" as const,
    maxAge: 60 * 60 * 8,
  },
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login" || pathname === "/api/admin/logout") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    const response = NextResponse.next();
    const session = await getIronSession<AdminSession>(request, response, sessionOptions);

    if (!session.isLoggedIn) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
