import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/slides/Deck";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "YOGIT · שיעור 01 — יסודות היוגה" },
      { name: "description", content: "יוגה כתרגול שיטתי של גוף, נשימה ותודעה — שיעור הפתיחה של קורס יסודות YOGIT." },
    ],
  }),
});

function Index() {
  return <Deck />;
}
