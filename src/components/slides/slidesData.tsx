import { ReactNode } from "react";
import { SlideShell } from "./SlideShell";
import { YogitMark, YogitWordmark } from "./Brand";

const TOTAL = 11;

const Bullet = ({ n, children }: { n: number; children: ReactNode }) => (
  <li className="flex items-start gap-4">
    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracotta/15 text-terracotta font-display font-bold text-sm">
      {n}
    </span>
    <span className="font-body text-base md:text-lg leading-relaxed">{children}</span>
  </li>
);

const Dot = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
    <span className="font-body text-lg md:text-xl leading-relaxed">{children}</span>
  </li>
);

// ===== Infographics =====

// Cover: stable figure standing on ground with breath halo
const InfoCover = () => (
  <div className="relative w-full h-full rounded-3xl bg-sand flex items-center justify-center overflow-hidden">
    <svg viewBox="0 0 400 400" className="w-[92%] h-[92%]">
      <defs>
        <radialGradient id="cov-g" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="var(--cream)" />
          <stop offset="100%" stopColor="var(--sand)" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="180" r="150" fill="url(#cov-g)" stroke="var(--terracotta)" strokeWidth="1.2" strokeDasharray="3 5" />
      {/* figure */}
      <circle cx="200" cy="110" r="22" fill="var(--forest)" />
      <rect x="188" y="132" width="24" height="120" rx="10" fill="var(--forest)" />
      <rect x="160" y="150" width="80" height="14" rx="7" fill="var(--forest)" />
      <rect x="184" y="252" width="14" height="60" rx="6" fill="var(--terracotta)" />
      <rect x="202" y="252" width="14" height="60" rx="6" fill="var(--terracotta)" />
      {/* ground */}
      <line x1="60" y1="320" x2="340" y2="320" stroke="var(--deep)" strokeWidth="2" />
      <line x1="60" y1="328" x2="340" y2="328" stroke="var(--deep)" strokeWidth="1" strokeDasharray="3 5" opacity="0.5" />
      {/* breath halos */}
      <ellipse cx="200" cy="180" rx="100" ry="50" fill="none" stroke="var(--terracotta)" strokeWidth="1.2" opacity="0.5" />
      <ellipse cx="200" cy="180" rx="130" ry="68" fill="none" stroke="var(--terracotta)" strokeWidth="1" opacity="0.3" />
    </svg>
  </div>
);

// TOC visual: layered stack — body / breath / mind
const InfoTOC = () => (
  <div className="relative w-full h-full rounded-3xl bg-cream flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="0 0 320 320" className="w-full h-full">
      <circle cx="160" cy="160" r="120" fill="var(--sand)" />
      <circle cx="160" cy="160" r="80" fill="var(--moss)" opacity="0.85" />
      <circle cx="160" cy="160" r="42" fill="var(--terracotta)" />
      <text x="160" y="164" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--cream)">יציבות</text>
    </svg>
  </div>
);

// Shift: arrow from "effort" to "feel"
const InfoShift = () => (
  <div className="relative w-full h-full rounded-3xl bg-sand flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="0 0 360 280" className="w-full h-full">
      <rect x="20" y="100" width="120" height="80" rx="14" fill="var(--cream)" stroke="var(--deep)" strokeOpacity="0.15" />
      <text x="80" y="138" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--deep)">החזקה</text>
      <text x="80" y="158" textAnchor="middle" fontSize="11" fill="var(--deep)" opacity="0.6">מאמץ · תיקון</text>

      <path d="M150 140 L210 140" stroke="var(--terracotta)" strokeWidth="3" markerEnd="url(#arr)" />
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--terracotta)" />
        </marker>
      </defs>

      <rect x="220" y="100" width="120" height="80" rx="14" fill="var(--forest)" />
      <text x="280" y="138" textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--cream)">הקשבה</text>
      <text x="280" y="158" textAnchor="middle" fontSize="11" fill="var(--cream)" opacity="0.7">תגובה · תחושה</text>
    </svg>
  </div>
);

