import { Star, Quote, BadgeCheck, Calendar, Phone, MessageCircle, Settings2, MapPin } from "lucide-react";

type Review = {
  initials: string;
  name: string;
  location: string;
  badge: string;
  text: string;
};

const leftReviews: Review[] = [
  {
    initials: "MV",
    name: "Marieke V.",
    location: "Utrecht",
    badge: "LEICHT Keuken",
    text: "De begeleiding van ontwerp tot installatie was buitengewoon. Een keuken die voelt als architectuur, niet als meubilair.",
  },
  {
    initials: "JD",
    name: "Joris & Daphne",
    location: "Amersfoort",
    badge: "Moderne Keuken",
    text: "Strakke Duitse precisie gecombineerd met Italiaans gevoel voor materiaal. Elke detail klopt — van greeploze fronten tot verlichting.",
  },
  {
    initials: "EH",
    name: "Eline H.",
    location: "Hilversum",
    badge: "Landelijke Keuken",
    text: "Het showroombezoek was een belevenis op zich. Het advies was eerlijk, gedetailleerd en zonder enige verkoopdruk.",
  },
  {
    initials: "RB",
    name: "Robert B.",
    location: "Nieuwegein",
    badge: "Industriële Keuken",
    text: "Een investering die zichzelf elke dag bewijst. Vakmanschap dat je voelt zodra je een lade opent.",
  },
  {
    initials: "SK",
    name: "Sanne K.",
    location: "Zeist",
    badge: "Bulthaup Stijl",
    text: "Onze architect was onder de indruk van de uitvoering. Maatwerk op millimeter niveau.",
  },
];

const rightReviews: Review[] = [
  {
    initials: "PB",
    name: "Pieter B.",
    location: "Bilthoven",
    badge: "Poggenpohl Lijn",
    text: "Een tijdloos ontwerp dat over tien jaar nog steeds modern aanvoelt. Precies waar we naar zochten.",
  },
  {
    initials: "TL",
    name: "Thomas & Lisa",
    location: "Den Dolder",
    badge: "Greeploze Keuken",
    text: "De aandacht voor materialen en proportie is uitzonderlijk. Onze ruimte voelt nu compleet.",
  },
  {
    initials: "AV",
    name: "Annemarie V.",
    location: "Houten",
    badge: "Pedini Collectie",
    text: "Eerlijk advies, geen verkooppraat. Het team dacht mee over functie én esthetiek tot op het laatste detail.",
  },
  {
    initials: "MK",
    name: "Mark K.",
    location: "Vleuten",
    badge: "Molteni&C Sfeer",
    text: "De installatie verliep vlekkeloos. Vakmensen die hun materiaal respecteren en met trots werken.",
  },
  {
    initials: "IV",
    name: "Iris V.",
    location: "Maarssen",
    badge: "Boffi Inspired",
    text: "Een keuken die voelt als een sculptuur. Bezoekers vragen consequent waar we hem hebben laten maken.",
  },
];

function Stars() {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-[14px] w-[14px] fill-[hsl(var(--kc-gold))] text-[hsl(var(--kc-gold))]" />
      ))}
    </div>
  );
}

function TestimonialCard({ r }: { r: Review }) {
  return (
    <article
      className="group relative mb-5 rounded-[28px] bg-white p-6 transition-all duration-[250ms] ease-out hover:-translate-y-1.5"
      style={{
        boxShadow: "0 1px 2px rgba(17,17,17,0.04), 0 8px 28px -12px rgba(17,17,17,0.08)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-[250ms] group-hover:opacity-100"
        style={{ boxShadow: "0 18px 50px -18px rgba(17,17,17,0.18)" }}
      />
      <div className="flex items-start justify-between">
        <Stars />
        <Quote className="h-4 w-4 text-[hsl(var(--kc-gold))]/40" />
      </div>
      <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--kc-gold))]/25 bg-[hsl(var(--kc-gold))]/5 px-2.5 py-1">
        <span className="h-1 w-1 rounded-full bg-[hsl(var(--kc-gold))]" />
        <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[hsl(var(--kc-charcoal))]/70">
          {r.badge}
        </span>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-[hsl(var(--kc-charcoal))]/85">
        {r.text}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-[hsl(var(--kc-charcoal))]/5 pt-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--kc-cream-2))] text-[11px] font-semibold tracking-wider text-[hsl(var(--kc-charcoal))]">
            {r.initials}
          </div>
          <div>
            <div className="text-[13px] font-medium text-[hsl(var(--kc-charcoal))]">{r.name}</div>
            <div className="flex items-center gap-1 text-[11px] text-[hsl(var(--kc-charcoal))]/55">
              <MapPin className="h-3 w-3" />
              {r.location}
            </div>
          </div>
        </div>
        <BadgeCheck className="h-5 w-5 text-emerald-600/80" />
      </div>
    </article>
  );
}

