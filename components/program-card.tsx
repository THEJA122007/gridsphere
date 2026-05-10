'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProgramCard({
  program,
}: {
  program: any
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className="bg-[#111111] border border-gray-800 rounded-3xl overflow-hidden hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
    >
      <motion.img
        src={program.image}
        alt={program.title}
        className="w-full h-[320px] object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />

      <div className="p-10">
        <h2 className="text-4xl font-bold mb-4">
          {program.title}
        </h2>

        <p className="text-gray-400 text-lg leading-8 mb-8">
          {program.description}
        </p>

        <Link href={`/programs/${program.slug}`}>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-300 hover:scale-105 transition duration-300">
            View Program
          </button>
        </Link>
      </div>
    </motion.div>
  )
}