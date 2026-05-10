'use client'

import { motion } from 'framer-motion'
import { programs } from '@/data/programs'
import ProgramCard from '@/components/program-card'
import CountUp from 'react-countup'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl font-bold leading-tight"
        >
          Building Impact
          <span className="text-gray-400"> Through </span>
          Giving
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto mt-8 leading-9"
        >
          GridSphere connects donors, volunteers, and nonprofits
          to create meaningful change across education,
          healthcare, clean water, and food relief programs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center gap-6"
        >
          <a
            href="/donate"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-300 transition"
          >
            Donate Now
          </a>

          <a
            href="/programs"
            className="border border-gray-700 px-8 py-4 rounded-full hover:bg-gray-900 transition"
          >
            Explore Programs
          </a>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-5xl font-bold">
            Featured Programs
          </h2>

          <p className="text-gray-500">
            Creating measurable social impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {programs.map((program) => (
            <ProgramCard
              key={program.slug}
              program={program}
            />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-10 text-center transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] cursor-pointer">
            <h2 className="text-5xl font-bold text-white">
              <CountUp end={42} duration={3} />+
            </h2>

            <p className="text-gray-400 mt-4">
              Countries Reached
            </p>
          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-10 text-center transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] cursor-pointer">
            <h2 className="text-5xl font-bold text-white">
             ₹<CountUp end={3.4} decimals={1} duration={3} />Cr+
            </h2>

            <p className="text-gray-400 mt-4">
              Donations Raised
            </p>
          </div>

          <div className="bg-[#111111] border border-gray-800 rounded-3xl p-10 text-center transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] cursor-pointer">
            <h2 className="text-5xl font-bold text-white">
              <CountUp end={120} duration={3} />K+
            </h2>

            <p className="text-gray-400 mt-4">
              Lives Impacted
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}