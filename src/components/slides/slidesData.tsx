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

// Cover: seated figure with three breath bands (belly / ribs / chest)
const InfoCover = () => (
  <div className="relative w-full h-full rounded-3xl bg-sand flex items-center justify-center overflow-hidden">
    <svg viewBox="0 0 400 400" className="w-[92%] h-[92%]">
      <defs>
        <radialGradient id="cov-g" cx="50%" cy="42%" r="58%">
          <stop offset="0%" stopColor="var(--cream)" />
          <stop offset="100%" stopColor="var(--sand)" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="160" fill="url(#cov-g)" stroke="var(--terracotta)" strokeWidth="1.2" strokeDasharray="3 5" />
      {/* seated figure torso */}
      <circle cx="200" cy="100" r="22" fill="var(--forest)" />
      <path d="M150 140 Q200 122 250 140 L260 280 Q200 295 140 280 Z" fill="var(--forest)" />
      {/* three bands - chest, ribs, belly */}
      <ellipse cx="200" cy="170" rx="62" ry="10" fill="var(--terracotta)" opacity="0.55" />
      <ellipse cx="200" cy="210" rx="68" ry="11" fill="var(--terracotta)" opacity="0.75" />
      <ellipse cx="200" cy="252" rx="72" ry="12" fill="var(--terracotta)" />
      {/* hand markers */}
      <circle cx="138" cy="252" r="9" fill="var(--cream)" stroke="var(--deep)" strokeWidth="1.2" />
      <circle cx="262" cy="210" r="9" fill="var(--cream)" stroke="var(--deep)" strokeWidth="1.2" />
      <circle cx="200" cy="160" r="9" fill="var(--cream)" stroke="var(--deep)" strokeWidth="1.2" />
      {/* labels */}
      <text x="80" y="256" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--deep)">בטן</text>
      <text x="320" y="214" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--deep)">צלעות</text>
      <text x="200" y="138" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--deep)">בריח</text>
    </svg>
  </div>
);

// Pedagogy: three rings — הבחנה / יציבות / ריכוז
const InfoPedagogy = () => (
  <div className="relative w-full h-full rounded-3xl bg-cream flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="-160 -140 320 280" className="w-full h-full">
      <circle cx="-55" cy="-10" r="62" fill="none" stroke="var(--terracotta)" strokeWidth="3" />
      <circle cx="55" cy="-10" r="62" fill="none" stroke="var(--forest)" strokeWidth="3" />
      <circle cx="0" cy="70" r="62" fill="none" stroke="var(--deep)" strokeWidth="3" />
      <text x="-55" y="-6" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--terracotta)">הבחנה</text>
      <text x="-55" y="12" textAnchor="middle" fontSize="10" fill="var(--deep)" opacity="0.7">פנימית</text>
      <text x="55" y="-6" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--forest)">יציבות</text>
      <text x="55" y="12" textAnchor="middle" fontSize="10" fill="var(--deep)" opacity="0.7">חוויתית</text>
      <text x="0" y="74" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--deep)">ריכוז</text>
      <text x="0" y="92" textAnchor="middle" fontSize="10" fill="var(--deep)" opacity="0.7">סוטרה 1.2</text>
    </svg>
  </div>
);

// Structure: 6-step ring with numbers
const InfoStructure = () => (
  <div className="relative w-full h-full rounded-3xl bg-sand flex items-center justify-center overflow-hidden p-4">
    <svg viewBox="-160 -160 320 320" className="w-full h-full">
      <circle cx="0" cy="0" r="110" fill="none" stroke="var(--terracotta)" strokeWidth="1.2" strokeDasharray="3 5" />
      {[
        { t: "התמקמות", min: "1׳" },
        { t: "3 חלקים", min: "3׳" },
        { t: "עצירה", min: "2׳" },
        { t: "חקירה", min: "—" },
        { t: "רמז מולה", min: "1׳" },
        { t: "סגירה", min: "1׳" },
      ].map((s, i) => {
        const a = (i / 6) * Math.PI * 2 - Math.PI / 2;
        const x = Math.cos(a) * 110;
        const y = Math.sin(a) * 110;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="26" fill="var(--forest)" />
            <text x={x} y={y - 2} textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--cream)">{i + 1}</text>
            <text x={x} y={y + 12} textAnchor="middle" fontSize="8" fill="var(--cream)" opacity="0.8">{s.min}</text>
            <text x={x * 1.45} y={y * 1.45 + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--deep)">{s.t}</text>
          </g>
        );
      })}
      <circle cx="0" cy="0" r="40" fill="var(--terracotta)" />
      <text x="0" y="-2" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--cream)">שיעור</text>
      <text x="0" y="14" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--cream)">03</text>
    </svg>
  </div>
);

