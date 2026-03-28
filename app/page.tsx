"use client";

import { useEffect, useState } from "react";

const desktopImages = [
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=2200&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2200&q=80",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=2200&q=80",
];

const mobileImages = [
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
];

const featureCards = [
  {
    title: "Noir Signature",
    text: "A deep black palette softened by warm neutrals, creating a sensual editorial mood with quiet luxury at its core.",
  },
  {
    title: "Fluid Presence",
    text: "Proportions, spacing, and typography adapt with ease, preserving the same poised presence from mobile to full-screen view.",
  },
  {
    title: "House Identity",
    text: "Each section speaks the same refined language, giving the entire experience a cohesive, elevated, and unmistakably Douxel feel.",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const heroImages = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkScreen);
    };
  }, [heroImages.length]);

  const handleSubscribe = async () => {
    if (!email) return;

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("You're on the list.");
        setEmail("");
      } else {
        setMessage("Something went wrong. Try again.");
      }
    } catch {
      setMessage("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main className="luxury-shell min-h-screen overflow-x-hidden bg-black text-white">
      <section className="relative isolate flex min-h-screen items-center overflow-hidden">
        <div className="luxury-grid absolute inset-0 opacity-30" />

        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.30),rgba(0,0,0,0.84))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,232,203,0.14),transparent_30%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,420px)] lg:items-end lg:px-12 xl:px-16">
          <div className="max-w-3xl text-left">
            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-stone-300 sm:text-sm">
              Quiet luxury. Modern intimacy.
            </p>

            <h1 className="font-serif text-5xl leading-none tracking-[0.16em] text-white sm:text-7xl lg:text-8xl xl:text-[7rem]">
              DOUXEL
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-200 sm:text-xl">
              Define your own expression of elegance with a darker, softer,
              more personal kind of luxury.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
              Designed for women who dress for themselves first. Refined
              silhouettes, intimate confidence, and understated presence.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full border border-stone-200/70 bg-stone-100 px-8 py-3 text-sm font-medium uppercase tracking-[0.18em] text-black transition hover:bg-transparent hover:text-white">
                Launching Soon
              </button>
              <a
                href="#join"
                className="rounded-full border border-white/20 px-8 py-3 text-center text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:border-stone-200 hover:bg-white/8"
              >
                Join Waitlist
              </a>
            </div>
          </div>

          <div className="w-full rounded-[2rem] border border-white/10 bg-white/6 p-5 backdrop-blur-md sm:p-6">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/55 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                Brand Essence
              </p>
              <h2 className="mt-4 font-serif text-3xl text-stone-50 sm:text-4xl">
                Not made to impress. Made to express.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-stone-300 sm:text-base">
                <p>Self-chosen elegance over loud attention.</p>
                <p>Statement pieces with softness, confidence, and restraint.</p>
                <p>Luxury that feels intimate before it feels seen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-18 sm:px-8 lg:grid-cols-3 lg:px-12 xl:px-16">
        {featureCards.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)]"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
              {item.title}
            </p>
            <p className="mt-4 text-sm leading-7 text-stone-300 sm:text-base">
              {item.text}
            </p>
          </article>
        ))}
      </section>

      <section
        id="join"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-18 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:px-12 xl:px-16"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
            Inner Circle
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-stone-50 sm:text-5xl">
            Join the private list for first access, limited releases, and house updates.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-stone-300">
            Created for those drawn to discreet luxury, the sign-up experience
            feels intimate, polished, and effortless across every screen.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:p-7">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/70 p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-stone-400">
              Get Early Access
            </p>
            <p className="mt-3 text-sm leading-7 text-stone-300">
              Receive early entry to the world of Douxel, along with exclusive
              arrivals, private drops, and first word on the launch.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full border border-white/14 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-stone-500 focus:border-stone-200 focus:outline-none"
              />

              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="w-full rounded-full border border-stone-200/80 bg-stone-100 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-black transition hover:bg-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Joining..." : "Get Early Access"}
              </button>

              {message && (
                <p className="text-sm text-stone-300" aria-live="polite">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8 px-5 py-8 text-center text-xs uppercase tracking-[0.18em] text-stone-500 sm:px-8 sm:text-sm lg:px-12 xl:px-16">
        Copyright {new Date().getFullYear()} DOUXEL Luxury Women&apos;s Fashion
         <p className="mt-2 text-[11px] tracking-wide text-gray-600">
    Operated by Cieldoux Innovations Private Limited
  </p>
      </footer>
     
    </main>
  );
}
