"use client"

import { FormEvent, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MessageCircle, Send, X } from "lucide-react"

type Message = {
  id: number
  author: "James" | "You"
  body: string
}

const initialMessages: Message[] = [
  {
    id: 1,
    author: "James",
    body:
      "Welcome to the void. Ask about my projects, AI builds, or how I turn sharp ideas into working systems.",
  },
  {
    id: 2,
    author: "James",
    body:
      "This chat is a concept shell for now, so I designed it to feel like a live terminal embedded into the portfolio.",
  },
]

const quickReplies = ["Latest projects", "Tech stack", "Work together"]
const SHOW_TRIGGER_SCROLL_Y = 36
const HIDE_TRIGGER_SCROLL_Y = 6
const HIDE_TRIGGER_DELAY_MS = 120

const cannedReplies: Record<string, string> = {
  "latest projects":
    "I build full-stack products, AI-assisted workflows, and interfaces that feel cinematic without losing usability.",
  "tech stack":
    "I usually work across Next.js, TypeScript, React, backend services, AI integrations, and modern product systems.",
  "work together":
    "If you want to collaborate, jump to the contact section or send a note through the portfolio contact links.",
}

const chatTriggerTransition = {
  type: "spring",
  stiffness: 260,
  damping: 24,
  mass: 0.9,
}

const chatTriggerVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.92,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: chatTriggerTransition,
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.96,
    filter: "blur(6px)",
    transition: {
      duration: 0.22,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const chatTriggerContentVariants = {
  hidden: {
    opacity: 0,
    y: 6,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.22,
      delay: 0.06,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 4,
    transition: {
      duration: 0.14,
      ease: [0.4, 0, 1, 1],
    },
  },
}

export function FloatingChat() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState(initialMessages)
  const hideTimeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const shouldShow = scrollY > SHOW_TRIGGER_SCROLL_Y
      const shouldHide = scrollY <= HIDE_TRIGGER_SCROLL_Y

      if (shouldShow) {
        if (hideTimeoutRef.current) {
          window.clearTimeout(hideTimeoutRef.current)
          hideTimeoutRef.current = null
        }

        setIsVisible(true)
      }

      if (shouldHide) {
        setIsOpen(false)

        if (!hideTimeoutRef.current) {
          hideTimeoutRef.current = window.setTimeout(() => {
            setIsVisible(false)
            hideTimeoutRef.current = null
          }, HIDE_TRIGGER_DELAY_MS)
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)

      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current)
      }
    }
  }, [])

  const submitMessage = (rawMessage: string) => {
    const trimmed = rawMessage.trim()

    if (!trimmed) return

    const userMessage: Message = {
      id: Date.now(),
      author: "You",
      body: trimmed,
    }

    const normalized = trimmed.toLowerCase()
    const matchedReply =
      cannedReplies[normalized] ??
      "I'd love to talk more. For now this prototype keeps the interface local, but the full assistant flow can be connected next."

    const replyMessage: Message = {
      id: Date.now() + 1,
      author: "James",
      body: matchedReply,
    }

    setMessages((current) => [...current, userMessage, replyMessage])
    setInput("")
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    submitMessage(input)
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[70] flex justify-end p-4 sm:p-6">
      <div className="pointer-events-auto flex w-full max-w-[24rem] flex-col items-end gap-3 sm:max-w-[28rem]">
        <AnimatePresence>
          {isVisible && isOpen && (
            <motion.section
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full overflow-hidden border border-white/15 bg-[#090909]/96 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_38%)]" />

              <div className="relative border-b border-white/12 px-4 py-4 sm:px-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/14 bg-white/6 font-mono text-sm tracking-[0.3em] text-white">
                      JJ
                    </div>
                    <div className="space-y-1">
                      <p className="font-mono text-[10px] tracking-[0.32em] text-white/42">VOID CHANNEL / ACTIVE</p>
                      <h2 className="font-mono text-xl uppercase tracking-[-0.05em] text-white sm:text-2xl">
                        Chat With James
                      </h2>
                      <div className="flex items-center gap-3 text-xs font-mono tracking-[0.24em] text-white/50">
                        <span className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />
                          ONLINE
                        </span>
                        <span>AI-ASSISTED</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex h-11 w-11 items-center justify-center border border-white/14 bg-white text-black transition-colors duration-300 hover:bg-transparent hover:text-white"
                    aria-label="Close chat"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="relative max-h-[24rem] space-y-4 overflow-y-auto px-4 py-4 sm:px-5 sm:py-5">
                {messages.map((message) => {
                  const isJames = message.author === "James"

                  return (
                    <div key={message.id} className={`flex ${isJames ? "justify-start" : "justify-end"}`}>
                      <div className={`max-w-[86%] ${isJames ? "" : "items-end"} flex flex-col gap-2`}>
                        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.28em] text-white/34">
                          <span>{isJames ? "JAMES NODE" : "VISITOR SIGNAL"}</span>
                        </div>
                        <div
                          className={`border px-4 py-3 text-sm leading-6 sm:text-[15px] ${
                            isJames
                              ? "border-white/10 bg-white/[0.06] text-white"
                              : "border-white/18 bg-[#d6d6d1] text-black"
                          }`}
                        >
                          {message.body}
                        </div>
                      </div>
                    </div>
                  )
                })}

                <div className="flex flex-wrap gap-2 pt-1">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      type="button"
                      onClick={() => submitMessage(reply)}
                      className="border border-white/12 px-3 py-2 font-mono text-[10px] tracking-[0.24em] text-white/60 uppercase transition-colors duration-300 hover:bg-white hover:text-black"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="relative border-t border-white/12 p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <label htmlFor="floating-chat-input" className="sr-only">
                    Enter a message
                  </label>
                  <input
                    id="floating-chat-input"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    placeholder="Transmit into the void..."
                    className="h-14 flex-1 border border-white/14 bg-black/40 px-4 font-mono text-sm tracking-[0.08em] text-white outline-none transition-colors placeholder:text-white/28 focus:border-white/40"
                  />
                  <button
                    type="submit"
                    className="flex h-14 w-14 items-center justify-center border border-white/14 bg-[#d6d6d1] text-black transition-transform duration-300 hover:scale-[1.04]"
                    aria-label="Send message"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </motion.section>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.button
              type="button"
              variants={chatTriggerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen((current) => !current)}
              className="group flex min-h-14 origin-bottom-right items-center gap-3 border border-white/12 bg-[#ece7df] px-5 text-black shadow-[0_16px_48px_rgba(0,0,0,0.38)] will-change-transform transition-transform duration-300 hover:-translate-y-1"
              aria-expanded={isOpen}
              aria-label="Open chat"
            >
              <motion.span
                variants={chatTriggerContentVariants}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-black/20 bg-black/5 transition-colors duration-300 group-hover:bg-black group-hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
              </motion.span>
              <motion.span
                variants={chatTriggerContentVariants}
                className="font-mono text-xs uppercase tracking-[0.24em] sm:text-[0.72rem]"
              >
                Open Void Chat
              </motion.span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
