import { useState } from "react";
import { Calendar, ChevronRight, Sparkles } from "lucide-react";

const SHOWCASE_IMAGES = [
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=70", label: "LEICHT Keuken", tag: "Greeploos" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=70", label: "Italiaans Werkblad", tag: "Calacatta" },
  { src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=600&q=70", label: "Signature Series", tag: "Eiken" },
  { src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=600&q=70", label: "Atelier Suite", tag: "Custom" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=70", label: "Architectural", tag: "Beton" },
  { src: "https://images.unsplash.com/photo-1583845112203-29329902332e?auto=format&fit=crop&w=600&q=70", label: "Showroom Floor", tag: "2026" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=70", label: "Modern Lijn", tag: "Mat Zwart" },
  { src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=70", label: "Premium Apparatuur", tag: "Gaggenau" },
];

function ProductSlider() {
  const doubled = [...SHOWCASE_IMAGES, ...SHOWCASE_IMAGES];
  return (
    <div className="relative h-full min-h-[640px] overflow-hidden rounded-[32px] border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-6">
      {/* edges fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#0D0D0D] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#0D0D0D] to-transparent" />

      <div className="absolute left-6 top-6 z-20 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur">
        <Sparkles className="h-3 w-3 text-[hsl(var(--kc-gold))]" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
          Showroom Selectie
        </span>
      </div>

      <div className="flex h-full">
        {/* Column 1 — scroll up */}
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-kc-scroll-up space-y-5 pr-3">
            {doubled.map((img, i) => (
              <ImageCard key={`a-${i}`} img={img} size={i % 3 === 0 ? "tall" : "default"} />
            ))}
          </div>
        </div>
        {/* Column 2 — scroll down */}
        <div className="relative ml-3 hidden flex-1 overflow-hidden sm:block">
          <div className="animate-kc-scroll-down space-y-5">
            {doubled.map((img, i) => (
              <ImageCard
                key={`b-${i}`}
                img={img}
                size={i % 4 === 0 ? "wide" : "default"}
                offset
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageCard({
  img,
  size = "default",
  offset = false,
}: {
  img: { src: string; label: string; tag: string };
  size?: "default" | "tall" | "wide";
  offset?: boolean;
}) {
  const h = size === "tall" ? "h-72" : size === "wide" ? "h-44" : "h-56";
  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] transition-all duration-500 hover:-translate-y-1 hover:border-[hsl(var(--kc-gold))]/30 ${h} ${offset ? "ml-2" : ""}`}
      style={{ boxShadow: "0 20px 50px -20px rgba(0,0,0,0.6)" }}
    >
      <img
        src={img.src}
        alt={img.label}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 p-4">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-2 py-0.5 backdrop-blur">
          <span className="h-1 w-1 rounded-full bg-[hsl(var(--kc-gold))]" />
          <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/80">
            {img.tag}
          </span>
        </div>
        <div className="mt-1.5 font-serif text-[15px] font-light text-white">{img.label}</div>
      </figcaption>
    </figure>
  );
}

type FormState = {
  naam: string;
  email: string;
  telefoon: string;
  showroom: string;
  budget: string;
  datum: string;
  bericht: string;
};

const initial: FormState = {
  naam: "",
  email: "",
  telefoon: "",
  showroom: "Utrecht",
  budget: "€ 25.000 – € 50.000",
  datum: "",
  bericht: "",
};

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-200 focus:border-[hsl(var(--kc-gold))]/50 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(200,165,106,0.08)]";

function ConsultationForm() {
  const [form, setForm] = useState<FormState>(initial);
  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative overflow-hidden rounded-[32px] border border-white/[0.08] p-8 backdrop-blur-xl md:p-10"
      style={{
        background:
          "linear-gradient(160deg, rgba(26,26,26,0.85) 0%, rgba(17,17,17,0.85) 50%, rgba(12,12,12,0.9) 100%)",
        boxShadow:
          "0 50px 120px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,165,106,0.08) inset",
      }}
    >
      {/* gold accent */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[hsl(var(--kc-gold))]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--kc-gold))]/40 to-transparent" />

      <div className="relative flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[hsl(var(--kc-gold))]/30 bg-[hsl(var(--kc-gold))]/10">
          <Calendar className="h-4 w-4 text-[hsl(var(--kc-gold))]" />
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--kc-gold))]">
            Permintaan Konsultasi
          </div>
          <div className="text-[12px] text-white/55">Persoonlijk gesprek · vrijblijvend</div>
        </div>
      </div>

      <div className="relative mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <Field label="Nama lengkap">
          <input
            className={inputCls}
            placeholder="Uw volledige naam"
            value={form.naam}
            onChange={(e) => update("naam", e.target.value)}
          />
        </Field>
        <Field label="Email">
          <input
            type="email"
            className={inputCls}
            placeholder="naam@voorbeeld.nl"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </Field>
        <Field label="Nomor telepon">
          <input
            className={inputCls}
            placeholder="+31 …"
            value={form.telefoon}
            onChange={(e) => update("telefoon", e.target.value)}
          />
        </Field>
        <Field label="Preferensi showroom">
          <select
            className={inputCls}
            value={form.showroom}
            onChange={(e) => update("showroom", e.target.value)}
          >
            <option>Utrecht</option>
            <option>Online videoconsult</option>
            <option>Op locatie (architect)</option>
          </select>
        </Field>
        <Field label="Budget indikasi">
          <select
            className={inputCls}
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
          >
            <option>€ 15.000 – € 25.000</option>
            <option>€ 25.000 – € 50.000</option>
            <option>€ 50.000 – € 100.000</option>
            <option>€ 100.000+</option>
          </select>
        </Field>
        <Field label="Tanggal preferensi">
          <input
            type="date"
            className={inputCls}
            value={form.datum}
            onChange={(e) => update("datum", e.target.value)}
          />
        </Field>
        <div className="md:col-span-2">
          <Field label="Pesan">
            <textarea
              rows={4}
              className={inputCls + " resize-none"}
              placeholder="Vertel ons kort over uw project, ruimte en stijlvoorkeur…"
              value={form.bericht}
              onChange={(e) => update("bericht", e.target.value)}
            />
          </Field>
        </div>
      </div>

      <div className="relative mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] leading-relaxed text-white/45">
          Binnen 24 uur ontvangt u persoonlijk antwoord van een senior ontwerpadviseur.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-white transition-all duration-[250ms] hover:scale-[1.03]"
          style={{
            background: "linear-gradient(180deg, #6BC56C, #4FA351)",
            boxShadow:
              "0 16px 36px -10px rgba(89,177,90,0.55), 0 0 0 1px rgba(255,255,255,0.12) inset",
          }}
        >
          Verstuur aanvraag
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
}

export default function ConsultationSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0D0D0D 0%, #111111 50%, #0D0D0D 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/3 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(200,165,106,0.20), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--kc-green))]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
              Persoonlijk Ontwerpgesprek
            </span>
          </div>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] tracking-tight text-white md:text-5xl">
            Beri tahu kami secara singkat
            <br />
            <span className="italic text-[hsl(var(--kc-gold))]">apa yang ingin Anda diskusikan.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            Een vrijblijvend gesprek met onze senior ontwerpers — over materialen, indeling, en het
            karakter dat uw nieuwe keuken moet uitstralen.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <ProductSlider />
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
