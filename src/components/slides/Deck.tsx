import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Grid3x3 } from "lucide-react";
import { slides, TOTAL_SLIDES } from "./slidesData";
import { YogitMark, YogitWordmark } from "./Brand";

const BASE_W = 1280;
const BASE_H = 800;

export function Deck() {
  const [i, setI] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [isFs, setIsFs] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const next = useCallback(() => setI((v) => Math.min(v + 1, TOTAL_SLIDES - 1)), []);
  const prev = useCallback(() => setI((v) => Math.max(v - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") next(); // RTL: left = next
      else if (e.key === "ArrowRight") prev();
      else if (e.key === " " || e.key === "PageDown") { e.preventDefault(); next(); }
      else if (e.key === "PageUp") { e.preventDefault(); prev(); }
      else if (e.key.toLowerCase() === "g") setShowGrid((s) => !s);
      else if (e.key === "Escape") setShowGrid(false);
      else if (e.key === "f" || e.key === "F5") {
        e.preventDefault();
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  useEffect(() => {
    const onFs = () => setIsFs(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      setScale(Math.min(w / BASE_W, h / BASE_H));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const Slide = slides[i];

  return (
    <div className="min-h-screen bg-deep text-cream flex flex-col" dir="rtl">
      {/* top toolbar */}
      <header className="flex items-center justify-between px-5 py-3 border-b border-cream/10">
        <div className="flex items-center gap-3">
          <YogitMark size={36} />
          <div className="flex items-center gap-3">
            <YogitWordmark className="h-5 invert brightness-0 opacity-90" />
            <span className="opacity-50 text-sm font-body">· קורס יסודות</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowGrid((s) => !s)} className="px-3 py-2 rounded-lg hover:bg-cream/10 flex items-center gap-2 text-sm font-body" title="תצוגת רשת (G)">
            <Grid3x3 className="w-4 h-4" /> רשת
          </button>
          <button
            onClick={() => (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen())}
            className="px-3 py-2 rounded-lg hover:bg-cream/10 flex items-center gap-2 text-sm font-body"
            title="מסך מלא (F)"
          >
            {isFs ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />} מסך מלא
          </button>
        </div>
      </header>

      {/* stage */}
      <div ref={stageRef} className="relative flex-1 overflow-hidden flex items-center justify-center">
        <div
          ref={wrapRef}
          style={{
            width: BASE_W,
            height: BASE_H,
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
          className="rounded-2xl overflow-hidden shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)] bg-cream"
          key={i}
        >
          <Slide n={i + 1} />
        </div>

        {/* nav buttons */}
        <button
          onClick={prev}
          disabled={i === 0}
          aria-label="קודם"
          className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-cream/10 hover:bg-cream/20 backdrop-blur flex items-center justify-center disabled:opacity-30 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          disabled={i === TOTAL_SLIDES - 1}
          aria-label="הבא"
          className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-cream/10 hover:bg-cream/20 backdrop-blur flex items-center justify-center disabled:opacity-30 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      {/* progress dots */}
      <footer className="px-5 py-4 border-t border-cream/10 flex items-center justify-between">
        <div className="text-xs font-body opacity-70 tabular-nums">
          {String(i + 1).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
        </div>
        <div className="flex gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`שקופית ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-terracotta" : "w-1.5 bg-cream/30 hover:bg-cream/60"}`}
            />
          ))}
        </div>
        <div className="text-xs font-body opacity-60 hidden md:block">← → לניווט · G לרשת · F למסך מלא</div>
      </footer>

      {/* grid overlay */}
      {showGrid && (
        <div className="fixed inset-0 z-50 bg-deep/95 backdrop-blur p-8 overflow-auto fade-in" onClick={() => setShowGrid(false)}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display font-bold text-2xl">כל השקופיות</h2>
              <button onClick={() => setShowGrid(false)} className="text-sm opacity-70 hover:opacity-100">סגירה ✕</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {slides.map((S, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setI(idx); setShowGrid(false); }}
                  className={`group relative aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-cream/15 hover:ring-terracotta transition ${idx === i ? "ring-2 ring-terracotta" : ""}`}
                >
                  <div style={{ width: BASE_W, height: BASE_H, transform: `scale(${0.25})`, transformOrigin: "top right", position: "absolute", top: 0, right: 0 }}>
                    <S n={idx + 1} />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-deep/80 text-cream text-xs px-2 py-0.5 rounded font-body tabular-nums">{String(idx + 1).padStart(2, "0")}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
