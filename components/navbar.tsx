import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="GridSphere Logo"
            width={45}
            height={45}
            className="rounded-full border border-gray-700 shadow-[0_0_20px_rgba(255,255,255,0.08)]"
          />

          <h1 className="text-3xl font-bold text-white">
            GridSphere
          </h1>
        </Link>

        <nav className="flex items-center gap-6 text-gray-300">
          <Link
            href="/"
            className="hover:text-white transition"
          >
            Home
          </Link>

          <Link
            href="/programs"
            className="hover:text-white transition"
          >
            Programs
          </Link>

          <Link
            href="/about"
            className="hover:text-white transition"
          >
            Impact
          </Link>

          <Link
            href="/donate"
            className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-300 transition"
          >
            Donate
          </Link>
        </nav>

      </div>
    </header>
  )
}