import { loginAction } from "@/actions/admin";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "var(--color-surface)" }}
    >
      <div
        className="w-full max-w-md rounded border p-10"
        style={{
          background: "#fff",
          borderColor: "var(--color-border, #E5E7EB)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        <div className="mb-8 text-center">
          <h1
            className="font-hind text-3xl font-bold mb-1"
            style={{ color: "var(--color-text)" }}
          >
            Asia Bazaar
          </h1>
          <p className="font-nunito text-sm" style={{ color: "var(--color-muted)" }}>
            Admin Panel Login
          </p>
        </div>

        <form action={loginAction} className="space-y-5">
          <div>
            <label
              className="block font-nunito text-sm font-semibold mb-1.5"
              style={{ color: "var(--color-text)" }}
            >
              Username
            </label>
            <input
              name="username"
              type="text"
              required
              autoComplete="username"
              className="w-full px-4 py-2.5 rounded border font-nunito text-sm outline-none focus:ring-2"
              style={{
                borderColor: "var(--color-border, #E5E7EB)",
                color: "var(--color-text)",
                background: "var(--color-surface)",
              }}
            />
          </div>

          <div>
            <label
              className="block font-nunito text-sm font-semibold mb-1.5"
              style={{ color: "var(--color-text)" }}
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full px-4 py-2.5 rounded border font-nunito text-sm outline-none focus:ring-2"
              style={{
                borderColor: "var(--color-border, #E5E7EB)",
                color: "var(--color-text)",
                background: "var(--color-surface)",
              }}
            />
          </div>

          {searchParams.error && (
            <p className="font-nunito text-sm text-center" style={{ color: "var(--color-red)" }}>
              {searchParams.error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded font-nunito font-bold text-sm text-white transition-colors"
            style={{ background: "var(--color-red)" }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
