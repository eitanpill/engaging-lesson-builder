import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/slides/Deck";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "YOGIT · שיעור 03 — נשימת שלושת החלקים וחקירת עצירות" },
      { name: "description", content: "הדגמה של 5–10 דקות: נשימת שלושת החלקים, גילוי העצירה הטבעית ורמז למולה בנדהה. שיעור 03 בקורס יסודות YOGIT." },
    ],
  }),
});

function Index() {
  return <Deck />;
}
