import { programs } from '@/data/programs'
import ProgramCard from '@/components/program-card'

export default function ProgramsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-white mb-10">

        Our Programs
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {programs.map((program) => (
          <ProgramCard key={program.slug} program={program} />
        ))}
      </div>
    </main>
  )
}