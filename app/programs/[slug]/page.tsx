import { programs } from '@/data/programs'
import Footer from '@/components/footer'
import Link from 'next/link'

export default async function ProgramDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const program = programs.find(
    (p) => p.slug === slug
  )

  if (!program) {
    return (
      <main className="min-h-screen bg-black p-20 text-white">
        <h1 className="text-5xl font-bold">
          Program not found
        </h1>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        <img
          src={program.image}
          alt={program.title}
          className="w-full h-[500px] object-cover rounded-3xl"
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">

            <h1 className="text-6xl font-bold mb-8">
              {program.title}
            </h1>

            <div className="space-y-6 text-gray-300 text-xl leading-9">

              <p>{program.description}</p>

              <p>
                Millions of families around the world still
                struggle to access basic necessities and
                opportunities every single day.
              </p>

              <p>
                This initiative focuses on sustainable support,
                community-driven solutions, and long-term impact.
              </p>

              <p>
                Through local partnerships and dedicated
                volunteers, GridSphere ensures transparency,
                accountability, and measurable outcomes.
              </p>

              <p>
                Every contribution directly helps improve lives,
                strengthen communities, and create meaningful
                social impact worldwide.
              </p>

            </div>
          </div>

          {/* RIGHT DONATION BOX */}
          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 h-fit sticky top-28 shadow-[0_0_40px_rgba(255,255,255,0.04)]">

            <h2 className="text-4xl font-bold mb-6">
              Support This Program
            </h2>

            <p className="text-gray-400 mb-10 leading-8">
              Your donation helps us expand this initiative
              and reach more communities in need.
            </p>

            {/* DONATION BUTTONS */}
            <div className="flex flex-col gap-6 mt-6">

              <Link href="/donate?amount=500">
                <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-gray-300 hover:scale-105 transition duration-300 shadow-lg">
                  Donate ₹500
                </button>
              </Link>

              <Link href="/donate?amount=1000">
                <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-gray-300 hover:scale-105 transition duration-300 shadow-lg">
                  Donate ₹1000
                </button>
              </Link>

              <Link href="/donate?amount=5000">
                <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-gray-300 hover:scale-105 transition duration-300 shadow-lg">
                  Donate ₹5000
                </button>
              </Link>

            </div>

            {/* SHARE BUTTON */}
            <a
              href={`https://wa.me/?text=Support this amazing program on GridSphere ${encodeURIComponent(
                `http://localhost:3000/programs/${program.slug}`
              )}`}
              target="_blank"
              className="block mt-8"
            >
              <button className="w-full border border-gray-700 py-4 rounded-2xl hover:bg-gray-900 transition">
                Share Program
              </button>
            </a>

          </div>
        </div>

        {/* IMPACT STATS */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-10 text-center hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <h2 className="text-5xl font-bold">
              15K+
            </h2>

            <p className="text-gray-400 mt-4">
              People Supported
            </p>
          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-10 text-center hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <h2 className="text-5xl font-bold">
              ₹80L+
            </h2>

            <p className="text-gray-400 mt-4">
              Funds Utilized
            </p>
          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-10 text-center hover:scale-105 transition duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <h2 className="text-5xl font-bold">
              42+
            </h2>

            <p className="text-gray-400 mt-4">
              Active Communities
            </p>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  )
}