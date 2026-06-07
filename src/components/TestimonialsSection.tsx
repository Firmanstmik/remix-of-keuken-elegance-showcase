import { useState } from "react";
import { Star, Quote } from "lucide-react";
import {
  TickCircle,
  Calendar,
  Call,
  Messages2,
  Setting2,
  Location,
  CloseSquare,
} from "iconsax-react";

type Review = {
  initials: string;
  name: string;
  location: string;
  badge: string;
  text: string;
  image: string;
};

const KITCHEN_IMG = [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1556909195-4e5e2c1f9d3a?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1583845112203-29329902332e?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=70",
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=70",
];

const leftReviews: Review[] = [
  { initials: "MV", name: "Marieke V.", location: "Utrecht", badge: "LEICHT Collection", text: "De begeleiding van ontwerp tot installatie was buitengewoon. Een keuken die voelt als architectuur, niet als meubilair.", image: KITCHEN_IMG[0] },
  { initials: "JD", name: "Joris & Daphne", location: "Amersfoort", badge: "Modern Kitchen", text: "Duitse precisie gecombineerd met Italiaans gevoel voor materiaal. Elk detail klopt — van greeploze fronten tot verlichting.", image: KITCHEN_IMG[1] },
  { initials: "EH", name: "Eline H.", location: "Hilversum", badge: "Signature Series", text: "Het showroombezoek was een belevenis op zich. Eerlijk, gedetailleerd advies zonder enige verkoopdruk.", image: KITCHEN_IMG[2] },
  { initials: "RB", name: "Robert B.", location: "Nieuwegein", badge: "Italian Luxury", text: "Een investering die zichzelf elke dag bewijst. Vakmanschap dat je voelt zodra je een lade opent.", image: KITCHEN_IMG[3] },
  { initials: "SK", name: "Sanne K.", location: "Zeist", badge: "Architectural Series", text: "Onze architect was onder de indruk van de uitvoering. Maatwerk op millimeter niveau.", image: KITCHEN_IMG[4] },
];

const rightReviews: Review[] = [
  { initials: "PB", name: "Pieter B.", location: "Bilthoven", badge: "Poggenpohl Line", text: "Een tijdloos ontwerp dat over tien jaar nog steeds modern aanvoelt. Precies waar we naar zochten.", image: KITCHEN_IMG[5] },
  { initials: "TL", name: "Thomas & Lisa", location: "Den Dolder", badge: "Greeploze Collection", text: "De aandacht voor materialen en proportie is uitzonderlijk. Onze ruimte voelt nu compleet.", image: KITCHEN_IMG[6] },
  { initials: "AV", name: "Annemarie V.", location: "Houten", badge: "Pedini Collection", text: "Eerlijk advies, geen verkooppraat. Het team dacht mee over functie én esthetiek tot op het laatste detail.", image: KITCHEN_IMG[7] },
  { initials: "MK", name: "Mark K.", location: "Vleuten", badge: "Molteni&C Atelier", text: "De installatie verliep vlekkeloos. Vakmensen die hun materiaal respecteren en met trots werken.", image: KITCHEN_IMG[8] },
  { initials: "IV", name: "Iris V.", location: "Maarssen", badge: "Boffi Inspired", text: "Een keuken die voelt als een sculptuur. Bezoekers vragen consequent waar we hem hebben laten maken.", image: KITCHEN_IMG[9] },
];

function Stars({ size = 14 }: { size?: number }) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className="fill-[hsl(var(--kc-gold))] text-[hsl(var(--kc-gold))]"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ r }: { r: Review }) {
  return (
    <article
      className="group relative mb-5 overflow-hidden rounded-[28px] border border-white/[0.06] bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[hsl(var(--kc-gold))]/30"
      style={{
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.04) inset, 0 18px 50px -22px rgba(0,0,0,0.6)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow:
            "0 28px 80px -30px rgba(200,165,106,0.35), 0 0 0 1px rgba(200,165,106,0.25) inset",
        }}
      />
      <div className="flex items-start justify-between gap-4">
        <Stars />
        <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-xl border border-white/10">
          <img
            src={r.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>
      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--kc-gold))]/30 bg-[hsl(var(--kc-gold))]/[0.08] px-2.5 py-1">
        <span className="h-1 w-1 rounded-full bg-[hsl(var(--kc-gold))]" />
        <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[hsl(var(--kc-gold-soft))]">
          {r.badge}
        </span>
      </div>
      <p className="mt-4 font-serif text-[18px] font-light leading-relaxed text-white/85">
        <Quote className="-mt-1 mr-1 inline h-3.5 w-3.5 text-[hsl(var(--kc-gold))]/70" />
        {r.text}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[11px] font-semibold tracking-wider text-white">
            {r.initials}
          </div>
          <div>
            <div className="text-[13px] font-medium text-white">{r.name}</div>
            <div className="flex items-center gap-1 text-[11px] text-white/50">
              <Location size={12} variant="Linear" />
              {r.location}
            </div>
          </div>
        </div>
        <TickCircle size={20} variant="Bold" className="text-[hsl(var(--kc-green))]" />
      </div>
    </article>
  );
}

