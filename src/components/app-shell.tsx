import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  FolderKanban,
  PenSquare,
  Users,
  Settings,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/auth-context";
import { LogOut } from "lucide-react";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/projects", label: "Projetos", icon: FolderKanban },
  { to: "/editor", label: "Editor", icon: PenSquare },
  { to: "/profile", label: "Perfil", icon: Users },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      // Ignora falhas de rede no logout
    }
    // Redireciona limpando todo estado
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="hidden w-64 shrink-0 border-r border-border/60 bg-sidebar/80 backdrop-blur-xl md:flex md:flex-col">
        <Link to="/" className="flex items-center gap-2 px-6 py-5">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-neon shadow-glow">
            <Sparkles className="h-4 w-4 text-neon-foreground" />
          </div>
          <div>
            <p className="font-display text-lg font-semibold leading-none">ArchFlow</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">studio</p>
          </div>
        </Link>

        <nav className="flex-1 space-y-1 px-3">
          {nav.map((item) => {
            const Icon = item.icon;
            const active = pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                  active
                    ? "bg-accent/40 text-foreground ring-1 ring-primary/30 shadow-glow"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground"
                )}
              >
                <Icon className={cn("h-4 w-4", active && "text-primary")} />
                {item.label}
                {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 pb-4">
          <div className="rounded-xl border border-border/60 bg-surface/70 p-4">
            <p className="text-xs font-semibold">Plano Studio Pro</p>
            <p className="mt-1 text-[11px] text-muted-foreground">12 de 30 projetos usados</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-2/5 rounded-full bg-gradient-neon" />
            </div>
          </div>
          <Link
            to="/profile"
            className="mt-3 flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
          >
            <Settings className="h-4 w-4" /> Configurações
          </Link>
          <button
            onClick={handleLogout}
            className="mt-2 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-destructive hover:bg-destructive/10 transition cursor-pointer"
          >
            <LogOut className="h-4 w-4" /> Sair da conta
          </button>
        </div>
      </aside>

      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
