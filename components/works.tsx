"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const projects = [
  {
    title: "VERIFIAI",
    tags: ["NEXTJS", "TYPESCRIPT", "TAILWIND", "PYTHON", "FASTAPI", "LANGGRAPH", "LANGCHAIN", "QDRANT", "PYTORCH", "PRISMA", "NEON", "OPENAI", "HUGGINGFACE"],
    image: "/abstract-neural-network-visualization-dark-theme.jpg",
    year: "2026",
  },
  {
    title: "AILLAGMATHA",
    tags: ["NEXTJS", "TYPESCRIPT", "TAILWIND", "PYTHON", "FASTAPI", "LANGGRAPH", "LANGCHAIN", "QDRANT", "PYTORCH", "PRISMA", "NEON", "OPENAI", "HUGGINGFACE"],
    image: "/futuristic-data-dashboard-dark-minimal.jpg",
    year: "2026",
  },
  {
    title: "REVIEWMYDORM",
    tags: ["NEXTJS", "TYPESCRIPT", "TAILWIND","NEON", "PRISMA"],
    image: "/abstract-memory-storage-visualization.jpg",
    year: "2025",
  },
  {
    title: "CAPSTONE GENERATOR",
    tags: ["REACT", "TAILWIND", "NODEJS", "EXPRESS", "OPENAI", "MONGODB"],
    image: "/sound-wave-visualization-dark-theme.jpg",
    year: "2025",
  },
]

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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
            <a
              href="#"
              data-cursor-hover
              className="group flex flex-col justify-between gap-4 md:flex-row md:items-center"
            >
              {/* Year */}
              <span className="order-1 font-mono text-[10px] tracking-[0.24em] text-muted-foreground sm:text-xs sm:tracking-widest md:order-none">
                {project.year}
              </span>

              {/* Title */}
              <motion.h3
                className="flex-1 font-sans text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-white/70 sm:text-4xl md:text-6xl lg:text-7xl"
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
            </a>
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
    </section>
  )
}