function Column({ reviews, direction }: { reviews: Review[]; direction: "up" | "down" }) {
  const doubled = [...reviews, ...reviews];
  // Solid color behind cards = exact match for fades (no gradient mismatch)
  const COL_BG = "#0F0F0F";
  return (
    <div
      className="relative h-[760px] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-64"
        style={{
          background: `linear-gradient(to bottom, ${COL_BG} 0%, ${COL_BG} 18%, rgba(15,15,15,0) 100%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-64"
        style={{
          background: `linear-gradient(to top, ${COL_BG} 0%, ${COL_BG} 18%, rgba(15,15,15,0) 100%)`,
        }}
      />
      <div className={direction === "up" ? "animate-kc-scroll-up" : "animate-kc-scroll-down"}>
        {doubled.map((r, i) => (
          <TestimonialCard key={`${r.name}-${i}`} r={r} />
        ))}
      </div>
    </div>
  );
}


function CenterShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      {/* soft halo behind */}
      <div
        className="pointer-events-none absolute -inset-24 -z-10 rounded-[60px] opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 45% at 50% 30%, rgba(40,70,140,0.45), transparent 70%), radial-gradient(45% 45% at 50% 75%, rgba(200,165,106,0.30), transparent 70%)",
        }}
      />

      <div className="animate-kc-float">
        {/* gold gradient border wrapper */}
        <div
          className="relative rounded-[34px] p-[1.5px]"
          style={{
            background:
              "linear-gradient(160deg, rgba(220,190,130,0.9) 0%, rgba(180,140,70,0.3) 35%, rgba(255,255,255,0.6) 65%, rgba(180,140,70,0.7) 100%)",
            boxShadow:
              "0 60px 140px -30px rgba(8,18,40,0.75), 0 30px 60px -20px rgba(0,0,0,0.4)",
          }}
        >
          <div
            className="relative overflow-hidden rounded-[33px]"
            style={{
              background:
                "linear-gradient(180deg, #0B1B3A 0%, #0D2148 48%, #FFFFFF 48.2%, #F7F2E8 100%)",
            }}
          >
            {/* TOP — dark blue half */}
            <div className="relative px-8 pt-8 pb-10">
              {/* subtle starlight */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(70% 60% at 50% 0%, rgba(255,255,255,0.10), transparent 70%)",
                }}
              />
              <div className="relative flex justify-center">
                <div
                  className="flex items-center gap-2 rounded-full px-3 py-1.5"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(220,190,130,0.35)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#DCBE82" }} />
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: "#E8D6A8" }}
                  >
                    Google Reviews · Verified
                  </span>
                </div>
              </div>

              <RatingRingDark />
            </div>

            {/* gold seam */}
            <div
              className="pointer-events-none relative h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(184,146,74,0.7), transparent)",
              }}
            />

            {/* BOTTOM — white half */}
            <div className="relative px-8 pt-7 pb-8">
              <div className="space-y-2.5">
                {[
                  { k: "150+", v: "Beoordelingen" },
                  { k: "45+", v: "Jaar Vakmanschap" },
                  { k: "98%", v: "Aanbevolen" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="flex items-center justify-between rounded-2xl px-5 py-4"
                    style={{
                      background: "rgba(247,242,232,0.7)",
                      border: "1px solid rgba(184,146,74,0.18)",
                    }}
                  >
                    <span
                      className="text-[11px] uppercase tracking-[0.22em]"
                      style={{ color: "#6a5224" }}
                    >
                      {s.v}
                    </span>
                    <span
                      className="font-serif text-3xl font-light"
                      style={{ color: "#0B1B3A" }}
                    >
                      {s.k}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="mt-5 flex items-center justify-between rounded-2xl px-4 py-3"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(184,146,74,0.20)",
                  boxShadow: "0 8px 20px -10px rgba(11,27,58,0.15)",
                }}
              >
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.3 12 2.3 6.6 2.3 2.3 6.6 2.3 12S6.6 21.7 12 21.7c6.9 0 9.5-4.9 9.5-9.4 0-.6-.1-1.1-.1-1.5H12z"
                    />
                  </svg>
                  <span className="text-xs font-medium" style={{ color: "#0B1B3A" }}>
                    Google Reviews
                  </span>
                </div>
                <Stars />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RatingRingDark() {
  const r = 88;
  const c = 2 * Math.PI * r;
  const filledRatio = 0.98;
  return (
    <div className="relative mx-auto mt-7 h-56 w-56">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full -rotate-90">
        <circle cx="100" cy="100" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
      </svg>
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full -rotate-90">
        <defs>
          <linearGradient id="kc-arc-dark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F1DDA6" />
            <stop offset="100%" stopColor="#B8924A" />
          </linearGradient>
        </defs>
        <circle
          cx="100" cy="100" r={r}
          fill="none"
          stroke="url(#kc-arc-dark)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - filledRatio)}
          className="animate-kc-dash"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="font-serif text-7xl font-light tracking-tight text-white">4.9</div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.3em]" style={{ color: "#DCBE82" }}>
          van 5.0
        </div>
        <div className="mt-3"><Stars size={12} /></div>
      </div>
    </div>
  );
}

function FloatingActionBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  const ghostActions = [
    { Icon: Call, label: "Bel adviseur", sub: "030 200 5500" },
    { Icon: Messages2, label: "WhatsApp", sub: "Snel antwoord" },
    { Icon: Setting2, label: "Configurator", sub: "Ontwerp je keuken" },
  ];

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <div
        className="pointer-events-auto relative flex items-center gap-2 rounded-[26px] border border-white/[0.08] p-2 backdrop-blur-2xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(22,22,22,0.92), rgba(13,13,13,0.92))",
          boxShadow:
            "0 30px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,165,106,0.08) inset, 0 1px 0 rgba(255,255,255,0.05) inset",
        }}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Sluit balk"
          className="group absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#111] backdrop-blur transition-all duration-300 hover:rotate-90 hover:border-[hsl(var(--kc-gold))]/60 hover:shadow-[0_0_18px_rgba(200,165,106,0.55)]"
        >
          <CloseSquare size={14} variant="Linear" className="text-white/70 transition-colors group-hover:text-[hsl(var(--kc-gold))]" />
        </button>

        <div className="hidden items-center gap-2 px-3 sm:flex">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10"
            style={{ background: "linear-gradient(160deg, #1a1a1a, #0c0c0c)" }}
          >
            <span className="font-serif text-base text-[hsl(var(--kc-gold))]">K</span>
          </div>
          <div className="leading-tight">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-white">
              Keuken Centrum
            </div>
            <div className="text-[10px] text-white/50">Utrecht</div>
          </div>
        </div>
        <div className="hidden h-9 w-px bg-white/10 sm:block" />

        <button
          className="group flex items-center gap-2.5 rounded-[18px] px-3 py-2 transition-transform duration-[250ms] hover:scale-[1.03]"
          style={{
            background: "linear-gradient(180deg, #6BC56C, #4FA351)",
            boxShadow:
              "0 10px 24px -8px rgba(89,177,90,0.55), 0 0 0 1px rgba(255,255,255,0.12) inset",
          }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
            <Calendar size={16} variant="Linear" className="text-white" />
          </div>
          <div className="hidden text-left md:block">
            <div className="text-[12px] font-semibold leading-tight text-white">
              Plan showroombezoek
            </div>
            <div className="text-[10px] leading-tight text-white/80">Persoonlijk advies</div>
          </div>
        </button>

        {ghostActions.map((a) => {
          const Icon = a.Icon;
          return (
            <button
              key={a.label}
              className="group flex items-center gap-2.5 rounded-[18px] border border-white/[0.06] bg-white/[0.03] px-3 py-2 transition-all duration-[250ms] hover:scale-[1.03] hover:border-[hsl(var(--kc-gold))]/30 hover:bg-white/[0.06]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-[hsl(var(--kc-gold))] transition-colors group-hover:bg-[hsl(var(--kc-gold))]/15">
                <Icon size={16} variant="Linear" />
              </div>
              <div className="hidden text-left md:block">
                <div className="text-[12px] font-medium leading-tight text-white">{a.label}</div>
                <div className="text-[10px] leading-tight text-white/55">{a.sub}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#0F0F0F" }}>
      {/* center gold glow only — keep base color uniform so fades blend perfectly */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(200,165,106,0.28), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.3 12 2.3 6.6 2.3 2.3 6.6 2.3 12S6.6 21.7 12 21.7c6.9 0 9.5-4.9 9.5-9.4 0-.6-.1-1.1-.1-1.5H12z" />
            </svg>
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
              Google Beoordelingen
            </span>
          </div>
          <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05] tracking-tight text-white md:text-6xl">
            Ervaringen van klanten
            <br />
            <span className="italic text-[hsl(var(--kc-gold))]">uit Utrecht en omgeving</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/55">
            Persoonlijk ontwerpadvies, Duitse precisie en Italiaanse elegantie — samengebracht in
            een installatie die generaties meegaat.
          </p>
        </div>

        {/* 3-column composition */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-[3fr_4fr_3fr]">
          <div className="hidden lg:block">
            <Column reviews={leftReviews} direction="up" />
          </div>
          <div className="flex items-center justify-center">
            <CenterShowcase />
          </div>
          <div className="hidden lg:block">
            <Column reviews={rightReviews} direction="down" />
          </div>

          {/* mobile fallback */}
          <div className="space-y-5 lg:hidden">
            {[...leftReviews.slice(0, 3), ...rightReviews.slice(0, 2)].map((r, i) => (
              <TestimonialCard key={i} r={r} />
            ))}
          </div>
        </div>
      </div>

      <FloatingActionBar />
    </section>
  );
}
