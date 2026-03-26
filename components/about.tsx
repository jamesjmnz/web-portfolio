"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const detailBlocks = [
  "I enjoy building web experiences that feel sharp, usable, and a little cinematic. My focus stays on interfaces that look intentional and still perform cleanly.",
  "From frontend systems to full-stack product work, I like turning rough ideas into polished builds with structure, motion, and personality.",
]

const quickStats = [
  { label: "FOCUS", value: "FULL-STACK / AI / ML" },
  { label: "BASE", value: "PHILIPPINES" },
  { label: "STATUS", value: "BUILDING COOL THINGS" },
]

export function About() {
  return (
    <section
      id="about"
      className="relative px-4 py-12 sm:px-6 sm:py-14 md:px-10 lg:px-16 lg:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-[1800px] border border-white/18 bg-black/55 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset] sm:p-5 lg:min-h-[90vh] lg:p-8"
      >
        <FrameCorners />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] opacity-25" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_18%,transparent_82%,rgba(255,255,255,0.04))]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_56%)]" />

        <div className="relative grid gap-4 lg:min-h-[calc(90vh-4rem)] lg:grid-cols-[1.04fr_1.56fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative h-[38vh] min-h-[260px] max-h-[420px] overflow-hidden border border-white/18 bg-black/70 sm:h-[42vh] sm:min-h-[320px] lg:h-full lg:max-h-none lg:min-h-0"
          >
            <Image
              src="/image_portfolio.jpg"
              alt="James portrait"
              fill
              priority
              className="object-cover object-center grayscale contrast-110 brightness-[0.80]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015)_28%,rgba(0,0,0,0.5)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.78)_0.9px,transparent_1.1px)] bg-[size:4px_4px] opacity-40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.18),rgba(0,0,0,0.18))]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.55),transparent_28%,transparent_72%,rgba(0,0,0,0.38))]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.03),transparent)] opacity-60" />
            <div className="absolute inset-x-[10%] top-[10%] h-[18%] bg-white/5 blur-3xl" />

            <div className="absolute inset-x-0 bottom-0 h-[24%] bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.82))]" />
            <div className="absolute left-4 top-4 border border-white/20 bg-black/35 px-2.5 py-1 text-[9px] font-mono tracking-[0.28em] text-white/50 sm:left-6 sm:top-6 sm:px-3 sm:text-[10px] sm:tracking-[0.35em]">
              IMAGE PORTFOLIO
            </div>
            <div className="absolute bottom-4 left-4 text-[9px] font-mono tracking-[0.28em] text-white/34 sm:bottom-6 sm:left-6 sm:text-[10px] sm:tracking-[0.35em]">
              PORTRAIT FRAME 01
            </div>
          </motion.div>

          <div className="grid gap-4 lg:h-full lg:grid-rows-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
              className="relative border border-white/18 bg-black/65 px-4 py-5 sm:px-7 sm:py-7 lg:px-9 lg:py-8"
            >
              <div className="mb-5 flex flex-col items-start gap-2 text-[9px] font-mono tracking-[0.28em] text-white/42 sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-[10px] sm:tracking-[0.35em]">
                <span>02 / ABOUT</span>
                <span>PERSONAL OVERVIEW</span>
              </div>

              <h2 className="text-left font-mono text-[clamp(1.65rem,8vw,5rem)] uppercase leading-[0.92] tracking-[-0.06em] text-white sm:text-[clamp(2rem,4.8vw,5rem)] sm:leading-[0.9] md:text-right md:tracking-[-0.08em]">
                JAMES IS A FIRST YEAR
                <br />
                STUDENT AT THE
                <br />
                <span className="text-white/35">UNIVERSITY OF</span>
                <br />
                <span className="text-white/35">PANGASINAN</span>, STUDYING
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                INFORMATION TECHNOLOGY
              </h2>

              <div className="mt-5 flex items-center gap-3 sm:gap-4">
                <div className="h-px flex-1 bg-white/16" />
                <span className="text-[9px] font-mono tracking-[0.32em] text-white/30 sm:text-[10px] sm:tracking-[0.4em]">
                  PROFILE ACTIVE
                </span>
              </div>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-[1.18fr_0.82fr]">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                className="grid border border-white/18 bg-black/65 p-4 sm:p-6"
              >
                <div className="mb-4 flex flex-col items-start gap-2 text-[9px] font-mono tracking-[0.28em] text-white/38 sm:mb-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-[10px] sm:tracking-[0.35em]">
                  <span>NOTES</span>
                  <span>CAPABILITIES</span>
                </div>

                <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
                  {detailBlocks.map((copy) => (
                    <p
                      key={copy}
                      className="font-mono text-[0.74rem] uppercase leading-[1.55] tracking-[-0.02em] text-white/62 sm:text-[0.9rem] sm:tracking-[-0.03em]"
                    >
                      {copy}
                    </p>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.14, ease: "easeOut" }}
                className="relative border border-white/18 bg-black/65 p-4 sm:p-6"
              >
                <div className="pointer-events-none absolute bottom-4 right-4 hidden font-mono text-[10px] tracking-[0.45em] text-white/16 [writing-mode:vertical-rl] sm:block">
                  ABOUT
                </div>

                <div className="space-y-4 sm:pr-8">
                  {quickStats.map((item, index) => (
                    <div key={item.label} className={index !== 0 ? "border-t border-white/14 pt-4" : ""}>
                      <p className="mb-2 text-[9px] font-mono tracking-[0.28em] text-white/36 sm:text-[10px] sm:tracking-[0.35em]">
                        {item.label}
                      </p>
                      <p className="font-mono text-[0.92rem] uppercase leading-[1.15] tracking-[-0.04em] text-white sm:text-[1.3rem] sm:leading-[1.02] sm:tracking-[-0.06em]">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function FrameCorners() {
  return (
    <>
      <span className="absolute left-3 top-3 h-3 w-3 bg-white sm:left-5 sm:top-5" />
      <span className="absolute right-3 top-3 h-3 w-3 bg-white sm:right-5 sm:top-5" />
      <span className="absolute bottom-3 left-3 h-3 w-3 bg-white sm:bottom-5 sm:left-5" />
      <span className="absolute bottom-3 right-3 h-3 w-3 bg-white sm:bottom-5 sm:right-5" />
    </>
  )
}
