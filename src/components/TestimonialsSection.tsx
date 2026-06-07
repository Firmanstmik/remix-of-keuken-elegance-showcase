import { useState } from "react";
import {
  Star,
  Quote,
  BadgeCheck,
  Calendar,
  Phone,
  MessageCircle,
  Settings2,
  MapPin,
  X,
} from "lucide-react";

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
              <MapPin className="h-3 w-3" />
              {r.location}
            </div>
          </div>
        </div>
        <BadgeCheck className="h-5 w-5 text-[hsl(var(--kc-green))]" />
      </div>
    </article>
  );
}

function Column({ reviews, direction }: { reviews: Review[]; direction: "up" | "down" }) {
  const doubled = [...reviews, ...reviews];
  return (
    <div className="relative h-[760px] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32"
        style={{ background: "linear-gradient(to bottom, #0D0D0D, rgba(13,13,13,0))" }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32"
        style={{ background: "linear-gradient(to top, #0D0D0D, rgba(13,13,13,0))" }}
      />
      <div className={direction === "up" ? "animate-kc-scroll-up" : "animate-kc-scroll-down"}>
        {doubled.map((r, i) => (
          <TestimonialCard key={`${r.name}-${i}`} r={r} />
        ))}
      </div>
    </div>
  );
}

function RatingRing() {
  const r = 88;
  const c = 2 * Math.PI * r;
  const segments = 60;
  const filledRatio = 0.98;
  return (
    <div className="relative mx-auto mt-8 h-56 w-56">
      {/* outer glow */}
      <div className="pointer-events-none absolute inset-[-12px] rounded-full bg-[hsl(var(--kc-gold))]/15 blur-3xl animate-kc-pulse-glow" />

      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full -rotate-90">
        {/* segmented track */}
        <circle
          cx="100" cy="100" r={r}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
          strokeDasharray={`${(c / segments) * 0.55} ${(c / segments) * 0.45}`}
        />
      </svg>

      {/* progress arc - animated */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full -rotate-90">
        <defs>
          <linearGradient id="kc-arc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--kc-gold-soft))" />
            <stop offset="100%" stopColor="hsl(var(--kc-gold))" />
          </linearGradient>
        </defs>
        <circle
          cx="100" cy="100" r={r}
          fill="none"
          stroke="url(#kc-arc)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - filledRatio)}
          className="animate-kc-dash"
          style={{ filter: "drop-shadow(0 0 6px rgba(200,165,106,0.55))" }}
        />
      </svg>

      {/* rotating highlight dot */}
      <div className="absolute inset-0 animate-kc-ring" style={{ animation: "kc-pulse-glow 4s ease-in-out infinite" }}>
        <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
          <circle cx="100" cy="12" r="3" fill="hsl(var(--kc-gold-soft))" style={{ filter: "drop-shadow(0 0 6px rgba(200,165,106,0.9))" }} />
        </svg>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="font-serif text-7xl font-light tracking-tight text-white">4.9</div>
        <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/40">van 5.0</div>
        <div className="mt-3"><Stars size={12} /></div>
      </div>
    </div>
  );
}

function CenterShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      {/* gold reflections */}
      <div
        className="pointer-events-none absolute -inset-16 -z-10 rounded-[60px] opacity-70 blur-3xl animate-kc-pulse-glow"
        style={{ background: "radial-gradient(60% 60% at 50% 40%, rgba(200,165,106,0.35), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -inset-24 -z-10 rounded-[80px] opacity-40 blur-3xl"
        style={{ background: "radial-gradient(50% 50% at 50% 60%, rgba(200,165,106,0.18), transparent 70%)" }}
      />

      <div className="animate-kc-float">
        <div
          className="relative overflow-hidden rounded-[32px] border border-white/[0.08] p-8"
          style={{
            background:
              "linear-gradient(160deg, #1a1a1a 0%, #131313 45%, #0c0c0c 100%)",
            boxShadow:
              "0 50px 120px -30px rgba(0,0,0,0.8), 0 0 0 1px rgba(200,165,106,0.08) inset, 0 1px 0 rgba(255,255,255,0.06) inset",
          }}
        >
          {/* glass reflection */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-44 opacity-[0.10]"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.95), transparent)" }}
          />
          {/* moving gold highlight */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute -top-1/2 left-0 h-[200%] w-1/3 animate-kc-shimmer"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(200,165,106,0.18), transparent)",
              }}
            />
          </div>
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[hsl(var(--kc-gold))]/15 blur-2xl" />

          <div className="relative flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--kc-gold))] shadow-[0_0_8px_rgba(200,165,106,0.8)]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/70">
                Google Reviews · Verified
              </span>
            </div>
          </div>

          <RatingRing />

          <div className="relative mt-8 space-y-2.5">
            {[
              { k: "150+", v: "Beoordelingen" },
              { k: "45+", v: "Jaar Vakmanschap" },
              { k: "98%", v: "Aanbevolen" },
            ].map((s) => (
              <div
                key={s.k}
                className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.025] px-5 py-4 backdrop-blur-sm transition-colors hover:border-[hsl(var(--kc-gold))]/25"
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-white/55">{s.v}</span>
                <span className="font-serif text-3xl font-light text-white">{s.k}</span>
              </div>
            ))}
          </div>

          <div className="relative mt-6 flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.3 12 2.3 6.6 2.3 2.3 6.6 2.3 12S6.6 21.7 12 21.7c6.9 0 9.5-4.9 9.5-9.4 0-.6-.1-1.1-.1-1.5H12z" />
              </svg>
              <span className="text-xs text-white/80">Google Reviews</span>
            </div>
            <Stars />
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingActionBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  const ghostActions = [
    { icon: Phone, label: "Bel adviseur", sub: "030 200 5500" },
    { icon: MessageCircle, label: "WhatsApp", sub: "Snel antwoord" },
    { icon: Settings2, label: "Configurator", sub: "Ontwerp je keuken" },
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
        {/* close button */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Sluit balk"
          className="group absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#111] backdrop-blur transition-all duration-300 hover:rotate-90 hover:border-[hsl(var(--kc-gold))]/60 hover:shadow-[0_0_18px_rgba(200,165,106,0.55)]"
        >
          <X className="h-3.5 w-3.5 text-white/70 transition-colors group-hover:text-[hsl(var(--kc-gold))]" />
        </button>

        {/* logo */}
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

        {/* primary green */}
        <button
          className="group flex items-center gap-2.5 rounded-[18px] px-3 py-2 transition-transform duration-[250ms] hover:scale-[1.03]"
          style={{
            background: "linear-gradient(180deg, #6BC56C, #4FA351)",
            boxShadow:
              "0 10px 24px -8px rgba(89,177,90,0.55), 0 0 0 1px rgba(255,255,255,0.12) inset",
          }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
            <Calendar className="h-4 w-4 text-white" />
          </div>
          <div className="hidden text-left md:block">
            <div className="text-[12px] font-semibold leading-tight text-white">
              Plan showroombezoek
            </div>
            <div className="text-[10px] leading-tight text-white/80">Persoonlijk advies</div>
          </div>
        </button>

        {ghostActions.map((a) => {
          const Icon = a.icon;
          return (
            <button
              key={a.label}
              className="group flex items-center gap-2.5 rounded-[18px] border border-white/[0.06] bg-white/[0.03] px-3 py-2 transition-all duration-[250ms] hover:scale-[1.03] hover:border-[hsl(var(--kc-gold))]/30 hover:bg-white/[0.06]"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] text-[hsl(var(--kc-gold))] transition-colors group-hover:bg-[hsl(var(--kc-gold))]/15">
                <Icon className="h-4 w-4" />
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
    <section className="relative overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>
      {/* layered base gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0D0D0D 0%, #111111 40%, #161616 70%, #0D0D0D 100%)",
        }}
      />
      {/* vertical spotlight */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 50% at 50% 0%, rgba(255,255,255,0.04), transparent 70%)",
        }}
      />
      {/* center gold glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(200,165,106,0.30), transparent 60%)",
        }}
      />
      {/* side spotlights */}
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(200,165,106,0.10), transparent 70%)" }}
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
