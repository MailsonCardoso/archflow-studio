import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Layers,
  Box,
  Ruler,
  PenTool,
  Wand2,
  Github,
  Twitter,
  Check,
} from "lucide-react";
import { Scene3D } from "@/components/scene-3d";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ArchFlow — Plataforma premium de arquitetura e design" },
      { name: "description", content: "Crie plantas 2D, visualize ambientes em 3D e gerencie projetos arquitetônicos em uma plataforma moderna e elegante." },
      { property: "og:title", content: "ArchFlow" },
      { property: "og:description", content: "Plantas 2D, visualização 3D e design de interiores em um único fluxo." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Nav />
      <Hero />
      <Features />
      <Showcase />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-neon shadow-glow">
            <Sparkles className="h-4 w-4 text-neon-foreground" />
          </div>
          <span className="font-display text-lg font-semibold">ArchFlow</span>
        </Link>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground">Recursos</a>
          <a href="#showcase" className="hover:text-foreground">Editor</a>
          <a href="#pricing" className="hover:text-foreground">Planos</a>
          <Link to="/dashboard" className="hover:text-foreground">Dashboard</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/dashboard" className="hidden text-sm text-muted-foreground hover:text-foreground sm:block">Entrar</Link>
          <Link
            to="/editor"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-neon px-3.5 py-2 text-sm font-semibold text-neon-foreground shadow-glow hover:opacity-90"
          >
            Abrir editor <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
            Novo · Editor 2D/3D unificado
          </span>
          <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight md:text-7xl">
            Projete espaços com{" "}
            <span className="text-gradient-neon">precisão e elegância</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            ArchFlow é a plataforma premium para arquitetos e designers de interiores —
            do esboço 2D à visualização 3D, em um fluxo único, moderno e fluido.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/editor"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-neon px-5 py-3 text-sm font-semibold text-neon-foreground shadow-glow hover:opacity-90"
            >
              Começar a projetar <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur hover:bg-surface-elevated"
            >
              Ver dashboard
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          <div className="glass-strong relative overflow-hidden rounded-2xl border shadow-elevated">
            <div className="flex items-center gap-2 border-b border-border/60 bg-surface/50 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-xs text-muted-foreground">
                archflow.app / Residência Aurora
              </span>
            </div>
            <div className="grid h-[420px] grid-cols-1 md:grid-cols-[1fr_1fr]">
              <div className="relative bg-background/40 bg-grid">
                <div className="absolute left-4 top-4 rounded-md border border-border bg-surface/80 px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                  2D · Planta
                </div>
                <svg viewBox="0 0 400 320" className="h-full w-full">
                  <g stroke="oklch(0.85 0.02 240)" strokeWidth="3" fill="none">
                    <rect x="40" y="40" width="320" height="240" />
                    <line x1="200" y1="40" x2="200" y2="180" />
                    <line x1="200" y1="180" x2="360" y2="180" />
                  </g>
                  <rect x="80" y="80" width="80" height="50" rx="4" fill="oklch(0.74 0.18 240 / 30%)" stroke="oklch(0.74 0.18 240)" />
                  <rect x="240" y="80" width="100" height="60" rx="4" fill="oklch(0.74 0.18 240 / 20%)" stroke="oklch(0.74 0.18 240)" />
                  <rect x="240" y="220" width="80" height="40" rx="4" fill="oklch(0.74 0.18 240 / 20%)" stroke="oklch(0.74 0.18 240)" />
                  <circle cx="120" cy="200" r="22" fill="oklch(0.82 0.18 200 / 25%)" stroke="oklch(0.82 0.18 200)" />
                </svg>
              </div>
              <div className="relative border-l border-border/60 bg-background/40">
                <div className="absolute left-4 top-4 z-10 rounded-md border border-border bg-surface/80 px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                  3D · Render em tempo real
                </div>
                <Scene3D className="h-full w-full" />
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-inset ring-primary/20" />
        </motion.div>
      </div>
    </section>
  );
}

const features = [
  { icon: PenTool, title: "Editor 2D inteligente", desc: "Paredes, portas e janelas com snap automático, medidas e camadas." },
  { icon: Box, title: "Visualização 3D instantânea", desc: "Alterne entre 2D e 3D sem perder o contexto do projeto." },
  { icon: Layers, title: "Camadas e organização", desc: "Estrutura, mobiliário, elétrica — cada coisa em seu lugar." },
  { icon: Ruler, title: "Cotas e medições", desc: "Sistema métrico, snap e medidas dinâmicas em tempo real." },
  { icon: Wand2, title: "Biblioteca de móveis", desc: "Centenas de itens prontos para arrastar até o ambiente." },
  { icon: Sparkles, title: "Renderizações premium", desc: "Exporte imagens e PDFs com qualidade de apresentação." },
];

