import yogitY from "@/assets/yogit-y.png";
import yogitLogo from "@/assets/yogit-logo.png";

export function YogitMark({ size = 40 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-sand shrink-0"
      style={{ width: size, height: size }}
      aria-label="YOGIT"
    >
      <img
        src={yogitY}
        alt=""
        style={{ height: size * 0.62, width: "auto" }}
        className="object-contain select-none pointer-events-none"
        draggable={false}
      />
    </span>
  );
}

export function YogitWordmark({ className = "h-5" }: { className?: string }) {
  return <img src={yogitLogo} alt="YOGIT" className={`${className} w-auto object-contain`} draggable={false} />;
}
