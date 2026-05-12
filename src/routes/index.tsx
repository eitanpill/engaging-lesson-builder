import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/slides/Deck";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "YOGIT · שיעור 02 — איך לעמוד, לשבת ולנוע מתוך יציבות" },
      { name: "description", content: "מצגת השיעור: יציבות שנולדת מבפנים — דרך הנשימה, הקרקוע וההקשבה לגוף." },
    ],
  }),
});

function Index() {
  return <Deck />;
}