// Grounding: feet rooting down with info arrows up
const InfoGround = () => (
  <div className="relative w-full h-full rounded-3xl bg-moss flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="0 0 320 380" className="w-full h-full">
      {/* feet */}
      <ellipse cx="120" cy="180" rx="34" ry="56" fill="var(--cream)" />
      <ellipse cx="200" cy="180" rx="34" ry="56" fill="var(--cream)" />
      {/* toes */}
      {[0,1,2,3,4].map(i => (
        <circle key={`t1-${i}`} cx={102 + i*9} cy="132" r="5" fill="var(--cream)" />
      ))}
      {[0,1,2,3,4].map(i => (
        <circle key={`t2-${i}`} cx={182 + i*9} cy="132" r="5" fill="var(--cream)" />
      ))}
      {/* ground */}
      <line x1="20" y1="245" x2="300" y2="245" stroke="var(--cream)" strokeWidth="2" />
      <line x1="20" y1="255" x2="300" y2="255" stroke="var(--cream)" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="3 5" />
      {/* info arrows upward */}
      <path d="M160 235 L160 90" stroke="var(--terracotta)" strokeWidth="2.5" strokeDasharray="4 4" />
      <path d="M152 100 L160 88 L168 100" stroke="var(--terracotta)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="160" y="70" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--cream)">מידע לגוף</text>
      {/* roots */}
      <path d="M120 245 Q90 290 60 340" stroke="var(--terracotta)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M160 245 Q160 295 160 350" stroke="var(--terracotta)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M200 245 Q230 290 260 340" stroke="var(--terracotta)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <text x="160" y="372" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--cream)" opacity="0.85">שותפות עם הקרקע</text>
    </svg>
  </div>
);

// Proprioception: figure with sense radiating
const InfoPropri = () => (
  <div className="relative w-full h-full rounded-3xl bg-cream flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="-160 -160 320 320" className="w-full h-full">
      {/* radial waves */}
      {[60, 90, 120].map((r, i) => (
        <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="var(--terracotta)" strokeWidth="1.2" strokeDasharray="3 4" opacity={0.6 - i * 0.15} />
      ))}
      {/* center figure */}
      <circle cx="0" cy="-22" r="14" fill="var(--forest)" />
      <rect x="-8" y="-8" width="16" height="40" rx="5" fill="var(--forest)" />
      <rect x="-22" y="0" width="44" height="8" rx="4" fill="var(--forest)" />
      {/* sense labels */}
      <g fontSize="11" fontWeight="700" fill="var(--deep)">
        <text x="0" y="-130" textAnchor="middle">מיקום</text>
        <text x="120" y="0" textAnchor="middle">משקל</text>
        <text x="0" y="138" textAnchor="middle">כיוון</text>
        <text x="-120" y="0" textAnchor="middle">תנועה</text>
      </g>
    </svg>
  </div>
);

// Breath as foundation: lungs + base
const InfoBreathBase = () => (
  <div className="relative w-full h-full rounded-3xl bg-sky flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="0 0 320 360" className="w-full h-full">
      {/* body outline */}
      <rect x="100" y="40" width="120" height="180" rx="22" fill="var(--cream)" stroke="var(--forest)" strokeWidth="1.5" />
      {/* lungs */}
      <ellipse cx="135" cy="120" rx="22" ry="48" fill="var(--terracotta)" opacity="0.85" />
      <ellipse cx="185" cy="120" rx="22" ry="48" fill="var(--terracotta)" opacity="0.85" />
      {/* breath arrows */}
      <path d="M160 30 L160 70" stroke="var(--forest)" strokeWidth="2.5" />
      <path d="M152 60 L160 72 L168 60" stroke="var(--forest)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* base */}
      <rect x="60" y="250" width="200" height="50" rx="14" fill="var(--forest)" />
      <text x="160" y="282" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--cream)">בסיס פנימי</text>
      {/* drop into base */}
      <path d="M160 220 L160 248" stroke="var(--terracotta)" strokeWidth="2.5" strokeDasharray="3 4" />
      <text x="160" y="335" textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--deep)" opacity="0.75">נשימה → קרקע פנימית</text>
    </svg>
  </div>
);

