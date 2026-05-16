import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import heroImg from "@/assets/hero.jpg";
import logoImg from "@/assets/logo.jpg";
import civilImg from "@/assets/civil.jpg";
import electricalImg from "@/assets/electrical.jpg";
import mechanicalImg from "@/assets/mechanical.jpg";

const disciplines = [
  {
    n: "01",
    title: "Civil",
    sub: "Roads · Buildings · Structures",
    body:
      "Road carpeting, structural repairs, and large-scale building maintenance across Karachi's commercial, residential, and industrial districts.",
    img: civilImg,
    alt: "Roadwork machinery at sunset",
  },
  {
    n: "02",
    title: "Electrical",
    sub: "Power · Grid · Industrial",
    body:
      "High-voltage maintenance, distribution panels, lighting retrofits, and industrial electrical installations engineered for continuous uptime.",
    img: electricalImg,
    alt: "Industrial electrical control panel close up",
  },
  {
    n: "03",
    title: "Mechanical",
    sub: "HVAC · Plant · Machinery",
    body:
      "Lifecycle servicing for HVAC, pumping stations, and heavy machinery — precision upkeep that keeps facilities running at full capacity.",
    img: mechanicalImg,
    alt: "Heavy industrial gears close up",
  },
];

const coverage = [
  "SITE Industrial Area",
  "DHA & Clifton",
  "Korangi",
  "Gulshan-e-Iqbal",
  "North Nazimabad",
  "Shahrah-e-Faisal",
  "Kemari",
  "Malir",
  "PECHS",
  "Bahadurabad",
];

