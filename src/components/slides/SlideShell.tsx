import { ReactNode } from "react";
import { YogitMark, YogitWordmark } from "./Brand";

type Tone = "cream" | "sand" | "sky" | "moss" | "forest" | "deep" | "terracotta";

const toneBg: Record<Tone, string> = {
  cream: "bg-cream",
  sand: "bg-sand",
  sky: "bg-sky",
  moss: "bg-moss",
  forest: "bg-forest",
  deep: "bg-deep",
  terracotta: "bg-terracotta",
};
const toneFg: Record<Tone, string> = {
  cream: "text-deep",
  sand: "text-deep",
  sky: "text-deep",
  moss: "text-deep",
  forest: "text-cream",
  deep: "text-cream",
  terracotta: "text-cream",
};

export function SlideShell({
  tone = "cream",
  children,
  number,
  total,
  eyebrow,
}: {
  tone?: Tone;
  children: ReactNode;
  number: number;
  total: number;
  eyebrow?: string;
}) {
  return (
    <div className={`relative w-full h-full ${toneBg[tone]} ${toneFg[tone]} slide-anim overflow-hidden`}>
      {/* top bar */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-between px-10 md:px-16 py-6 z-10">
        <div className="flex items-center gap-3">
          <YogitMark size={36} />
          <span className="font-body text-xs md:text-sm opacity-60 tracking-wider">
            קורס יסודות
          </span>
        </div>
        <div className="text-xs md:text-sm font-body opacity-70 tracking-widest">
          {eyebrow ?? `שיעור 02`}
        </div>
      </div>
      {/* content */}
      <div className="absolute inset-0 px-10 md:px-20 pt-24 pb-20 flex">
        {children}
      </div>
      {/* bottom */}
      <div className="absolute bottom-0 inset-x-0 px-10 md:px-16 py-6 flex items-center justify-between z-10">
        <div className="text-xs font-body opacity-60">YOGIT · YOGA WITH AVITAL PELLES</div>
        <div className="text-xs font-body opacity-70 tabular-nums">
          {String(number).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