// Mula Bandha: waves gathering toward center
const InfoMula = () => (
  <div className="relative w-full h-full rounded-3xl bg-sand flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="-160 -160 320 320" className="w-full h-full">
      {/* concentric */}
      {[110, 90, 70].map((r) => (
        <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="var(--terracotta)" strokeWidth="1.2" opacity="0.4" />
      ))}
      {/* inward arrows */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const a = (i / 6) * Math.PI * 2;
        const x1 = Math.cos(a) * 115;
        const y1 = Math.sin(a) * 115;
        const x2 = Math.cos(a) * 55;
        const y2 = Math.sin(a) * 55;
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--terracotta)" strokeWidth="2" />
            <circle cx={x2} cy={y2} r="3" fill="var(--terracotta)" />
          </g>
        );
      })}
      {/* center */}
      <circle cx="0" cy="0" r="40" fill="var(--forest)" />
      <text x="0" y="-2" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--cream)">מולה</text>
      <text x="0" y="14" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--cream)">בנדהה</text>
    </svg>
  </div>
);

// Soft stability: floating figure
const InfoFloat = () => (
  <div className="relative w-full h-full rounded-3xl bg-cream flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="0 0 320 340" className="w-full h-full">
      {/* figure seated */}
      <circle cx="160" cy="90" r="22" fill="var(--forest)" />
      <path d="M130 115 Q160 145 190 115 L195 175 Q160 195 125 175 Z" fill="var(--forest)" />
      <rect x="120" y="175" width="80" height="14" rx="6" fill="var(--terracotta)" />
      {/* support waves below */}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M40 ${220 + i * 22} Q160 ${200 + i * 22} 280 ${220 + i * 22}`}
          stroke="var(--terracotta)"
          strokeWidth="2"
          fill="none"
          opacity={0.7 - i * 0.2}
        />
      ))}
      {/* upward arrows */}
      <path d="M80 215 L80 195" stroke="var(--forest)" strokeWidth="2" />
      <path d="M75 200 L80 192 L85 200" stroke="var(--forest)" strokeWidth="2" fill="none" />
      <path d="M240 215 L240 195" stroke="var(--forest)" strokeWidth="2" />
      <path d="M235 200 L240 192 L245 200" stroke="var(--forest)" strokeWidth="2" fill="none" />
      <text x="160" y="320" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--deep)" opacity="0.8">להסכים להיתמך</text>
    </svg>
  </div>
);

// Movement like water: flowing path
const InfoFlow = () => (
  <div className="relative w-full h-full rounded-3xl bg-sky flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="0 0 320 320" className="w-full h-full">
      {/* flowing waves */}
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M0 ${80 + i * 40} Q80 ${50 + i * 40} 160 ${80 + i * 40} T 320 ${80 + i * 40}`}
          stroke="var(--forest)"
          strokeWidth="2"
          fill="none"
          opacity={0.3 + i * 0.12}
        />
      ))}
      {/* center label */}
      <rect x="100" y="140" width="120" height="50" rx="14" fill="var(--terracotta)" />
      <text x="160" y="172" textAnchor="middle" fontSize="15" fontWeight="800" fill="var(--cream)">רצף · המשכיות</text>
    </svg>
  </div>
);

// Practice prep: triad rings interconnected
const InfoPractice = () => (
  <div className="relative w-full h-full rounded-3xl bg-sand flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="-160 -140 320 280" className="w-full h-full">
      <circle cx="-50" cy="-20" r="60" fill="none" stroke="var(--terracotta)" strokeWidth="3" />
      <circle cx="50" cy="-20" r="60" fill="none" stroke="var(--forest)" strokeWidth="3" />
      <circle cx="0" cy="60" r="60" fill="none" stroke="var(--deep)" strokeWidth="3" />
      <text x="-80" y="-15" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--terracotta)">נשימה</text>
      <text x="80" y="-15" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--forest)">מולה</text>
      <text x="0" y="115" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--deep)">תנוחות</text>
    </svg>
  </div>
);

