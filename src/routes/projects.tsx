import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Filter, Grid3x3, List, Plus, Search } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Topbar } from "@/components/topbar";
import { projects } from "@/lib/mock-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projetos — ArchFlow" },
      { name: "description", content: "Gerencie todos os seus projetos arquitetônicos." },
    ],
  }),
  component: Projects,
});

const filters = ["Todos", "Residencial", "Comercial", "Interiores", "Reforma"];
const statusColor: Record<string, string> = {
  "Em andamento": "text-primary bg-primary/15",
  "Revisão": "text-amber-300 bg-amber-300/10",
  "Concluído": "text-emerald-300 bg-emerald-300/10",
  "Rascunho": "text-muted-foreground bg-muted/40",
};

function Projects() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filter, setFilter] = useState("Todos");
  const [q, setQ] = useState("");

  const list = projects.filter((p) => {
    const okF = filter === "Todos" || p.type === filter;
    const okQ = !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.client.toLowerCase().includes(q.toLowerCase());
    return okF && okQ;
  });

  return (
    <AppShell>
      <Topbar title="Projetos" subtitle={`${list.length} projetos`} />
      <div className="mx-auto max-w-7xl space-y-6 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar projeto ou cliente…"
              className="h-10 w-full rounded-lg border border-border bg-surface/60 pl-9 pr-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-border bg-surface/60 p-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={
                  "rounded-md px-3 py-1.5 text-xs font-medium transition " +
                  (filter === f
                    ? "bg-accent/60 text-foreground ring-1 ring-primary/30"
                    : "text-muted-foreground hover:text-foreground")
                }
              >
                {f}
              </button>
            ))}
          </div>

          <button className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/60 text-muted-foreground hover:text-foreground">
            <Filter className="h-4 w-4" />
          </button>

          <div className="flex h-10 rounded-lg border border-border bg-surface/60 p-1">
            <button
              onClick={() => setView("grid")}
              className={"grid w-9 place-items-center rounded-md " + (view === "grid" ? "bg-accent/60 text-foreground" : "text-muted-foreground")}
            >
              <Grid3x3 className="h-4 w-4" />
            </button>
            <button
              onClick={() => setView("list")}
              className={"grid w-9 place-items-center rounded-md " + (view === "list" ? "bg-accent/60 text-foreground" : "text-muted-foreground")}
            >
              <List className="h-4 w-4" />
            </button>
          </div>

          <Link
            to="/editor"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-neon px-3.5 py-2 text-sm font-semibold text-neon-foreground shadow-glow hover:opacity-90"
          >
            <Plus className="h-4 w-4" /> Novo
          </Link>
        </div>

        {view === "grid" ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <Link
                key={p.id}
                to="/editor"
                className="group overflow-hidden rounded-2xl border border-border/60 bg-surface/50 backdrop-blur transition hover:border-primary/40 hover:shadow-glow"
              >
                <div className="relative h-36" style={{ background: p.cover }}>
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <span className={"absolute left-3 top-3 rounded-md px-2 py-0.5 text-[10px] font-medium " + statusColor[p.status]}>
                    {p.status}
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-display font-semibold">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.client}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{p.area} m² · {p.rooms} cômodos</span>
                    <span>{p.updatedAt}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-surface/50 backdrop-blur">
            <table className="w-full text-sm">
              <thead className="bg-surface-elevated/50 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Projeto</th>
                  <th className="px-4 py-3 text-left font-medium">Cliente</th>
                  <th className="px-4 py-3 text-left font-medium">Tipo</th>
                  <th className="px-4 py-3 text-left font-medium">Status</th>
                  <th className="px-4 py-3 text-right font-medium">Atualizado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {list.map((p) => (
                  <tr key={p.id} className="hover:bg-surface-elevated/40">
                    <td className="px-4 py-3 font-medium">
                      <Link to="/editor" className="hover:text-primary">{p.name}</Link>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{p.client}</td>
                    <td className="px-4 py-3 text-muted-foreground">{p.type}</td>
                    <td className="px-4 py-3">
                      <span className={"rounded-md px-2 py-0.5 text-xs " + statusColor[p.status]}>{p.status}</span>
                    </td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{p.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AppShell>
  );
}
