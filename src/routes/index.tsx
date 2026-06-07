import { createFileRoute } from "@tanstack/react-router";
import TestimonialsSection from "@/components/TestimonialsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Keuken Centrum Utrecht — Premium Europese Keukens" },
      { name: "description", content: "Luxe Europese keukens met Duitse precisie en Italiaanse elegantie. Showroom in Utrecht." },
      { property: "og:title", content: "Keuken Centrum Utrecht" },
      { property: "og:description", content: "Premium showroom voor architectonische keukens — LEICHT, Bulthaup, Poggenpohl stijl." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen pb-32" style={{ backgroundColor: "#F7F4EF" }}>
      <TestimonialsSection />
    </main>
  );
}