export const slides: Array<(p: { n: number }) => ReactNode> = [
  // 1 — Cover
  ({ n }) => (
    <SlideShell tone="cream" number={n} total={TOTAL} eyebrow="שיעור 02 · שער">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center">
        <div className="space-y-6 md:space-y-7">
          <YogitWordmark className="block h-28 sm:h-32 md:h-36 w-auto max-w-[600px] md:max-w-[780px] mb-2 md:mb-3" />
          <div className="text-xs tracking-[0.3em] font-body uppercase text-terracotta">Lesson · 02</div>
          <h1 className="font-display font-black text-5xl md:text-7xl leading-[1.05] text-balance">
            איך לעמוד,<br /> לשבת ולנוע<br /> <span className="text-terracotta">מתוך יציבות</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-deep/75 max-w-xl leading-relaxed">
            יציבות שנולדת מבפנים — דרך הנשימה, הקרקוע והקשבה לגוף.
          </p>
          <div className="flex items-center gap-3 pt-4">
            <YogitMark size={44} />
            <div className="font-body text-sm">
              <YogitWordmark className="h-5" />
              <div className="opacity-60 text-xs mt-1 tracking-wider">YOGA WITH AVITAL PELLES</div>
            </div>
          </div>
        </div>
        <div className="relative h-[420px] md:h-[560px] rounded-3xl overflow-hidden shadow-[0_30px_80px_-40px_rgba(46,8,8,0.4)]">
          <InfoCover />
          <div className="absolute bottom-6 right-6 left-6 flex items-end justify-between text-deep">
            <div className="font-display text-2xl">שיעור 02</div>
            <div className="text-xs opacity-80 font-body">קורס יסודות · YOGIT</div>
          </div>
        </div>
      </div>
    </SlideShell>
  ),

  // 2 — TOC
  ({ n }) => (
    <SlideShell tone="sand" number={n} total={TOTAL} eyebrow="תוכן עניינים">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 w-full items-center">
        <div className="md:col-span-5 space-y-6">
          <div className="text-xs tracking-[0.3em] font-body uppercase text-terracotta">CONTENTS</div>
          <h2 className="font-display font-black text-4xl md:text-6xl leading-tight">
            מה נלמד<br /> בשיעור הזה?
          </h2>
          <p className="font-body text-deep/70 text-base md:text-lg max-w-md leading-relaxed">
            בסוף השיעור תתחילי <em className="text-terracotta not-italic font-medium">להרגיש</em> יציבות — לא רק להבין אותה.
          </p>
        </div>
        <ol className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 self-center">
          <Bullet n={1}>למה יציבות לא נוצרת ממאמץ</Bullet>
          <Bullet n={2}>איך הקרקע עוזרת לגוף להתארגן</Bullet>
          <Bullet n={3}>פרופריוספציה — חוש היציבות הפנימי</Bullet>
          <Bullet n={4}>הקשר בין נשימה לבין מולה בנדהה</Bullet>
          <Bullet n={5}>איך יציבות יכולה להרגיש רכה וטבעית</Bullet>
          <Bullet n={6}>איך כל זה יתחבר לתרגול הפיזי</Bullet>
        </ol>
      </div>
    </SlideShell>
  ),

  // 3 — שינוי כיוון
  ({ n }) => (
    <SlideShell tone="cream" number={n} total={TOTAL} eyebrow="01 · פתיחה">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">שינוי כיוון</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            יציבות לא<br /> נוצרת <span className="text-terracotta">ממאמץ</span>
          </h2>
          <p className="font-body text-deep/70">רובנו למדנו שצריך:</p>
          <ul className="space-y-2.5">
            <Dot>להחזיק את הבטן</Dot>
            <Dot>ליישר את הגב</Dot>
            <Dot>״לעמוד נכון״</Dot>
          </ul>
          <p className="font-body text-deep/80 leading-relaxed pt-2 max-w-lg">
            ביוגה אנחנו מגלות משהו אחר: יציבות לא מגיעה מתיקון עצמי, אלא מהיכולת של הגוף <strong className="text-terracotta font-display">להרגיש</strong>.
          </p>
        </div>
        <div className="space-y-6">
          <div className="relative h-[300px] rounded-3xl overflow-hidden">
            <InfoShift />
          </div>
          <blockquote className="relative bg-forest text-cream rounded-3xl p-8">
            <div className="text-6xl font-display leading-none text-terracotta/70 absolute top-2 right-5">״</div>
            <p className="font-display text-2xl md:text-3xl leading-snug pt-4">
              כשהגוף מרגיש בטוח —<br />
              <span className="text-terracotta">הוא מתארגן לבד.</span>
            </p>
          </blockquote>
        </div>
      </div>
    </SlideShell>
  ),

  // 4 — הקרקע כשותפה
  ({ n }) => (
    <SlideShell tone="moss" number={n} total={TOTAL} eyebrow="02 · קרקוע">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 w-full items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">הקרקע כשותפה</div>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-tight">
            הקשר שבין<br /> הגוף <span className="text-terracotta">לקרקע</span>
          </h2>
          <p className="font-body text-base md:text-lg leading-relaxed text-deep/85 max-w-xl">
            הקרקע לא רק ״מתחתינו״ — היא שולחת מידע רציף לגוף דרך כפות הרגליים, האגן והעצמות.
          </p>
          <div>
            <p className="font-body text-deep/75 mb-3">ככל שהקשר ברור יותר:</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { t: "מאמץ", s: "פוחת" },
                { t: "יציבה", s: "טבעית" },
                { t: "נשימה", s: "מעמיקה" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl bg-cream/80 p-4 text-center">
                  <div className="font-display font-bold text-xl text-terracotta">{x.t}</div>
                  <div className="text-sm opacity-70 font-body mt-1">{x.s}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-2 space-y-2 font-body text-deep/80">
            <p className="text-sm opacity-70">מה מתרגלים בתכלס:</p>
            <ul className="space-y-1.5">
              <Dot>הליכה יחפה</Dot>
              <Dot>הגמשת וחיזוק קרסוליים ובהונות</Dot>
              <Dot>תחושת ״שקיעה״ לתוך האדמה</Dot>
            </ul>
          </div>
        </div>
        <div className="md:col-span-5 relative h-[520px] rounded-3xl overflow-hidden">
          <InfoGround />
        </div>
      </div>
    </SlideShell>
  ),

  // 5 — פרופריוספציה
  ({ n }) => (
    <SlideShell tone="cream" number={n} total={TOTAL} eyebrow="03 · חוש פנימי">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">פרופריוספציה</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            איך הגוף<br /> יודע איפה <span className="text-terracotta">הוא נמצא</span>
          </h2>
          <p className="font-body text-deep/80 text-lg leading-relaxed max-w-lg">
            פרופריוספציה היא היכולת של הגוף לחוש מיקום, משקל וכיוון — בלי מראה ובלי מחשבה.
          </p>
          <div className="rounded-2xl bg-sand p-5">
            <p className="font-body text-deep/85 leading-relaxed">
              חוש שמתפתח מינקות. כשאנחנו דוחפות ומתקנות — הוא נחלש.
              כשאנחנו <strong className="text-terracotta font-display">מקשיבות</strong> — הוא מתחדד.
            </p>
          </div>
          <blockquote className="font-display text-2xl text-terracotta leading-snug">
            ״יציבות היא חוויה תחושתית,<br /> לא הוראה טכנית.״
          </blockquote>
        </div>
        <div className="relative h-[520px] rounded-3xl overflow-hidden">
          <InfoPropri />
        </div>
      </div>
    </SlideShell>
  ),

  // 6 — נשימה כמפעילה יציבות
  ({ n }) => (
    <SlideShell tone="sky" number={n} total={TOTAL} eyebrow="04 · נשימה">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">הנשימה כמפעילה יציבות</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            הנשימה<br /> יוצרת <span className="text-terracotta">בסיס</span>
          </h2>
          <p className="font-body text-deep/80 text-lg leading-relaxed max-w-lg">
            נשימה עמוקה ומלאה:
          </p>
          <ul className="space-y-2.5 max-w-lg">
            <Dot>מרגיעה את מערכת העצבים</Dot>
            <Dot>מחזירה אותנו לגוף</Dot>
            <Dot>יוצרת תחושת קרקע פנימית</Dot>
          </ul>
          <div className="inline-flex items-start gap-3 rounded-2xl bg-forest text-cream px-6 py-4 mt-2 max-w-lg">
            <span className="mt-1 h-2 w-2 rounded-full bg-terracotta shrink-0" />
            <span className="font-display text-lg leading-snug">
              מתוך הנשימה הזו, הגוף מרשה לעצמו לאסוף בעדינות — בלי החזקה.
            </span>
          </div>
        </div>
        <div className="md:col-span-5 relative h-[500px] rounded-3xl overflow-hidden">
          <InfoBreathBase />
        </div>
      </div>
    </SlideShell>
  ),

  // 7 — מולה בנדהה
  ({ n }) => (
    <SlideShell tone="sand" number={n} total={TOTAL} eyebrow="05 · מולה בנדהה">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center">
        <div className="md:col-span-5 relative h-[500px] rounded-3xl overflow-hidden">
          <InfoMula />
        </div>
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">מולה בנדהה</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            לא כיווץ —<br /> אלא <span className="text-terracotta">תגובה</span>
          </h2>
          <p className="font-body text-deep/80 text-lg leading-relaxed max-w-lg">
            ״נעילת השורש״ היא תגובה טבעית כאשר מתקיימים שלושה דברים:
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {[
              { t: "נשימה", s: "זורמת" },
              { t: "קשר", s: "לקרקע" },
              { t: "ביטחון", s: "בגוף" },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl bg-cream p-5 text-center border border-deep/10">
                <div className="font-display font-bold text-xl text-terracotta">{x.t}</div>
                <div className="text-sm opacity-70 font-body mt-1">{x.s}</div>
              </div>
            ))}
          </div>
          <p className="font-body italic text-deep/70 max-w-lg">
            הרמה עדינה מבפנים — לא מאמץ שרירי. כמו גלים שנאספים חזרה למרכז.
          </p>
        </div>
      </div>
    </SlideShell>
  ),

  // 8 — עמידה וישיבה: יציבות רכה
  ({ n }) => (
    <SlideShell tone="cream" number={n} total={TOTAL} eyebrow="06 · יציבות רכה">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">עמידה וישיבה</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            לא להחזיק —<br /> להסכים <span className="text-terracotta">להיתמך</span>
          </h2>
          <p className="font-body text-deep/80 text-lg max-w-lg">בעמידה ובישיבה:</p>
          <ul className="space-y-2.5 max-w-lg">
            <Dot>המשקל יורד למטה</Dot>
            <Dot>הגוף נאסף מבפנים</Dot>
            <Dot>אין צורך ״להחזיק את עצמך״</Dot>
          </ul>
          <blockquote className="font-display text-2xl text-terracotta leading-snug pt-2">
            היציבות מרגישה כמו ציפה —<br /> לא כמו מאבק.
          </blockquote>
        </div>
        <div className="relative h-[500px] rounded-3xl overflow-hidden">
          <InfoFloat />
        </div>
      </div>
    </SlideShell>
  ),

  // 9 — תנועה כמו במים
  ({ n }) => (
    <SlideShell tone="sky" number={n} total={TOTAL} eyebrow="07 · תנועה">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">הנעה אנרגטית</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            תנועה<br /> כמו <span className="text-terracotta">בתוך מים</span>
          </h2>
          <p className="font-body text-deep/80 text-lg max-w-lg">בתנועה:</p>
          <ul className="space-y-2.5 max-w-lg">
            <Dot>אין קפיצות חדות</Dot>
            <Dot>אין עצירות אלימות</Dot>
            <Dot>יש רצף, המשכיות, הקשבה</Dot>
          </ul>
          <p className="font-body text-deep/80 leading-relaxed max-w-lg pt-2">
            התנועה מתחילה מ<strong className="text-terracotta font-display">הנשימה</strong>, עוברת דרך המרכז, ומתפשטת החוצה.
          </p>
        </div>
        <div className="md:col-span-5 relative h-[500px] rounded-3xl overflow-hidden">
          <InfoFlow />
        </div>
      </div>
    </SlideShell>
  ),

  // 10 — ציטוט פילוסופי (Bruce Lee)
  ({ n }) => (
    <SlideShell tone="deep" number={n} total={TOTAL} eyebrow="08 · ציטוט">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center">
        <div className="md:col-span-8 space-y-8">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">Philosophy</div>
          <blockquote className="relative" dir="ltr">
            <div className="text-8xl font-display leading-none text-terracotta/70 absolute -top-6 -left-2">"</div>
            <p className="font-display text-2xl md:text-3xl leading-snug text-cream pt-6">
              Empty your mind. Be formless, shapeless — like <span className="text-terracotta">water</span>.
              You put water into a cup, it becomes the cup. You put it in a teapot, it becomes the teapot.
              Water can flow, or it can crash. <span className="text-terracotta">Be water, my friend.</span>
            </p>
            <div className="mt-8 h-px bg-cream/20" />
            <p className="mt-4 font-body text-sm tracking-[0.3em] uppercase text-cream/70">— Bruce Lee</p>
          </blockquote>
        </div>
        <div className="md:col-span-4 relative h-[420px] rounded-3xl overflow-hidden bg-forest flex items-center justify-center">
          <svg viewBox="0 0 200 280" className="w-[80%] h-[80%]">
            {/* abstract bruce lee silhouette */}
            <circle cx="100" cy="60" r="28" fill="var(--cream)" />
            <path d="M60 110 Q100 95 140 110 L150 180 Q100 200 50 180 Z" fill="var(--cream)" />
            <rect x="70" y="180" width="22" height="80" rx="8" fill="var(--cream)" />
            <rect x="108" y="180" width="22" height="80" rx="8" fill="var(--cream)" />
            {/* flowing water lines */}
            {[0, 1, 2].map((i) => (
              <path key={i} d={`M10 ${230 + i * 16} Q100 ${215 + i * 16} 190 ${230 + i * 16}`} stroke="var(--terracotta)" strokeWidth="2" fill="none" opacity={0.6 - i * 0.15} />
            ))}
          </svg>
        </div>
      </div>
    </SlideShell>
  ),

  // 11 — הכנה לתרגול
  ({ n }) => (
    <SlideShell tone="terracotta" number={n} total={TOTAL} eyebrow="09 · מכאן נתרגל">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-7">
          <div className="text-xs tracking-[0.3em] uppercase font-body opacity-80">מכאן נתרגל</div>
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[1.05]">
            הכנה<br /> <span className="text-deep">לתרגול הפיזי</span>
          </h2>
          <p className="font-body text-cream/90 text-lg max-w-md leading-relaxed">
            בתרגול הקרוב נחבר בין:
          </p>
          <ul className="space-y-3 max-w-md">
            <li className="flex items-start gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-deep shrink-0" /><span className="font-body text-lg">נשימה</span></li>
            <li className="flex items-start gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-deep shrink-0" /><span className="font-body text-lg">מולה בנדהה</span></li>
            <li className="flex items-start gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-deep shrink-0" /><span className="font-body text-lg">תנוחות השתרשות ויציבות</span></li>
          </ul>
          <p className="font-body text-cream/85 italic max-w-md">
            לא כדי ״להצליח״ — אלא כדי להרגיש איך יציבות נולדת.
          </p>
        </div>
        <div className="space-y-6">
          <div className="relative h-[320px] rounded-3xl overflow-hidden">
            <InfoPractice />
          </div>
          <div className="rounded-[2rem] bg-cream text-deep p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]">
            <div className="text-6xl font-display leading-none text-terracotta absolute" />
            <p className="font-display text-2xl md:text-3xl leading-tight">
              ״כשאני מפסיקה לתקן —<br />
              <span className="text-terracotta">הגוף מתחיל לשתף פעולה.״</span>
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <YogitMark size={36} />
                <div>
                  <div className="font-display font-bold text-sm">YOGIT · שיעור 02</div>
                  <div className="text-xs opacity-60 font-body">קורס יסודות</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  ),
];

export const TOTAL_SLIDES = TOTAL;
