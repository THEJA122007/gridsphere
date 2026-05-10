import Footer from '@/components/footer'

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-6xl font-bold mb-10">
          Our Impact
        </h1>

        <p className="text-xl text-gray-400 leading-9 max-w-4xl">
          GridSphere empowers nonprofits and communities
          through transparent donations, impactful programs,
          and sustainable development initiatives.
        </p>

        {/* IMPACT STATS */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-[#111111] p-10 rounded-3xl border border-gray-800 hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <h2 className="text-5xl font-bold">
              42+
            </h2>

            <p className="text-gray-400 mt-4">
              Countries Reached
            </p>
          </div>

          <div className="bg-[#111111] p-10 rounded-3xl border border-gray-800 hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <h2 className="text-5xl font-bold">
              ₹3.4Cr+
            </h2>

            <p className="text-gray-400 mt-4">
              Funds Raised
            </p>
          </div>

          <div className="bg-[#111111] p-10 rounded-3xl border border-gray-800 hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <h2 className="text-5xl font-bold">
              120K+
            </h2>

            <p className="text-gray-400 mt-4">
              Lives Impacted
            </p>
          </div>

        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Reviews & Feedback
          </h2>

          <p className="text-gray-400 mt-6 text-xl">
            Hear from donors, volunteers, and communities
            impacted by GridSphere.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(255,255,255,0.04)]">

            <div className="text-4xl mb-4">
              ⭐️⭐️⭐️⭐️⭐️
            </div>

            <p className="text-gray-300 leading-8">
              “GridSphere made it incredibly easy to support
              meaningful causes. The transparency and updates
              gave me confidence in every donation.”
            </p>

            <h3 className="text-white font-bold mt-6">
              Priya Sharma
            </h3>

            <p className="text-gray-500 text-sm">
              Donor • Bengaluru
            </p>

          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(255,255,255,0.04)]">

            <div className="text-4xl mb-4">
              ⭐️⭐️⭐️⭐️⭐️
            </div>

            <p className="text-gray-300 leading-8">
              “The clean water initiative transformed our
              village completely. Families now have access
              to safe drinking water every day.”
            </p>

            <h3 className="text-white font-bold mt-6">
              Ravi Kumar
            </h3>

            <p className="text-gray-500 text-sm">
              Community Volunteer
            </p>

          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(255,255,255,0.04)]">

            <div className="text-4xl mb-4">
              ⭐️⭐️⭐️⭐️⭐️
            </div>

            <p className="text-gray-300 leading-8">
              “A beautifully designed platform with real impact.
              I love how simple and engaging the donation
              experience feels.”
            </p>

            <h3 className="text-white font-bold mt-6">
              Ananya Patel
            </h3>

            <p className="text-gray-500 text-sm">
              Monthly Supporter
            </p>

          </div>

        </div>
      </section>
      {/* ADD REVIEW SECTION */}
<section className="max-w-4xl mx-auto px-6 pb-24">

  <div className="bg-[#111111] border border-gray-800 rounded-3xl p-10 shadow-[0_0_30px_rgba(255,255,255,0.04)]">

    <h2 className="text-4xl font-bold mb-8 text-center">
      Share Your Feedback
    </h2>

    <input
      type="text"
      placeholder="Your Name"
      className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 mb-6 outline-none focus:border-gray-500 transition"
    />

    <input
      type="email"
      placeholder="Your Email"
      className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 mb-6 outline-none focus:border-gray-500 transition"
    />

    <textarea
      placeholder="Write your review..."
      rows={5}
      className="w-full bg-black border border-gray-700 rounded-2xl px-5 py-4 mb-8 outline-none focus:border-gray-500 transition"
    />

    <button className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:bg-gray-300 hover:scale-105 transition duration-300">
      Submit Review
    </button>

  </div>

</section>

      <Footer />

    </main>
  )
}