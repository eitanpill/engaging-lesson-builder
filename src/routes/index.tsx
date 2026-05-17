import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/slides/Deck";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "YOGIT · שיעור 02 — איך לעמוד, לשבת ולנוע מתוך יציבות" },
      { name: "description", content: "יציבות שנולדת מבפנים — דרך הנשימה, הקרקוע והקשבה לגוף. שיעור 02 בקורס יסודות YOGIT." },
    ],
  }),
});

function Index() {
  return <Deck />;
}
