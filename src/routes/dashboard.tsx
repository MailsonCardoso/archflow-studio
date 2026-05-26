import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus, TrendingUp } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Topbar } from "@/components/topbar";
import { projects, stats, activity } from "@/lib/mock-data";
import { useAuth } from "@/contexts/auth-context";

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
      { name: "description", content: "Visão geral dos seus projetos no ArchFlow." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { user } = useAuth();
  const firstName = user?.name ? user.name.split(" ")[0] : "Lucas";

  return (
    <AppShell>
      <Topbar title={`Bom dia, ${firstName}`} subtitle="Aqui está um resumo do seu estúdio hoje." />
      <div className="mx-auto max-w-7xl space-y-8 p-6">
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
              to="/editor"
              className="group flex h-full min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-surface/30 p-6 text-center text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/40 ring-1 ring-primary/30 group-hover:shadow-glow">
                <Plus className="h-5 w-5 text-primary" />
              </div>
              <p className="mt-3 font-medium">Novo projeto</p>
              <p className="mt-1 text-xs">Comece um esboço em branco</p>
            </Link>

            {projects.slice(0, 5).map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl border border-border/60 bg-surface/50 p-6 backdrop-blur">
            <h3 className="font-display text-lg font-semibold">Carga semanal</h3>
            <p className="text-sm text-muted-foreground">Horas estimadas por projeto.</p>
            <div className="mt-6 flex h-48 items-end gap-3">
              {[60, 78, 45, 92, 70, 55, 88].map((v, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-md bg-gradient-neon shadow-glow"
                    style={{ height: `${v}%`, opacity: 0.85 }}
                  />
                  <span className="text-[10px] text-muted-foreground">
                    {["S", "T", "Q", "Q", "S", "S", "D"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-surface/50 p-6 backdrop-blur">
            <h3 className="font-display text-lg font-semibold">Atividade</h3>
            <ul className="mt-4 space-y-4">
              {activity.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary shadow-glow" />
                  <div className="min-w-0">
                    <p>
                      <span className="font-medium">{a.who}</span>{" "}
                      <span className="text-muted-foreground">{a.what}</span>{" "}
                      <span className="font-medium">{a.target}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{a.when}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <Link
      to="/editor"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/50 backdrop-blur transition hover:border-primary/40 hover:shadow-glow"
    >
      <div className="relative h-32" style={{ background: p.cover }}>
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute right-3 top-3 rounded-md border border-white/10 bg-black/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/80 backdrop-blur">
          {p.type}
        </div>
        <ArrowUpRight className="absolute bottom-3 right-3 h-4 w-4 text-white/70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="font-display font-semibold">{p.name}</p>
        <p className="text-xs text-muted-foreground">{p.client} · {p.updatedAt}</p>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-gradient-neon" style={{ width: `${p.progress}%` }} />
          </div>
          <span className="text-xs text-muted-foreground">{p.progress}%</span>
        </div>
      </div>
    </Link>
  );
}
