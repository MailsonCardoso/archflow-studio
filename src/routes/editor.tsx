import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Box,
  ChevronRight,
  DoorOpen,
  Download,
  Eye,
  Grid3x3,
  Hand,
  Layers,
  Lock,
  MousePointer2,
  Move3d,
  PanelRight,
  Plus,
  RectangleHorizontal,
  Redo2,
  Ruler,
  Save,
  Sofa,
  Sparkles,
  Square,
  Undo2,
} from "lucide-react";
import { Scene3D } from "@/components/scene-3d";
import { FloorPlan2D } from "@/components/floor-plan-2d";

export const Route = createFileRoute("/editor")({
  beforeLoad: () => {
    const token = localStorage.getItem("archflow_token");
    if (!token) {
      throw redirect({ to: "/login" });
    }
  },
  head: () => ({
    meta: [
      { title: "Editor — ArchFlow" },
      { name: "description", content: "Editor 2D/3D de plantas e ambientes." },
    ],
  }),
  component: Editor,
});

const tools = [
  { id: "select", icon: MousePointer2, label: "Selecionar" },
  { id: "pan", icon: Hand, label: "Mover canvas" },
  { id: "wall", icon: RectangleHorizontal, label: "Parede" },
  { id: "door", icon: DoorOpen, label: "Porta" },
  { id: "window", icon: Square, label: "Janela" },
  { id: "floor", icon: Grid3x3, label: "Piso" },
  { id: "furniture", icon: Sofa, label: "Móveis" },
  { id: "measure", icon: Ruler, label: "Medidas" },
] as const;

const layers = [
  { name: "Estrutura", count: 5, locked: true, visible: true },
  { name: "Aberturas", count: 2, locked: false, visible: true },
  { name: "Mobiliário", count: 3, locked: false, visible: true },
  { name: "Cotas", count: 4, locked: false, visible: true },
];

