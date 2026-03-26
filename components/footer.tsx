"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const contactRows = [
  {
    index: "/01",
    label: "EMAIL",
    value: "ASUNAHALEY@GMAIL.COM",
    href: "mailto:asunahaley@gmail.com",
  },
  {
    index: "/02",
    label: "GITHUB",
    value: "@JAMESJMNZ",
    href: "https://github.com/jamesjmnz",
  },
  {
    index: "/03",
    label: "LINKEDIN",
    value: "JAMES JIMENEZ",
    href: "https://www.linkedin.com",
  },
]

export function Footer() {
  const [time, setTime] = useState("")
  const [isHovered, setIsHovered] = useState(false)
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      const milliseconds = now.getMilliseconds().toString().padStart(3, "0")
      setTime(`${hours}:${minutes}:${seconds}.${milliseconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 10)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer id="contact" className="relative">
      {/* Main CTA */}
      <motion.a
        href="mailto:asunahaley@gmail.com"
        data-cursor-hover
        className="relative block overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Curtain */}
        <motion.div
          className="absolute inset-0 bg-[#d6d6d1]"
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Content */}
        <div className="relative py-16 md:py-24 px-8 md:px-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.h2
              className="font-sans text-4xl md:text-6xl lg:text-8xl font-light tracking-tight text-center md:text-left"
              animate={{
                color: isHovered ? "#050505" : "#fafafa",
              }}
              transition={{ duration: 0.3 }}
            >
              Let's <span className="italic">Collaborate</span>
            </motion.h2>

            <motion.div
              animate={{
                rotate: isHovered ? 45 : 0,
                color: isHovered ? "#050505" : "#fafafa",
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>
          </div>
        </div>
      </motion.a>

      <div className="border-t border-white/10 px-8 py-10 md:px-12 md:py-12">
        <div className="space-y-0 border-y border-white/12">
          {contactRows.map((row) => (
            <motion.a
              key={row.label}
              href={row.href}
              data-cursor-hover
              target={row.href.startsWith("http") ? "_blank" : undefined}
              rel={row.href.startsWith("http") ? "noreferrer" : undefined}
              onMouseEnter={() => setHoveredRow(row.label)}
              onMouseLeave={() => setHoveredRow(null)}
              className="group relative grid grid-cols-1 items-center gap-4 overflow-hidden border-t border-white/10 px-0 py-6 first:border-t-0 md:grid-cols-[88px_150px_minmax(0,1fr)] md:gap-6 md:py-8"
            >
              <motion.span
                className="absolute inset-0 bg-[#d6d6d1]"
                initial={{ y: "100%" }}
                animate={{ y: hoveredRow === row.label ? "0%" : "100%" }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              />
              <motion.span
                className="relative z-10 font-mono text-xs tracking-[0.28em]"
                animate={{
                  color: hoveredRow === row.label ? "rgba(5,5,5,0.7)" : "rgba(255,255,255,0.38)",
                }}
                transition={{ duration: 0.3 }}
              >
                {row.index}
              </motion.span>
              <motion.span
                className="relative z-10 font-mono text-sm tracking-[0.18em]"
                animate={{
                  color: hoveredRow === row.label ? "#050505" : "rgba(255,255,255,0.72)",
                }}
                transition={{ duration: 0.3 }}
              >
                {row.label}
              </motion.span>
              <motion.span
                className="relative z-10 text-center font-mono text-[clamp(2.4rem,6.4vw,6.5rem)] leading-[0.88] tracking-[-0.08em]"
                animate={{
                  color: hoveredRow === row.label ? "#050505" : "#fafafa",
                }}
                transition={{ duration: 0.3 }}
              >
                {row.value}
              </motion.span>
            </motion.a>
          ))}
        </div>

        <div className="grid gap-8 pt-10 md:grid-cols-[1fr_auto_1fr] md:items-start md:pt-14">
          <div className="space-y-2 font-mono">
            <p className="text-xs tracking-[0.24em] text-white/22">LOCATION_DATA</p>
            <p className="text-sm tracking-[0.16em] text-white/88">PANGASINAN, PHILIPPINES</p>
            <p className="text-sm tracking-[0.14em] text-white/42">14.2123° N, 121.1633° E</p>
          </div>

          <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          </div>

          <div className="grid gap-8 font-mono md:grid-cols-2 md:justify-self-end">
            <div className="space-y-2">
              <p className="text-xs tracking-[0.24em] text-white/22">TIMEZONE</p>
              <p className="text-sm tracking-[0.16em] text-white/88">GMT +8</p>
              <p className="text-sm tabular-nums tracking-[0.14em] text-white/42">{time}</p>
            </div>

            <div className="space-y-2">
              <p className="text-xs tracking-[0.24em] text-white/22">VERSION</p>
              <p className="text-sm tracking-[0.16em] text-white/88">V3.0.0</p>
              <p className="text-sm tracking-[0.14em] text-white/42">NEXTJS / TYPESCRIPT</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
