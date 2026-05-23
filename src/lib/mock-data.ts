export type Project = {
  id: string;
  name: string;
  client: string;
  type: "Residencial" | "Comercial" | "Interiores" | "Reforma";
  status: "Em andamento" | "Revisão" | "Concluído" | "Rascunho";
  updatedAt: string;
  area: number;
  rooms: number;
  cover: string;
  progress: number;
};

export const projects: Project[] = [
  {
    id: "p-001",
    name: "Residência Aurora",
    client: "Família Almeida",
    type: "Residencial",
    status: "Em andamento",
    updatedAt: "há 2 horas",
    area: 184,
    rooms: 7,
    cover: "linear-gradient(135deg, oklch(0.42 0.10 240), oklch(0.30 0.16 220))",
    progress: 72,
  },
  {
    id: "p-002",
    name: "Loft Industrial 23",
    client: "Studio Noar",
    type: "Interiores",
    status: "Revisão",
    updatedAt: "ontem",
    area: 96,
    rooms: 3,
    cover: "linear-gradient(135deg, oklch(0.35 0.12 280), oklch(0.28 0.10 220))",
    progress: 88,
  },
  {
    id: "p-003",
    name: "Café Praia Norte",
    client: "Marco Bianchi",
    type: "Comercial",
    status: "Concluído",
    updatedAt: "há 3 dias",
    area: 142,
    rooms: 5,
    cover: "linear-gradient(135deg, oklch(0.38 0.14 200), oklch(0.30 0.18 180))",
    progress: 100,
  },
  {
    id: "p-004",
    name: "Apartamento Mirante",
    client: "Helena Costa",
    type: "Reforma",
    status: "Em andamento",
    updatedAt: "há 5 horas",
    area: 78,
    rooms: 4,
    cover: "linear-gradient(135deg, oklch(0.40 0.12 260), oklch(0.32 0.10 240))",
    progress: 45,
  },
  {
    id: "p-005",
    name: "Casa de Campo Sirius",
    client: "João & Marta",
    type: "Residencial",
    status: "Rascunho",
    updatedAt: "há 1 semana",
    area: 220,
    rooms: 8,
    cover: "linear-gradient(135deg, oklch(0.36 0.10 220), oklch(0.28 0.14 260))",
    progress: 18,
  },
  {
    id: "p-006",
    name: "Escritório Helix",
    client: "Helix Co.",
    type: "Comercial",
    status: "Em andamento",
    updatedAt: "há 30 min",
    area: 312,
    rooms: 12,
    cover: "linear-gradient(135deg, oklch(0.34 0.16 230), oklch(0.30 0.10 200))",
    progress: 60,
  },
];

export const stats = [
  { label: "Projetos ativos", value: "12", delta: "+3 este mês" },
  { label: "Horas economizadas", value: "248h", delta: "vs. fluxo manual" },
  { label: "Renderizações 3D", value: "1.4k", delta: "+22% no trimestre" },
  { label: "Clientes ativos", value: "38", delta: "+6 novos" },
];

export const activity = [
  { who: "Você", what: "atualizou as paredes externas em", target: "Residência Aurora", when: "há 12 min" },
  { who: "Marina", what: "comentou em", target: "Loft Industrial 23", when: "há 1 h" },
  { who: "Você", what: "exportou PDF de", target: "Café Praia Norte", when: "há 4 h" },
  { who: "Diego", what: "criou o projeto", target: "Escritório Helix", when: "ontem" },
];