// Settle: seated figure with hands on lower ribs
const InfoSettle = () => (
  <div className="relative w-full h-full rounded-3xl bg-moss flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="0 0 320 340" className="w-full h-full">
      {/* cushion */}
      <ellipse cx="160" cy="280" rx="100" ry="14" fill="var(--forest)" opacity="0.4" />
      <rect x="78" y="252" width="164" height="32" rx="14" fill="var(--terracotta)" />
      {/* figure */}
      <circle cx="160" cy="80" r="22" fill="var(--forest)" />
      <path d="M118 110 Q160 95 202 110 L210 250 Q160 268 110 250 Z" fill="var(--forest)" />
      {/* hands on lower ribs */}
      <ellipse cx="120" cy="190" rx="14" ry="9" fill="var(--cream)" stroke="var(--deep)" strokeWidth="1" />
      <ellipse cx="200" cy="190" rx="14" ry="9" fill="var(--cream)" stroke="var(--deep)" strokeWidth="1" />
      {/* breath halo */}
      <ellipse cx="160" cy="180" rx="100" ry="40" fill="none" stroke="var(--cream)" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.7" />
      <text x="160" y="320" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--cream)">להקשיב — לא לשנות</text>
    </svg>
  </div>
);

// 3-part breath: vertical column with three sections + arrows
const InfoThreePart = () => (
  <div className="relative w-full h-full rounded-3xl bg-sky flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="0 0 340 380" className="w-full h-full">
      {/* torso outline */}
      <rect x="110" y="40" width="120" height="280" rx="24" fill="var(--cream)" stroke="var(--forest)" strokeWidth="1.5" />
      {/* three zones */}
      <rect x="112" y="42" width="116" height="86" rx="22" fill="var(--terracotta)" opacity="0.35" />
      <rect x="112" y="132" width="116" height="86" rx="4" fill="var(--terracotta)" opacity="0.55" />
      <rect x="112" y="222" width="116" height="96" rx="22" fill="var(--terracotta)" opacity="0.8" />
      {/* labels */}
      <text x="170" y="92" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--deep)">חזה עליון</text>
      <text x="170" y="182" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--deep)">צלעות</text>
      <text x="170" y="280" textAnchor="middle" fontSize="14" fontWeight="800" fill="var(--cream)">בטן</text>
      {/* arrows: inhale down→up on right, exhale up→down on left */}
      <g stroke="var(--forest)" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M260 290 L260 70" />
        <path d="M252 80 L260 68 L268 80" />
      </g>
      <text x="280" y="180" fontSize="11" fontWeight="700" fill="var(--forest)" transform="rotate(-90 280 180)">שאיפה</text>
      <g stroke="var(--terracotta)" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M80 70 L80 290" />
        <path d="M72 280 L80 292 L88 280" />
      </g>
      <text x="60" y="180" fontSize="11" fontWeight="700" fill="var(--terracotta)" transform="rotate(-90 60 180)">נשיפה</text>
    </svg>
  </div>
);

