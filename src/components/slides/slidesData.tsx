import { ReactNode } from "react";
import { SlideShell } from "./SlideShell";
import yogaHero from "@/assets/yoga-hero.jpg";
import yogaBreath from "@/assets/yoga-breath.jpg";
import yogaStand from "@/assets/yoga-stand.jpg";
import grounding from "@/assets/grounding.jpg";
import water from "@/assets/water.jpg";
import bruceLee from "@/assets/bruce-lee.jpg";

const TOTAL = 11;

const Bullet = ({ n, children }: { n: number; children: ReactNode }) => (
  <li className="flex items-start gap-4">
    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-terracotta/15 text-terracotta font-display font-bold text-sm">
      {n}
    </span>
    <span className="font-body text-lg md:text-xl leading-relaxed">{children}</span>
  </li>
);

const Dot = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start gap-3">
    <span className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
    <span className="font-body text-lg md:text-xl leading-relaxed">{children}</span>
  </li>
);

export const slides: Array<(p: { n: number }) => ReactNode> = [
  // 1 - Cover
  ({ n }) => (
    <SlideShell tone="cream" number={n} total={TOTAL} eyebrow="שיעור 02 · שער">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center">
        <div className="space-y-8">
          <div className="text-xs tracking-[0.3em] font-body uppercase text-terracotta">Lesson · 02</div>
          <h1 className="font-display font-black text-5xl md:text-7xl leading-[1.05] text-balance">
            איך לעמוד,<br />לשבת ולנוע<br />
            <span className="text-terracotta">מתוך יציבות</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-deep/75 max-w-xl leading-relaxed">
            יציבות שנולדת מבפנים – דרך הנשימה, הקרקוע וההקשבה לגוף.
          </p>
          <div className="flex items-center gap-3 pt-4">
            <span className="yogit-mark">y</span>
            <div className="font-body text-sm">
              <div className="font-display font-bold">YOGIT</div>
              <div className="opacity-60 text-xs">YOGA WITH AVITAL PELLES</div>
            </div>
          </div>
        </div>
        <div className="relative h-[420px] md:h-[560px] rounded-3xl overflow-hidden shadow-[0_30px_80px_-40px_rgba(46,8,8,0.4)]">
          <img src={yogaHero} alt="יוגה" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/30 via-transparent to-transparent" />
          <div className="absolute bottom-6 right-6 left-6 flex items-end justify-between text-cream">
            <div className="font-display text-2xl">5–10 דק׳</div>
            <div className="text-xs opacity-80 font-body">קורס יסודות · YOGIT</div>
          </div>
        </div>
      </div>
    </SlideShell>
  ),

  // 2 - TOC
  ({ n }) => (
    <SlideShell tone="sand" number={n} total={TOTAL} eyebrow="תוכן עניינים">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full">
        <div className="md:col-span-5 space-y-6">
          <div className="text-xs tracking-[0.3em] font-body uppercase text-terracotta">CONTENTS</div>
          <h2 className="font-display font-black text-4xl md:text-6xl leading-tight">
            מה נלמד<br /> בשיעור הזה
          </h2>
          <p className="font-body text-deep/70 text-base md:text-lg max-w-md leading-relaxed">
            בסוף השיעור תתחילי <em className="text-terracotta not-italic font-medium">להרגיש</em> יציבות – לא רק להבין אותה.
          </p>
        </div>
        <ol className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 self-center">
          <Bullet n={1}>למה יציבות לא נוצרת ממאמץ</Bullet>
          <Bullet n={2}>איך הקרקע עוזרת לגוף להתארגן</Bullet>
          <Bullet n={3}>פרופריוספציה – חוש היציבות הפנימי</Bullet>
          <Bullet n={4}>הקשר בין הנשימה למולה בנדהה</Bullet>
          <Bullet n={5}>איך יציבות מרגישה רכה וטבעית</Bullet>
          <Bullet n={6}>איך זה יתחבר לתרגול הפיזי</Bullet>
        </ol>
      </div>
    </SlideShell>
  ),

  // 3 - שינוי כיוון
  ({ n }) => (
    <SlideShell tone="cream" number={n} total={TOTAL} eyebrow="01 · פתיחה">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-7">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">שינוי כיוון</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            יציבות לא נוצרת<br /> <span className="text-terracotta">ממאמץ</span>
          </h2>
          <div className="space-y-4">
            <p className="font-body text-deep/70">רובנו למדנו שצריך:</p>
            <ul className="space-y-2.5">
              <Dot>להחזיק את הבטן</Dot>
              <Dot>ליישר את הגב</Dot>
              <Dot>״לעמוד נכון״</Dot>
            </ul>
          </div>
          <p className="font-body text-lg leading-relaxed pt-2">
            ביוגה אנחנו מגלות משהו אחר: יציבות לא מגיעה מתיקון עצמי, אלא מהיכולת של הגוף <em className="not-italic text-terracotta font-medium">להרגיש</em>.
          </p>
        </div>
        <blockquote className="relative bg-forest text-cream rounded-3xl p-10 md:p-12">
          <div className="text-7xl font-display leading-none text-terracotta/70 absolute top-4 right-6">״</div>
          <p className="font-display text-3xl md:text-4xl leading-snug pt-6">
            כשהגוף מרגיש בטוח –<br /> הוא מתארגן לבד.
          </p>
          <div className="mt-8 h-px bg-cream/20" />
          <div className="mt-4 text-xs tracking-widest opacity-70 font-body">YOGIT · עיקרון 01</div>
        </blockquote>
      </div>
    </SlideShell>
  ),

  // 4 - קרקע
  ({ n }) => (
    <SlideShell tone="moss" number={n} total={TOTAL} eyebrow="02 · קרקוע">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 w-full items-center">
        <div className="md:col-span-5 relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden">
          <img src={grounding} alt="קרקוע" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">הקרקע כשותפה</div>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-tight">
            הקשר שבין<br /> הגוף לקרקע
          </h2>
          <p className="font-body text-base md:text-lg leading-relaxed text-deep/80 max-w-xl">
            הקרקע לא רק ״מתחתינו״ – היא שולחת מידע רציף לגוף דרך כפות הרגליים, האגן והעצמות.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-2">
            {[
              { t: "מאמץ", s: "פוחת" },
              { t: "יציבה", s: "טבעית" },
              { t: "נשימה", s: "מעמיקה" },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl bg-cream/70 p-5 text-center">
                <div className="text-xs uppercase tracking-widest opacity-60 font-body">{x.t}</div>
                <div className="font-display font-bold text-2xl text-terracotta mt-1">{x.s}</div>
              </div>
            ))}
          </div>
          <div className="pt-4">
            <div className="text-xs uppercase tracking-widest opacity-60 font-body mb-3">מתרגלים בתכלס</div>
            <ol className="space-y-2.5">
              <Bullet n={1}>הליכה יחפה</Bullet>
              <Bullet n={2}>הגמשת וחיזוק הקרסוליים והבהונות</Bullet>
              <Bullet n={3}>תחושת התמסרות ו״שקיעה״ לתוך האדמה</Bullet>
            </ol>
          </div>
        </div>
      </div>
    </SlideShell>
  ),

  // 5 - פרופריוספציה
  ({ n }) => (
    <SlideShell tone="cream" number={n} total={TOTAL} eyebrow="03 · חוש פנימי">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">פרופריוספציה</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            איך הגוף יודע<br /> איפה הוא <span className="text-terracotta">נמצא</span>
          </h2>
          <p className="font-body text-deep/70 text-lg">
            פרופריוספציה היא היכולת של הגוף לחוש – גם בלי מראה ובלי מחשבה.
          </p>
          <div className="grid grid-cols-3 gap-3 pt-2">
            {["מיקום", "משקל", "כיוון ותנועה"].map((x) => (
              <div key={x} className="rounded-2xl border border-deep/10 p-5 text-center bg-card">
                <div className="font-display font-bold text-xl">{x}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6 bg-sage rounded-3xl p-10">
          <p className="font-body text-deep text-lg leading-relaxed">
            חוש שמתפתח בינקות – חשוב לא להפריע לו.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-cream/80 p-5">
              <div className="text-xs uppercase tracking-widest text-terracotta font-body mb-1">דוחפות</div>
              <div className="font-display font-bold text-xl">החוש נחלש</div>
            </div>
            <div className="rounded-2xl bg-forest text-cream p-5">
              <div className="text-xs uppercase tracking-widest opacity-70 font-body mb-1">מקשיבות</div>
              <div className="font-display font-bold text-xl">החוש מתחדד</div>
            </div>
          </div>
          <blockquote className="pt-4 border-t border-deep/15">
            <p className="font-display text-2xl leading-snug">
              ״יציבות היא חוויה תחושתית,<br /> לא הוראה טכנית.״
            </p>
          </blockquote>
        </div>
      </div>
    </SlideShell>
  ),

  // 6 - נשימה
  ({ n }) => (
    <SlideShell tone="sky" number={n} total={TOTAL} eyebrow="04 · נשימה">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">הנשימה כמפעילה</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            הנשימה<br /> יוצרת <span className="text-terracotta">בסיס</span>
          </h2>
          <p className="font-body text-deep/70 text-lg max-w-lg">נשימה עמוקה ומלאה:</p>
          <ul className="space-y-3 max-w-lg">
            <Dot>מרגיעה את מערכת העצבים</Dot>
            <Dot>מחזירה אותנו לגוף</Dot>
            <Dot>יוצרת תחושת קרקע פנימית</Dot>
          </ul>
          <p className="font-body text-lg leading-relaxed pt-2 max-w-lg">
            מתוך הנשימה הזו, הגוף מרשה לעצמו <strong className="text-terracotta font-display">לאסוף בעדינות</strong> – בלי החזקה.
          </p>
        </div>
        <div className="md:col-span-5 relative h-[480px] rounded-3xl overflow-hidden">
          <img src={yogaBreath} alt="נשימה" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </SlideShell>
  ),

  // 7 - מולה בנדהה
  ({ n }) => (
    <SlideShell tone="forest" number={n} total={TOTAL} eyebrow="05 · מולה בנדהה">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">מולה בנדהה</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            ״נעילת השורש״<br />
            <span className="text-terracotta">לא כיווץ — תגובה.</span>
          </h2>
          <p className="font-body text-cream/80 text-lg max-w-lg leading-relaxed">
            תגובה טבעית כשמתקיימים שלושה דברים:
          </p>
          <div className="grid gap-3 max-w-lg">
            {[
              { t: "נשימה", s: "זורמת" },
              { t: "קשר לקרקע", s: "ברור" },
              { t: "תחושת ביטחון", s: "בגוף" },
            ].map((x) => (
              <div key={x.t} className="flex items-center justify-between rounded-2xl bg-cream/10 border border-cream/15 px-5 py-4">
                <span className="font-body opacity-80">{x.t}</span>
                <span className="font-display font-bold text-terracotta text-xl">{x.s}</span>
              </div>
            ))}
          </div>
          <p className="font-body italic text-cream/70 pt-2">זו הרמה עדינה מבפנים, לא מאמץ שרירי.</p>
        </div>
        <div className="relative h-[480px] rounded-3xl overflow-hidden">
          <img src={water} alt="גלים" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />
          <div className="absolute inset-0 flex items-end p-8">
            <p className="font-display text-3xl text-cream leading-snug">
              כמו גלים שנאספים<br /> חזרה <span className="text-terracotta">למרכז</span>.
            </p>
          </div>
        </div>
      </div>
    </SlideShell>
  ),

  // 8 - עמידה וישיבה
  ({ n }) => (
    <SlideShell tone="sand" number={n} total={TOTAL} eyebrow="06 · יציבות רכה">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 w-full items-center">
        <div className="md:col-span-5 relative h-[480px] rounded-3xl overflow-hidden">
          <img src={yogaStand} alt="עמידה" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">עמידה וישיבה</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            לא להחזיק –<br />
            <span className="text-terracotta">להסכים להיתמך.</span>
          </h2>
          <ul className="space-y-3 pt-2 max-w-xl">
            <Dot>המשקל יורד למטה</Dot>
            <Dot>הגוף נאסף מבפנים</Dot>
            <Dot>אין צורך ״להחזיק את עצמך״</Dot>
          </ul>
          <div className="mt-4 inline-flex items-center gap-3 rounded-full bg-forest text-cream px-6 py-3">
            <span className="h-2 w-2 rounded-full bg-terracotta" />
            <span className="font-display text-lg">היציבות מרגישה כמו ציפה — לא מאבק.</span>
          </div>
        </div>
      </div>
    </SlideShell>
  ),

  // 9 - תנועה כמו במים
  ({ n }) => (
    <SlideShell tone="cream" number={n} total={TOTAL} eyebrow="07 · תנועה">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">הנעה אנרגטית</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            תנועה<br /> כמו בתוך <span className="text-terracotta">מים</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="rounded-2xl border border-deep/10 bg-card p-5">
              <div className="text-xs uppercase tracking-widest opacity-60 font-body mb-2">אין</div>
              <ul className="space-y-2 font-body">
                <li>קפיצות חדות</li>
                <li>עצירות אלימות</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-forest text-cream p-5">
              <div className="text-xs uppercase tracking-widest opacity-70 font-body mb-2">יש</div>
              <ul className="space-y-2 font-body">
                <li>רצף</li>
                <li>המשכיות</li>
                <li>הקשבה</li>
              </ul>
            </div>
          </div>
          <p className="font-body text-lg leading-relaxed pt-2 max-w-lg">
            התנועה מתחילה מהנשימה, עוברת דרך המרכז, ומתפשטת החוצה.
          </p>
        </div>
        <div className="relative h-[500px] rounded-3xl overflow-hidden">
          <img src={water} alt="מים" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
        </div>
      </div>
    </SlideShell>
  ),

  // 10 - ציטוט ברוס לי
  ({ n }) => (
    <SlideShell tone="deep" number={n} total={TOTAL} eyebrow="08 · ציטוט">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 w-full items-center">
        <div className="md:col-span-4 relative h-[480px] rounded-3xl overflow-hidden grayscale">
          <img src={bruceLee} alt="Bruce Lee" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <blockquote className="md:col-span-8 space-y-8" dir="ltr">
          <div className="text-7xl text-terracotta font-display leading-none">"</div>
          <p className="font-display text-2xl md:text-[2rem] leading-snug text-cream/95 text-balance">
            Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put it in a teapot, it becomes the teapot. Now, water can flow or it can crash. <span className="text-terracotta">Be water, my friend.</span>
          </p>
          <footer className="text-cream/70 font-body text-sm tracking-widest uppercase">— Bruce Lee</footer>
        </blockquote>
      </div>
    </SlideShell>
  ),

  // 11 - הכנה לתרגול
  ({ n }) => (
    <SlideShell tone="terracotta" number={n} total={TOTAL} eyebrow="הכנה לתרגול">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-7">
          <div className="text-xs tracking-[0.3em] uppercase font-body opacity-80">מכאן נתרגל</div>
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[1.05]">
            מכאן<br /> <span className="text-deep">נתרגל</span>
          </h2>
          <p className="font-body text-cream/90 text-lg max-w-md leading-relaxed">
            בתרגול הקרוב נחבר בין:
          </p>
          <div className="grid grid-cols-3 gap-3">
            {["נשימה", "מולה בנדהה", "השתרשות"].map((x) => (
              <div key={x} className="rounded-2xl bg-cream/95 text-deep p-5 text-center">
                <div className="font-display font-bold text-lg md:text-xl">{x}</div>
              </div>
            ))}
          </div>
          <p className="font-body italic text-cream/85">
            לא כדי ״להצליח״ – אלא כדי להרגיש איך יציבות נולדת.
          </p>
        </div>
        <div className="relative">
          <div className="rounded-[2rem] bg-cream text-deep p-10 md:p-12 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]">
            <div className="text-7xl font-display leading-none text-terracotta absolute -top-4 right-8">״</div>
            <p className="font-display text-3xl md:text-[2.4rem] leading-tight pt-4">
              כשאני מפסיקה לתקן –<br />
              <span className="text-terracotta">הגוף מתחיל לשתף פעולה.</span>
            </p>
            <div className="mt-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="yogit-mark">y</span>
                <div>
                  <div className="font-display font-bold text-sm">להמשך → שיעור 03</div>
                  <div className="text-xs opacity-60 font-body">תרגול פיזי · יסודות</div>
                </div>
              </div>
              <div className="text-xs opacity-50 font-body">YOGIT</div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  ),
];

export const TOTAL_SLIDES = TOTAL;
