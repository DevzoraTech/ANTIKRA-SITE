import { motion } from "framer-motion"
import { Logo } from "./Logo"
import { images } from "../data/images"

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-aegean/10 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-brand/15 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative overflow-hidden rounded-2xl border border-brand/15 shadow-[0_32px_80px_rgba(30,77,92,0.12)]"
      >
        <div className="image-overlay-light absolute inset-0 z-10" />
        <img
          src={images.hero.mechanism}
          alt="The Antikythera mechanism, a 2,000-year-old bronze astronomical computer"
          className="aspect-[4/5] w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-night/75 via-night/20 to-transparent" />
        <div className="absolute right-4 bottom-4 left-4 z-30 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-light">
              ~150 BC
            </p>
            <p className="mt-1 font-display text-lg leading-snug text-white">
              The instrument that inspired our name
            </p>
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/95 shadow-lg">
            <Logo variant="mark" size="sm" animated className="text-brand" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="absolute -right-4 top-8 z-40 w-[42%] overflow-hidden rounded-xl border-2 border-white shadow-xl md:-right-8 md:w-[38%]"
      >
        <img
          src={images.hero.engineering}
          alt="Modern precision engineering"
          className="aspect-square w-full object-cover"
          loading="eager"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="absolute -bottom-4 -left-2 z-40 max-w-[200px] overflow-hidden rounded-xl border border-aegean/20 bg-aegean p-4 shadow-lg md:-left-6"
      >
        <img
          src={images.hero.aegean}
          alt="Aegean Sea, origin of the Antikythera discovery"
          className="mb-3 aspect-video w-full rounded-lg object-cover opacity-90"
          loading="lazy"
        />
        <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-light">
          Antikythera, Greece
        </p>
        <p className="mt-1 text-xs leading-relaxed text-white/80">
          Where the mechanism was discovered in 1901
        </p>
      </motion.div>
    </div>
  )
}
