/**
 * TraceSystem — the page's powered schematic, as reusable components.
 *
 * Law: every trace connects something to something. Traces draw once
 * via IntersectionObserver (threshold 0.3), charge pulses ride them
 * with SVG <animateMotion> (no per-frame JS), and nodes power on when
 * their branch's draw completes (chained via transitionend, not timed).
 *
 * All geometry here is original: orthogonal paths, 6px junction
 * squares, 6px pulse squares.
 */
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

function useInView<T extends Element>(threshold = 0.3): {
  ref: React.RefObject<T | null>;
  inView: boolean;
} {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export type TraceTone = "bed" | "wire" | "powered";

export interface TraceProps {
  /** Orthogonal path data (90° turns only, 8px grid snap). */
  d: string;
  /** id for the charge path — Pulse targets ride it via <mpath>. */
  id?: string;
  /** Bus 4 · branches 3 · dust-trail dividers 2. */
  width?: number;
  /** Charge-layer tone. The bed is always --rs-900. */
  tone?: Exclude<TraceTone, "bed">;
  /**
   * Shorthand for tone: "dim" -> unpowered copper wire, "red" ->
   * powered redstone. Preferred API is tone + powerOn; this alias
   * keeps sibling workers' call sites compiling.
   */
  color?: "dim" | "red";
  /** Flip the charge layer wire -> powered (redstone + glow). */
  powerOn?: boolean;
  /** Render the dormant --rs-900 bed underneath (default true). */
  bed?: boolean;
  /** Stagger down the chain, in ms. */
  delay?: number;
  /** Draw duration override, in ms (default var(--trace-draw)). */
  duration?: number;
  /** Keep stroke width constant under non-uniform SVG scaling. */
  nonScalingStroke?: boolean;
  /** IntersectionObserver threshold (default 0.3). */
  threshold?: number;
  /** Fires once, when the draw completes — chain node power-on here. */
  onDrawn?: () => void;
  className?: string;
}

/**
 * One schematic trace: dormant bed + animated charge layer.
 * Render inside a parent <svg>; the parent owns the coordinate system
 * so one continuous SVG can chain hero bus -> work branches -> ...
 */
export function Trace({
  d,
  id,
  width = 3,
  tone = "wire",
  color,
  powerOn = false,
  bed = true,
  delay = 0,
  duration,
  nonScalingStroke = false,
  threshold = 0.3,
  onDrawn,
  className,
}: TraceProps) {
  const { ref, inView } = useInView<SVGGElement>(threshold);
  const chargeRef = useRef<SVGPathElement | null>(null);
  const onDrawnRef = useRef(onDrawn);
  const firedRef = useRef(false);

  useEffect(() => {
    onDrawnRef.current = onDrawn;
  }, [onDrawn]);

  useEffect(() => {
    if (!inView || firedRef.current) return;
    const fire = () => {
      if (firedRef.current) return;
      firedRef.current = true;
      onDrawnRef.current?.();
    };
    // Reduced motion: traces render fully drawn; chain immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      fire();
      return;
    }
    const el = chargeRef.current;
    if (!el) {
      fire();
      return;
    }
    const onEnd = (event: TransitionEvent) => {
      if (event.propertyName === "stroke-dashoffset") fire();
    };
    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [inView]);

  const chargeClass = [
    "circuit-trace",
    powerOn || color === "red"
      ? "circuit-trace--powered"
      : `circuit-trace--${color ? "wire" : tone}`,
    inView ? "is-drawn" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const style =
    delay > 0 || duration !== undefined
      ? {
          transitionDelay: `${delay}ms`,
          ...(duration !== undefined
            ? { transitionDuration: `${duration}ms` }
            : {}),
        }
      : undefined;

  return (
    <g ref={ref} className="circuit-trace-group">
      {bed ? (
        <path
          d={d}
          pathLength={1}
          className="circuit-trace circuit-trace--bed is-drawn"
          strokeWidth={width}
          vectorEffect={nonScalingStroke ? "non-scaling-stroke" : undefined}
          aria-hidden="true"
        />
      ) : null}
      <path
        ref={chargeRef}
        id={id}
        d={d}
        pathLength={1}
        className={chargeClass}
        style={style}
        strokeWidth={width}
        vectorEffect={nonScalingStroke ? "non-scaling-stroke" : undefined}
        aria-hidden="true"
      />
    </g>
  );
}

export interface PulseProps {
  /** id of the Trace charge path to ride. */
  targetId?: string;
  /** Alias for targetId (sibling workers' call sites). */
  pathId?: string;
  /** Ride start, in seconds (stagger multiple pulses with negatives). */
  begin?: number;
  /** Loop duration in ms (default 2400, linear). */
  dur?: number;
  /** Square size in px (default 6). */
  size?: number;
  /** Path start point — the pulse queues here before its begin. */
  x?: number;
  y?: number;
}

/**
 * A charge pulse: 6x6px --rs-300 square riding a trace via
 * <animateMotion>. Compositor-cheap; hidden under reduced motion.
 * Max 3 concurrent pulses per viewport — enforced by composition.
 */
export function Pulse({
  targetId,
  pathId,
  begin = 0,
  dur = 2400,
  size = 6,
  x = 0,
  y = 0,
}: PulseProps) {
  const target = targetId ?? pathId ?? "";
  return (
    <rect
      x={x - size / 2}
      y={y - size / 2}
      width={size}
      height={size}
      className="circuit-pulse"
      aria-hidden="true"
    >
      <animateMotion
        dur={`${dur / 1000}s`}
        begin={`${begin}s`}
        repeatCount="indefinite"
        rotate="0"
      >
        <mpath href={`#${target}`} />
      </animateMotion>
    </rect>
  );
}

export interface NodeProps {
  powered: boolean;
  /** Silkscreen label, e.g. "WEB". */
  label: string;
  /** Power level shown when powered (default 15). Unpowered is 0. */
  power?: number;
  /** Block size in px (default 64; 48 on mobile). */
  size?: number;
  /** Decorative sprite rendered at 40% until powered. */
  icon?: ReactNode;
  /** Extra VT323 line, e.g. a block id. */
  tag?: string;
  /** When provided, the node renders as a <button>. */
  onClick?: () => void;
  className?: string;
}

/**
 * A circuit node: recessed 64px block with ring + dot + label.
 * Powered vs unpowered is a state, not a style — border, ring, glow,
 * icon opacity, and the PWR annotation all change together.
 */
export function Node({
  powered,
  label,
  power,
  size = 64,
  icon,
  tag,
  onClick,
  className,
}: NodeProps) {
  const pwr = powered ? (power ?? 15) : 0;
  const cls = ["node", className ?? ""].filter(Boolean).join(" ");

  const inner = (
    <>
      {powered ? (
        <span
          key="spark"
          className="node__spark"
          aria-hidden="true"
        />
      ) : null}
      <span className="node__block" style={{ width: size, height: size }}>
        {icon ? (
          <span className="node__icon" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </span>
      <span className="node__tag">
        <span className="node__label">{label}</span>
        <span className="node__pwr">PWR {pwr}</span>
        {tag ? <span className="node__id">{tag}</span> : null}
      </span>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={cls}
        data-powered={powered ? "true" : "false"}
        aria-label={`${label}, power ${pwr} of 15`}
      >
        {inner}
      </button>
    );
  }

  return (
    <div className={cls} data-powered={powered ? "true" : "false"}>
      {inner}
    </div>
  );
}

export interface DustDividerProps {
  /** Powered variant (live ramp) when the following section activates. */
  powered?: boolean;
  className?: string;
}

/**
 * Full-width 8px section divider: hard-stop blocky dashes,
 * repeating-linear-gradient(90deg, ...) — no gradients as fills,
 * just the dash pattern the spec prescribes.
 */
export function DustDivider({ powered = false, className }: DustDividerProps) {
  const cls = [
    "dust-divider",
    powered ? "dust-divider--powered" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");
  return <div className={cls} aria-hidden="true" />;
}
