import { P as reactExports, H as jsxRuntimeExports } from "./server-DihVp1Pk.js";
import { L as Link } from "./router-Dei5fqdK.js";
import { R as Ruler, L as Layers, S as Scene3D, B as Box } from "./scene-3d-DQ5unnDy.js";
import { M as MotionConfigContext, i as isHTMLElement, u as useConstant, P as PresenceContext, b as usePresence, a as useIsomorphicLayoutEffect, L as LayoutGroupContext, m as motion } from "./proxy-DzYgoRhI.js";
import { c as createLucideIcon, S as Sparkles } from "./sparkles-BaQX2SL1.js";
import { G as Grid3x3 } from "./grid-3x3-BywFh6aJ.js";
import { P as Plus } from "./plus-ycuQFzhQ.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const ArrowLeft = createLucideIcon("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
const ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
const DoorOpen = createLucideIcon("DoorOpen", [
  ["path", { d: "M13 4h3a2 2 0 0 1 2 2v14", key: "hrm0s9" }],
  ["path", { d: "M2 20h3", key: "1gaodv" }],
  ["path", { d: "M13 20h9", key: "s90cdi" }],
  ["path", { d: "M10 12v.01", key: "vx6srw" }],
  [
    "path",
    {
      d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",
      key: "199qr4"
    }
  ]
]);
const Download = createLucideIcon("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
const Eye = createLucideIcon("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
const Hand = createLucideIcon("Hand", [
  ["path", { d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2", key: "1fvzgz" }],
  ["path", { d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2", key: "1kc0my" }],
  ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8", key: "10h0bg" }],
  [
    "path",
    {
      d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "1s1gnw"
    }
  ]
]);
const Lock = createLucideIcon("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
const MousePointer2 = createLucideIcon("MousePointer2", [
  [
    "path",
    {
      d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
      key: "edeuup"
    }
  ]
]);
const Move3d = createLucideIcon("Move3d", [
  ["path", { d: "M5 3v16h16", key: "1mqmf9" }],
  ["path", { d: "m5 19 6-6", key: "jh6hbb" }],
  ["path", { d: "m2 6 3-3 3 3", key: "tkyvxa" }],
  ["path", { d: "m18 16 3 3-3 3", key: "1d4glt" }]
]);
const PanelRight = createLucideIcon("PanelRight", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
const RectangleHorizontal = createLucideIcon("RectangleHorizontal", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
]);
const Redo2 = createLucideIcon("Redo2", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13", key: "6uklza" }]
]);
const Save = createLucideIcon("Save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
]);
const Sofa = createLucideIcon("Sofa", [
  ["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3", key: "1dgpiv" }],
  [
    "path",
    {
      d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",
      key: "xacw8m"
    }
  ],
  ["path", { d: "M4 18v2", key: "jwo5n2" }],
  ["path", { d: "M20 18v2", key: "1ar1qi" }],
  ["path", { d: "M12 4v9", key: "oqhhn3" }]
]);
const Square = createLucideIcon("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
const Undo2 = createLucideIcon("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
]);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup === "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup === "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return reactExports.useCallback(composeRefs(...refs), refs);
}
class PopChildMeasure extends reactExports.Component {
  getSnapshotBeforeUpdate(prevProps) {
    const element = this.props.childRef.current;
    if (isHTMLElement(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
      const parent = element.offsetParent;
      const parentWidth = isHTMLElement(parent) ? parent.offsetWidth || 0 : 0;
      const parentHeight = isHTMLElement(parent) ? parent.offsetHeight || 0 : 0;
      const computedStyle = getComputedStyle(element);
      const size = this.props.sizeRef.current;
      size.height = parseFloat(computedStyle.height);
      size.width = parseFloat(computedStyle.width);
      size.top = element.offsetTop;
      size.left = element.offsetLeft;
      size.right = parentWidth - size.width - size.left;
      size.bottom = parentHeight - size.height - size.top;
      size.direction = computedStyle.direction;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function PopChild({ children, isPresent, anchorX, anchorY, root, pop }) {
  const id = reactExports.useId();
  const ref = reactExports.useRef(null);
  const size = reactExports.useRef({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: "ltr"
  });
  const { nonce } = reactExports.useContext(MotionConfigContext);
  const childRef = children.props?.ref ?? children?.ref;
  const composedRef = useComposedRefs(ref, childRef);
  reactExports.useInsertionEffect(() => {
    const { width, height, top, left, right, bottom, direction } = size.current;
    if (isPresent || pop === false || !ref.current || !width || !height)
      return;
    const isRTL = direction === "rtl";
    const x = anchorX === "left" ? isRTL ? `right: ${right}` : `left: ${left}` : isRTL ? `left: ${left}` : `right: ${right}`;
    const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
    ref.current.dataset.motionPopId = id;
    const style = document.createElement("style");
    if (nonce)
      style.nonce = nonce;
    const parent = root ?? document.head;
    parent.appendChild(style);
    if (style.sheet) {
      style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
    }
    return () => {
      ref.current?.removeAttribute("data-motion-pop-id");
      if (parent.contains(style)) {
        parent.removeChild(style);
      }
    };
  }, [isPresent]);
  return jsxRuntimeExports.jsx(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size, pop, children: pop === false ? children : reactExports.cloneElement(children, { ref: composedRef }) });
}
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
  const presenceChildren = useConstant(newChildrenMap);
  const id = reactExports.useId();
  let isReusedContext = true;
  let context = reactExports.useMemo(() => {
    isReusedContext = false;
    return {
      id,
      initial,
      isPresent,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
          if (!isComplete)
            return;
        }
        onExitComplete && onExitComplete();
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    };
  }, [isPresent, presenceChildren, onExitComplete]);
  if (presenceAffectsLayout && isReusedContext) {
    context = { ...context };
  }
  reactExports.useMemo(() => {
    presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
  }, [isPresent]);
  reactExports.useEffect(() => {
    !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
  }, [isPresent]);
  children = jsxRuntimeExports.jsx(PopChild, { pop: mode === "popLayout", isPresent, anchorX, anchorY, root, children });
  return jsxRuntimeExports.jsx(PresenceContext.Provider, { value: context, children });
};
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
const getChildKey = (child) => child.key || "";
function onlyElements(children) {
  const filtered = [];
  reactExports.Children.forEach(children, (child) => {
    if (reactExports.isValidElement(child))
      filtered.push(child);
  });
  return filtered;
}
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
  const [isParentPresent, safeToRemove] = usePresence(propagate);
  const presentChildren = reactExports.useMemo(() => onlyElements(children), [children]);
  const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
  const isInitialRender = reactExports.useRef(true);
  const pendingPresentChildren = reactExports.useRef(presentChildren);
  const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
  const exitingComponents = reactExports.useRef(/* @__PURE__ */ new Set());
  const [diffedChildren, setDiffedChildren] = reactExports.useState(presentChildren);
  const [renderedChildren, setRenderedChildren] = reactExports.useState(presentChildren);
  useIsomorphicLayoutEffect(() => {
    isInitialRender.current = false;
    pendingPresentChildren.current = presentChildren;
    for (let i = 0; i < renderedChildren.length; i++) {
      const key = getChildKey(renderedChildren[i]);
      if (!presentKeys.includes(key)) {
        if (exitComplete.get(key) !== true) {
          exitComplete.set(key, false);
        }
      } else {
        exitComplete.delete(key);
        exitingComponents.current.delete(key);
      }
    }
  }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
  const exitingChildren = [];
  if (presentChildren !== diffedChildren) {
    let nextChildren = [...presentChildren];
    for (let i = 0; i < renderedChildren.length; i++) {
      const child = renderedChildren[i];
      const key = getChildKey(child);
      if (!presentKeys.includes(key)) {
        nextChildren.splice(i, 0, child);
        exitingChildren.push(child);
      }
    }
    if (mode === "wait" && exitingChildren.length) {
      nextChildren = exitingChildren;
    }
    setRenderedChildren(onlyElements(nextChildren));
    setDiffedChildren(presentChildren);
    return null;
  }
  const { forceRender } = reactExports.useContext(LayoutGroupContext);
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderedChildren.map((child) => {
    const key = getChildKey(child);
    const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
    const onExit = () => {
      if (exitingComponents.current.has(key)) {
        return;
      }
      if (exitComplete.has(key)) {
        exitingComponents.current.add(key);
        exitComplete.set(key, true);
      } else {
        return;
      }
      let isEveryExitComplete = true;
      exitComplete.forEach((isExitComplete) => {
        if (!isExitComplete)
          isEveryExitComplete = false;
      });
      if (isEveryExitComplete) {
        forceRender?.();
        setRenderedChildren(pendingPresentChildren.current);
        propagate && safeToRemove?.();
        onExitComplete && onExitComplete();
      }
    };
    return jsxRuntimeExports.jsx(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom, presenceAffectsLayout, mode, root, onExitComplete: isPresent ? void 0 : onExit, anchorX, anchorY, children: child }, key);
  }) });
};
const INITIAL = [
  { id: "w1", type: "wall", x: 80, y: 80, w: 520, h: 12, label: "Parede N" },
  { id: "w2", type: "wall", x: 80, y: 80, w: 12, h: 360, label: "Parede O" },
  { id: "w3", type: "wall", x: 588, y: 80, w: 12, h: 360, label: "Parede L" },
  { id: "w4", type: "wall", x: 80, y: 428, w: 520, h: 12, label: "Parede S" },
  { id: "w5", type: "wall", x: 340, y: 80, w: 12, h: 200, label: "Divisória" },
  { id: "d1", type: "door", x: 180, y: 428, w: 70, h: 12, label: "Porta entrada" },
  { id: "win1", type: "window", x: 420, y: 80, w: 110, h: 12, label: "Janela" },
  { id: "f1", type: "furniture", x: 130, y: 140, w: 150, h: 70, label: "Sofá" },
  { id: "f2", type: "furniture", x: 130, y: 230, w: 90, h: 50, label: "Mesa" },
  { id: "f3", type: "furniture", x: 410, y: 320, w: 120, h: 90, label: "Cama" }
];
function FloorPlan2D({ selected, onSelect }) {
  const [items, setItems] = reactExports.useState(INITIAL);
  const dragRef = reactExports.useRef(null);
  const svgRef = reactExports.useRef(null);
  const colors = reactExports.useMemo(
    () => ({
      wall: "oklch(0.85 0.02 240)",
      door: "oklch(0.78 0.18 60)",
      window: "oklch(0.80 0.18 200)",
      furniture: "oklch(0.74 0.18 240)"
    }),
    []
  );
  const onPointerDown = (e, item) => {
    onSelect(item.id);
    const pt = toSvg(e);
    if (!pt) return;
    dragRef.current = { id: item.id, dx: pt.x - item.x, dy: pt.y - item.y };
    e.target.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    const drag = dragRef.current;
    if (!drag) return;
    const pt = toSvg(e);
    if (!pt) return;
    const snap = 8;
    const nx = Math.round((pt.x - drag.dx) / snap) * snap;
    const ny = Math.round((pt.y - drag.dy) / snap) * snap;
    setItems((arr) => arr.map((i) => i.id === drag.id ? { ...i, x: nx, y: ny } : i));
  };
  const onPointerUp = () => dragRef.current = null;
  const toSvg = (e) => {
    const svg = svgRef.current;
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    const vb = svg.viewBox.baseVal;
    return {
      x: (e.clientX - rect.left) / rect.width * vb.width,
      y: (e.clientY - rect.top) / rect.height * vb.height
    };
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      ref: svgRef,
      viewBox: "0 0 680 520",
      className: "h-full w-full",
      onPointerMove,
      onPointerUp,
      onClick: (e) => e.target === svgRef.current && onSelect(null),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: "grid", width: "32", height: "32", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 32 0 L 0 0 0 32", fill: "none", stroke: "oklch(0.32 0.022 250 / 50%)", strokeWidth: "1" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: "gridMajor", width: "160", height: "160", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 160 0 L 0 0 0 160", fill: "none", stroke: "oklch(0.42 0.04 240 / 60%)", strokeWidth: "1.2" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "680", height: "520", fill: "url(#grid)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "680", height: "520", fill: "url(#gridMajor)" }),
        items.map((item) => {
          const isSel = selected === item.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.g,
            {
              onPointerDown: (e) => onPointerDown(e, item),
              style: { cursor: "move" },
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "rect",
                  {
                    x: item.x,
                    y: item.y,
                    width: item.w,
                    height: item.h,
                    rx: item.type === "wall" ? 2 : 4,
                    fill: colors[item.type],
                    fillOpacity: item.type === "furniture" ? 0.18 : item.type === "window" ? 0.4 : 1,
                    stroke: isSel ? "oklch(0.85 0.20 200)" : colors[item.type],
                    strokeWidth: isSel ? 2 : item.type === "furniture" ? 1.5 : 0,
                    strokeDasharray: item.type === "window" ? "4 4" : void 0
                  }
                ),
                item.type === "furniture" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "text",
                  {
                    x: item.x + item.w / 2,
                    y: item.y + item.h / 2 + 4,
                    textAnchor: "middle",
                    fontSize: "11",
                    fill: "oklch(0.85 0.02 240 / 80%)",
                    pointerEvents: "none",
                    style: { fontFamily: "Inter, sans-serif" },
                    children: item.label
                  }
                ),
                isSel && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: [
                  [item.x, item.y],
                  [item.x + item.w, item.y],
                  [item.x, item.y + item.h],
                  [item.x + item.w, item.y + item.h]
                ].map(([cx, cy], i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "rect",
                  {
                    x: cx - 4,
                    y: cy - 4,
                    width: 8,
                    height: 8,
                    fill: "oklch(0.16 0.015 250)",
                    stroke: "oklch(0.85 0.20 200)",
                    strokeWidth: 1.5
                  },
                  i
                )) })
              ]
            },
            item.id
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { stroke: "oklch(0.74 0.18 240 / 70%)", strokeWidth: "1", fill: "oklch(0.74 0.18 240)", fontSize: "10", style: { fontFamily: "Inter, sans-serif" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "80", y1: "60", x2: "600", y2: "60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "80", y1: "55", x2: "80", y2: "65" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "600", y1: "55", x2: "600", y2: "65" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "340", y: "52", textAnchor: "middle", children: "5.20 m" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "60", y1: "80", x2: "60", y2: "440" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "55", y1: "80", x2: "65", y2: "80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "55", y1: "440", x2: "65", y2: "440" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50", y: "265", textAnchor: "middle", transform: "rotate(-90 50 265)", children: "3.60 m" })
        ] })
      ]
    }
  );
}
const tools = [{
  id: "select",
  icon: MousePointer2,
  label: "Selecionar"
}, {
  id: "pan",
  icon: Hand,
  label: "Mover canvas"
}, {
  id: "wall",
  icon: RectangleHorizontal,
  label: "Parede"
}, {
  id: "door",
  icon: DoorOpen,
  label: "Porta"
}, {
  id: "window",
  icon: Square,
  label: "Janela"
}, {
  id: "floor",
  icon: Grid3x3,
  label: "Piso"
}, {
  id: "furniture",
  icon: Sofa,
  label: "Móveis"
}, {
  id: "measure",
  icon: Ruler,
  label: "Medidas"
}];
const layers = [{
  name: "Estrutura",
  count: 5,
  locked: true,
  visible: true
}, {
  name: "Aberturas",
  count: 2,
  locked: false,
  visible: true
}, {
  name: "Mobiliário",
  count: 3,
  locked: false,
  visible: true
}, {
  name: "Cotas",
  count: 4,
  locked: false,
  visible: true
}];
function Editor() {
  const [tool, setTool] = reactExports.useState("select");
  const [mode, setMode] = reactExports.useState("2d");
  const [selected, setSelected] = reactExports.useState("f1");
  const [rightOpen, setRightOpen] = reactExports.useState(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-screen flex-col overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex h-14 shrink-0 items-center gap-3 border-b border-border/60 bg-surface/70 px-4 backdrop-blur-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-neon shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-neon-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "hover:text-foreground", children: "Projetos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3 w-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Residencial" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-semibold", children: "Residência Aurora" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-6 flex items-center gap-1 rounded-lg border border-border bg-surface/80 p-1", children: ["2d", "3d"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMode(m), className: "rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition " + (mode === m ? "bg-accent/60 text-foreground ring-1 ring-primary/30 shadow-glow" : "text-muted-foreground hover:text-foreground"), children: m === "3d" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Move3d, { className: "h-3 w-3" }),
        " 3D"
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid3x3, { className: "h-3 w-3" }),
        " 2D"
      ] }) }, m)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-2 flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconBtn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Undo2, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconBtn, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Redo2, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "hidden items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground md:inline-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5" }),
          " Pré-visualizar"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "hidden items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground md:inline-flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
          " Exportar"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-1.5 rounded-lg bg-gradient-neon px-3 py-1.5 text-xs font-semibold text-neon-foreground shadow-glow hover:opacity-90", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "h-3.5 w-3.5" }),
          " Salvar"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setRightOpen((v) => !v), className: "grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelRight, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-full bg-gradient-neon text-xs font-semibold text-neon-foreground", children: "LM" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 min-h-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "flex w-16 shrink-0 flex-col items-center gap-1 border-r border-border/60 bg-sidebar/80 py-3 backdrop-blur-xl", children: [
        tools.map((t) => {
          const Icon = t.icon;
          const active = tool === t.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setTool(t.id), title: t.label, className: "group relative grid h-10 w-10 place-items-center rounded-lg transition " + (active ? "bg-accent/60 text-foreground ring-1 ring-primary/30 shadow-glow" : "text-muted-foreground hover:bg-surface hover:text-foreground"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pointer-events-none absolute left-full ml-2 hidden whitespace-nowrap rounded-md border border-border bg-surface px-2 py-1 text-[10px] text-foreground shadow-soft group-hover:block", children: t.label })
          ] }, t.id);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 h-px w-8 bg-border/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { title: "Camadas", className: "grid h-10 w-10 place-items-center rounded-lg text-muted-foreground hover:bg-surface hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex-1 min-w-0 overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: mode === "2d" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, exit: {
          opacity: 0
        }, className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloorPlan2D, { selected, onSelect: setSelected })
        ] }, "2d") : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, exit: {
          opacity: 0
        }, className: "absolute inset-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Scene3D, { className: "h-full w-full" }) }, "3d") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute left-4 top-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-auto rounded-lg border border-border bg-surface/80 px-3 py-1.5 text-[11px] text-muted-foreground backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "●" }),
            " Snap 5cm · Grid 32px"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-auto rounded-lg border border-border bg-surface/80 px-3 py-1.5 text-[11px] text-muted-foreground backdrop-blur", children: [
            "Ferramenta: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: tools.find((t) => t.id === tool)?.label })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-auto flex items-center gap-1 rounded-lg border border-border bg-surface/80 p-1 backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconBtn, { small: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 text-xs text-muted-foreground", children: "100%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconBtn, { small: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "−" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-auto rounded-lg border border-border bg-surface/80 px-3 py-1.5 text-[11px] text-muted-foreground backdrop-blur", children: [
            "Área: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "184 m²" }),
            " · Cômodos: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "7" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: rightOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.aside, { initial: {
        x: 320,
        opacity: 0
      }, animate: {
        x: 0,
        opacity: 1
      }, exit: {
        x: 320,
        opacity: 0
      }, transition: {
        duration: 0.25
      }, className: "w-80 shrink-0 overflow-y-auto border-l border-border/60 bg-sidebar/80 backdrop-blur-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/60 px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Propriedades" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-sm font-semibold", children: selected ? "Móvel · Sofá" : "Nenhuma seleção" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Largura", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Number, { value: 150, suffix: "cm" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Altura", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Number, { value: 70, suffix: "cm" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Rotação", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Number, { value: 0, suffix: "°" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-xs text-muted-foreground", children: "Material" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2", children: ["linear-gradient(135deg, oklch(0.45 0.05 240), oklch(0.30 0.04 240))", "linear-gradient(135deg, oklch(0.55 0.10 30), oklch(0.40 0.08 30))", "linear-gradient(135deg, oklch(0.60 0.08 140), oklch(0.45 0.06 140))", "linear-gradient(135deg, oklch(0.85 0.02 240), oklch(0.70 0.02 240))"].map((bg, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { style: {
              background: bg
            }, className: "aspect-square rounded-lg ring-1 ring-border transition hover:scale-105 " + (i === 0 ? "ring-2 ring-primary shadow-glow" : "") }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-xs text-muted-foreground", children: "Cor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["oklch(0.74 0.18 240)", "oklch(0.78 0.16 190)", "oklch(0.78 0.18 60)", "oklch(0.78 0.18 30)", "oklch(0.65 0.02 240)"].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { style: {
              background: c
            }, className: "h-8 w-8 rounded-full ring-1 ring-border " + (i === 0 ? "ring-2 ring-primary shadow-glow" : "") }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Transparência", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", defaultValue: 80, className: "w-full accent-[oklch(0.74_0.18_240)]" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Textura", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "h-9 w-full rounded-md border border-border bg-input px-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Linho" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Veludo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Couro" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Bouclé" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Camadas" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs text-primary hover:underline", children: "+ Nova" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: layers.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-surface", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { className: "h-3.5 w-3.5 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: l.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: l.count }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5 " + (l.locked ? "text-primary" : "text-muted-foreground/50") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-3.5 w-3.5 text-muted-foreground" })
          ] }, l.name)) })
        ] })
      ] }) })
    ] })
  ] });
}
function IconBtn({
  children,
  small
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "grid place-items-center rounded-md text-muted-foreground hover:bg-surface hover:text-foreground " + (small ? "h-7 w-7" : "h-9 w-9"), children });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-1.5 text-xs text-muted-foreground", children: label }),
    children
  ] });
}
function Number({
  value,
  suffix
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center overflow-hidden rounded-md border border-border bg-input", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { defaultValue: value, className: "h-full w-full bg-transparent px-3 text-sm outline-none" }),
    suffix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pr-3 text-xs text-muted-foreground", children: suffix })
  ] });
}
export {
  Editor as component
};
