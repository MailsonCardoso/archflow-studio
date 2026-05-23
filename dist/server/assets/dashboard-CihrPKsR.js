import { H as jsxRuntimeExports } from "./server-DihVp1Pk.js";
import { L as Link } from "./router-Dei5fqdK.js";
import { A as AppShell, T as Topbar, s as stats, p as projects, a as activity } from "./mock-data-DAVZe9DI.js";
import { m as motion } from "./proxy-DzYgoRhI.js";
import { c as createLucideIcon } from "./sparkles-BaQX2SL1.js";
import { P as Plus } from "./plus-ycuQFzhQ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const ArrowUpRight = createLucideIcon("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
const TrendingUp = createLucideIcon("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);
function Dashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Topbar, { title: "Bom dia, Lucas", subtitle: "Aqui está um resumo do seu estúdio hoje." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl space-y-8 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: i * 0.05
      }, className: "rounded-2xl border border-border/60 bg-surface/50 p-5 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-semibold", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-3 w-3" }),
            " ",
            s.delta
          ] })
        ] })
      ] }, s.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-end justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold", children: "Projetos recentes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Continue de onde parou." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "text-sm text-muted-foreground hover:text-foreground", children: "Ver todos →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", className: "group flex h-full min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-surface/30 p-6 text-center text-muted-foreground transition hover:border-primary/50 hover:text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-accent/40 ring-1 ring-primary/30 group-hover:shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-5 w-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-medium", children: "Novo projeto" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs", children: "Comece um esboço em branco" })
          ] }),
          projects.slice(0, 5).map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { p }, p.id))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid gap-4 lg:grid-cols-[1.4fr_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-surface/50 p-6 backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: "Carga semanal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Horas estimadas por projeto." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex h-48 items-end gap-3", children: [60, 78, 45, 92, 70, 55, 88].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-t-md bg-gradient-neon shadow-glow", style: {
              height: `${v}%`,
              opacity: 0.85
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: ["S", "T", "Q", "Q", "S", "S", "D"][i] })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-surface/50 p-6 backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: "Atividade" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-4", children: activity.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-2 w-2 shrink-0 rounded-full bg-primary shadow-glow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: a.who }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: a.what }),
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: a.target })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: a.when })
            ] })
          ] }, i)) })
        ] })
      ] })
    ] })
  ] });
}
function ProjectCard({
  p
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", className: "group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/50 backdrop-blur transition hover:border-primary/40 hover:shadow-glow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-32", style: {
      background: p.cover
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-3 top-3 rounded-md border border-white/10 bg-black/30 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/80 backdrop-blur", children: p.type }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "absolute bottom-3 right-3 h-4 w-4 text-white/70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold", children: p.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        p.client,
        " · ",
        p.updatedAt
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 flex-1 overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-gradient-neon", style: {
          width: `${p.progress}%`
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          p.progress,
          "%"
        ] })
      ] })
    ] })
  ] });
}
export {
  Dashboard as component
};