export default function KhokharSite() {
  useReveal();
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-onyx text-stone-100 font-body overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 md:px-12 py-6">
          <a href="#top" className="font-display font-bold text-lg md:text-xl tracking-tighter">
            KHOKHAR<span className="text-gold">.</span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-[11px] font-medium tracking-[0.25em] uppercase">
            <a href="#disciplines" className="gold-underline hover:text-gold transition-colors">
              Disciplines
            </a>
            <a href="#coverage" className="gold-underline hover:text-gold transition-colors">
              Karachi
            </a>
            <a href="#process" className="gold-underline hover:text-gold transition-colors">
              Process
            </a>
            <a href="#contact" className="gold-underline hover:text-gold transition-colors">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="md:hidden text-[10px] font-bold tracking-[0.2em] uppercase text-gold"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="top"
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-20"
      >
        {/* Hero image */}
        <div
          className="absolute inset-y-0 right-0 w-full md:w-[60%] pointer-events-none"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <div className="relative h-full w-full">
            <img
              src={heroImg}
              alt="Steel and glass tower at golden hour"
              width={1280}
              height={1536}
              className="h-full w-full object-cover opacity-40 md:opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/80 to-transparent md:via-onyx/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent" />
          </div>
        </div>

        {/* Frame markers */}
        <div className="absolute top-24 left-6 md:left-12 hidden md:flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-stone-500">
          <span className="size-1.5 bg-gold" />
          <span>Karachi · PK</span>
        </div>
        <div className="absolute top-24 right-6 md:right-12 hidden md:block text-[10px] tracking-[0.3em] uppercase text-stone-500">
          KES / 24°51′N 67°00′E
        </div>

        <div className="relative z-10 max-w-5xl">
          <div className="reveal mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className="text-gold font-display text-[11px] font-medium tracking-[0.35em] uppercase">
              Khokhar Engineering Services
            </span>
          </div>

          <h1 className="reveal font-display font-bold leading-[0.88] tracking-[-0.04em] text-[clamp(3rem,10vw,9.5rem)]">
            Engineering
            <br />
            the <span className="text-gold-gradient italic font-light">pulse</span>
            <br />
            of Karachi.
          </h1>

          <p
            className="reveal mt-10 text-base md:text-lg text-stone-400 max-w-xl leading-relaxed"
            style={{ animationDelay: "0.15s" }}
          >
            A multi-disciplinary engineering firm operating across Karachi — building, repairing,
            and maintaining the civil, electrical, and mechanical systems the city depends on.
          </p>

          <div
            className="reveal mt-12 flex flex-wrap items-center gap-6"
            style={{ animationDelay: "0.25s" }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-gold text-onyx px-7 py-4 font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-gold-light transition-colors"
            >
              Request a proposal
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#disciplines"
              className="group flex items-center gap-4 cursor-pointer"
            >
              <span className="h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-300 group-hover:text-gold transition-colors">
                See what we do
              </span>
            </a>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div className="relative z-10 mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border-t border-white/5">
          {[
            ["3", "Core disciplines"],
            ["100%", "Karachi coverage"],
            ["24/7", "Rapid response"],
            ["1", "Accountable partner"],
          ].map(([k, v]) => (
            <div key={v} className="bg-onyx px-6 py-6">
              <div className="font-display text-2xl md:text-3xl font-semibold text-gold">{k}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-stone-500">
                {v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COVERAGE MARQUEE */}
      <section
        id="coverage"
        aria-label="Karachi coverage"
        className="relative border-y border-white/5 bg-onyx-soft py-6 overflow-hidden"
      >
        <div className="flex whitespace-nowrap marquee-track w-max">
          {[...coverage, ...coverage].map((c, i) => (
            <span
              key={i}
              className="flex items-center gap-8 px-8 font-display text-2xl md:text-4xl font-light text-stone-300"
            >
              {c}
              <span className="size-1.5 bg-gold rotate-45 shrink-0" />
            </span>
          ))}
        </div>
      </section>

      {/* DISCIPLINES */}
      <section
        id="disciplines"
        className="relative px-6 md:px-12 lg:px-20 py-28 md:py-40"
      >
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20 md:mb-28">
          <div className="reveal max-w-xl">
            <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
              <span className="size-1.5 bg-gold" />
              Disciplines
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1]">
              Three trades.
              <br />
              <span className="text-stone-500">One accountable team.</span>
            </h2>
          </div>
          <p className="reveal max-w-sm text-stone-400 leading-relaxed md:pt-4">
            From heavy civil works to precision electrical and mechanical systems, we maintain the
            structures that keep Karachi running — under one roof, one contract, one team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {disciplines.map((d, i) => (
            <article
              key={d.n}
              className="reveal group bg-onyx p-8 md:p-10 lg:p-12 flex flex-col transition-colors duration-500 hover:bg-gold"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="flex items-start justify-between mb-12">
                <span className="font-display text-5xl md:text-6xl font-semibold text-white/10 group-hover:text-onyx/20 transition-colors">
                  {d.n}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold group-hover:text-onyx transition-colors">
                  Discipline
                </span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight group-hover:text-onyx transition-colors">
                {d.title}
              </h3>
              <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-gold group-hover:text-onyx/70 transition-colors">
                {d.sub}
              </p>

              <p className="mt-6 text-sm text-stone-400 leading-relaxed group-hover:text-onyx/80 transition-colors">
                {d.body}
              </p>

              <div className="mt-10 overflow-hidden">
                <img
                  src={d.img}
                  alt={d.alt}
                  width={800}
                  height={544}
                  loading="lazy"
                  className="w-full aspect-[16/11] object-cover grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="relative px-6 md:px-12 lg:px-20 py-28 md:py-36 border-t border-white/5"
      >
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 reveal">
            <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-gold mb-6">
              <span className="size-1.5 bg-gold" />
              How we work
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.03em] leading-[1]">
              No layers.
              <br />
              <span className="text-stone-500">Just engineers.</span>
            </h2>
            <p className="mt-8 text-stone-400 leading-relaxed max-w-sm">
              You speak directly to the people doing the work. No subcontractor chains. No vanished
              accountability. Clear scope, fixed pricing, on-site presence.
            </p>
          </div>

          <ol className="lg:col-span-8 grid sm:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {[
              {
                k: "Site survey",
                v: "On-site assessment within 48 hours. We document conditions, scope, and risks before a single quote is written.",
              },
              {
                k: "Scoped proposal",
                v: "Fixed-price proposal with materials, timeline, and the named engineer responsible for delivery.",
              },
              {
                k: "Execution",
                v: "Our crews and equipment, our supervision. Daily progress reports — photographs, not promises.",
              },
              {
                k: "Handover & uptime",
                v: "Signed handover with maintenance schedule. Optional retainer for ongoing servicing across all three disciplines.",
              },
            ].map((s, i) => (
              <li
                key={s.k}
                className="reveal bg-onyx p-8 md:p-10 flex flex-col gap-4"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-2xl text-gold tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
                  {s.k}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">{s.v}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative px-6 md:px-12 lg:px-20 pt-28 md:pt-40 pb-12 border-t border-white/5"
      >
        <div className="reveal mb-20 md:mb-28">
          <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-gold mb-8">
            <span className="size-1.5 bg-gold" />
            Get in touch
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] leading-[0.95]">
            Have a site
            <br />
            that needs <span className="text-gold-gradient italic font-light">work?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div className="space-y-10">
            <p className="text-stone-400 leading-relaxed max-w-md">
              Whether it's a road that needs resurfacing, a building under retrofit, or a plant
              that won't stay online — we'll see it, scope it, and quote it.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:info@khokhareng.com"
                className="block group border-t border-white/10 pt-4"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-1">
                  Email
                </div>
                <div className="font-display text-2xl md:text-3xl font-medium group-hover:text-gold transition-colors">
                  info@khokhareng.com
                </div>
              </a>
              <a href="tel:+922134567890" className="block group border-t border-white/10 pt-4">
                <div className="text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-1">
                  Phone
                </div>
                <div className="font-display text-2xl md:text-3xl font-medium group-hover:text-gold transition-colors">
                  +92 21 3456 7890
                </div>
              </a>
              <div className="border-t border-white/10 pt-4">
                <div className="text-[10px] uppercase tracking-[0.3em] text-stone-500 mb-1">
                  Operating area
                </div>
                <div className="font-display text-2xl md:text-3xl font-medium">
                  Karachi, Pakistan
                </div>
              </div>
            </div>
          </div>

          <form
            className="bg-white/[0.03] border border-white/10 p-8 md:p-10 space-y-7"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const subject = encodeURIComponent(
                `Inquiry · ${data.get("service") ?? "Engineering"}`
              );
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nService: ${data.get("service")}\nLocation: ${data.get(
                  "location"
                )}\n\n${data.get("message")}`
              );
              window.location.href = `mailto:info@khokhareng.com?subject=${subject}&body=${body}`;
            }}
          >
            <Field label="Your name" name="name" placeholder="Full name" required />
            <Field
              label="Service required"
              name="service"
              as="select"
              options={["Civil engineering", "Electrical systems", "Mechanical maintenance", "Multi-disciplinary"]}
            />
            <Field label="Site location" name="location" placeholder="Area in Karachi" />
            <Field
              label="Brief"
              name="message"
              as="textarea"
              placeholder="Tell us about the site and what needs to happen…"
            />
            <button
              type="submit"
              className="w-full py-5 bg-gold text-onyx font-bold uppercase tracking-[0.25em] text-[11px] hover:bg-gold-light transition-colors"
            >
              Send inquiry
            </button>
          </form>
        </div>

        {/* OVERSIZED WORDMARK */}
        <div className="mt-32 md:mt-40 overflow-hidden">
          <div className="reveal font-display font-bold leading-none tracking-[-0.06em] text-[clamp(4rem,18vw,18rem)] text-stone-100/5 select-none whitespace-nowrap text-center">
            KHOKHAR<span className="text-gold/30">.</span>
          </div>
        </div>

        <footer className="mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-stone-600">
          <p>© {new Date().getFullYear()} Khokhar Engineering Services</p>
          <p>Civil · Electrical · Mechanical</p>
          <p>Karachi, Pakistan</p>
        </footer>
      </section>
    </main>
  );
}

type FieldProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  options?: string[];
};

function Field({ label, name, placeholder, required, as = "input", options }: FieldProps) {
  const common =
    "w-full bg-transparent outline-none pt-2 text-stone-100 placeholder:text-stone-600 focus:border-gold transition-colors";

  return (
    <label className="block border-b border-white/15 pb-2 focus-within:border-gold transition-colors">
      <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500">{label}</span>
      {as === "textarea" ? (
        <textarea name={name} placeholder={placeholder} required={required} rows={3} className={common} />
      ) : as === "select" ? (
        <select name={name} className={common} defaultValue={options?.[0]}>
          {options?.map((o) => (
            <option key={o} value={o} className="bg-onyx">
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          required={required}
          className={common}
        />
      )}
    </label>
  );
}