// Cues: gauge at 70-80%
const InfoCues = () => (
  <div className="relative w-full h-full rounded-3xl bg-cream flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="-160 -120 320 240" className="w-full h-full">
      {/* gauge arc */}
      <path d="M -110 0 A 110 110 0 0 1 110 0" fill="none" stroke="var(--sand)" strokeWidth="22" />
      {/* fill 75% */}
      <path d="M -110 0 A 110 110 0 0 1 78 -78" fill="none" stroke="var(--terracotta)" strokeWidth="22" strokeLinecap="round" />
      {/* needle */}
      <line x1="0" y1="0" x2="78" y2="-78" stroke="var(--forest)" strokeWidth="3" />
      <circle cx="0" cy="0" r="8" fill="var(--forest)" />
      {/* tick labels */}
      <text x="-110" y="20" textAnchor="middle" fontSize="11" fill="var(--deep)" opacity="0.6">0%</text>
      <text x="110" y="20" textAnchor="middle" fontSize="11" fill="var(--deep)" opacity="0.6">100%</text>
      <text x="0" y="-50" textAnchor="middle" fontSize="22" fontWeight="900" fill="var(--terracotta)">70–80%</text>
      <text x="0" y="-28" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--deep)" opacity="0.75">קיבולת בלבד</text>
    </svg>
  </div>
);

// Natural pause: breath wave with pause highlighted
const InfoPause = () => (
  <div className="relative w-full h-full rounded-3xl bg-sand flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="0 0 360 260" className="w-full h-full">
      {/* baseline */}
      <line x1="20" y1="180" x2="340" y2="180" stroke="var(--deep)" strokeWidth="1" opacity="0.3" />
      {/* breath wave: up=inhale, down=exhale, flat=pause */}
      <path
        d="M20 180 Q60 80 100 80 L130 80 Q170 80 200 180 L230 180 Q260 180 290 80 L320 80"
        fill="none"
        stroke="var(--forest)"
        strokeWidth="2.5"
      />
      {/* pause highlight after exhale */}
      <rect x="200" y="170" width="30" height="20" fill="var(--terracotta)" opacity="0.25" />
      <circle cx="215" cy="180" r="6" fill="var(--terracotta)" />
      <text x="215" y="215" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--terracotta)">עצירה טבעית</text>
      <text x="215" y="230" textAnchor="middle" fontSize="10" fill="var(--deep)" opacity="0.7">אחרי נשיפה</text>
      {/* annotations */}
      <text x="70" y="60" fontSize="10" fill="var(--forest)" fontWeight="700">שאיפה</text>
      <text x="260" y="60" fontSize="10" fill="var(--forest)" fontWeight="700">שאיפה</text>
      <text x="150" y="200" fontSize="10" fill="var(--deep)" opacity="0.7">נשיפה</text>
    </svg>
  </div>
);

// Inquiry: two sides — pause after exhale vs after inhale
const InfoInquiry = () => (
  <div className="relative w-full h-full rounded-3xl bg-cream flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="0 0 360 320" className="w-full h-full">
      {/* left card */}
      <rect x="20" y="40" width="150" height="240" rx="18" fill="var(--moss)" />
      <text x="95" y="80" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--deep)">אחרי נשיפה</text>
      <circle cx="95" cy="140" r="38" fill="var(--forest)" />
      <text x="95" y="135" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--cream)">ריקנות</text>
      <text x="95" y="150" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--cream)">שקט</text>
      <text x="95" y="210" textAnchor="middle" fontSize="12" fill="var(--deep)" opacity="0.8">קרקוע</text>
      <text x="95" y="230" textAnchor="middle" fontSize="10" fill="var(--deep)" opacity="0.6">מטה</text>
      {/* right card */}
      <rect x="190" y="40" width="150" height="240" rx="18" fill="var(--sand)" />
      <text x="265" y="80" textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--deep)">אחרי שאיפה</text>
      <circle cx="265" cy="140" r="38" fill="var(--terracotta)" />
      <text x="265" y="135" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--cream)">מלאות</text>
      <text x="265" y="150" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--cream)">ערנות</text>
      <text x="265" y="210" textAnchor="middle" fontSize="12" fill="var(--deep)" opacity="0.8">החזקה</text>
      <text x="265" y="230" textAnchor="middle" fontSize="10" fill="var(--deep)" opacity="0.6">מעלה</text>
      {/* vs */}
      <circle cx="180" cy="160" r="16" fill="var(--cream)" stroke="var(--deep)" strokeWidth="1" />
      <text x="180" y="164" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--deep)">או</text>
    </svg>
  </div>
);

