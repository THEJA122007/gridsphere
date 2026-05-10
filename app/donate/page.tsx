'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import confetti from 'canvas-confetti'

export default function DonatePage() {
  const [showSuccess, setShowSuccess] = useState(false)

  const searchParams = useSearchParams()
  const amount = searchParams.get('amount')

  const handleDonate = () => {
    confetti({
      particleCount: 250,
      spread: 120,
      origin: { y: 0.6 },
    })

    setShowSuccess(true)

    setTimeout(() => {
      setShowSuccess(false)
    }, 4000)
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-3xl">

        <h1 className="text-6xl font-bold mb-10 text-center">
          Make A Donation
        </h1>

        <div className="bg-[#111111] border border-gray-800 rounded-3xl p-10 shadow-[0_0_40px_rgba(255,255,255,0.05)]">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 mb-6 outline-none focus:border-gray-500 transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 mb-6 outline-none focus:border-gray-500 transition"
          />

          <input
            type="number"
            placeholder="Amount in ₹"
            defaultValue={amount || ''}
            className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 mb-8 outline-none focus:border-gray-500 transition"
          />

          <button
            onClick={handleDonate}
            className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:scale-105 hover:bg-gray-300 transition duration-300"
          >
            Donate Now
          </button>
        </div>

        {showSuccess && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

            <div className="bg-[#111111] border border-gray-700 rounded-3xl p-10 text-center animate-bounce shadow-[0_0_50px_rgba(255,255,255,0.08)]">

              <h2 className="text-5xl mb-4">
                🍫🎉✨
              </h2>

              <h1 className="text-3xl font-bold">
                Thank You!
              </h1>

              <p className="text-gray-400 mt-4 text-lg">
                Your donation will help transform lives.
              </p>

            </div>
          </div>
        )}

      </div>
    </main>
  )
}