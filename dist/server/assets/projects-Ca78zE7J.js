import { P as reactExports, H as jsxRuntimeExports } from "./server-DihVp1Pk.js";
import { L as Link } from "./router-Dei5fqdK.js";
import { p as projects, A as AppShell, T as Topbar, S as Search } from "./mock-data-DAVZe9DI.js";
import { c as createLucideIcon } from "./sparkles-BaQX2SL1.js";
import { G as Grid3x3 } from "./grid-3x3-BywFh6aJ.js";
import { P as Plus } from "./plus-ycuQFzhQ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const Filter = createLucideIcon("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
const List = createLucideIcon("List", [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
]);
const filters = ["Todos", "Residencial", "Comercial", "Interiores", "Reforma"];
const statusColor = {
  "Em andamento": "text-primary bg-primary/15",
  "Revisão": "text-amber-300 bg-amber-300/10",
  "Concluído": "text-emerald-300 bg-emerald-300/10",
  "Rascunho": "text-muted-foreground bg-muted/40"
};
function Projects() {
  const [view, setView] = reactExports.useState("grid");
  const [filter, setFilter] = reactExports.useState("Todos");
  const [q, setQ] = reactExports.useState("");
  const list = projects.filter((p) => {
    const okF = filter === "Todos" || p.type === filter;
    const okQ = !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.client.toLowerCase().includes(q.toLowerCase());
    return okF && okQ;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Topbar, { title: "Projetos", subtitle: `${list.length} projetos` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl space-y-6 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[220px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Buscar projeto ou cliente…", className: "h-10 w-full rounded-lg border border-border bg-surface/60 pl-9 pr-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/20" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-1.5 rounded-lg border border-border bg-surface/60 p-1", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setFilter(f), className: "rounded-md px-3 py-1.5 text-xs font-medium transition " + (filter === f ? "bg-accent/60 text-foreground ring-1 ring-primary/30" : "text-muted-foreground hover:text-foreground"), children: f }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/60 text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Filter, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-10 rounded-lg border border-border bg-surface/60 p-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("grid"), className: "grid w-9 place-items-center rounded-md " + (view === "grid" ? "bg-accent/60 text-foreground" : "text-muted-foreground"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Grid3x3, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setView("list"), className: "grid w-9 place-items-center rounded-md " + (view === "list" ? "bg-accent/60 text-foreground" : "text-muted-foreground"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", className: "inline-flex items-center gap-2 rounded-lg bg-gradient-neon px-3.5 py-2 text-sm font-semibold text-neon-foreground shadow-glow hover:opacity-90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
          " Novo"
        ] })
      ] }),
      view === "grid" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: list.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/editor", className: "group overflow-hidden rounded-2xl border border-border/60 bg-surface/50 backdrop-blur transition hover:border-primary/40 hover:shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-36", style: {
          background: p.cover
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid opacity-40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-3 rounded-md px-2 py-0.5 text-[10px] font-medium " + statusColor[p.status], children: p.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: p.client }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              p.area,
              " m² · ",
              p.rooms,
              " cômodos"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.updatedAt })
          ] })
        ] })
      ] }, p.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border/60 bg-surface/50 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-surface-elevated/50 text-xs uppercase tracking-wider text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-medium", children: "Projeto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-medium", children: "Cliente" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-medium", children: "Tipo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left font-medium", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right font-medium", children: "Atualizado" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/60", children: list.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-surface-elevated/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/editor", className: "hover:text-primary", children: p.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: p.client }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-muted-foreground", children: p.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md px-2 py-0.5 text-xs " + statusColor[p.status], children: p.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 text-right text-muted-foreground", children: p.updatedAt })
        ] }, p.id)) })
      ] }) })
    ] })
  ] });
}
export {
  Projects as component
};