// Mula hint: gentle inward gather at base
const InfoMula = () => (
  <div className="relative w-full h-full rounded-3xl bg-sand flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="-160 -160 320 320" className="w-full h-full">
      {[110, 90, 70].map((r) => (
        <circle key={r} cx="0" cy="0" r={r} fill="none" stroke="var(--terracotta)" strokeWidth="1.2" opacity="0.4" />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const a = (i / 6) * Math.PI * 2;
        const x1 = Math.cos(a) * 115;
        const y1 = Math.sin(a) * 115;
        const x2 = Math.cos(a) * 55;
        const y2 = Math.sin(a) * 55;
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--terracotta)" strokeWidth="2" strokeDasharray="2 3" />
            <circle cx={x2} cy={y2} r="3" fill="var(--terracotta)" />
          </g>
        );
      })}
      <circle cx="0" cy="0" r="42" fill="var(--forest)" />
      <text x="0" y="-4" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--cream)">איסוף</text>
      <text x="0" y="12" textAnchor="middle" fontSize="10" fontWeight="800" fill="var(--cream)">עדין</text>
      <text x="0" y="148" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--deep)" opacity="0.75">לא כיווץ · לא מאמץ</text>
    </svg>
  </div>
);

// Closing: 3 full breaths
const InfoClosing = () => (
  <div className="relative w-full h-full rounded-3xl bg-forest flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="0 0 320 280" className="w-full h-full">
      {/* three breath arcs */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <path
            d={`M ${40 + i * 90} 180 Q ${85 + i * 90} ${100 - i * 6} ${130 + i * 90} 180`}
            stroke="var(--terracotta)"
            strokeWidth="3"
            fill="none"
            opacity={0.5 + i * 0.2}
          />
          <circle cx={85 + i * 90} cy={108 - i * 6} r="6" fill="var(--terracotta)" opacity={0.5 + i * 0.2} />
          <text x={85 + i * 90} y={210} textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--cream)">{i + 1}</text>
        </g>
      ))}
      <line x1="20" y1="180" x2="300" y2="180" stroke="var(--cream)" strokeOpacity="0.3" strokeWidth="1" />
      <text x="160" y="250" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--cream)" opacity="0.85">3 נשימות מלאות · שתיקה</text>
    </svg>
  </div>
);

// Why precise: 5 outcomes in a flow
const InfoWhy = () => (
  <div className="relative w-full h-full rounded-3xl bg-sand flex items-center justify-center overflow-hidden p-6">
    <svg viewBox="0 0 360 320" className="w-full h-full">
      {[
        { t: "הבנה", y: 30 },
        { t: "ביטחון", y: 90 },
        { t: "ריכוז", y: 150 },
        { t: "שיווי משקל", y: 210 },
        { t: "עצירות", y: 270 },
      ].map((s, i) => (
        <g key={i}>
          <circle cx="60" cy={s.y + 14} r="18" fill="var(--terracotta)" />
          <text x="60" y={s.y + 18} textAnchor="middle" fontSize="13" fontWeight="800" fill="var(--cream)">{i + 1}</text>
          <rect x="92" y={s.y} width="240" height="32" rx="10" fill="var(--cream)" stroke="var(--deep)" strokeOpacity="0.12" />
          <text x="108" y={s.y + 21} fontSize="13" fontWeight="700" fill="var(--deep)">{s.t}</text>
        </g>
      ))}
    </svg>
  </div>
);

