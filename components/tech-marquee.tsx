"use client"

import { motion } from "framer-motion"
import {
  SiFigma,
  SiFramer,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si"

import LogoLoop from "@/components/LogoLoop"

const iconClassName =
  "text-[3rem] text-[#d7d7d2] transition-all duration-300 opacity-70 [filter:grayscale(1)] hover:text-[#f3f3ef] hover:opacity-100 hover:[filter:grayscale(0)] sm:text-[3.5rem] md:text-[4rem]"

const topLogos = [
  { node: <SiReact className={iconClassName} />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className={iconClassName} />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className={iconClassName} />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className={iconClassName} />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className={iconClassName} />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiOpenai className={iconClassName} />, title: "OpenAI", href: "https://openai.com" },
]

const bottomLogos = [
  { node: <SiFramer className={iconClassName} />, title: "Framer", href: "https://www.framer.com/motion/" },
  { node: <SiPython className={iconClassName} />, title: "Python", href: "https://www.python.org" },
  { node: <SiGithub className={iconClassName} />, title: "GitHub", href: "https://github.com" },
  { node: <SiVercel className={iconClassName} />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiFigma className={iconClassName} />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiPostgresql className={iconClassName} />, title: "PostgreSQL", href: "https://www.postgresql.org" },
]

export function TechMarquee() {
  return (
    <section id="tech" className="relative overflow-hidden px-4 py-24 sm:px-6 md:px-10 md:py-32 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-10 w-full max-w-[1800px]"
      >
        <p className="mb-4 font-mono text-xs tracking-[0.3em] text-[#b7b7b1]">04 / TECHNICAL ARSENAL</p>
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
            logos={topLogos}
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
            logos={bottomLogos}
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
