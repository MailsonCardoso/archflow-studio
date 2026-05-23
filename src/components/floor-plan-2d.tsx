import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

type Item = {
  id: string;
  type: "wall" | "door" | "window" | "furniture";
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
};

const INITIAL: Item[] = [
  { id: "w1", type: "wall", x: 80, y: 80, w: 520, h: 12, label: "Parede N" },
  { id: "w2", type: "wall", x: 80, y: 80, w: 12, h: 360, label: "Parede O" },
  { id: "w3", type: "wall", x: 588, y: 80, w: 12, h: 360, label: "Parede L" },
  { id: "w4", type: "wall", x: 80, y: 428, w: 520, h: 12, label: "Parede S" },
  { id: "w5", type: "wall", x: 340, y: 80, w: 12, h: 200, label: "Divisória" },
  { id: "d1", type: "door", x: 180, y: 428, w: 70, h: 12, label: "Porta entrada" },
  { id: "win1", type: "window", x: 420, y: 80, w: 110, h: 12, label: "Janela" },
  { id: "f1", type: "furniture", x: 130, y: 140, w: 150, h: 70, label: "Sofá" },
  { id: "f2", type: "furniture", x: 130, y: 230, w: 90, h: 50, label: "Mesa" },
  { id: "f3", type: "furniture", x: 410, y: 320, w: 120, h: 90, label: "Cama" },
];

export function FloorPlan2D({ selected, onSelect }: {
  selected: string | null;
  onSelect: (id: string | null) => void;
}) {
  const [items, setItems] = useState<Item[]>(INITIAL);
  const dragRef = useRef<{ id: string; dx: number; dy: number } | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const colors = useMemo(
    () => ({
      wall: "oklch(0.85 0.02 240)",
      door: "oklch(0.78 0.18 60)",
      window: "oklch(0.80 0.18 200)",
      furniture: "oklch(0.74 0.18 240)",
    }),
    []
  );

  const onPointerDown = (e: React.PointerEvent, item: Item) => {
    onSelect(item.id);
    const pt = toSvg(e);
    if (!pt) return;
    dragRef.current = { id: item.id, dx: pt.x - item.x, dy: pt.y - item.y };
    (e.target as Element).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const drag = dragRef.current;
    if (!drag) return;
    const pt = toSvg(e);
    if (!pt) return;
    const snap = 8;
    const nx = Math.round((pt.x - drag.dx) / snap) * snap;
    const ny = Math.round((pt.y - drag.dy) / snap) * snap;
    setItems((arr) => arr.map((i) => (i.id === drag.id ? { ...i, x: nx, y: ny } : i)));
  };
  const onPointerUp = () => (dragRef.current = null);

  const toSvg = (e: React.PointerEvent) => {
    const svg = svgRef.current;
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    const vb = svg.viewBox.baseVal;
    return {
      x: ((e.clientX - rect.left) / rect.width) * vb.width,
      y: ((e.clientY - rect.top) / rect.height) * vb.height,
    };
  };

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 680 520"
      className="h-full w-full"
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onClick={(e) => e.target === svgRef.current && onSelect(null)}
    >
      <defs>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="oklch(0.32 0.022 250 / 50%)" strokeWidth="1" />
        </pattern>
        <pattern id="gridMajor" width="160" height="160" patternUnits="userSpaceOnUse">
          <path d="M 160 0 L 0 0 0 160" fill="none" stroke="oklch(0.42 0.04 240 / 60%)" strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="680" height="520" fill="url(#grid)" />
      <rect width="680" height="520" fill="url(#gridMajor)" />

      {items.map((item) => {
        const isSel = selected === item.id;
        return (
          <motion.g
            key={item.id}
            onPointerDown={(e) => onPointerDown(e, item)}
            style={{ cursor: "move" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <rect
              x={item.x}
              y={item.y}
              width={item.w}
              height={item.h}
              rx={item.type === "wall" ? 2 : 4}
              fill={colors[item.type]}
              fillOpacity={item.type === "furniture" ? 0.18 : item.type === "window" ? 0.4 : 1}
              stroke={isSel ? "oklch(0.85 0.20 200)" : colors[item.type]}
              strokeWidth={isSel ? 2 : item.type === "furniture" ? 1.5 : 0}
              strokeDasharray={item.type === "window" ? "4 4" : undefined}
            />
            {item.type === "furniture" && (
              <text
                x={item.x + item.w / 2}
                y={item.y + item.h / 2 + 4}
                textAnchor="middle"
                fontSize="11"
                fill="oklch(0.85 0.02 240 / 80%)"
                pointerEvents="none"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.label}
              </text>
            )}
            {isSel && (
              <>
                {[
                  [item.x, item.y],
                  [item.x + item.w, item.y],
                  [item.x, item.y + item.h],
                  [item.x + item.w, item.y + item.h],
                ].map(([cx, cy], i) => (
                  <rect
                    key={i}
                    x={(cx as number) - 4}
                    y={(cy as number) - 4}
                    width={8}
                    height={8}
                    fill="oklch(0.16 0.015 250)"
                    stroke="oklch(0.85 0.20 200)"
                    strokeWidth={1.5}
                  />
                ))}
              </>
            )}
          </motion.g>
        );
      })}

      {/* dimensions */}
      <g stroke="oklch(0.74 0.18 240 / 70%)" strokeWidth="1" fill="oklch(0.74 0.18 240)" fontSize="10" style={{ fontFamily: "Inter, sans-serif" }}>
        <line x1="80" y1="60" x2="600" y2="60" />
        <line x1="80" y1="55" x2="80" y2="65" />
        <line x1="600" y1="55" x2="600" y2="65" />
        <text x="340" y="52" textAnchor="middle">5.20 m</text>
        <line x1="60" y1="80" x2="60" y2="440" />
        <line x1="55" y1="80" x2="65" y2="80" />
        <line x1="55" y1="440" x2="65" y2="440" />
        <text x="50" y="265" textAnchor="middle" transform="rotate(-90 50 265)">3.60 m</text>
      </g>
    </svg>
  );
}
