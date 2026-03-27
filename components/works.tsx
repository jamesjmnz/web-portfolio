"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ArrowUpRight, Github, X } from "lucide-react"

import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet"

const projects = [
  {
    title: "VERIFIAI",
    tags: ["NEXTJS", "TYPESCRIPT", "TAILWIND", "PYTHON", "FASTAPI", "LANGGRAPH", "LANGCHAIN", "QDRANT", "PYTORCH", "PRISMA", "NEON", "OPENAI", "HUGGINGFACE"],
    image: "/abstract-neural-network-visualization-dark-theme.jpg",
    year: "2026",
    category: "AI VERIFICATION PLATFORM",
    summary:
      "A forensic AI workspace for validating machine-generated claims, surfacing source confidence, and exposing weak reasoning chains before they reach production.",
    description:
      "VerifiAI is built for high-stakes research flows where speed is not enough. The platform combines retrieval, ranking, and multi-step reasoning so users can interrogate questionable outputs, trace supporting evidence, and pressure-test each conclusion inside a deliberately raw, low-distraction interface.",
    highlights: [
      "Multi-agent verification pipeline for evidence gathering and contradiction detection",
      "Confidence layers that separate weak references from corroborated sources",
      "Analyst-first interface with fast review loops and minimal visual noise",
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "AILLAGMATHA",
    tags: ["NEXTJS", "TYPESCRIPT", "TAILWIND", "PYTHON", "FASTAPI", "LANGGRAPH", "LANGCHAIN", "QDRANT", "PYTORCH", "PRISMA", "NEON", "OPENAI", "HUGGINGFACE"],
    image: "/futuristic-data-dashboard-dark-minimal.jpg",
    year: "2026",
    category: "KNOWLEDGE SYSTEM",
    summary:
      "An experimental intelligence layer for structured memory, retrieval, and decision support across dense academic and technical material.",
    description:
      "Aillagmatha turns fragmented notes, references, and long-form documents into a navigable intelligence grid. It emphasizes context preservation, semantic search, and deliberate output shaping so users can move from raw material to synthesis without losing the trail of how each answer was formed.",
    highlights: [
      "Persistent memory graph for cross-document concept linking",
      "Retrieval orchestration tuned for long context and research-grade queries",
      "Dark, dashboard-like UX that prioritizes signal over decoration",
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "REVIEWMYDORM",
    tags: ["NEXTJS", "TYPESCRIPT", "TAILWIND", "NEON", "PRISMA"],
    image: "/abstract-memory-storage-visualization.jpg",
    year: "2025",
    category: "COMMUNITY PLATFORM",
    summary:
      "A student-led dorm review platform designed to make housing decisions less opaque, more social, and easier to trust.",
    description:
      "ReviewMyDorm centralizes dorm feedback, ratings, and experience reports into a clean review system that helps students compare living options before committing. The product focuses on clarity, social proof, and lightweight contribution flows that keep the platform active without overwhelming first-time users.",
    highlights: [
      "Searchable dorm review listings with structured criteria and commentary",
      "Relational data model for reviews, profiles, and dorm metadata",
      "Practical UI optimized for quick scanning on mobile and desktop",
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "CAPSTONE GENERATOR",
    tags: ["REACT", "TAILWIND", "NODEJS", "EXPRESS", "OPENAI", "MONGODB"],
    image: "/sound-wave-visualization-dark-theme.jpg",
    year: "2025",
    category: "IDEATION ENGINE",
    summary:
      "A prompt-driven concept generator that helps students discover viable capstone ideas with sharper scopes and faster iteration.",
    description:
      "Capstone Generator transforms vague interests into buildable project directions by combining guided prompting, AI-assisted framing, and feasibility-aware output generation. The experience is tuned to reduce blank-page paralysis while still giving users enough control to steer toward realistic deliverables.",
    highlights: [
      "Idea generation flow with scoped outputs and research-ready framing",
      "Backend service for prompt orchestration and response handling",
      "Lightweight interface built to move from concept to shortlist quickly",
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
]

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  return (
    <section id="works" className="relative px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 sm:mb-16 md:mb-24"
      >
        <p className="mb-3 font-mono text-[10px] tracking-[0.26em] text-muted-foreground sm:mb-4 sm:text-xs sm:tracking-[0.3em]">
          03 — SELECTED WORKS
        </p>
        <h2 className="font-sans text-2xl font-light italic sm:text-3xl md:text-5xl">The Distortion Gallery</h2>
      </motion.div>

      {/* Projects List */}
      <div ref={containerRef} onMouseMove={handleMouseMove} className="relative">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative border-t border-white/10 py-6 sm:py-8 md:py-12"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <button
              type="button"
              data-cursor-hover
              className="group flex w-full flex-col justify-between gap-4 text-left md:flex-row md:items-center"
              onClick={() => setSelectedProject(project)}
            >
              {/* Year */}
              <span className="order-1 font-mono text-[10px] tracking-[0.24em] text-muted-foreground sm:text-xs sm:tracking-widest md:order-none">
                {project.year}
              </span>

              {/* Title */}
              <motion.h3
                className="flex-1 font-sans text-3xl  tracking-tight transition-colors duration-300 group-hover:text-white/70 sm:text-4xl md:text-6xl lg:text-7xl"
                animate={{
                  x: hoveredIndex === index ? 20 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {project.title}
              </motion.h3>

              {/* Tags */}
              <div className="order-2 flex flex-wrap gap-2 md:order-none md:max-w-[320px] md:justify-end lg:max-w-[420px]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 px-2.5 py-1 font-mono text-[9px] tracking-[0.18em] text-muted-foreground sm:px-3 sm:text-[10px] sm:tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          </motion.div>
        ))}

        {/* Floating Image */}
        <motion.div
          className="pointer-events-none absolute z-50 hidden h-40 w-64 overflow-hidden rounded-lg md:block md:h-48 md:w-80"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-320%",
          }}
          animate={{
            opacity: hoveredIndex !== null ? 1 : 0,
            scale: hoveredIndex !== null ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          {hoveredIndex !== null && (
            <motion.img
              src={projects[hoveredIndex].image}
              alt={projects[hoveredIndex].title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                filter: "grayscale(50%) contrast(1.1)",
              }}
            />
          )}
          {/* Glitch overlay */}
          <div className="absolute inset-0 bg-[#d6d6d1]/20 mix-blend-overlay" />
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/10" />

      <Sheet open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <SheetContent
          side="right"
          className="w-full overflow-hidden border-l border-white/15 bg-[linear-gradient(180deg,rgba(9,9,9,0.98),rgba(18,18,18,0.98))] p-0 text-white [&>button]:hidden sm:max-w-[680px]"
        >
          {selectedProject && (
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-8">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] text-white/45">PROJECT DOSSIER</p>
                  <SheetTitle className="mt-2 font-sans text-2xl font-light italic tracking-tight text-white sm:text-4xl">
                    {selectedProject.title}
                  </SheetTitle>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="flex h-11 w-11 items-center justify-center border border-white/15 bg-white/[0.03] text-white/65 transition hover:bg-white/[0.08] hover:text-white"
                  aria-label="Close project details"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="overflow-y-auto">
                <div className="relative border-b border-white/10">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-64 w-full object-cover grayscale sm:h-80"
                    style={{ filter: "grayscale(100%) contrast(1.08) brightness(0.75)" }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.7))]" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6">
                    <div>
                      <p className="font-mono text-[10px] tracking-[0.28em] text-white/50">{selectedProject.category}</p>
                      <SheetDescription className="mt-3 max-w-xl text-sm leading-6 text-white/78 sm:text-base">
                        {selectedProject.summary}
                      </SheetDescription>
                    </div>
                    <span className="border border-white/15 bg-black/40 px-3 py-2 font-mono text-[10px] tracking-[0.3em] text-white/65">
                      {selectedProject.year}
                    </span>
                  </div>
                </div>

                <div className="grid gap-8 px-5 py-6 sm:px-8 sm:py-8">
                  <div className="grid gap-3">
                    <p className="font-mono text-[10px] tracking-[0.28em] text-white/45">FULL DESCRIPTION</p>
                    <p className="max-w-2xl text-sm leading-7 text-white/78 sm:text-[15px]">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid gap-3">
                    <p className="font-mono text-[10px] tracking-[0.28em] text-white/45">TECH STACK</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/15 bg-white/[0.04] px-3 py-2 font-mono text-[10px] tracking-[0.22em] text-white/72"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3">
                    <p className="font-mono text-[10px] tracking-[0.28em] text-white/45">SYSTEM NOTES</p>
                    <div className="grid gap-3">
                      {selectedProject.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="border border-white/10 bg-white/[0.025] px-4 py-4 text-sm leading-6 text-white/76"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-3 border-t border-white/10 pt-6">
                    <p className="font-mono text-[10px] tracking-[0.28em] text-white/45">LINKS</p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between border border-white/15 bg-white/[0.04] px-4 py-3 font-mono text-[10px] tracking-[0.24em] text-white/78 transition hover:bg-white/[0.09] hover:text-white"
                      >
                        <span className="flex items-center gap-2">
                          <Github className="h-3.5 w-3.5" />
                          VIEW ON GITHUB
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between border border-white/15 bg-transparent px-4 py-3 font-mono text-[10px] tracking-[0.24em] text-white/78 transition hover:bg-white/[0.09] hover:text-white"
                      >
                        <span>LIVE PREVIEW</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </section>
  )
}
