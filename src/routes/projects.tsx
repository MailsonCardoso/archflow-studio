import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { Filter, Grid3x3, List, Plus, Search, Trash2, X, AlertCircle } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Topbar } from "@/components/topbar";
import { useProjects, CreateProjectInput } from "@/hooks/use-projects";

export const Route = createFileRoute("/projects")({
  beforeLoad: () => {
    const token = localStorage.getItem("archflow_token");
    if (!token) {
      throw redirect({ to: "/login" });
    }
  },
  head: () => ({
    meta: [
      { title: "Projetos — ArchFlow" },
      { name: "description", content: "Gerencie todos os seus projetos arquitetônicos em tempo real." },
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
  const { projects, isLoading, error, createProject, deleteProject } = useProjects();
  const [view, setView] = useState<"grid" | "list">("grid");
  const [filter, setFilter] = useState("Todos");
  const [q, setQ] = useState("");
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formData, setFormData] = useState<CreateProjectInput>({
    name: "",
    client: "",
    type: "Residencial",
    status: "Rascunho",
    area: 0,
    rooms: 0,
    cover: "",
    description: "",
  });

  const list = projects.filter((p) => {
    const okF = filter === "Todos" || p.type === filter;
    const okQ = !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.client.toLowerCase().includes(q.toLowerCase());
    return okF && okQ;
  });

  const handleOpenModal = () => {
    setFormData({
      name: "",
      client: "",
      type: "Residencial",
      status: "Rascunho",
      area: 0,
      rooms: 0,
      cover: "",
      description: "",
    });
    setFormError(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "area" || name === "rooms" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.name.trim() || !formData.client.trim()) {
      setFormError("Nome do projeto e cliente são obrigatórios.");
      return;
    }

    try {
      await createProject(formData);
      setIsModalOpen(false);
    } catch (err: any) {
      setFormError(err.message || "Erro ao criar projeto.");
    }
  };

  const handleDelete = async (e: React.MouseEvent, id: number, name: string) => {
    e.preventDefault();
    e.stopPropagation();
    if (confirm(`Tem certeza de que deseja excluir o projeto "${name}"?`)) {
      try {
        await deleteProject(id);
      } catch (err: any) {
        alert(err.message || "Erro ao excluir o projeto.");
      }
    }
  };

  return (
    <AppShell>
      <Topbar title="Projetos" subtitle={`${list.length} projetos`} />
      <div className="mx-auto max-w-7xl space-y-6 p-6">
        
        {error && (
          <div className="flex items-center gap-3 rounded-xl border border-destructive/25 bg-destructive/10 p-4 text-sm text-destructive">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <p>{error}</p>
          </div>
        )}

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

          <button
            onClick={handleOpenModal}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-neon px-3.5 py-2 text-sm font-semibold text-neon-foreground shadow-glow hover:opacity-90 transition"
          >
            <Plus className="h-4 w-4" /> Novo
          </button>
        </div>

        {isLoading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          </div>
        ) : list.length === 0 ? (
          <div className="flex h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface/20 text-center">
            <p className="text-muted-foreground">Nenhum projeto encontrado</p>
            <button
              onClick={handleOpenModal}
              className="mt-4 text-xs font-semibold text-primary hover:underline"
            >
              Criar o primeiro projeto
            </button>
          </div>
        ) : view === "grid" ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <Link
                key={p.id}
                to="/editor"
                search={{ projectId: p.id }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface/50 backdrop-blur transition hover:border-primary/40 hover:shadow-glow flex flex-col h-full"
              >
                <div 
                  className="relative h-36 w-full bg-cover bg-center" 
                  style={{ backgroundImage: p.cover ? `url(${p.cover})` : 'none', backgroundColor: '#1a1a24' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <span className={"absolute left-3 top-3 rounded-md px-2 py-0.5 text-[10px] font-medium " + statusColor[p.status]}>
                    {p.status}
                  </span>
                  <button
                    onClick={(e) => handleDelete(e, p.id, p.name)}
                    className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-lg bg-background/80 border border-border/40 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="font-display font-semibold group-hover:text-primary transition">{p.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{p.client}</p>
                    {p.description && (
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{p.description}</p>
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground border-t border-border/40 pt-3">
                    <span>{p.area} m² · {p.rooms} cômodos</span>
                    <span className="font-medium text-primary bg-primary/10 px-1.5 py-0.5 rounded">{p.type}</span>
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
                  <th className="px-4 py-3 text-left font-medium">Tamanho</th>
                  <th className="px-4 py-3 text-right font-medium">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {list.map((p) => (
                  <tr key={p.id} className="hover:bg-surface-elevated/40 transition">
                    <td className="px-4 py-3 font-medium">
                      <Link to="/editor" search={{ projectId: p.id }} className="hover:text-primary transition">
                        {p.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{p.client}</td>
                    <td className="px-4 py-3 text-muted-foreground">{p.type}</td>
                    <td className="px-4 py-3">
                      <span className={"rounded-md px-2 py-0.5 text-xs " + statusColor[p.status]}>{p.status}</span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{p.area} m² ({p.rooms} côm.)</td>
                    <td className="px-4 py-3 text-right">
                      <button
                        onClick={(e) => handleDelete(e, p.id, p.name)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Creation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-lg rounded-2xl border border-border/80 bg-surface/90 shadow-2xl backdrop-blur-md overflow-hidden animate-zoom-in">
            <div className="flex items-center justify-between border-b border-border/50 px-6 py-4">
              <h3 className="font-display text-lg font-semibold">Criar Novo Projeto</h3>
              <button
                onClick={handleCloseModal}
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-surface-elevated hover:text-foreground transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {formError && (
                <div className="flex items-center gap-2 rounded-lg bg-destructive/10 border border-destructive/25 p-3 text-xs text-destructive">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <p>{formError}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Nome do Projeto *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ex: Residência Aurora"
                    className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Cliente *</label>
                  <input
                    type="text"
                    name="client"
                    required
                    value={formData.client}
                    onChange={handleInputChange}
                    placeholder="Ex: Família Almeida"
                    className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Tipo</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm outline-none focus:border-primary/50"
                  >
                    <option value="Residencial">Residencial</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Interiores">Interiores</option>
                    <option value="Reforma">Reforma</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm outline-none focus:border-primary/50"
                  >
                    <option value="Rascunho">Rascunho</option>
                    <option value="Em andamento">Em andamento</option>
                    <option value="Revisão">Revisão</option>
                    <option value="Concluído">Concluído</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Área (m²)</label>
                  <input
                    type="number"
                    name="area"
                    min="0"
                    step="0.01"
                    value={formData.area || ""}
                    onChange={handleInputChange}
                    placeholder="Ex: 120.50"
                    className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Cômodos</label>
                  <input
                    type="number"
                    name="rooms"
                    min="0"
                    value={formData.rooms || ""}
                    onChange={handleInputChange}
                    placeholder="Ex: 5"
                    className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Imagem de Capa (URL)</label>
                  <input
                    type="url"
                    name="cover"
                    value={formData.cover}
                    onChange={handleInputChange}
                    placeholder="Ex: https://images.unsplash.com/..."
                    className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Descrição</label>
                  <textarea
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Escreva detalhes sobre o projeto..."
                    className="w-full rounded-lg border border-border bg-input p-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 resize-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 border-t border-border/50 pt-4 mt-6">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="rounded-lg border border-border px-4 py-2 text-sm font-semibold hover:bg-surface-elevated transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-neon px-4 py-2 text-sm font-semibold text-neon-foreground shadow-glow hover:opacity-90 transition"
                >
                  Criar Projeto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AppShell>
  );
}
