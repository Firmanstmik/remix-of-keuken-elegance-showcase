import { createFileRoute } from "@tanstack/react-router";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationSection from "@/components/ConsultationSection";

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
    <main className="min-h-screen pb-32" style={{ backgroundColor: "#0D0D0D" }}>
      <TestimonialsSection />
      <ConsultationSection />
    </main>
  );
}
