import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus, TrendingUp, AlertCircle } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Topbar } from "@/components/topbar";
import { useAuth } from "@/contexts/auth-context";
import { useProjects } from "@/hooks/use-projects";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: () => {
    const token = localStorage.getItem("archflow_token");
    if (!token) {
      throw redirect({ to: "/login" });
    }
  },
  head: () => ({
    meta: [
      { title: "Dashboard — ArchFlow" },
      { name: "description", content: "Visão geral dos seus projetos no ArchFlow em tempo real." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { user } = useAuth();
  const { projects, isLoading, error } = useProjects();
  const firstName = user?.name ? user.name.split(" ")[0] : "Usuário";

  // Dynamic calculations based on real API projects
  const activeProjectsCount = projects.filter((p) => p.status !== "Concluído").length;
  const totalArea = projects.reduce((acc, p) => acc + p.area, 0).toFixed(0);
  const totalRooms = projects.reduce((acc, p) => acc + p.rooms, 0);
  const activeClientsCount = new Set(projects.map((p) => p.client)).size;

  const stats = [
    { label: "Projetos ativos", value: activeProjectsCount.toString(), delta: "Em andamento" },
    { label: "Área total", value: `${totalArea}m²`, delta: "Projetados" },
    { label: "Cômodos totais", value: totalRooms.toString(), delta: "Desenhados" },
    { label: "Clientes cadastrados", value: activeClientsCount.toString(), delta: "Ativos" },
  ];

  return (
    <AppShell>
      <Topbar title={`Bom dia, ${firstName}`} subtitle="Aqui está um resumo em tempo real do seu estúdio hoje." />
      <div className="mx-auto max-w-7xl space-y-8 p-6">
        
        {error && (
          <div className="flex items-center gap-3 rounded-xl border border-destructive/25 bg-destructive/10 p-4 text-sm text-destructive">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <p>{error}</p>
          </div>
        )}

        {isLoading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        ) : (
          <>
            <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-border/60 bg-surface/50 p-5 backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-semibold">{s.value}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-primary">
                      <TrendingUp className="h-3 w-3" /> {s.delta}
                    </span>
                  </div>
                </motion.div>
              ))}
            </section>

            <section>
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <h2 className="font-display text-xl font-semibold">Projetos recentes</h2>
                  <p className="text-sm text-muted-foreground">Continue de onde parou.</p>
                </div>
                <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground">
                  Ver todos →
                </Link>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Link
                  to="/projects"
                  className="group flex h-full min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-surface/30 p-6 text-center text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/40 ring-1 ring-primary/30 group-hover:shadow-glow">
                    <Plus className="h-5 w-5 text-primary" />
                  </div>
                  <p className="mt-3 font-medium">Novo projeto</p>
                  <p className="mt-1 text-xs">Crie no menu de Projetos</p>
                </Link>

                {projects.slice(0, 5).map((p) => (
                  <Link
                    key={p.id}
                    to="/editor"
                    search={{ projectId: p.id }}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/50 backdrop-blur transition hover:border-primary/40 hover:shadow-glow"
                  >
                    <div 
                      className="relative h-32 bg-cover bg-center" 
                      style={{ backgroundImage: p.cover ? `url(${p.cover})` : 'none', backgroundColor: '#1a1a24' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                      <div className="absolute right-3 top-3 rounded-md border border-white/10 bg-black/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/80 backdrop-blur">
                        {p.type}
                      </div>
                      <ArrowUpRight className="absolute bottom-3 right-3 h-4 w-4 text-white/70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <p className="font-display font-semibold group-hover:text-primary transition">{p.name}</p>
                      <p className="text-xs text-muted-foreground">{p.client}</p>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                          <div className="h-full rounded-full bg-gradient-neon" style={{ width: `${p.progress}%` }} />
                        </div>
                        <span className="text-xs text-muted-foreground">{p.progress}%</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
              <div className="rounded-2xl border border-border/60 bg-surface/50 p-6 backdrop-blur">
                <h3 className="font-display text-lg font-semibold">Carga de Trabalho</h3>
                <p className="text-sm text-muted-foreground">Distribuição estimada de esforço por projeto recente.</p>
                <div className="mt-6 flex h-48 items-end gap-3">
                  {projects.slice(0, 7).map((p, i) => (
                    <div key={p.id} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className="w-full rounded-t-md bg-gradient-neon shadow-glow"
                        style={{ height: `${p.progress || 10}%`, opacity: 0.85 }}
                      />
                      <span className="text-[10px] text-muted-foreground truncate w-full text-center">
                        {p.name.split(" ")[0]}
                      </span>
                    </div>
                  ))}
                  {projects.length === 0 && (
                    <div className="flex flex-1 items-center justify-center text-xs text-muted-foreground h-full">
                      Crie projetos para visualizar a carga de trabalho.
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-surface/50 p-6 backdrop-blur">
                <h3 className="font-display text-lg font-semibold">Visão Geral de Status</h3>
                <p className="text-sm text-muted-foreground mb-4">Divisão dos projetos por status.</p>
                <ul className="space-y-3">
                  {["Rascunho", "Em andamento", "Revisão", "Concluído"].map((status) => {
                    const count = projects.filter((p) => p.status === status).length;
                    const percent = projects.length > 0 ? (count / projects.length) * 100 : 0;
                    return (
                      <li key={status} className="space-y-1">
                        <div className="flex justify-between text-xs font-medium">
                          <span>{status}</span>
                          <span className="text-muted-foreground">{count} ({percent.toFixed(0)}%)</span>
                        </div>
                        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${percent}%` }} />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          </>
        )}
      </div>
    </AppShell>
  );
}
