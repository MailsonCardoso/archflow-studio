import { Bell, Search, Plus } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useAuth } from "@/contexts/auth-context";

export function Topbar({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  const { user } = useAuth();

  const getInitials = (name?: string) => {
    if (!name) return "AF";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="flex items-center gap-4 px-6 py-4">
        <div className="min-w-0">
          <h1 className="truncate font-display text-xl font-semibold">{title}</h1>
          {subtitle && (
            <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>

        <div className="ml-auto hidden flex-1 max-w-md md:block">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Buscar projetos, clientes, materiais…"
              className="h-10 w-full rounded-lg border border-border bg-surface/60 pl-9 pr-3 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {action ?? (
            <Link
              to="/editor"
              className="hidden items-center gap-2 rounded-lg bg-gradient-neon px-3.5 py-2 text-sm font-semibold text-neon-foreground shadow-glow hover:opacity-90 sm:inline-flex"
            >
              <Plus className="h-4 w-4" /> Novo projeto
            </Link>
          )}
          <button className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/60 text-muted-foreground hover:text-foreground">
            <Bell className="h-4 w-4" />
          </button>
          <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-gradient-neon text-xs font-semibold text-neon-foreground shadow-glow">
            {getInitials(user?.name)}
          </div>
        </div>
      </div>
    </header>
  );
}
