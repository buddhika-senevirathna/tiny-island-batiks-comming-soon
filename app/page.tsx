import Image from "next/image";

import studioFamily from "./support/images/TI26SIRD1B.png";
import batikShirt from "./support/images/SIR26D1B-ST.jpg";
import batikDress from "./support/images/SIR26D1B-F-K.jpg";
import cropTop from "./support/images/left.jpg";
import sarong from "./support/images/right.jpg";

/* ──────────────────────────────────────────────────────────────────────
   PLACEHOLDER CONTACT DETAILS — swap these two lines for the real ones.
   `phoneHref` must have no spaces (it becomes the tel: link).
   ────────────────────────────────────────────────────────────────────── */
const CONTACT = {
  email: "hello@tinyislandshop.com.au",
  phone: "+61 0488 719 410",
  phoneHref: "+61 0488 719 410",
};

const CHARMS: { title: string; lead?: string; body: string }[] = [
  {
    title: "Drawn by hand, dyed by hand",
    body: "Every piece is individually crafted. No two pieces are ever exactly alike. Subtle variations in motif, placement and crackle are the signature of something crafted by hand.",
  },
  {
    title: "Made to match",
    lead: "One print, cut for everyone.",
    body: " Our signature batik motifs are thoughtfully adapted across sizes and styles, allowing the whole family to share the same design story.",
  },
  {
    title: "Small island, small batch",
    body: "Crafted in limited runs from cotton, viscose and silk. Light, comfortable fabrics designed to be worn and enjoyed throughout the year.",
  },
];

const GALLERY = [
  {
    src: studioFamily,
    alt: "A family of five wearing matching indigo batik outfits in the studio",
    caption: "THE FAMILY SET",
    meta: "COASTAL BLOOM",
    span: "sm:col-span-2 sm:row-span-2",
    fit: "object-top",
  },
  {
    src: batikShirt,
    alt: "Short-sleeve batik shirt in deep indigo with sky-blue floral motifs",
    caption: "THE ISLAND SHIRT",
    meta: (
      <>
        HAND-DRAWN <em>Breathable Cotton</em>
      </>
    ),
    span: "",
    fit: "object-top",
  },
  {
    src: batikDress,
    alt: "Navy batik dress with puff sleeves and a printed hem panel",
    caption: "FOR LITTLE ADVENTURES ",
    meta: (<em>Breathable Cotton</em>),
    span: "",
    fit: "object-top",
  },
  {
    src: cropTop,
    alt: "Navy batik crop top with puff sleeves and sky-blue floral motifs",
    caption: "THE CROP TOP",
    meta: (
      <>
        MADE TO MATCH <em>Effortless comfort, shared in style</em>
      </>
    ),
    span: "",
    fit: "object-center",
  },
  {
    src: sarong,
    alt: "Navy batik sarong with ties and a printed floral hem band",
    caption: "THE ISLAND SARONG",
    meta: (
      <>
        MADE TO WRAP &amp; WANDER{" "}
        <em>Light, comfortable and versatile</em>
      </>
    ),
    span: "",
    fit: "object-center",
  },
];

