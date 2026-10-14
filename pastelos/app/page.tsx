import Image from "next/image";
import MobileMenu from "./MobileMenu";

const img = (id: string, w = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

const navLinks = [
  "Cakes",
  "Theme Cakes",
  "Desserts",
  "Birthday",
  "Hampers",
  "Anniversary",
  "Occasions",
  "Occasions",
];

const bestsellers = [
  {
    name: "Rich Chocolate Truffle Truffle Cake",
    price: 500,
    rating: "5.0",
    stars: 4.5,
    img: img("1578985545062-69928b1d9587"),
  },
  {
    name: "Checo Chip Truffle Cake Cake",
    price: 599,
    rating: "4.8",
    stars: 4.5,
    img: img("1557925923-cd4648e211a0"),
  },
  {
    name: "Topical Fruit N Almond Cake Cake",
    price: 599,
    rating: "4.7",
    stars: 4.5,
    img: img("1588195538326-c5b1e9f80a1b"),
  },
  {
    name: "Rich Butterscotch Crunch Carrie Cake",
    price: 399,
    rating: "4.6",
    stars: 4.5,
    img: img("1571115177098-24ec42ed204d"),
  },
];

const gallery = [
  { label: "ROYALM DEOWN", img: img("1535141192574-5d4897c12636") },
  { label: "Roladee", img: img("1559620192-032c4bc4674e") },
  {
    label: "Brreder",
    corner: "WAHT YOUR\nFOCCETION\nIS MY MASHICO",
    img: img("1621303837174-89787a7d4729"),
  },
  { label: "Chesbda\nCOLESNGNT", img: img("1556910103-1c02745aae4d") },
  { label: "", img: img("1612203985729-70726954388c") },
  {
    label: "",
    corner: "Beesern\nCont rdes\nOecruetion",
    img: img("1627834377411-8da5f4f09de8"),
  },
];

const avatars = [
  "1494790108377-be9c29b29330",
  "1500648767791-00dcc994a43e",
  "1438761681033-6461ffad8d80",
  "1506794778202-cad84cf45f1d",
  "1534528741775-53994a69daeb",
  "1556910103-1c02745aae4d",
];

const footerCols = [
  { title: "KNOW US", links: ["Contact Us", "Blog"] },
  { title: "NEED HELP", links: ["Cancellion And Refund", "Privacy Policy"] },
  { title: "MORE INFO", links: ["Terms And Coditions", "Customer Care"] },
  { title: "MORE INFO", links: ["Coupons & Offers", "Download App"] },
];

export default function Home() {
  return (
    <div className="sm:px-6 sm:py-6">
      <div className="mx-auto max-w-[1200px] overflow-hidden bg-cream sm:rounded-[28px] shadow-[0_10px_40px_rgba(120,40,30,0.12)]">
        <Header />
        <Hero />

        <main className="relative z-10 -mt-12 rounded-t-[32px] bg-cream px-4 pb-6 sm:mx-4 sm:px-8">
          <Menu />
          <Bestsellers />
          <OurPromise />
        </main>

        <Footer />
      </div>
    </div>
  );
}

/* ---------------------------------- Header --------------------------------- */

function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display font-extrabold tracking-tight text-brand ${className}`}
    >
      Dakingo<sup className="ml-0.5 text-[0.3em] align-super">®</sup>
    </span>
  );
}

function SearchForm({ className = "" }: { className?: string }) {
  return (
    <form
      role="search"
      className={`items-center overflow-hidden rounded-full border border-brand/40 bg-white ${className}`}
    >
      <SearchIcon className="ml-3 h-4 w-4 shrink-0 text-cocoa/60" />
      <input
        type="search"
        placeholder="Search"
        aria-label="Search"
        className="min-w-0 flex-1 px-2 py-2 text-sm outline-none placeholder:text-cocoa/50 lg:w-56"
      />
      <button
        type="submit"
        aria-label="Search"
        className="flex h-9 w-10 shrink-0 items-center justify-center bg-brand text-white"
      >
        <SearchIcon className="h-4 w-4 -scale-x-100" />
      </button>
    </form>
  );
}

function Header() {
  return (
    <header className="relative z-20 bg-cream">
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-10 sm:py-4">
        <div className="flex items-center gap-1">
          <MobileMenu links={navLinks} />
          <Logo className="text-[34px] leading-none sm:text-[44px]" />
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <SearchForm className="hidden md:flex md:w-64 lg:w-auto" />
          <a href="#" aria-label="Cart" className="text-brand">
            <CartIcon className="h-7 w-7" />
          </a>
          <a
            href="#"
            className="hidden text-sm font-semibold text-cocoa hover:text-brand min-[400px]:inline"
          >
            Login/Signup
          </a>
        </div>
      </div>
      <div className="px-4 pb-3 md:hidden">
        <SearchForm className="flex w-full" />
      </div>
      <nav className="hidden items-center justify-between gap-4 border-t border-brand/10 px-10 py-3 lg:flex">
        {navLinks.map((l, i) => (
          <a
            key={i}
            href="#"
            className="shrink-0 text-[15px] font-semibold text-brand-dark hover:text-brand"
          >
            {l}
          </a>
        ))}
        <a
          href="#"
          className="shrink-0 rounded-full bg-brand-dark px-6 py-2 font-display text-[15px] font-bold text-white shadow-md hover:bg-brand"
        >
          ORDER NOW
        </a>
      </nav>
    </header>
  );
}

/* ----------------------------------- Hero ---------------------------------- */

const heroSide = [
  { src: img("1624353365286-3f8d62daad51", 400), alt: "Chocolate lava cake" },
  { src: img("1606313564200-e75d5e30476c", 400), alt: "Chocolate cake slice" },
];

function SideCircle({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-full border-white shadow-xl ${className}`}
    >
      <Image src={src} alt={alt} width={160} height={160} className="h-full w-full object-cover" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-light via-brand to-brand-dark pb-20 pt-6 text-white sm:pt-8">
      {/* decorative bubbles */}
      <span className="absolute -left-10 top-40 h-40 w-40 rounded-full bg-white/5" />
      <span className="absolute left-[36%] top-[55%] h-56 w-56 rounded-full bg-white/5" />
      <span className="absolute right-10 top-2 h-10 w-10 rounded-full bg-white/10" />
      <span className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-white/5" />

      <div className="relative grid items-center gap-8 px-5 md:gap-12 lg:gap-8 sm:px-10 md:grid-cols-[minmax(0,300px)_1fr] lg:grid-cols-[minmax(0,330px)_1fr_auto]">
        <div className="relative mx-auto w-60 sm:w-72 md:w-full">
          <div className="aspect-square overflow-hidden rounded-full border-[6px] border-white shadow-2xl sm:border-[8px]">
            <Image
              src={img("1606890737304-57a1ca8a5b62", 800)}
              alt="Chocolate cake topped with berries"
              width={400}
              height={400}
              priority
              sizes="(min-width: 768px) 330px, 288px"
              className="h-full w-full object-cover"
            />
          </div>
          {/* small circles overlapping the main one on mobile / tablet */}
          <SideCircle
            {...heroSide[0]}
            className="absolute -right-8 top-0 h-20 w-20 border-4 sm:-right-12 sm:h-24 sm:w-24 md:-right-3 md:-top-3 md:h-20 md:w-20 lg:hidden"
          />
          <SideCircle
            {...heroSide[1]}
            className="absolute -left-8 bottom-0 h-20 w-20 border-4 sm:-left-12 sm:h-24 sm:w-24 md:-bottom-2 md:-left-2 md:h-20 md:w-20 lg:hidden"
          />
        </div>

        <div className="text-center md:text-left">
          <h1 className="font-display text-[40px] font-extrabold uppercase leading-[0.95] tracking-tight drop-shadow-sm sm:text-5xl lg:text-[56px]">
            Decadent
            <br />
            Chocolate
            <br />
            <span className="relative">
              Bliss!
              <span className="pointer-events-none absolute left-full top-1 ml-2 whitespace-nowrap font-script text-4xl font-normal normal-case text-white/40 sm:text-5xl lg:text-6xl">
                Oakings
              </span>
            </span>
          </h1>
          <p className="mt-3 font-display text-xl font-medium sm:text-3xl">
            Satisfy Your Sweet Cravings
          </p>
          <div className="mt-5 inline-block rounded-full bg-brand-dark/80 px-6 py-2 text-left shadow-inner ring-1 ring-white/10 sm:mt-6">
            <span className="block text-xs font-semibold">Special Offer!</span>
            <span className="font-display text-2xl font-extrabold leading-none sm:text-3xl">
              SAVE 20%
            </span>
          </div>
        </div>

        <div className="hidden flex-col gap-6 lg:flex">
          {heroSide.map((c) => (
            <SideCircle key={c.src} {...c} className="h-36 w-36 border-[6px]" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- Menu ---------------------------------- */

const categories = [
  { label: "CLASSIC", Icon: CakeIcon },
  { label: "GOURMET", Icon: GourmetIcon },
  { label: "DESSERTS", Icon: CupcakeIcon },
  { label: "COOKIES", Icon: CookieIcon },
];

function Menu() {
  return (
    <section className="grid gap-6 pt-6 lg:grid-cols-[1fr_auto] lg:items-start">
      <div>
        <h2 className="font-display text-4xl font-extrabold leading-none text-brand-dark sm:text-5xl">
          Menu
        </h2>
        <p className="mt-1 text-base font-semibold text-brand-dark/80 sm:text-lg">
          What will you wish for?
        </p>
        <div className="mt-3 flex gap-3 sm:mt-4">
          {[CakeIcon, CupcakeIcon, GourmetIcon, CookieIcon].map((Icon, i) => (
            <span
              key={i}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-blush text-brand-dark sm:h-12 sm:w-12"
            >
              <Icon className="h-6 w-6" />
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {categories.map(({ label, Icon }) => (
          <a
            key={label}
            href="#"
            className="flex h-24 flex-col items-center justify-center gap-1.5 rounded-xl bg-white shadow-[0_6px_20px_rgba(150,40,40,0.1)] transition hover:-translate-y-1 sm:h-28 sm:gap-2 sm:rounded-2xl lg:w-[118px]"
          >
            <Icon className="h-9 w-9 text-brand sm:h-12 sm:w-12" />
            <span className="font-display text-[11px] font-bold text-cocoa sm:text-sm">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------- Bestsellers ------------------------------- */

function Bestsellers() {
  return (
    <section className="pt-8 sm:pt-10">
      <h2 className="font-display text-2xl font-bold leading-tight text-brand-dark sm:text-3xl">
        Bestsellers from Across the Country
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4 lg:grid-cols-4">
        {bestsellers.map((p) => (
          <article
            key={p.name}
            className="relative rounded-2xl bg-white p-3 pb-12 shadow-[0_6px_20px_rgba(150,40,40,0.1)]"
          >
            <div className="relative mx-auto h-24 w-full overflow-hidden rounded-xl sm:h-28 lg:w-40">
              <Image
                src={p.img}
                alt={p.name}
                width={240}
                height={170}
                sizes="(min-width: 1024px) 160px, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="absolute left-4 top-4 rounded-full bg-white/90 p-1 lg:top-[88px] lg:bg-transparent lg:p-0">
              <HeartIcon className="h-4 w-4 text-brand lg:h-5 lg:w-5" />
            </span>
            <h3 className="mt-3 font-display text-[15px] font-semibold sm:text-[17px] leading-tight text-brand-dark">
              {p.name}
            </h3>
            <div className="mt-1 flex flex-wrap items-center gap-x-1.5 text-xs text-cocoa/60">
              <span className="font-display text-base font-bold text-cocoa">
                ${p.price}
              </span>
              • {p.rating} <span className="hidden sm:inline">(Reviews)</span>
            </div>
            <div className="absolute bottom-4 left-3 sm:left-4">
              <Stars value={p.stars} />
            </div>
            <button
              aria-label={`Add ${p.name} to cart`}
              className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white hover:bg-brand-dark"
            >
              <CartIcon className="h-4 w-4" />
            </button>
          </article>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <a
          href="#"
          className="rounded-full bg-brand-dark px-6 py-2 font-display font-bold text-white shadow-md hover:bg-brand"
        >
          VIEW ALL
        </a>
      </div>
    </section>
  );
}

function Stars({ value }: { value: number }) {
  return (
    <div className="mt-1 flex gap-0.5 text-amber-400" aria-label={`${value} stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <StarIcon
          key={n}
          className="h-3.5 w-3.5"
          fill={n <= value ? "currentColor" : n - 0.5 <= value ? "url(#half)" : "#e5e7eb"}
        />
      ))}
    </div>
  );
}

/* --------------------------------- Promise --------------------------------- */

const promises = [
  { label: "ON-TIME\nDELIVERY", Icon: ClockIcon },
  { label: "500+\nDESIGNS", Icon: TruckIcon },
  { label: "2 CR+\nORDERS", Icon: OrdersIcon },
  { label: "BAKED\nFRESH", Icon: FreshIcon },
];

function OurPromise() {
  return (
    <section className="pt-4">
      <h2 className="font-display text-4xl font-extrabold leading-none text-brand-dark sm:text-5xl">
        Our Promise
      </h2>
      <p className="mt-1 text-base font-semibold text-brand-dark/80 sm:text-lg">
        There&apos;s no secret spell – only honest thek work!
      </p>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="flex flex-col gap-5">
          {/* promise icons */}
          <div className="rounded-2xl bg-blush/70 px-3 py-5 text-center sm:p-5">
            <p className="font-display text-lg leading-snug sm:text-xl font-semibold text-brand-dark">
              A glimpse no secret spell – only hocial world!
            </p>
            <div className="mt-4 grid grid-cols-4 gap-1 sm:gap-2">
              {promises.map(({ label, Icon }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand bg-white/50 text-brand sm:h-[68px] sm:w-[68px]">
                    <Icon className="h-7 w-7 sm:h-9 sm:w-9" />
                  </span>
                  <span className="whitespace-pre-line font-display text-xs font-bold sm:text-sm leading-tight text-brand-dark">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* magical ticket */}
          <div className="relative flex flex-col items-center gap-2 overflow-hidden rounded-2xl bg-blush/70 p-5 text-center sm:flex-row sm:gap-4 sm:text-left">
            <TicketArt className="h-28 w-32 shrink-0 sm:h-32 sm:w-36" />
            <div>
              <h3 className="font-display text-2xl font-extrabold uppercase sm:text-3xl leading-none text-brand-dark">
                The Magical Ticket
              </h3>
              <p className="mt-2 text-sm text-cocoa/80">
                Add 3 reminders in your account.
                <br />
                Win effers worth Rs. 750
              </p>
              <a
                href="#"
                className="mt-3 inline-block whitespace-nowrap rounded-full bg-brand-dark px-6 py-2 font-display font-bold text-white shadow-md hover:bg-brand"
              >
                UNLOCK NOW
              </a>
            </div>
          </div>

          {/* social */}
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl bg-blush/70 px-4 py-3 min-[380px]:justify-between">
            <div className="flex -space-x-1">
              {avatars.map((a) => (
                <Image
                  key={a}
                  src={img(a, 100)}
                  alt=""
                  width={36}
                  height={36}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover sm:h-9 sm:w-9"
                />
              ))}
            </div>
            <a href="#" className="font-display text-sm font-semibold text-brand-dark sm:pr-4 sm:text-base">
              Follow us on social!
            </a>
          </div>
        </div>

        {/* gallery */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {gallery.map((g, i) => (
            <div
              key={i}
              className="relative h-32 overflow-hidden rounded-xl shadow-md sm:h-[148px] md:h-48 lg:h-[148px]"
            >
              <Image
                src={g.img}
                alt=""
                width={400}
                height={300}
                sizes="(min-width: 1024px) 270px, 50vw"
                className="h-full w-full object-cover"
              />
              {g.label && (
                <span className="absolute inset-x-0 bottom-0 whitespace-pre-line bg-gradient-to-t from-black/60 to-transparent px-3 pb-1.5 pt-6 font-display text-xs font-semibold sm:text-sm leading-tight text-white">
                  {g.label}
                </span>
              )}
              {g.corner && (
                <span className="absolute right-3 top-2 whitespace-pre-line text-right font-display text-[11px] font-bold uppercase leading-tight text-white drop-shadow">
                  {g.corner}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Footer --------------------------------- */

function Footer() {
  return (
    <footer className="px-4 pb-6 sm:px-12">
      <div className="rounded-2xl bg-brand-dark px-4 py-3 text-center font-display text-base font-semibold leading-snug text-white shadow-md sm:text-xl">
        Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration
      </div>

      <div className="mt-4 grid gap-6 md:grid-cols-[1fr_2.2fr]">
        <div>
          <Logo className="text-4xl leading-none" />
          <ul className="mt-2 space-y-0.5 text-xs text-cocoa/70">
            {["Our Story", "Contact Us", "Loction & Hours", "Media", "Careers"].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-brand">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {footerCols.map((c, i) => (
              <div key={i}>
                <h4 className="font-display text-xs font-bold tracking-wide text-brand-dark">
                  {c.title}
                </h4>
                <ul className="mt-1 space-y-0.5 text-xs text-cocoa/70">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="hover:text-brand">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <form className="flex flex-1 items-center gap-2">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="min-w-0 flex-1 rounded-full border border-brand/30 bg-white px-4 py-2 text-sm outline-none focus:border-brand sm:max-w-64"
              />
              <button
                type="submit"
                className="rounded-full bg-brand-dark px-5 py-2 font-display text-sm font-bold text-white hover:bg-brand"
              >
                SUBSCRIBE
              </button>
            </form>
            <a href="#" className="flex items-center gap-2 text-[11px] text-cocoa/80 sm:flex-col sm:gap-1">
              <InfoIcon className="h-8 w-8 text-brand-dark" />
              May, need any help?
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------------- Icons ---------------------------------- */

type IconProps = { className?: string };
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function SearchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} strokeWidth={2.2}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function CartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M2 3h2.6l2.7 11.2a2 2 0 0 0 2 1.5h8.3a2 2 0 0 0 1.9-1.4L22 7H6.2l-.9-3.7A1.5 1.5 0 0 0 3.8 2H2v1Z" />
      <circle cx="9.5" cy="19.5" r="1.8" />
      <circle cx="17.5" cy="19.5" r="1.8" />
    </svg>
  );
}

function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 4.5 6.7 4.5c2.1 0 3.6 1.1 4.3 2.4.7-1.3 2.2-2.4 4.3-2.4 3.7 0 5.8 3.9 4.3 7.3C19.5 16.4 12 21 12 21Z" />
    </svg>
  );
}

function StarIcon({ className, fill }: IconProps & { fill: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <defs>
        <linearGradient id="half">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="#e5e7eb" />
        </linearGradient>
      </defs>
      <path
        fill={fill}
        d="m12 2 3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.6 5.9 20.8 7.1 14l-5-4.8 6.9-.9L12 2Z"
      />
    </svg>
  );
}

function CakeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path fill="currentColor" d="M8 22h32v6H8z" opacity=".35" />
      <path
        fill="currentColor"
        d="M8 20c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v4c-1.5 0-2.2 2.5-4 2.5s-2.2-2.5-4-2.5-2.2 2.5-4 2.5-2.2-2.5-4-2.5-2.2 2.5-4 2.5-2.2-2.5-4-2.5-2.2 2.5-4 2.5V20Z"
      />
      <path fill="currentColor" d="M9 28h30v10a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V28Z" />
      <rect x="6" y="40" width="36" height="3" rx="1.5" fill="currentColor" opacity=".7" />
      <circle cx="16" cy="12" r="2.5" fill="currentColor" />
      <circle cx="24" cy="10" r="2.5" fill="currentColor" />
      <circle cx="32" cy="12" r="2.5" fill="currentColor" />
    </svg>
  );
}

function GourmetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke} strokeWidth={2.4}>
      <rect x="9" y="8" width="30" height="32" rx="4" />
      <path d="M9 18h30M9 30h30M15 13h18M15 24h4m4 0h4m4 0h2M15 35h18" />
    </svg>
  );
}

function CupcakeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke} strokeWidth={2.4}>
      <path d="M11 24c-2.5 0-3.5-4 0-5 0-5 4-8 9-7 2-4 8-4 10 0 5-1 9 2 9 7 3.5 1 2.5 5 0 5H11Z" />
      <path d="M12 24l3 16h18l3-16M19 24l1.5 16M29 24l-1.5 16" />
      <circle cx="24" cy="7" r="2" fill="currentColor" />
    </svg>
  );
}

function CookieIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <circle cx="24" cy="24" r="17" fill="none" stroke="currentColor" strokeWidth="2.4" />
      {[
        [17, 16],
        [28, 14],
        [32, 23],
        [19, 27],
        [27, 31],
        [16, 34],
        [24, 22],
        [34, 32],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" fill="currentColor" />
      ))}
    </svg>
  );
}

function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <rect x="10" y="12" width="28" height="26" rx="4" />
      <path d="M16 12V8m16 4V8M10 20h28" />
      <circle cx="24" cy="29" r="5" />
      <path d="M24 27v2.5l1.5 1" />
    </svg>
  );
}

function TruckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <path d="M5 13h24v20H5zM29 20h8l6 7v6H29z" />
      <circle cx="13" cy="35" r="3.5" fill="#fbe5e0" />
      <circle cx="35" cy="35" r="3.5" fill="#fbe5e0" />
      <path d="M10 18h10M10 23h7" />
    </svg>
  );
}

function OrdersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <text
        x="6"
        y="34"
        fontSize="26"
        fontWeight="800"
        fill="currentColor"
        fontFamily="var(--font-baloo)"
      >
        2
      </text>
      <text
        x="23"
        y="27"
        fontSize="11"
        fontWeight="800"
        fill="currentColor"
        fontFamily="var(--font-baloo)"
      >
        CR+
      </text>
    </svg>
  );
}

function FreshIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke}>
      <rect x="8" y="14" width="22" height="26" rx="3" />
      <path d="M13 21h12M13 27h12M13 33h8" />
      <path d="M34 22c0-5 3-9 6-10 1 4-1 9-6 10Zm0 0v18" />
    </svg>
  );
}

function InfoIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 11v6M12 7.5v.01" strokeWidth="2.6" />
    </svg>
  );
}

function TicketArt({ className }: IconProps) {
  const confetti = [
    ["#e11d48", 10, 20, 20],
    ["#f59e0b", 30, 8, -30],
    ["#7c3aed", 120, 12, 40],
    ["#0ea5e9", 130, 40, -20],
    ["#e11d48", 104, 4, 10],
    ["#22c55e", 18, 50, 60],
    ["#f59e0b", 125, 70, 15],
    ["#7c3aed", 6, 80, -45],
  ] as const;
  return (
    <svg viewBox="0 0 150 130" className={className} aria-hidden="true">
      {confetti.map(([c, x, y, r], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="8"
          height="3"
          rx="1.5"
          fill={c}
          transform={`rotate(${r} ${x + 4} ${y + 1.5})`}
        />
      ))}
      <path
        d="M20 30c8-6 14 4 22-2s12-10 18-4M90 18c6 4 12-2 16 4"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M36 22c-4 8 6 10 2 18"
        fill="none"
        stroke="#e11d48"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <g transform="rotate(-35 75 80)">
        <path
          d="M25 60h100v14a6 6 0 0 0 0 12v14H25V86a6 6 0 0 0 0-12V60Z"
          fill="#f6c453"
          stroke="#c98a12"
          strokeWidth="2.5"
        />
        <rect
          x="33"
          y="66"
          width="84"
          height="28"
          rx="3"
          fill="none"
          stroke="#c98a12"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <text
          x="75"
          y="78"
          textAnchor="middle"
          fontSize="11"
          fontWeight="800"
          fill="#8e0f1f"
          fontFamily="var(--font-baloo)"
        >
          MAGICAL
        </text>
        <text
          x="75"
          y="90"
          textAnchor="middle"
          fontSize="11"
          fontWeight="800"
          fill="#8e0f1f"
          fontFamily="var(--font-baloo)"
        >
          TICKET
        </text>
      </g>
      <path d="m125 105 3 6 6 1-5 4 1 6-5-3-5 3 1-6-5-4 6-1Z" fill="#7c3aed" />
    </svg>
  );
}
