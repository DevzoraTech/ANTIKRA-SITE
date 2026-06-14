import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { faqItems } from "../data/content"

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id)

  return (
    <section id="faq" className="section-padding">
      <div className="container-wide max-w-4xl">
        <h2 className="text-center font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold text-ink">
          Questions
        </h2>

        <div className="mt-12 divide-y divide-brand/10">
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            return (
              <div key={item.id} className="py-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-ink md:text-lg">
                    {item.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-relaxed text-muted md:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