function Editor() {
  const [tool, setTool] = useState<string>("select");
  const [mode, setMode] = useState<"2d" | "3d">("2d");
  const [selected, setSelected] = useState<string | null>("f1");
  const [rightOpen, setRightOpen] = useState(true);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      {/* Topbar */}
      <header className="flex h-14 shrink-0 items-center gap-3 border-b border-border/60 bg-surface/70 px-4 backdrop-blur-xl">
        <Link to="/projects" className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-neon shadow-glow">
            <Sparkles className="h-3.5 w-3.5 text-neon-foreground" />
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Link to="/projects" className="hover:text-foreground">Projetos</Link>
              <ChevronRight className="h-3 w-3" />
              <span>Residencial</span>
            </div>
            <p className="font-display text-sm font-semibold">Residência Aurora</p>
          </div>
        </div>

        <div className="ml-6 flex items-center gap-1 rounded-lg border border-border bg-surface/80 p-1">
          {(["2d", "3d"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={
                "rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition " +
                (mode === m ? "bg-accent/60 text-foreground ring-1 ring-primary/30 shadow-glow" : "text-muted-foreground hover:text-foreground")
              }
            >
              {m === "3d" ? <span className="inline-flex items-center gap-1"><Move3d className="h-3 w-3" /> 3D</span>
                : <span className="inline-flex items-center gap-1"><Grid3x3 className="h-3 w-3" /> 2D</span>}
            </button>
          ))}
        </div>

        <div className="mx-2 flex items-center gap-1">
          <IconBtn><Undo2 className="h-4 w-4" /></IconBtn>
          <IconBtn><Redo2 className="h-4 w-4" /></IconBtn>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button className="hidden items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground md:inline-flex">
            <Eye className="h-3.5 w-3.5" /> Pré-visualizar
          </button>
          <button className="hidden items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground md:inline-flex">
            <Download className="h-3.5 w-3.5" /> Exportar
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-neon px-3 py-1.5 text-xs font-semibold text-neon-foreground shadow-glow hover:opacity-90">
            <Save className="h-3.5 w-3.5" /> Salvar
          </button>
          <button
            onClick={() => setRightOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-muted-foreground hover:text-foreground"
          >
            <PanelRight className="h-4 w-4" />
          </button>
          <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-neon text-xs font-semibold text-neon-foreground">LM</div>
        </div>
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Left toolbar */}
        <aside className="flex w-16 shrink-0 flex-col items-center gap-1 border-r border-border/60 bg-sidebar/80 py-3 backdrop-blur-xl">
          {tools.map((t) => {
            const Icon = t.icon;
            const active = tool === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTool(t.id)}
                title={t.label}
                className={
                  "group relative grid h-10 w-10 place-items-center rounded-lg transition " +
                  (active
                    ? "bg-accent/60 text-foreground ring-1 ring-primary/30 shadow-glow"
                    : "text-muted-foreground hover:bg-surface hover:text-foreground")
                }
              >
                <Icon className="h-4 w-4" />
                <span className="pointer-events-none absolute left-full ml-2 hidden whitespace-nowrap rounded-md border border-border bg-surface px-2 py-1 text-[10px] text-foreground shadow-soft group-hover:block">
                  {t.label}
                </span>
              </button>
            );
          })}
          <div className="my-2 h-px w-8 bg-border/60" />
          <button title="Camadas" className="grid h-10 w-10 place-items-center rounded-lg text-muted-foreground hover:bg-surface hover:text-foreground">
            <Layers className="h-4 w-4" />
          </button>
        </aside>

        {/* Canvas */}
        <section className="relative flex-1 min-w-0 overflow-hidden">
          <AnimatePresence mode="wait">
            {mode === "2d" ? (
              <motion.div key="2d" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                <div className="absolute inset-0 bg-background" />
                <FloorPlan2D selected={selected} onSelect={setSelected} />
              </motion.div>
            ) : (
              <motion.div key="3d" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
                <Scene3D className="h-full w-full" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* HUD */}
          <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2">
            <div className="pointer-events-auto rounded-lg border border-border bg-surface/80 px-3 py-1.5 text-[11px] text-muted-foreground backdrop-blur">
              <span className="text-primary">●</span> Snap 5cm · Grid 32px
            </div>
            <div className="pointer-events-auto rounded-lg border border-border bg-surface/80 px-3 py-1.5 text-[11px] text-muted-foreground backdrop-blur">
              Ferramenta: <span className="text-foreground">{tools.find((t) => t.id === tool)?.label}</span>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
            <div className="pointer-events-auto flex items-center gap-1 rounded-lg border border-border bg-surface/80 p-1 backdrop-blur">
              <IconBtn small><Plus className="h-3.5 w-3.5" /></IconBtn>
              <span className="px-2 text-xs text-muted-foreground">100%</span>
              <IconBtn small><span className="text-xs">−</span></IconBtn>
            </div>
            <div className="pointer-events-auto rounded-lg border border-border bg-surface/80 px-3 py-1.5 text-[11px] text-muted-foreground backdrop-blur">
              Área: <span className="text-foreground">184 m²</span> · Cômodos: <span className="text-foreground">7</span>
            </div>
          </div>
        </section>

        {/* Right panel */}
        <AnimatePresence>
          {rightOpen && (
            <motion.aside
              initial={{ x: 320, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 320, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="w-80 shrink-0 overflow-y-auto border-l border-border/60 bg-sidebar/80 backdrop-blur-xl"
            >
              <div className="border-b border-border/60 px-4 py-3">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Propriedades</p>
                <p className="mt-1 font-display text-sm font-semibold">
                  {selected ? "Móvel · Sofá" : "Nenhuma seleção"}
                </p>
              </div>

              <div className="space-y-5 p-4">
                <Field label="Largura"><Number value={150} suffix="cm" /></Field>
                <Field label="Altura"><Number value={70} suffix="cm" /></Field>
                <Field label="Rotação"><Number value={0} suffix="°" /></Field>

                <div>
                  <p className="mb-2 text-xs text-muted-foreground">Material</p>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      "linear-gradient(135deg, oklch(0.45 0.05 240), oklch(0.30 0.04 240))",
                      "linear-gradient(135deg, oklch(0.55 0.10 30), oklch(0.40 0.08 30))",
                      "linear-gradient(135deg, oklch(0.60 0.08 140), oklch(0.45 0.06 140))",
                      "linear-gradient(135deg, oklch(0.85 0.02 240), oklch(0.70 0.02 240))",
                    ].map((bg, i) => (
                      <button
                        key={i}
                        style={{ background: bg }}
                        className={"aspect-square rounded-lg ring-1 ring-border transition hover:scale-105 " + (i === 0 ? "ring-2 ring-primary shadow-glow" : "")}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs text-muted-foreground">Cor</p>
                  <div className="flex gap-2">
                    {["oklch(0.74 0.18 240)", "oklch(0.78 0.16 190)", "oklch(0.78 0.18 60)", "oklch(0.78 0.18 30)", "oklch(0.65 0.02 240)"].map((c, i) => (
                      <button
                        key={i}
                        style={{ background: c }}
                        className={"h-8 w-8 rounded-full ring-1 ring-border " + (i === 0 ? "ring-2 ring-primary shadow-glow" : "")}
                      />
                    ))}
                  </div>
                </div>

                <Field label="Transparência">
                  <input type="range" defaultValue={80} className="w-full accent-[oklch(0.74_0.18_240)]" />
                </Field>

                <Field label="Textura">
                  <select className="h-9 w-full rounded-md border border-border bg-input px-2 text-sm">
                    <option>Linho</option>
                    <option>Veludo</option>
                    <option>Couro</option>
                    <option>Bouclé</option>
                  </select>
                </Field>
              </div>

              <div className="border-t border-border/60 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Camadas</p>
                  <button className="text-xs text-primary hover:underline">+ Nova</button>
                </div>
                <ul className="space-y-1">
                  {layers.map((l) => (
                    <li key={l.name} className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-surface">
                      <Box className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="flex-1">{l.name}</span>
                      <span className="text-xs text-muted-foreground">{l.count}</span>
                      <Lock className={"h-3.5 w-3.5 " + (l.locked ? "text-primary" : "text-muted-foreground/50")} />
                      <Eye className="h-3.5 w-3.5 text-muted-foreground" />
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function IconBtn({ children, small }: { children: React.ReactNode; small?: boolean }) {
  return (
    <button
      className={
        "grid place-items-center rounded-md text-muted-foreground hover:bg-surface hover:text-foreground " +
        (small ? "h-7 w-7" : "h-9 w-9")
      }
    >
      {children}
    </button>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-1.5 text-xs text-muted-foreground">{label}</p>
      {children}
    </div>
  );
}

function Number({ value, suffix }: { value: number; suffix?: string }) {
  return (
    <div className="flex h-9 items-center overflow-hidden rounded-md border border-border bg-input">
      <input
        defaultValue={value}
        className="h-full w-full bg-transparent px-3 text-sm outline-none"
      />
      {suffix && <span className="pr-3 text-xs text-muted-foreground">{suffix}</span>}
    </div>
  );
}
