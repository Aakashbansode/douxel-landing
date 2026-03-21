"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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
        setMessage("You're on the list 💌");
        setEmail("");
      } else {
        setMessage("Something went wrong. Try again.");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#f9f6f3] text-gray-900">

      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581044777550-4cfa60707c03')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-white px-6">
          <h1 className="text-7xl md:text-8xl font-serif tracking-widest mb-6">
            DOUXEL™
          </h1>

          <p className="text-lg md:text-xl max-w-xl mx-auto mb-6 leading-relaxed">
            Define Your Own Expression of Elegance & Luxury
          </p>

          <p className="text-sm md:text-base max-w-md mx-auto mb-10 text-gray-200">
            Luxury that is not for the world — but for yourself.
          </p>

          <button className="border border-white px-10 py-3 hover:bg-white hover:text-black transition duration-300 tracking-wide">
            Launching Soon
          </button>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="py-28 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif mb-6 tracking-wide">
          Not Made to Impress. Made to Express.
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          DOUXEL™ is a luxury women’s fashion brand built for those who choose
          themselves. Beyond trends and expectations, we create pieces that
          reflect confidence, individuality, and quiet elegance.
        </p>
      </section>

      {/* EMAIL SUBSCRIBE */}
      <section className="py-28 bg-white text-center">
        <h2 className="text-4xl font-serif mb-4">
          Join The Inner Circle
        </h2>

        <p className="text-gray-600 mb-10">
          Be the first to experience DOUXEL™. Early access. Exclusive drops.
        </p>

        <div className="flex flex-col items-center gap-5">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-6 py-3 w-80 focus:outline-none focus:border-black transition"
          />

          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="px-10 py-3 border border-black hover:bg-black hover:text-white transition duration-300 tracking-wide"
          >
            {loading ? "Joining..." : "Get Early Access"}
          </button>

          {message && (
            <p className="mt-4 text-sm text-gray-600">{message}</p>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DOUXEL™ — Luxury Women’s Fashion
      </footer>
    </main>
  );
}