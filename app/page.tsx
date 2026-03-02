export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5f2] text-gray-900 font-light">
      
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-6xl tracking-wide mb-6">
          Douxel™
        </h1>
        <p className="text-lg max-w-xl mb-8">
          Redefining modern intimacy. Luxury lingerie & feminine fashion crafted for confidence.
        </p>
        <button className="px-8 py-3 border border-black hover:bg-black hover:text-white transition duration-300">
          Join The Inner Circle
        </button>
      </section>

      <section className="py-24 text-center">
        <h2 className="text-3xl mb-4">Launching Soon</h2>
        <p className="mb-8">Be the first to experience Douxel.</p>
        <input 
          type="email"
          placeholder="Enter your email"
          className="border px-4 py-3 w-72 focus:outline-none"
        />
      </section>

    </main>
  )
}