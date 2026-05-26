import { createFileRoute, redirect } from "@tanstack/react-router";
import { Camera, Mail, MapPin, Award, Briefcase } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Topbar } from "@/components/topbar";
import { projects, stats } from "@/lib/mock-data";
import { useAuth } from "@/contexts/auth-context";

export const Route = createFileRoute("/profile")({
  beforeLoad: () => {
    const token = localStorage.getItem("archflow_token");
    if (!token) {
      throw redirect({ to: "/login" });
    }
  },
  head: () => ({
    meta: [
      { title: "Perfil — ArchFlow" },
      { name: "description", content: "Seu perfil e configurações no ArchFlow." },
    ],
  }),
  component: Profile,
});

const tabs = ["Visão geral", "Projetos", "Equipe", "Preferências", "Faturamento"];

function Profile() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      // Ignora falhas de rede no logout
    }
    window.location.href = "/login";
  };

  const getInitials = (name?: string) => {
    if (!name) return "AF";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const userName = user?.name ?? "Lucas Mendes";
  const userEmail = user?.email ?? "lucas@studioaurora.com";

  return (
    <AppShell>
      <Topbar title="Perfil" subtitle="Seu espaço pessoal." />
      <div className="mx-auto max-w-5xl space-y-6 p-6">
        {/* Hero card */}
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-surface/50 backdrop-blur">
          <div className="h-36 bg-gradient-hero bg-grid" />
          <div className="px-6 pb-6">
            <div className="-mt-12 flex flex-wrap items-end gap-4">
              <div className="relative">
                <div className="grid h-24 w-24 place-items-center rounded-2xl bg-gradient-neon font-display text-2xl font-semibold text-neon-foreground shadow-glow ring-4 ring-background">
                  {getInitials(user?.name)}
                </div>
                <button className="absolute -bottom-1 -right-1 grid h-7 w-7 place-items-center rounded-full border border-border bg-surface text-muted-foreground hover:text-foreground">
                  <Camera className="h-3.5 w-3.5" />
                </button>
              </div>
              <div className="flex-1 pt-2">
                <h2 className="font-display text-2xl font-semibold">{userName}</h2>
                <p className="text-sm text-muted-foreground">Arquiteto · Studio Aurora · Plano Studio Pro</p>
                <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Mail className="h-3 w-3" /> {userEmail}</span>
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> São Paulo, BR</span>
                  <span className="inline-flex items-center gap-1"><Briefcase className="h-3 w-3" /> CAU A12345-6</span>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={handleLogout}
                  className="rounded-lg border border-destructive bg-destructive/10 px-3 py-2 text-xs text-destructive hover:bg-destructive/20 transition cursor-pointer font-medium"
                >
                  Sair da conta
                </button>
                <button className="rounded-lg bg-gradient-neon px-3 py-2 text-xs font-semibold text-neon-foreground shadow-glow hover:opacity-90">Editar perfil</button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 overflow-x-auto rounded-lg border border-border bg-surface/50 p-1">
          {tabs.map((t, i) => (
            <button
              key={t}
              className={
                "shrink-0 rounded-md px-3 py-1.5 text-xs font-medium transition " +
                (i === 0 ? "bg-accent/60 text-foreground ring-1 ring-primary/30" : "text-muted-foreground hover:text-foreground")
              }
            >
              {t}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border/60 bg-surface/50 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
              <p className="mt-2 font-display text-2xl font-semibold">{s.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.delta}</p>
            </div>
          ))}
        </div>

        {/* Body */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-border/60 bg-surface/50 p-6 backdrop-blur">
            <h3 className="font-display text-lg font-semibold">Sobre</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Arquiteto com 10 anos de experiência em residências de alto padrão e interiores
              minimalistas. Apaixonado por luz natural, materiais honestos e fluxos eficientes.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Residencial", "Interiores", "Minimalismo", "Iluminação natural", "BIM"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>

            <h3 className="mt-8 font-display text-lg font-semibold">Projetos em destaque</h3>
            <ul className="mt-3 divide-y divide-border/60">
              {projects.slice(0, 4).map((p) => (
                <li key={p.id} className="flex items-center gap-3 py-3">
                  <div className="h-10 w-10 shrink-0 rounded-lg" style={{ background: p.cover }} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.client} · {p.area} m²</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{p.updatedAt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-surface/50 p-6 backdrop-blur">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                <h3 className="font-display text-lg font-semibold">Conquistas</h3>
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  { t: "100 projetos entregues", s: "Marco Studio" },
                  { t: "Certificação BIM", s: "Concluída em 2025" },
                  { t: "Top 1% engajamento", s: "Comunidade ArchFlow" },
                ].map((a) => (
                  <li key={a.t} className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary shadow-glow" />
                    <div>
                      <p className="font-medium">{a.t}</p>
                      <p className="text-xs text-muted-foreground">{a.s}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-primary/30 bg-surface/70 p-6 shadow-glow">
              <p className="text-xs uppercase tracking-wider text-primary">Plano</p>
              <p className="mt-1 font-display text-xl font-semibold">Studio Pro</p>
              <p className="mt-2 text-sm text-muted-foreground">12 de 30 projetos usados este mês.</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-2/5 rounded-full bg-gradient-neon" />
              </div>
              <button className="mt-4 w-full rounded-lg bg-gradient-neon py-2 text-xs font-semibold text-neon-foreground hover:opacity-90">
                Gerenciar assinatura
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
