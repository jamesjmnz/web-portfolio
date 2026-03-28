"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import LogoLoop from "@/components/LogoLoop"
import { marqueeTechRows } from "@/lib/tech-stack-data"

const iconClassName =
  "text-[3rem] text-[#d7d7d2] transition-all duration-300 opacity-70 [filter:grayscale(1)] hover:text-[#f3f3ef] hover:opacity-100 hover:[filter:grayscale(0)] sm:text-[3.5rem] md:text-[4rem]"

const [topRow, bottomRow] = marqueeTechRows.map((row) =>
  row.map((item) => {
    const Icon = item.icon

    return {
      node: <Icon className={iconClassName} />,
      title: item.name,
      href: item.href,
    }
  }),
)

export function TechMarquee() {
  return (
    <section id="tech" className="relative overflow-hidden px-4 py-24 sm:px-6 md:px-10 md:py-32 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-10 flex w-full max-w-[1800px] items-end justify-between gap-6"
      >
        <p className="mb-4 font-mono text-xs tracking-[0.3em] text-[#b7b7b1]">04 / TECHNICAL ARSENAL</p>
        <Link
          href="/tech-stack"
          className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-white/56 transition-colors duration-300 hover:text-white"
        >
          See all
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto flex w-full max-w-[1800px] flex-col gap-6 overflow-hidden border-y border-[#cfcfc7]/12 bg-[rgba(6,6,6,0.2)] px-0 py-6 backdrop-blur-[1px] sm:py-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(245,245,240,0.02),transparent_28%,transparent_72%,rgba(245,245,240,0.02))]" />

        <div className="relative h-[96px] overflow-hidden sm:h-[112px]">
          <LogoLoop
            logos={topRow}
            speed={110}
            direction="left"
            logoHeight={52}
            gap={88}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="#0a0a0a"
            scaleOnHover
            ariaLabel="Technical arsenal top row"
          />
        </div>

        <div className="relative h-[96px] overflow-hidden sm:h-[112px]">
          <LogoLoop
            logos={bottomRow}
            speed={110}
            direction="right"
            logoHeight={52}
            gap={88}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="#0a0a0a"
            scaleOnHover
            ariaLabel="Technical arsenal bottom row"
          />
        </div>
      </motion.div>
    </section>
  )
}
