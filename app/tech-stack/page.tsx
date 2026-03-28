import Link from "next/link"
import { MoveLeft } from "lucide-react"

import { techStackCategories } from "@/lib/tech-stack-data"

export default function TechStackPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-4 pb-20 pt-24 sm:px-6 md:px-10 md:pb-24 md:pt-28 lg:px-16">
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="space-y-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-[0.04em] text-white/72 transition-colors duration-300 hover:text-white"
          >
            <MoveLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="space-y-10">
            <h1 className="font-sans text-5xl tracking-tight text-[#e3e3dc] sm:text-6xl md:text-7xl">
              TECH STACK
            </h1>

            <section className="space-y-9">
              {techStackCategories.map((category) => (
                <div key={category.title} className="space-y-4">
                  <h2 className="font-sans text-3xl tracking-tight text-[#d4d4cd] sm:text-4xl md:text-5xl">
                    {category.title.toUpperCase()}
                  </h2>

                  <div className="flex flex-wrap gap-3">
                    {category.items.map((item) => {
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="border border-white/15 bg-white/[0.04] px-3 py-2 font-mono text-[10px] tracking-[0.22em] text-white/72 uppercase transition-colors duration-300 hover:bg-white hover:text-black"
                        >
                          {item.name}
                        </a>
                      )
                    })}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