const MARQUEE = [
  "Hand-drawn batik",
  "Family · Fashion · Style",
  "Island made",
  "Small batch",
  "Natural fibres",
  "Pre-orders open",
  "Shipped Australia-wide",
];

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden bg-cream text-teal-deep">
      {/* soft colour wash behind everything */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
      >
        <div className="animate-drift absolute -top-40 -left-32 h-[46rem] w-[46rem] rounded-full bg-teal-soft/25 blur-3xl" />
        <div className="animate-drift absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full bg-indigo-batik/15 blur-3xl [animation-delay:-6s]" />
        <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full bg-sand/30 blur-3xl" />
      </div>

      {/* ── Header ─────────────────────────────────────────────────── */}
      <header className="relative mx-auto flex w-full max-w-7xl items-center justify-center gap-4 px-6 py-9 sm:justify-start sm:px-10">
        <Image
          src="/logo-teal.png"
          alt="Tiny Island — Family, Fashion, Style"
          width={1450}
          height={500}
          priority
          className="h-16 w-auto sm:h-20 lg:h-24"
        />
      </header>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="texture-grain relative mx-auto w-full max-w-7xl px-6 pb-20 pt-6 sm:px-10 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <span className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-teal-brand/25 bg-cream/70 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-teal-brand backdrop-blur">
              <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-teal-brand" />
              Pre-orders open
            </span>

            <h1 className="animate-rise mt-7 font-display text-[clamp(2.75rem,7vw,5.25rem)] font-medium leading-[0.95] tracking-tight text-teal-deep [animation-delay:120ms]">
              The island is
              <br />
              <span className="text-teal-brand italic">getting dressed.</span>
            </h1>

            <p className="animate-rise mt-7 max-w-xl text-lg leading-8 text-teal-deep/75 [animation-delay:220ms]">
              Tiny Island is a hand-dyed batik house making matching island wear
              for the whole family — wax-drawn, dipped in indigo, and cut in
              small runs. We are taking pre-orders now, delivered right across
              Australia.
            </p>

            <p className="animate-rise mt-8 max-w-xl font-display text-2xl leading-9 text-teal-brand sm:text-[1.75rem] [animation-delay:280ms]">
              Be among the first families to wear Tiny Island. Pre-orders are now open.
            </p>

            <div className="animate-rise mt-7 flex flex-col gap-3 sm:flex-row sm:items-center [animation-delay:320ms]">
              <a
                href={`mailto:${CONTACT.email}`}
                className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-teal-brand px-7 py-4 text-sm font-semibold tracking-wide text-cream shadow-lg shadow-teal-brand/20 transition hover:-translate-y-0.5 hover:bg-teal-deep hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-deep"
              >
                <MailIcon />
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full border border-teal-brand/30 bg-cream/60 px-7 py-4 text-sm font-semibold tracking-wide text-teal-brand transition hover:-translate-y-0.5 hover:border-teal-brand hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-brand"
              >
                <PhoneIcon />
                {CONTACT.phone}
              </a>
            </div>

            <p className="animate-rise mt-6 text-sm text-teal-deep/55 [animation-delay:400ms]">
              Made to order in small batches and shipped Australia-wide.
            </p>
          </div>

          {/* collage */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-lg sm:aspect-[5/5]">
              <figure className="animate-rise absolute inset-x-0 top-0 bottom-10 overflow-hidden rounded-[2rem] border border-cream-deep bg-cream-deep shadow-2xl shadow-teal-deep/20 [animation-delay:200ms]">
                <Image
                  src={studioFamily}
                  alt="A family of five in matching indigo batik, photographed in the studio"
                  placeholder="blur"
                  priority
                  sizes="(max-width: 1024px) 90vw, 36rem"
                  className="h-full w-full object-cover object-top"
                />
              </figure>

              <figure
                className="animate-float absolute -bottom-2 -left-4 w-36 overflow-hidden rounded-2xl border-4 border-cream bg-cream shadow-xl shadow-teal-deep/25 sm:w-44"
                style={{ ["--tilt" as string]: "-5deg" }}
              >
                <Image
                  src={batikShirt}
                  alt="Deep indigo batik shirt with sky-blue botanical motifs"
                  placeholder="blur"
                  sizes="11rem"
                  className="h-full w-full object-cover"
                />
              </figure>

              <figure
                className="animate-float absolute -right-3 bottom-6 w-28 overflow-hidden rounded-2xl border-4 border-cream bg-cream shadow-xl shadow-teal-deep/25 [animation-delay:-3.5s] sm:w-36"
                style={{ ["--tilt" as string]: "6deg" }}
              >
                <Image
                  src={batikDress}
                  alt="Navy batik dress with puff sleeves"
                  placeholder="blur"
                  sizes="9rem"
                  className="h-full w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ────────────────────────────────────────────────── */}
      <div
        aria-hidden
        className="relative flex overflow-hidden border-y border-teal-brand/15 bg-teal-brand py-4"
      >
        <div className="animate-marquee flex min-w-max">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0 items-center gap-10 pr-10">
              {MARQUEE.map((word) => (
                <span
                  key={`${half}-${word}`}
                  className="flex items-center gap-10 whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.35em] text-cream/85"
                >
                  {word}
                  <Diamond />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Charm ──────────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-teal-brand/70">
            What we are making
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-teal-deep sm:text-5xl">
            Slow cloth from a{" "}
            <span className="italic text-teal-brand">tiny island</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CHARMS.map((charm, i) => (
            <article
              key={charm.title}
              className="group relative overflow-hidden rounded-3xl border border-teal-brand/15 bg-cream/60 p-8 backdrop-blur transition duration-500 hover:-translate-y-1.5 hover:border-teal-brand/35 hover:bg-cream hover:shadow-xl hover:shadow-teal-deep/10"
            >
              <span className="font-display text-5xl leading-none text-teal-brand/25 transition group-hover:text-teal-brand/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-2xl text-teal-deep">
                {charm.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-7 text-teal-deep/70">
                {charm.lead ? <em>{charm.lead}</em> : null}
                {charm.body}
              </p>
              <span className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-teal-soft/20 blur-2xl transition duration-500 group-hover:bg-teal-soft/35" />
            </article>
          ))}
        </div>
      </section>

      {/* ── Gallery ────────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-10 lg:pb-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl leading-tight text-teal-deep sm:text-5xl">
            A first look
          </h2>
          <p className="max-w-sm text-[0.95rem] leading-7 text-teal-deep/65">
            A preview of the opening collection. Hand-drawn batik motifs reimagined across sizes and styles for the whole family.
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[15rem] grid-cols-1 gap-5 sm:grid-cols-4">
          {GALLERY.map((item) => (
            <figure
              key={item.caption}
              className={`group relative overflow-hidden rounded-3xl border border-cream-deep bg-cream-deep shadow-sm transition duration-500 hover:shadow-2xl hover:shadow-teal-deep/20 ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                placeholder="blur"
                sizes="(max-width: 640px) 92vw, (max-width: 1280px) 45vw, 36rem"
                className={`h-full w-full object-cover ${item.fit} transition duration-[1.2s] ease-out group-hover:scale-[1.06]`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-indigo-deep/85 via-indigo-deep/35 to-transparent p-5 pt-14">
                <span className="font-display text-xl text-cream">
                  {item.caption}
                </span>
                <span className="text-right text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cream/70">
                  {item.meta}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="texture-grain relative mx-auto w-full max-w-7xl px-6 pb-20 sm:px-10"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] bg-teal-deep px-8 py-16 text-cream sm:px-14 lg:px-20 lg:py-24">
          <div
            aria-hidden
            className="animate-drift pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-teal-soft/25 blur-3xl"
          />
          <div className="relative flex flex-col items-center text-center">
            <Image
              src="/logo-white.png"
              alt="Tiny Island"
              width={1450}
              height={500}
              className="h-20 w-auto sm:h-24 lg:h-28"
            />
            <p className="mt-8 max-w-xl text-lg leading-8 text-cream/75">
              Pre-orders are now open. Contact us by email or phone to secure your place in the first Tiny Island collection.
            </p>

            <div className="mt-12 grid w-full max-w-3xl gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${CONTACT.email}`}
                className="group rounded-3xl border border-cream/15 bg-cream/[0.06] p-7 text-left transition hover:-translate-y-1 hover:border-cream/35 hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
              >
                <span className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-cream/55">
                  <MailIcon />
                  Email
                </span>
                <span className="mt-3 block break-words font-display text-2xl text-cream transition group-hover:text-sky-batik sm:text-[1.75rem]">
                  {CONTACT.email}
                </span>
              </a>

              <a
                href={`tel:${CONTACT.phoneHref}`}
                className="group rounded-3xl border border-cream/15 bg-cream/[0.06] p-7 text-left transition hover:-translate-y-1 hover:border-cream/35 hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
              >
                <span className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-cream/55">
                  <PhoneIcon />
                  Phone
                </span>
                <span className="mt-3 block font-display text-2xl text-cream transition group-hover:text-sky-batik sm:text-[1.75rem]">
                  {CONTACT.phone}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="mx-auto w-full max-w-7xl px-6 pb-12 sm:px-10">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-teal-brand/15 pt-8 text-[0.75rem] uppercase tracking-[0.22em] text-teal-deep/50 sm:flex-row">
          <p>© 2026 Tiny Island</p>
          <p>Family · Fashion · Style</p>
        </div>
      </footer>
    </main>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[1.05em] w-[1.05em]"
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 7 7.4 5.3a2 2 0 0 0 2.2 0L20.5 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[1.05em] w-[1.05em]"
    >
      <path d="M6.6 3.5h2.2l1.6 4-2 1.3a12.5 12.5 0 0 0 6.8 6.8l1.3-2 4 1.6v2.2a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

function Diamond() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 10 10"
      className="h-1.5 w-1.5 fill-current opacity-60"
    >
      <path d="M5 0 10 5 5 10 0 5Z" />
    </svg>
  );
}
