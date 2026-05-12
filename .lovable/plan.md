## מטרה
שהלוגו בשקופית הראשונה יישב בצורה פרופורציונלית מעל הכותרת "יסודות היוגה", מיושר בדיוק לקצה העליון של עמודת הטקסט, עם מרווח עקבי במובייל ובדסקטופ — בלי לגלוש לשורות אחרות.

## שינוי
ב-`src/components/slides/slidesData.tsx`, בשקופית הפותחת (שורות 30–52):

1. **גודל הלוגו** — להחליף `h-12 md:h-16` ב-`h-9 sm:h-10 md:h-12` כדי שיהיה קומפקטי במובייל ולא ידחק את הכותרת.
2. **יישור לקצה העליון** — להסיר `-mb-2` השלילי ולהחליף ב-`block` כדי לוודא שהוא לא נדחף כלפי מעלה ויושב בדיוק בראש העמודה.
3. **מרווח עקבי** — לעבור מ-`space-y-7` למבנה שבו הלוגו יושב צמוד לראש (`mt-0`) ובינו לבין ה-eyebrow מרווח קבוע (`mb-6 md:mb-8`), כך שהפער בין הלוגו לכותרת זהה יחסית בכל גדלי המסך.
4. **מניעת גלישה** — להוסיף `max-w-[200px] md:max-w-[260px]` ללוגו כדי שלעולם לא יחרוג מרוחב העמודה.

## קוד מתוכנן (קטע)
```tsx
<div className="space-y-6 md:space-y-7">
  <YogitWordmark className="block h-9 sm:h-10 md:h-12 max-w-[200px] md:max-w-[260px] mb-2 md:mb-3" />
  <div className="text-xs tracking-[0.3em] font-body uppercase text-terracotta">Lesson · 01</div>
  <h1 className="font-display font-black text-5xl md:text-7xl leading-[1.05] text-balance">
    יסודות<br /> <span className="text-terracotta">היוגה</span>
  </h1>
  ...
</div>
```

## קבצים מושפעים
- `src/components/slides/slidesData.tsx` — שורה 34 והעטיפה הסובבת.

ללא שינויים בקבצים אחרים, ללא שינוי במערכת העיצוב או בלוגו עצמו.