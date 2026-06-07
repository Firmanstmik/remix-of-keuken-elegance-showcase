import { useEffect, useRef, useState } from "react";
import { Calendar, ArrowRight2, MagicStar, Shield, Clock } from "iconsax-react";

const SHOWCASE_IMAGES = [
  { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=75", label: "LEICHT Keuken", tag: "Greeploos" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=75", label: "Italiaans Werkblad", tag: "Calacatta" },
  { src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&q=75", label: "Signature Series", tag: "Eiken" },
  { src: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=75", label: "Atelier Suite", tag: "Custom" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=75", label: "Architectural", tag: "Beton" },
  { src: "https://images.unsplash.com/photo-1583845112203-29329902332e?auto=format&fit=crop&w=800&q=75", label: "Showroom Floor", tag: "2026" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=75", label: "Modern Lijn", tag: "Mat Zwart" },
  { src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=75", label: "Premium Apparatuur", tag: "Gaggenau" },
];

function HorizontalSlider() {
  const doubled = [...SHOWCASE_IMAGES, ...SHOWCASE_IMAGES];
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ startX: 0, startScroll: 0, moved: false });
  const pausedUntil = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let raf = 0;
    let last = performance.now();
    const speed = 30; // px/s

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const half = (trackRef.current?.scrollWidth ?? 0) / 2;
      if (!dragging && now > pausedUntil.current && half > 0) {
        let next = el.scrollLeft + speed * dt;
        if (next >= half) next -= half;
        el.scrollLeft = next;
      } else if (half > 0) {
        if (el.scrollLeft >= half) el.scrollLeft -= half;
        else if (el.scrollLeft < 0) el.scrollLeft += half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [dragging]);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setDragging(true);
    drag.current = { startX: e.clientX, startScroll: el.scrollLeft, moved: false };
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const el = scrollRef.current;
    if (!el) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    setDragging(false);
    pausedUntil.current = performance.now() + 1500;
    scrollRef.current?.releasePointerCapture?.(e.pointerId);
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40"
        style={{ background: "linear-gradient(to right, #FAF7F1 0%, rgba(250,247,241,0.85) 35%, rgba(250,247,241,0) 100%)" }}
      />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40"
        style={{ background: "linear-gradient(to left, #FAF7F1 0%, rgba(250,247,241,0.85) 35%, rgba(250,247,241,0) 100%)" }}
      />

      <div className="absolute left-2 top-2 z-20 inline-flex items-center gap-2 rounded-full border border-[#E2D9C7] bg-white/90 px-3 py-1.5 backdrop-blur">
        <MagicStar size={12} variant="Bold" color="#8a6a2a" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: "#5a4418" }}>
          Showroom Selectie
        </span>
      </div>

      <div
        ref={scrollRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={`overflow-x-auto pt-14 pb-4 select-none ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", touchAction: "pan-y" }}
      >
        <div ref={trackRef} className="flex w-max gap-6 px-6">
          {doubled.map((img, i) => (
            <figure
              key={i}
              className="group relative h-80 w-[320px] shrink-0 overflow-hidden rounded-[24px]"
              style={{ boxShadow: "0 30px 60px -30px rgba(60,45,20,0.35)" }}
              onClickCapture={(e) => { if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); } }}
            >
              <img
                src={img.src}
                alt={img.label}
                draggable={false}
                loading="lazy"
                className="pointer-events-none h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/35 px-2 py-0.5 backdrop-blur">
                  <span className="h-1 w-1 rounded-full" style={{ background: "#D9BE7C" }} />
                  <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/90">
                    {img.tag}
                  </span>
                </div>
                <div className="mt-1.5 font-serif text-[18px] font-light text-white">{img.label}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: "#7a5e28" }}>
        {label}
      </span>
      {children}
    </label>
  );
}

const inputCls =
  "w-full rounded-lg border border-[#D9D2C3] bg-white px-4 py-3 text-sm text-[#1f1a12] placeholder-[#9c9180] outline-none transition-all duration-200 focus:border-[#1a1410] focus:shadow-[0_0_0_3px_rgba(26,20,16,0.06)]";

function ConsultationForm() {
  const [form, setForm] = useState<FormState>(initial);
  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative overflow-hidden rounded-[20px] border border-[#E4DCCB] bg-white"
      style={{
        boxShadow: "0 40px 90px -50px rgba(26,20,16,0.30), 0 1px 0 rgba(255,255,255,0.6) inset",
      }}
    >
      {/* Two-column premium layout */}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
        {/* Left: editorial intro panel */}
        <aside
          className="relative hidden flex-col justify-between p-8 md:flex"
          style={{
            background: "linear-gradient(180deg, #1a1410 0%, #221b14 100%)",
          }}
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1">
              <span className="h-1 w-1 rounded-full" style={{ background: "#C9A961" }} />
              <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/75">
                Atelier
              </span>
            </div>
            <h3 className="mt-5 font-serif text-2xl font-light leading-tight text-white">
              Persoonlijk
              <br />
              <span className="italic" style={{ color: "#C9A961" }}>ontwerpgesprek</span>
            </h3>
            <p className="mt-3 text-[12px] leading-relaxed text-white/55">
              Een vertrouwelijk gesprek met een senior ontwerper. Zonder verkoopdruk.
            </p>
          </div>

          <ul className="mt-8 space-y-3 text-[12px] text-white/70">
            <li className="flex items-center gap-2.5">
              <Clock size={14} variant="Linear" color="#C9A961" />
              Reactie binnen 24 uur
            </li>
            <li className="flex items-center gap-2.5">
              <Shield size={14} variant="Linear" color="#C9A961" />
              Vrijblijvend & vertrouwelijk
            </li>
            <li className="flex items-center gap-2.5">
              <Calendar size={14} variant="Linear" color="#C9A961" />
              Op locatie of in showroom
            </li>
          </ul>
        </aside>

        {/* Right: form fields */}
        <div className="p-7 md:p-9">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Field label="Volledige naam">
              <input className={inputCls} placeholder="Uw volledige naam" value={form.naam} onChange={(e) => update("naam", e.target.value)} />
            </Field>
            <Field label="E-mailadres">
              <input type="email" className={inputCls} placeholder="naam@voorbeeld.nl" value={form.email} onChange={(e) => update("email", e.target.value)} />
            </Field>
            <Field label="Telefoonnummer">
              <input className={inputCls} placeholder="+31 …" value={form.telefoon} onChange={(e) => update("telefoon", e.target.value)} />
            </Field>
            <Field label="Showroom voorkeur">
              <select className={inputCls} value={form.showroom} onChange={(e) => update("showroom", e.target.value)}>
                <option>Utrecht</option>
                <option>Online videoconsult</option>
                <option>Op locatie (architect)</option>
              </select>
            </Field>
            <Field label="Budget indicatie">
              <select className={inputCls} value={form.budget} onChange={(e) => update("budget", e.target.value)}>
                <option>€ 15.000 – € 25.000</option>
                <option>€ 25.000 – € 50.000</option>
                <option>€ 50.000 – € 100.000</option>
                <option>€ 100.000+</option>
              </select>
            </Field>
            <Field label="Datum voorkeur">
              <input type="date" className={inputCls} value={form.datum} onChange={(e) => update("datum", e.target.value)} />
            </Field>
            <div className="md:col-span-2">
              <Field label="Uw bericht">
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

          <div className="mt-7 flex flex-col items-stretch gap-3 border-t border-[#EFE8D9] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] leading-relaxed" style={{ color: "#7a6a4a" }}>
              Door te verzenden gaat u akkoord met ons vertrouwelijkheidsbeleid.
            </p>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium tracking-wide text-white transition-all duration-[250ms] hover:bg-[#0f0a06]"
              style={{
                background: "#1a1410",
                boxShadow: "0 12px 28px -14px rgba(26,20,16,0.55)",
              }}
            >
              Aanvraag versturen
              <ArrowRight2 size={14} variant="Linear" className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default function ConsultationSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#FAF7F1" }}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FAF7F1 50%, #F4EEE2 100%)" }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(200,165,106,0.22), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ background: "white", border: "1px solid #E6DFD2" }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#6BC56C" }} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em]" style={{ color: "#5a4418" }}>
              Persoonlijk Ontwerpgesprek
            </span>
          </div>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] tracking-tight md:text-5xl" style={{ color: "#1a1410" }}>
            Vertel ons kort
            <br />
            <span className="italic" style={{ color: "#8a6a2a" }}>wat u in gedachten heeft.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed" style={{ color: "#6a5e48" }}>
            Een vrijblijvend gesprek met onze senior ontwerpers — over materialen, indeling, en het
            karakter dat uw nieuwe keuken moet uitstralen.
          </p>
        </div>

        <div className="mt-14">
          <HorizontalSlider />
        </div>

        <div className="mt-10">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
