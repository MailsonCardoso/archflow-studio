import { H as jsxRuntimeExports } from "./server-DihVp1Pk.js";
import { L as Link } from "./router-Dei5fqdK.js";
import { S as Scene3D, B as Box, L as Layers, R as Ruler } from "./scene-3d-DQ5unnDy.js";
import { c as createLucideIcon, S as Sparkles } from "./sparkles-BaQX2SL1.js";
import { m as motion } from "./proxy-DzYgoRhI.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const ArrowRight = createLucideIcon("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
const Check = createLucideIcon("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
const Github = createLucideIcon("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
]);
const PenTool = createLucideIcon("PenTool", [
  [
    "path",
    {
      d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
      key: "nt11vn"
    }
  ],
  [
    "path",
    {
      d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
      key: "15qc1e"
    }
  ],
  ["path", { d: "m2.3 2.3 7.286 7.286", key: "1wuzzi" }],
  ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }]
]);
const Twitter = createLucideIcon("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
]);
const WandSparkles = createLucideIcon("WandSparkles", [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
]);
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Showcase, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 border-b border-border/40 bg-background/60 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-lg bg-gradient-neon shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-neon-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-semibold", children: "ArchFlow" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden gap-8 text-sm text-muted-foreground md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-foreground", children: "Recursos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#showcase", className: "hover:text-foreground", children: "Editor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#pricing", className: "hover:text-foreground", children: "Planos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", className: "hover:text-foreground", children: "Dashboard" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", className: "hidden text-sm text-muted-foreground hover:text-foreground sm:block", children: "Entrar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", className: "inline-flex items-center gap-2 rounded-lg bg-gradient-neon px-3.5 py-2 text-sm font-semibold text-neon-foreground shadow-glow hover:opacity-90", children: [
        "Abrir editor ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
      ] })
    ] })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-30", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary shadow-glow" }),
          "Novo · Editor 2D/3D unificado"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl font-semibold tracking-tight md:text-7xl", children: [
          "Projete espaços com",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-neon", children: "precisão e elegância" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg", children: "ArchFlow é a plataforma premium para arquitetos e designers de interiores — do esboço 2D à visualização 3D, em um fluxo único, moderno e fluido." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", className: "inline-flex items-center gap-2 rounded-lg bg-gradient-neon px-5 py-3 text-sm font-semibold text-neon-foreground shadow-glow hover:opacity-90", children: [
            "Começar a projetar ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", className: "inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur hover:bg-surface-elevated", children: "Ver dashboard" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 40
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8,
        delay: 0.2
      }, className: "relative mx-auto mt-16 max-w-6xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong relative overflow-hidden rounded-2xl border shadow-elevated", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border/60 bg-surface/50 px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-400/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-400/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-xs text-muted-foreground", children: "archflow.app / Residência Aurora" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid h-[420px] grid-cols-1 md:grid-cols-[1fr_1fr]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-background/40 bg-grid", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-4 rounded-md border border-border bg-surface/80 px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground", children: "2D · Planta" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 320", className: "h-full w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { stroke: "oklch(0.85 0.02 240)", strokeWidth: "3", fill: "none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "40", y: "40", width: "320", height: "240" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "200", y1: "40", x2: "200", y2: "180" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "200", y1: "180", x2: "360", y2: "180" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "80", y: "80", width: "80", height: "50", rx: "4", fill: "oklch(0.74 0.18 240 / 30%)", stroke: "oklch(0.74 0.18 240)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "240", y: "80", width: "100", height: "60", rx: "4", fill: "oklch(0.74 0.18 240 / 20%)", stroke: "oklch(0.74 0.18 240)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "240", y: "220", width: "80", height: "40", rx: "4", fill: "oklch(0.74 0.18 240 / 20%)", stroke: "oklch(0.74 0.18 240)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "120", cy: "200", r: "22", fill: "oklch(0.82 0.18 200 / 25%)", stroke: "oklch(0.82 0.18 200)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-l border-border/60 bg-background/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-4 z-10 rounded-md border border-border bg-surface/80 px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground", children: "3D · Render em tempo real" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Scene3D, { className: "h-full w-full" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-inset ring-primary/20" })
      ] })
    ] })
  ] });
}
const features = [{
  icon: PenTool,
  title: "Editor 2D inteligente",
  desc: "Paredes, portas e janelas com snap automático, medidas e camadas."
}, {
  icon: Box,
  title: "Visualização 3D instantânea",
  desc: "Alterne entre 2D e 3D sem perder o contexto do projeto."
}, {
  icon: Layers,
  title: "Camadas e organização",
  desc: "Estrutura, mobiliário, elétrica — cada coisa em seu lugar."
}, {
  icon: Ruler,
  title: "Cotas e medições",
  desc: "Sistema métrico, snap e medidas dinâmicas em tempo real."
}, {
  icon: WandSparkles,
  title: "Biblioteca de móveis",
  desc: "Centenas de itens prontos para arrastar até o ambiente."
}, {
  icon: Sparkles,
  title: "Renderizações premium",
  desc: "Exporte imagens e PDFs com qualidade de apresentação."
}];
function Features() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "border-t border-border/40 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.25em] text-primary", children: "Recursos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl font-semibold md:text-4xl", children: "Tudo o que um estúdio precisa, em um só lugar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Construído com a precisão de um CAD e a fluidez de uma ferramenta moderna." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: features.map((f, i) => {
      const Icon = f.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-50px"
      }, transition: {
        duration: 0.4,
        delay: i * 0.05
      }, className: "group relative rounded-2xl border border-border/60 bg-surface/50 p-6 backdrop-blur transition hover:border-primary/40 hover:bg-surface", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg bg-accent/40 ring-1 ring-primary/30 transition group-hover:shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-lg font-semibold", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.desc })
      ] }, f.title);
    }) })
  ] }) });
}
function Showcase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "showcase", className: "border-t border-border/40 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.25em] text-primary", children: "Editor" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl font-semibold md:text-4xl", children: "Do esboço à apresentação, sem trocar de ferramenta." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Desenhe paredes, posicione mobiliário, ajuste materiais e veja tudo ganhar vida em 3D. Tudo com atalhos, snap inteligente e microinterações que respeitam seu fluxo." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm", children: ["Snap a 5 cm com grid inteligente", "Camadas reordenáveis e bloqueáveis", "Painel de propriedades por seleção", "Exportação em PDF, PNG e DXF"].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-primary" }),
        " ",
        b
      ] }, b)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", className: "mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-neon px-5 py-3 text-sm font-semibold text-neon-foreground shadow-glow hover:opacity-90", children: [
        "Abrir editor agora ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass relative h-[440px] overflow-hidden rounded-2xl shadow-elevated", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scene3D, { className: "h-full w-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-border/60 bg-surface/80 px-4 py-3 text-xs backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Render em tempo real · WebGL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-accent/40 px-2 py-1 text-primary", children: "60 fps" })
      ] })
    ] })
  ] }) }) });
}
const plans = [{
  name: "Starter",
  price: "Grátis",
  desc: "Para começar a explorar.",
  features: ["3 projetos", "Editor 2D", "Visualização 3D básica", "Exportação PNG"]
}, {
  name: "Studio",
  price: "R$ 89",
  suffix: "/mês",
  desc: "Para profissionais e pequenos estúdios.",
  features: ["Projetos ilimitados", "Biblioteca completa", "Exportação PDF/DXF", "Colaboração em equipe", "Renderizações HD"],
  highlight: true
}, {
  name: "Atelier",
  price: "Sob medida",
  desc: "Para escritórios e grandes equipes.",
  features: ["SSO e auditoria", "Templates corporativos", "Gerente de conta", "SLA dedicado"]
}];
function Pricing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pricing", className: "border-t border-border/40 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-[0.25em] text-primary", children: "Planos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl font-semibold md:text-4xl", children: "Preços simples, valor premium." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-3", children: plans.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col rounded-2xl border p-7 backdrop-blur " + (p.highlight ? "border-primary/50 bg-surface ring-1 ring-primary/40 shadow-glow" : "border-border/60 bg-surface/40"), children: [
      p.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2 right-6 rounded-full bg-gradient-neon px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-neon-foreground", children: "Popular" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: p.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-baseline gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl font-semibold", children: p.price }),
        p.suffix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: p.suffix })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2.5 text-sm", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-primary" }),
        " ",
        f
      ] }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dashboard", className: "mt-7 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition " + (p.highlight ? "bg-gradient-neon text-neon-foreground shadow-glow hover:opacity-90" : "border border-border bg-surface/60 text-foreground hover:bg-surface-elevated"), children: [
        "Escolher ",
        p.name
      ] })
    ] }, p.name)) })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border/40 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-primary/30 bg-surface p-12 text-center shadow-glow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero opacity-60", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-semibold md:text-4xl", children: "Pronto para repensar seu fluxo de projeto?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "Comece em segundos. Sem cartão. Sem fricção." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", className: "mt-7 inline-flex items-center gap-2 rounded-lg bg-gradient-neon px-6 py-3 text-sm font-semibold text-neon-foreground shadow-glow hover:opacity-90", children: [
        "Criar meu primeiro projeto ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] })
  ] }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border/40 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-neon shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-neon-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold", children: "ArchFlow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-xs text-muted-foreground", children: "© 2026 · Todos os direitos reservados" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Privacidade" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Termos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }) })
    ] })
  ] }) });
}
export {
  Landing as component
};