function Features() {
  return (
    <section id="features" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Recursos</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            Tudo o que um estúdio precisa, em um só lugar
          </h2>
          <p className="mt-3 text-muted-foreground">
            Construído com a precisão de um CAD e a fluidez de uma ferramenta moderna.
          </p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-border/60 bg-surface/50 p-6 backdrop-blur transition hover:border-primary/40 hover:bg-surface"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/40 ring-1 ring-primary/30 transition group-hover:shadow-glow">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section id="showcase" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Editor</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
              Do esboço à apresentação, sem trocar de ferramenta.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Desenhe paredes, posicione mobiliário, ajuste materiais e veja
              tudo ganhar vida em 3D. Tudo com atalhos, snap inteligente e
              microinterações que respeitam seu fluxo.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Snap a 5 cm com grid inteligente",
                "Camadas reordenáveis e bloqueáveis",
                "Painel de propriedades por seleção",
                "Exportação em PDF, PNG e DXF",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" /> {b}
                </li>
              ))}
            </ul>
            <Link
              to="/editor"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-neon px-5 py-3 text-sm font-semibold text-neon-foreground shadow-glow hover:opacity-90"
            >
              Abrir editor agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="glass relative h-[440px] overflow-hidden rounded-2xl shadow-elevated">
            <Scene3D className="h-full w-full" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-border/60 bg-surface/80 px-4 py-3 text-xs backdrop-blur">
              <span className="text-muted-foreground">Render em tempo real · WebGL</span>
              <span className="rounded-md bg-accent/40 px-2 py-1 text-primary">60 fps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Starter",
    price: "Grátis",
    desc: "Para começar a explorar.",
    features: ["3 projetos", "Editor 2D", "Visualização 3D básica", "Exportação PNG"],
  },
  {
    name: "Studio",
    price: "R$ 89",
    suffix: "/mês",
    desc: "Para profissionais e pequenos estúdios.",
    features: ["Projetos ilimitados", "Biblioteca completa", "Exportação PDF/DXF", "Colaboração em equipe", "Renderizações HD"],
    highlight: true,
  },
  {
    name: "Atelier",
    price: "Sob medida",
    desc: "Para escritórios e grandes equipes.",
    features: ["SSO e auditoria", "Templates corporativos", "Gerente de conta", "SLA dedicado"],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Planos</p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
            Preços simples, valor premium.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={
                "relative flex flex-col rounded-2xl border p-7 backdrop-blur " +
                (p.highlight
                  ? "border-primary/50 bg-surface ring-1 ring-primary/40 shadow-glow"
                  : "border-border/60 bg-surface/40")
              }
            >
              {p.highlight && (
                <span className="absolute -top-2 right-6 rounded-full bg-gradient-neon px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-neon-foreground">
                  Popular
                </span>
              )}
              <p className="text-sm text-muted-foreground">{p.name}</p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold">{p.price}</span>
                {p.suffix && <span className="text-sm text-muted-foreground">{p.suffix}</span>}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/dashboard"
                className={
                  "mt-7 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition " +
                  (p.highlight
                    ? "bg-gradient-neon text-neon-foreground shadow-glow hover:opacity-90"
                    : "border border-border bg-surface/60 text-foreground hover:bg-surface-elevated")
                }
              >
                Escolher {p.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-surface p-12 text-center shadow-glow">
          <div className="absolute inset-0 bg-gradient-hero opacity-60" aria-hidden />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Pronto para repensar seu fluxo de projeto?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Comece em segundos. Sem cartão. Sem fricção.
            </p>
            <Link
              to="/editor"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-gradient-neon px-6 py-3 text-sm font-semibold text-neon-foreground shadow-glow hover:opacity-90"
            >
              Criar meu primeiro projeto <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-neon shadow-glow">
            <Sparkles className="h-3.5 w-3.5 text-neon-foreground" />
          </div>
          <span className="font-display font-semibold">ArchFlow</span>
          <span className="ml-3 text-xs text-muted-foreground">© 2026 · Todos os direitos reservados</span>
        </div>
        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground">Privacidade</a>
          <a href="#" className="hover:text-foreground">Termos</a>
          <a href="#" className="hover:text-foreground"><Twitter className="h-4 w-4" /></a>
          <a href="#" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