export const slides: Array<(p: { n: number }) => ReactNode> = [
  // 1 — Cover
  ({ n }) => (
    <SlideShell tone="cream" number={n} total={TOTAL} eyebrow="שיעור 02 · הדגמה">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center">
        <div className="space-y-6 md:space-y-7">
          <YogitWordmark className="block h-28 sm:h-32 md:h-36 w-auto max-w-[600px] md:max-w-[780px] mb-2 md:mb-3" />
          <div className="text-xs tracking-[0.3em] font-body uppercase text-terracotta">Lesson · 02 · Demo</div>
          <h1 className="font-display font-black text-5xl md:text-7xl leading-[1.05] text-balance">
            נשימת<br /> שלושת החלקים<br /> <span className="text-terracotta">+ חקירת עצירות</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-deep/75 max-w-xl leading-relaxed">
            הדגמה של 5–10 דקות. ללמד הקשבה, לא ביצוע.
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

  // 2 — Pedagogy
  ({ n }) => (
    <SlideShell tone="sand" number={n} total={TOTAL} eyebrow="מטרה פדגוגית">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 w-full items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] font-body uppercase text-terracotta">מטרה עמוקה</div>
          <h2 className="font-display font-black text-4xl md:text-6xl leading-tight">
            לא טכניקה<br /> מתקדמת — <span className="text-terracotta">חוויה</span>
          </h2>
          <ul className="space-y-2.5 max-w-xl">
            <Dot>לפתח הבחנה פנימית</Dot>
            <Dot>לגלות יציבות מתוך חוויה</Dot>
            <Dot>להניח יסוד עדין לריכוז</Dot>
          </ul>
          <p className="font-body italic text-deep/70 max-w-lg pt-2">
            בהשראת סוטרה 1.2 — יוגה סוטרות של פטנג׳לי.
          </p>
        </div>
        <div className="md:col-span-5 relative h-[480px] rounded-3xl overflow-hidden">
          <InfoPedagogy />
        </div>
      </div>
    </SlideShell>
  ),

  // 3 — Structure
  ({ n }) => (
    <SlideShell tone="cream" number={n} total={TOTAL} eyebrow="מבנה השיעור">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 w-full items-center">
        <div className="md:col-span-5 space-y-6">
          <div className="text-xs tracking-[0.3em] font-body uppercase text-terracotta">6 שלבים · ~8 דקות</div>
          <h2 className="font-display font-black text-4xl md:text-6xl leading-tight">
            המבנה<br /> של ההדגמה
          </h2>
          <p className="font-body text-deep/70 text-base md:text-lg max-w-md leading-relaxed">
            מעבר הדרגתי מחוויה אוטומטית → לחקירה עדינה.
          </p>
        </div>
        <ol className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 self-center">
          <Bullet n={1}>התמקמות · 1 דק׳</Bullet>
          <Bullet n={2}>נשימת שלושת החלקים · 3 דק׳</Bullet>
          <Bullet n={3}>גילוי העצירה הטבעית · 2 דק׳</Bullet>
          <Bullet n={4}>חקירה עדינה — הלב</Bullet>
          <Bullet n={5}>רמז למולה בנדהה · 1 דק׳</Bullet>
          <Bullet n={6}>אינטגרציה וסגירה · 1 דק׳</Bullet>
        </ol>
      </div>
    </SlideShell>
  ),

  // 4 — Part 1: Settle
  ({ n }) => (
    <SlideShell tone="moss" number={n} total={TOTAL} eyebrow="01 · התמקמות">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 w-full items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">דקה ראשונה</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            ישיבה נוחה.<br /> ידיים על <span className="text-terracotta">הצלעות</span>
          </h2>
          <p className="font-body text-deep/80 text-lg leading-relaxed max-w-lg">
            אגן מעט מוגבה. ידיים על הצלעות התחתונות.
          </p>
          <blockquote className="bg-cream/80 rounded-3xl p-6 max-w-lg">
            <p className="font-display text-xl md:text-2xl leading-snug text-deep">
              ״אנחנו לא מנסות לשנות כלום.<br />
              <span className="text-terracotta">רק לשים לב</span> איפה הנשימה כבר מתרחשת.״
            </p>
          </blockquote>
          <ul className="space-y-1.5 pt-2">
            <Dot>אין צורך לנשום עמוק</Dot>
            <Dot>אין צורך להצליח</Dot>
          </ul>
        </div>
        <div className="md:col-span-5 relative h-[520px] rounded-3xl overflow-hidden">
          <InfoSettle />
        </div>
      </div>
    </SlideShell>
  ),

  // 5 — Part 2: Three-part breath
  ({ n }) => (
    <SlideShell tone="sky" number={n} total={TOTAL} eyebrow="02 · נשימת שלושת החלקים — שיעור 03">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center">
        <div className="md:col-span-5 relative h-[520px] rounded-3xl overflow-hidden">
          <InfoThreePart />
        </div>
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">3 דקות · הדגמה פיזית</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            בטן · צלעות<br /> <span className="text-terracotta">חזה עליון</span>
          </h2>
          <div className="grid grid-cols-2 gap-5 max-w-xl">
            <div className="rounded-2xl bg-cream/80 p-5 border border-deep/10">
              <div className="text-xs uppercase tracking-widest text-terracotta font-body mb-2">שאיפה</div>
              <p className="font-display text-lg leading-snug">בטן ← צלעות ← חזה עליון</p>
            </div>
            <div className="rounded-2xl bg-forest text-cream p-5">
              <div className="text-xs uppercase tracking-widest text-terracotta font-body mb-2">נשיפה</div>
              <p className="font-display text-lg leading-snug">חזה ← צלעות ← בטן</p>
            </div>
          </div>
          <p className="font-body text-deep/75 max-w-lg italic">
            יד על הבטן · יד על הצלעות · יד על עצמות הבריח.
          </p>
        </div>
      </div>
    </SlideShell>
  ),

  // 6 — Cues
  ({ n }) => (
    <SlideShell tone="cream" number={n} total={TOTAL} eyebrow="דגשים מקצועיים">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">איכות · לא כמות</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            רגועה —<br /> לא <span className="text-terracotta">דרמטית</span>
          </h2>
          <ul className="space-y-2.5 max-w-lg">
            <Dot>70–80% מהקיבולת בלבד</Dot>
            <Dot>פנים רכות</Dot>
            <Dot>כתפיים לא עולות</Dot>
          </ul>
          <p className="font-body text-deep/75 max-w-lg leading-relaxed pt-2">
            ההדגמה שלך נוכחת ושקטה. הנשימה ממלאת — ולא מתאמצת להוכיח.
          </p>
        </div>
        <div className="relative h-[480px] rounded-3xl overflow-hidden">
          <InfoCues />
        </div>
      </div>
    </SlideShell>
  ),

  // 7 — Part 3: Natural pause
  ({ n }) => (
    <SlideShell tone="sand" number={n} total={TOTAL} eyebrow="03 · גילוי העצירה הטבעית">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">2 דקות</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            לא לייצר —<br /> רק <span className="text-terracotta">להבחין</span>
          </h2>
          <blockquote className="bg-cream rounded-3xl p-6 max-w-xl border border-deep/10">
            <p className="font-display text-xl md:text-2xl leading-snug text-deep">
              ״בסוף כל נשיפה יש רגע קטן<br />
              שבו הגוף <span className="text-terracotta">עדיין לא שואף</span>.״
            </p>
            <p className="font-body text-sm text-deep/70 mt-3">
              שתיקה של 2–3 מחזורים. ואז: ״גם בסוף שאיפה יש רגע דומה.״
            </p>
          </blockquote>
          <p className="font-body text-deep/75 max-w-lg italic pt-1">
            המעבר: מחוויה אוטומטית → לחקירה.
          </p>
        </div>
        <div className="md:col-span-5 relative h-[440px] rounded-3xl overflow-hidden">
          <InfoPause />
        </div>
      </div>
    </SlideShell>
  ),

  // 8 — Part 4: Inquiry
  ({ n }) => (
    <SlideShell tone="cream" number={n} total={TOTAL} eyebrow="04 · החקירה העדינה">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center">
        <div className="md:col-span-5 relative h-[500px] rounded-3xl overflow-hidden">
          <InfoInquiry />
        </div>
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">החלק המרכזי</div>
          <h2 className="font-display font-black text-4xl md:text-6xl leading-tight">
            איפה <span className="text-terracotta">קל יותר</span><br /> לעצור?
          </h2>
          <ul className="space-y-2 max-w-xl">
            <Dot>״אם מרגיש בטוח — הישארו רגע קטן בעצירה.״</Dot>
            <Dot>״לא יותר ממה שנעים.״</Dot>
            <Dot>״אם הגוף מבקש לנשום — מיד נושמים.״</Dot>
          </ul>
          <p className="font-body text-deep/80 max-w-xl leading-relaxed pt-2">
            3–4 מחזורים לבדיקה. הן לומדות <strong className="text-terracotta font-display">להבחין</strong> — לא לשלוט.
          </p>
        </div>
      </div>
    </SlideShell>
  ),

  // 9 — Part 5: Mula hint
  ({ n }) => (
    <SlideShell tone="sand" number={n} total={TOTAL} eyebrow="05 · רמז למולה בנדהה">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">דקה אחת · כרמיזה</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            סגירה <span className="text-terracotta">רכה</span><br /> מבפנים
          </h2>
          <blockquote className="bg-forest text-cream rounded-3xl p-6 max-w-xl">
            <p className="font-display text-xl md:text-2xl leading-snug">
              ״לפעמים בעצירה אחרי נשיפה<br />
              יש תחושת <span className="text-terracotta">איסוף עדין</span> באגן.״
            </p>
          </blockquote>
          <ul className="space-y-1.5 pt-1">
            <Dot>לא כיווץ</Dot>
            <Dot>לא מאמץ</Dot>
            <Dot>זה הזרע — לא הטכניקה</Dot>
          </ul>
        </div>
        <div className="md:col-span-5 relative h-[500px] rounded-3xl overflow-hidden">
          <InfoMula />
        </div>
      </div>
    </SlideShell>
  ),

  // 10 — Part 6: Integration & closing
  ({ n }) => (
    <SlideShell tone="deep" number={n} total={TOTAL} eyebrow="06 · אינטגרציה וסגירה">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">דקה אחת</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight text-cream">
            3 נשימות.<br /> <span className="text-terracotta">שתיקה.</span>
          </h2>
          <blockquote className="relative">
            <div className="text-7xl font-display leading-none text-terracotta/70 absolute -top-6 right-0">״</div>
            <p className="font-display text-2xl md:text-3xl leading-snug text-cream pt-6 max-w-xl">
              יציבות לא נוצרת ממילוי.<br />
              לפעמים היא נוצרת דווקא<br />
              ברגע <span className="text-terracotta">שאין בו תנועה</span>.
            </p>
          </blockquote>
        </div>
        <div className="md:col-span-5 relative h-[420px] rounded-3xl overflow-hidden">
          <InfoClosing />
        </div>
      </div>
    </SlideShell>
  ),

  // 11 — Why precise
  ({ n }) => (
    <SlideShell tone="terracotta" number={n} total={TOTAL} eyebrow="למה זה מדויק לקורס שלך">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase font-body opacity-80">המבנה הזה</div>
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[1.05]">
            מחליף בלבול<br /> <span className="text-deep">בהבנה</span><br /> חווייתית
          </h2>
          <p className="font-body text-cream/90 text-lg max-w-md leading-relaxed">
            לא הופך נשימה לתרגיל הישגי. בונה ביטחון בגוף. שותל יסוד ל־
          </p>
          <ul className="space-y-2 max-w-md">
            <li className="flex items-start gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-deep shrink-0" /><span className="font-body text-lg">שיווי משקל</span></li>
            <li className="flex items-start gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-deep shrink-0" /><span className="font-body text-lg">ריכוז</span></li>
            <li className="flex items-start gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-deep shrink-0" /><span className="font-body text-lg">עבודה עם עצירות בהמשך</span></li>
          </ul>
          <p className="font-body text-cream/90 italic max-w-md pt-1">
            מתאים לנשים 27–60 — בלי דרמה, בלי מאבק.
          </p>
        </div>
        <div className="space-y-6">
          <div className="relative h-[360px] rounded-3xl overflow-hidden">
            <InfoWhy />
          </div>
          <div className="rounded-[2rem] bg-cream text-deep p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]">
            <p className="font-display text-2xl md:text-3xl leading-tight">
              ״מלמד אותן <span className="text-terracotta">להקשיב</span> —<br /> לא לבצע.״
            </p>
            <div className="mt-5 flex items-center gap-3">
              <YogitMark size={36} />
              <div>
                <div className="font-display font-bold text-sm">YOGIT · שיעור 02</div>
                <div className="text-xs opacity-60 font-body">הדגמה · 5–10 דקות</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  ),
];

export const TOTAL_SLIDES = TOTAL;
