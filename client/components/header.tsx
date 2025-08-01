"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Luggage, UserCircle, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { data: betterAuthSession, isPending } = authClient.useSession();

  async function handleLogout() {
    try {
      // Try NextAuth first, fallback to BetterAuth
      if (session) {
        await signOut({ redirect: false });
      } else if (betterAuthSession) {
        await authClient.signOut();
      }
      toast.success("Logged out successfully");
      router.push("/");
    } catch (error) {
      toast.error("Failed to log out");
      console.error("Logout error:", error);
    }
  }

  return (
    <header className="bg-card shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center gap-8">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <h1 className="text-2xl font-bold text-accent">XOXO</h1>
            </Link>

            <nav className="flex items-center gap-6">
              <Link
                href="/plans"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Luggage className="w-4 h-4" />
                My Plans
              </Link>
              <Link
                href="/coexperiencer/find"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Find CoExperiencers
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {isPending ? (
              <div className="text-sm text-muted-foreground">Loading...</div>
            ) : session || betterAuthSession?.user ? (
              <div className="flex items-center gap-4">
                <div className="text-sm">
                  <span className="text-muted-foreground">Welcome, </span>
                  <span className="font-medium">
                    {session?.user?.name || betterAuthSession?.user?.name || session?.user?.email || betterAuthSession?.user?.email || "User"}
                  </span>
                </div>
                <Button variant="outline" size="sm" onClick={handleLogout} className="flex items-center gap-2">
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/auth/signin">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <UserCircle className="w-4 h-4" />
                    Sign In
                  </Button>
                </Link>
                <Link href="/plan">
                  <Button className="bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
