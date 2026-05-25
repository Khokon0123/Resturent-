import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export interface AdminSession {
  isLoggedIn: boolean;
}

const sessionOptions = {
  cookieName: "admin_session",
  password: process.env.IRON_SESSION_SECRET as string,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax" as const,
    maxAge: 60 * 60 * 8, // 8 hours
  },
};

export async function getSession() {
  const session = await getIronSession<AdminSession>(await cookies(), sessionOptions);
  return session;
}

export { sessionOptions };