function Column({ reviews, direction }: { reviews: Review[]; direction: "up" | "down" }) {
  const doubled = [...reviews, ...reviews];
  return (
    <div className="relative h-[760px] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24"
        style={{ background: "linear-gradient(to bottom, #F7F4EF, rgba(247,244,239,0))" }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24"
        style={{ background: "linear-gradient(to top, #F7F4EF, rgba(247,244,239,0))" }}
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
    <div className="relative mx-auto w-full max-w-[380px]">
      {/* floating glow */}
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[60px] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(200,165,106,0.35), transparent 70%)",
        }}
      />
      <div
        className="relative overflow-hidden rounded-[32px] p-8"
        style={{
          background:
            "linear-gradient(160deg, #1a1a1a 0%, #111111 50%, #0c0c0c 100%)",
          boxShadow:
            "0 30px 80px -20px rgba(17,17,17,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* glass reflection */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-[0.08]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.9), transparent)",
          }}
        />
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[hsl(var(--kc-gold))]/10 blur-2xl" />

        <div className="flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--kc-gold))]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/70">
              Google Reviews
            </span>
          </div>
        </div>

        {/* circular score */}
        <div className="relative mx-auto mt-8 h-56 w-56">
          <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
            <circle cx="100" cy="100" r="88" stroke="rgba(255,255,255,0.06)" strokeWidth="6" fill="none" />
            <circle
              cx="100" cy="100" r="88"
              stroke="hsl(var(--kc-gold))" strokeWidth="6" fill="none"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 88 * 0.98} ${2 * Math.PI * 88}`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="font-serif text-6xl font-light tracking-tight text-white">4.9</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/50">
              van 5.0
            </div>
            <div className="mt-3 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-[hsl(var(--kc-gold))] text-[hsl(var(--kc-gold))]" />
              ))}
            </div>
          </div>
        </div>

        {/* stats */}
        <div className="mt-8 space-y-2.5">
          {[
            { k: "150+", v: "Reviews" },
            { k: "45+", v: "Jaar Ervaring" },
            { k: "98%", v: "Aanbevolen" },
          ].map((s) => (
            <div
              key={s.k}
              className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] px-5 py-4"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/55">
                {s.v}
              </span>
              <span className="font-serif text-2xl font-light text-white">{s.k}</span>
            </div>
          ))}
        </div>

        {/* google strip */}
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.3 12 2.3 6.6 2.3 2.3 6.6 2.3 12S6.6 21.7 12 21.7c6.9 0 9.5-4.9 9.5-9.4 0-.6-.1-1.1-.1-1.5H12z"/>
            </svg>
            <span className="text-xs text-white/80">Google Reviews</span>
          </div>
          <Stars />
        </div>
      </div>
    </div>
  );
}

function FloatingActionBar() {
  const actions = [
    { icon: Calendar, label: "Plan showroombezoek", sub: "Persoonlijk advies", primary: true },
    { icon: Phone, label: "Bel adviseur", sub: "030 200 5500" },
    { icon: MessageCircle, label: "WhatsApp", sub: "Snel antwoord" },
    { icon: Settings2, label: "Configurator", sub: "Ontwerp je keuken" },
  ];
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <div
        className="pointer-events-auto flex items-center gap-2 rounded-[24px] border border-[hsl(var(--kc-charcoal))]/5 bg-white/85 p-2 backdrop-blur-xl"
        style={{
          boxShadow:
            "0 20px 60px -20px rgba(17,17,17,0.25), 0 2px 6px rgba(17,17,17,0.04)",
        }}
      >
        <div className="hidden items-center gap-2 px-3 sm:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[hsl(var(--kc-charcoal))]">
            <span className="font-serif text-sm text-[hsl(var(--kc-gold))]">K</span>
          </div>
          <div className="leading-tight">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--kc-charcoal))]">
              Keuken Centrum
            </div>
            <div className="text-[10px] text-[hsl(var(--kc-charcoal))]/55">Utrecht</div>
          </div>
        </div>
        <div className="hidden h-8 w-px bg-[hsl(var(--kc-charcoal))]/10 sm:block" />
        {actions.map((a) => {
          const Icon = a.icon;
          return (
            <button
              key={a.label}
              className={`group flex items-center gap-2.5 rounded-[18px] px-3 py-2 transition-all duration-200 ${
                a.primary
                  ? "bg-[hsl(var(--kc-charcoal))] text-white hover:bg-[hsl(var(--kc-charcoal))]/90"
                  : "hover:bg-[hsl(var(--kc-cream-2))]"
              }`}
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                  a.primary
                    ? "bg-[hsl(var(--kc-gold))]/20 text-[hsl(var(--kc-gold))]"
                    : "bg-[hsl(var(--kc-cream-2))] text-[hsl(var(--kc-charcoal))]"
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="hidden text-left md:block">
                <div className={`text-[12px] font-medium leading-tight ${a.primary ? "text-white" : "text-[hsl(var(--kc-charcoal))]"}`}>
                  {a.label}
                </div>
                <div className={`text-[10px] leading-tight ${a.primary ? "text-white/60" : "text-[hsl(var(--kc-charcoal))]/55"}`}>
                  {a.sub}
                </div>
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
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#F7F4EF" }}
    >
      {/* architectural grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17,17,17,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(17,17,17,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* soft gold glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(200,165,106,0.25), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--kc-charcoal))]/10 bg-white/60 px-4 py-1.5 backdrop-blur">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.3 12 2.3 6.6 2.3 2.3 6.6 2.3 12S6.6 21.7 12 21.7c6.9 0 9.5-4.9 9.5-9.4 0-.6-.1-1.1-.1-1.5H12z"/>
            </svg>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[hsl(var(--kc-charcoal))]/70">
              Google Beoordelingen
            </span>
          </div>
          <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05] tracking-tight text-[hsl(var(--kc-charcoal))] md:text-6xl">
            Ervaringen van klanten
            <br />
            <span className="italic text-[hsl(var(--kc-gold))]">uit Utrecht en omgeving</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[hsl(var(--kc-charcoal))]/60">
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
