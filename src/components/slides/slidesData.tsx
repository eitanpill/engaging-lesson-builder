import { ReactNode } from "react";
import { SlideShell } from "./SlideShell";
import { YogitMark, YogitWordmark } from "./Brand";
import yogaHero from "@/assets/illus-hero.jpg";
import yogaBreath from "@/assets/illus-breath.jpg";
import yogaStand from "@/assets/illus-stand.jpg";
import grounding from "@/assets/illus-grounding.jpg";
import water from "@/assets/illus-flow.jpg";

const TOTAL = 13;

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

export const slides: Array<(p: { n: number }) => ReactNode> = [
  // 1 - Cover
  ({ n }) => (
    <SlideShell tone="cream" number={n} total={TOTAL} eyebrow="שיעור 01 · שער">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center">
        <div className="space-y-6 md:space-y-7">
          <YogitWordmark className="block h-28 sm:h-32 md:h-36 w-auto max-w-[600px] md:max-w-[780px] mb-2 md:mb-3" />
          <div className="text-xs tracking-[0.3em] font-body uppercase text-terracotta">Lesson · 01</div>
          <h1 className="font-display font-black text-5xl md:text-7xl leading-[1.05] text-balance">
            יסודות<br /> <span className="text-terracotta">היוגה</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-deep/75 max-w-xl leading-relaxed">
            יוגה כתרגול שיטתי של גוף · נשימה · תודעה.
          </p>
          <p className="font-display text-xl text-deep/80">
            איזה כיף שאתם כאן — בואו נתחיל!
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
          <img src={yogaHero} alt="יוגה" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/30 via-transparent to-transparent" />
          <div className="absolute bottom-6 right-6 left-6 flex items-end justify-between text-cream">
            <div className="font-display text-2xl">שיעור 01</div>
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
            מה נלמד<br /> בשיעור?
          </h2>
          <p className="font-body text-deep/70 text-base md:text-lg max-w-md leading-relaxed">
            מסגרת שלמה — מהמילה <em className="text-terracotta not-italic font-medium">״יוגה״</em> ועד המזרן ביום־יום.
          </p>
        </div>
        <ol className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 self-center">
          <Bullet n={1}>למה בכלל לתרגל יוגה?</Bullet>
          <Bullet n={2}>לפני שמתחילים לתרגל</Bullet>
          <Bullet n={3}>מה פירוש המילה יוגה?</Bullet>
          <Bullet n={4}>ההגדרה הקלאסית</Bullet>
          <Bullet n={5}>אשטנגה: המסגרת הרחבה</Bullet>
          <Bullet n={6}>למה מתחילים מהגוף?</Bullet>
          <Bullet n={7}>פראניאמה ופראנה</Bullet>
          <Bullet n={8}>צ׳יטה ודרישטי</Bullet>
          <Bullet n={9}>סהאנגה: תרגול במסגרת</Bullet>
          <Bullet n={10}>המזרן כמרחב תרגול</Bullet>
        </ol>
      </div>
    </SlideShell>
  ),

  // 3 - למה בכלל לתרגל
  ({ n }) => (
    <SlideShell tone="cream" number={n} total={TOTAL} eyebrow="01 · פתיחה">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-7">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">למה לתרגל יוגה?</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            השקטה<br /> של <span className="text-terracotta">התודעה</span>
          </h2>
          <div className="space-y-4">
            <p className="font-body text-deep/70">רוב האנשים חושבים שיוגה היא:</p>
            <ul className="space-y-2.5">
              <Dot>גמישות</Dot>
              <Dot>תנוחות</Dot>
              <Dot>״משהו שיש לך או שאין לך״</Dot>
            </ul>
          </div>
        </div>
        <blockquote className="relative bg-forest text-cream rounded-3xl p-10 md:p-12">
          <div className="text-7xl font-display leading-none text-terracotta/70 absolute top-4 right-6">״</div>
          <p className="font-display text-3xl md:text-[2.2rem] leading-snug pt-6">
            יוגה לא נועדה למוכשרים.<br />
            <span className="text-terracotta">היא נועדה לסקרנים.</span>
          </p>
          <div className="mt-8 h-px bg-cream/20" />
          <p className="mt-4 text-sm opacity-80 font-body leading-relaxed">
            הקורס לא מלמד איך להרשים בתנוחה — הוא מלמד איך להבין מה את עושה, ולמה.
          </p>
        </blockquote>
      </div>
    </SlideShell>
  ),

  // 4 - לפני שמתחילים
  ({ n }) => (
    <SlideShell tone="moss" number={n} total={TOTAL} eyebrow="02 · גישה">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 w-full items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">לפני שמתחילים</div>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-tight">
            יוגה היא <span className="text-terracotta">שיטה</span> —<br />
            לא אוסף תנוחות.
          </h2>
          <p className="font-body text-base md:text-lg leading-relaxed text-deep/80 max-w-xl">
            המילה ״יוגה״ מגיעה מהשורש הסנסקריטי <strong className="font-display">Yuj</strong> — לחבר.
            יוגה היא תהליך של איחוד:
          </p>
          <div className="grid grid-cols-3 gap-4 pt-2">
            {[
              { t: "גוף", s: "ונשימה" },
              { t: "נשימה", s: "ותודעה" },
              { t: "פעולה", s: "ופנימיות" },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl bg-cream/80 p-5 text-center">
                <div className="font-display font-bold text-2xl text-terracotta">{x.t}</div>
                <div className="text-sm opacity-70 font-body mt-1">{x.s}</div>
              </div>
            ))}
          </div>
          <p className="font-body italic text-deep/70 pt-2">
            לא רק תרגול פיזי — מערכת שמטרתה ליצור בהירות פנימית.
          </p>
        </div>
        <div className="md:col-span-5 relative h-[480px] rounded-3xl overflow-hidden">
          <img src={grounding} alt="קרקוע" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </SlideShell>
  ),

  // 5 - ההגדרה הקלאסית
  ({ n }) => (
    <SlideShell tone="cream" number={n} total={TOTAL} eyebrow="03 · המסורת">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">ההגדרה הקלאסית</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            מהי יוגה<br /> לפי <span className="text-terracotta">המסורת?</span>
          </h2>
          <p className="font-body text-deep/70 text-lg">
            פאטנג׳לי, לפני כ־2000 שנה, הגדיר:
          </p>
          <div className="rounded-2xl bg-sand p-6 text-center" dir="ltr">
            <p className="font-display text-3xl md:text-4xl text-deep tracking-tight">
              Yogaś citta-vṛtti-nirodhaḥ
            </p>
          </div>
          <p className="font-display text-xl text-terracotta">
            ״יוגה היא השקטת תנודות הצ׳יטה.״
          </p>
        </div>
        <div className="space-y-5">
          <div className="rounded-2xl bg-forest text-cream p-6">
            <div className="text-xs uppercase tracking-widest opacity-70 font-body mb-2">צ׳יטה</div>
            <div className="font-display text-2xl">התודעה</div>
            <p className="font-body text-cream/80 text-sm mt-2">מחשבות, רגשות, תגובות, השוואות.</p>
          </div>
          <div className="rounded-2xl bg-card p-6 border border-deep/10">
            <div className="text-xs uppercase tracking-widest opacity-60 font-body mb-2">תנודות</div>
            <p className="font-body text-deep/80 mb-3">הסיפור שרץ בראש תוך כדי תרגול:</p>
            <ul className="space-y-1.5 font-body text-deep/80 italic">
              <li>״אני לא מבינה.״</li>
              <li>״כולם יודעים מה לעשות.״</li>
              <li>״אני איטית.״</li>
            </ul>
          </div>
          <p className="font-body text-deep/75 leading-relaxed pt-1">
            יוגה לא עוצרת מחשבות בכוח — היא מלמדת <strong className="text-terracotta font-display">יציבות בתוך הפעילות שלהן</strong>.
          </p>
        </div>
      </div>
    </SlideShell>
  ),

  // 6 - אשטנגה
  ({ n }) => (
    <SlideShell tone="sky" number={n} total={TOTAL} eyebrow="04 · אשטנגה">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 w-full items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">המסגרת הרחבה</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            אשטנגה —<br /> שמונת <span className="text-terracotta">איברי התרגול</span>
          </h2>
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="rounded-2xl bg-card border border-deep/10 p-5 text-center">
              <div className="text-xs uppercase tracking-widest opacity-60 font-body">אשטו</div>
              <div className="font-display font-bold text-3xl text-terracotta mt-1">שמונה</div>
            </div>
            <div className="rounded-2xl bg-card border border-deep/10 p-5 text-center">
              <div className="text-xs uppercase tracking-widest opacity-60 font-body">אנגה</div>
              <div className="font-display font-bold text-3xl text-terracotta mt-1">איבר</div>
            </div>
          </div>
          <p className="font-body text-base md:text-lg leading-relaxed text-deep/80 max-w-lg">
            <strong className="font-display">האסאנה</strong> (התנוחות) היא רק איבר אחד בתוך מערכת שלמה — שכוללת גוף, נשימה ותודעה.
          </p>
          <p className="font-body italic text-deep/70">
            התרגול הפיזי הוא חלק ממערכת רחבה.
          </p>
        </div>
        <div className="md:col-span-5 relative h-[480px] rounded-3xl overflow-hidden">
          <img src={yogaStand} alt="אסאנה" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </SlideShell>
  ),

  // 7 - למה מתחילים מהגוף
  ({ n }) => (
    <SlideShell tone="sand" number={n} total={TOTAL} eyebrow="05 · אסאנה">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">נקודת כניסה</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            אסאנה<br /> כנקודת <span className="text-terracotta">כניסה</span>
          </h2>
          <p className="font-body text-deep/75 text-lg leading-relaxed max-w-lg">
            הגוף הוא המקום הראשון שבו אפשר לתרגל בפועל. דרך האסאנה מתפתחת היכולת:
          </p>
        </div>
        <div className="grid gap-4">
          {[
            { t: "ליצור", s: "יציבות" },
            { t: "לשים", s: "לב" },
            { t: "לשהות", s: "ברגע" },
          ].map((x, i) => (
            <div key={x.s} className="flex items-center justify-between rounded-2xl bg-cream p-6 border border-deep/10">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/15 text-terracotta font-display font-bold">
                  {i + 1}
                </span>
                <span className="font-body text-deep/70">{x.t}</span>
              </div>
              <span className="font-display font-bold text-2xl text-terracotta">{x.s}</span>
            </div>
          ))}
          <div className="rounded-2xl bg-forest text-cream p-6 mt-2">
            <p className="font-display text-xl leading-snug">
              האסאנה אינה מטרה — היא <span className="text-terracotta">שער</span> לתרגול עמוק יותר.
            </p>
          </div>
        </div>
      </div>
    </SlideShell>
  ),

  // 8 - פראניאמה
  ({ n }) => (
    <SlideShell tone="sky" number={n} total={TOTAL} eyebrow="06 · נשימה">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full items-center">
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">פראניאמה ופראנה</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            נשימה<br /> כאיבר <span className="text-terracotta">תרגול</span>
          </h2>
          <p className="font-body text-deep/80 text-lg leading-relaxed max-w-lg">
            <strong className="font-display">פראניאמה</strong> היא עבודה עם הנשימה, והיא נוגעת ב־<strong className="font-display text-terracotta">פראנה</strong> — אנרגיית החיים.
          </p>
          <p className="font-body text-deep/75 leading-relaxed max-w-lg">
            הנשימה היא החוליה המקשרת בין הגוף לבין מצבי התודעה.
          </p>
          <div className="inline-flex items-center gap-3 rounded-full bg-forest text-cream px-6 py-3 mt-2">
            <span className="h-2 w-2 rounded-full bg-terracotta" />
            <span className="font-display text-lg">כשהנשימה מתייצבת — גם הצ׳יטה מתייצבת.</span>
          </div>
        </div>
        <div className="md:col-span-5 relative h-[480px] rounded-3xl overflow-hidden">
          <img src={yogaBreath} alt="נשימה" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </SlideShell>
  ),

  // 9 - צ'יטה ודרישטי
  ({ n }) => (
    <SlideShell tone="cream" number={n} total={TOTAL} eyebrow="07 · מיקוד">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">צ׳יטה ודרישטי</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            לאן הולכת<br /> <span className="text-terracotta">התודעה?</span>
          </h2>
          <p className="font-body text-deep/75 text-lg leading-relaxed max-w-lg">
            דרך <strong className="font-display">הדרישטי</strong>, התרגול מקבל איכות של ריכוז — לא רק תנועה.
          </p>
        </div>
        <div className="space-y-5">
          <div className="rounded-2xl bg-sage p-6">
            <div className="text-xs uppercase tracking-widest text-terracotta font-body mb-2">צ׳יטה</div>
            <div className="font-display text-2xl text-deep">התודעה בפעולה</div>
          </div>
          <div className="rounded-2xl bg-forest text-cream p-6">
            <div className="text-xs uppercase tracking-widest opacity-70 font-body mb-2">דרישטי</div>
            <div className="font-display text-2xl">כיוון המבט</div>
            <p className="font-body text-cream/80 text-sm mt-2">כלי למיקוד התודעה.</p>
          </div>
        </div>
      </div>
    </SlideShell>
  ),

  // 10 - סהאנגה
  ({ n }) => (
    <SlideShell tone="moss" number={n} total={TOTAL} eyebrow="08 · קהילה">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 w-full items-center">
        <div className="md:col-span-5 relative h-[480px] rounded-3xl overflow-hidden">
          <img src={water} alt="זרימה" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
        </div>
        <div className="md:col-span-7 space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">סהאנגה</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            תרגול לא<br /> מתקיים <span className="text-terracotta">בריק.</span>
          </h2>
          <p className="font-body text-deep/80 text-lg leading-relaxed max-w-xl">
            <strong className="font-display">סהאנגה</strong> היא קהילת תרגול תומכת — דרך שפה משותפת, קצב ומסגרת ברורה.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-cream/80 p-5">
              <div className="font-display font-bold text-xl text-terracotta">יציבות</div>
              <div className="text-sm opacity-70 font-body mt-1">והתמדה</div>
            </div>
            <div className="rounded-2xl bg-cream/80 p-5">
              <div className="font-display font-bold text-xl text-terracotta">לא לבד</div>
              <div className="text-sm opacity-70 font-body mt-1">בתהליך</div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  ),

  // 11 - המזרן
  ({ n }) => (
    <SlideShell tone="forest" number={n} total={TOTAL} eyebrow="09 · המזרן">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-6">
          <div className="text-xs tracking-[0.3em] uppercase text-terracotta font-body">המזרן כמעבדה</div>
          <h2 className="font-display font-black text-5xl md:text-6xl leading-tight">
            המזרן —<br /> <span className="text-terracotta">מרחב התרגול.</span>
          </h2>
          <p className="font-body text-cream/85 text-lg leading-relaxed max-w-lg">
            כאן האשטנגה פוגשת את היום־יום:
          </p>
          <div className="grid gap-3 max-w-lg">
            {[
              { t: "גוף", s: "אסאנה" },
              { t: "נשימה", s: "פראניאמה" },
              { t: "תודעה", s: "צ׳יטה" },
            ].map((x) => (
              <div key={x.t} className="flex items-center justify-between rounded-2xl bg-cream/10 border border-cream/15 px-5 py-4">
                <span className="font-body opacity-80">{x.t}</span>
                <span className="font-display font-bold text-terracotta text-xl">{x.s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[2rem] bg-cream text-deep p-10 md:p-12 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]">
            <div className="text-7xl font-display leading-none text-terracotta absolute -top-4 right-8">״</div>
            <p className="font-display text-3xl md:text-[2.2rem] leading-tight pt-4">
              כאן מתחיל<br /> התרגול המעשי.<br />
              <span className="text-terracotta">לא כדי להבין —</span><br />
              אלא כדי להרגיש.
            </p>
          </div>
        </div>
      </div>
    </SlideShell>
  ),

  // 12 - לקראת ההמשך
  ({ n }) => (
    <SlideShell tone="terracotta" number={n} total={TOTAL} eyebrow="לקראת ההמשך">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center">
        <div className="space-y-7">
          <div className="text-xs tracking-[0.3em] uppercase font-body opacity-80">מכאן נמשיך</div>
          <h2 className="font-display font-black text-5xl md:text-7xl leading-[1.05]">
            מכאן נתחיל<br /> <span className="text-deep">לפרק את השיטה</span>
          </h2>
          <p className="font-body text-cream/90 text-lg max-w-md leading-relaxed">
            בשיעורים הבאים נעמיק:
          </p>
          <ul className="space-y-3 max-w-md">
            <li className="flex items-start gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-deep shrink-0" /><span className="font-body text-lg">איך עובדים עם הגוף</span></li>
            <li className="flex items-start gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-deep shrink-0" /><span className="font-body text-lg">איך ניגשים לנשימה</span></li>
            <li className="flex items-start gap-3"><span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-deep shrink-0" /><span className="font-body text-lg">איך נבנית יציבות תודעתית</span></li>
          </ul>
        </div>
        <div className="relative">
          <div className="rounded-[2rem] bg-cream text-deep p-10 md:p-12 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)]">
            <div className="text-7xl font-display leading-none text-terracotta absolute -top-4 right-8">״</div>
            <p className="font-display text-3xl md:text-[2.2rem] leading-tight pt-4">
              כשיש מסגרת —<br />
              <span className="text-terracotta">הרבה יותר קל לנשום.</span>
            </p>
            <div className="mt-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <YogitMark size={40} />
                <div>
                  <div className="font-display font-bold text-sm">להמשך → שיעור 02</div>
                  <div className="text-xs opacity-60 font-body">איך לעמוד, לשבת ולנוע</div>
                </div>
              </div>
              <div className="text-xs opacity-50 font-body">YOGIT</div>
            </div>
          </div>
        </div>
      </div>
    </SlideShell>
  ),

  // 13 - תודה / סיום
  ({ n }) => (
    <SlideShell tone="deep" number={n} total={TOTAL} eyebrow="סוף השיעור">
      <div className="flex flex-col items-center justify-center w-full text-center space-y-8">
        <YogitMark size={64} />
        <h2 className="font-display font-black text-6xl md:text-8xl leading-tight text-cream">
          תודה<br /> <span className="text-terracotta">שאתם כאן.</span>
        </h2>
        <p className="font-body text-cream/75 text-xl max-w-xl leading-relaxed">
          קחו רגע. נשמו עמוק. נתראה בשיעור הבא.
        </p>
        <div className="pt-6">
          <YogitWordmark className="h-7 invert brightness-0 opacity-90" />
          <div className="mt-3 text-xs tracking-[0.3em] uppercase font-body opacity-60">YOGA WITH AVITAL PELLES</div>
        </div>
      </div>
    </SlideShell>
  ),
];

export const TOTAL_SLIDES = TOTAL;
