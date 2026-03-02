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
        setMessage("You're on the list 💕");
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
    <main className="min-h-screen bg-[#f8f5f2] text-gray-900 font-light">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-6xl tracking-wide mb-6">
          Douxel™
        </h1>
        <p className="text-lg max-w-xl mb-8">
          Redefining modern intimacy. Luxury lingerie & feminine fashion crafted for confidence.
        </p>
      </section>

      {/* Email Section */}
      <section className="py-24 text-center">
        <h2 className="text-3xl mb-4">Join The Inner Circle</h2>
        <p className="mb-8">
          Get early access & exclusive launch offers.
        </p>

        <div className="flex flex-col items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-4 py-3 w-72 focus:outline-none"
          />

          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="px-8 py-3 border border-black hover:bg-black hover:text-white transition duration-300"
          >
            {loading ? "Subscribing..." : "Join Now"}
          </button>

          {message && (
            <p className="mt-4 text-sm text-gray-700">{message}</p>
          )}
        </div>
      </section>

    </main>
  );
}