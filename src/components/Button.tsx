import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "outline" | "aegean" | "ghost" | "light" | "glass"
  size?: "sm" | "md" | "lg"
  as?: "button" | "a"
  href?: string
}

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-sm",
  outline:
    "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  aegean:
    "border-2 border-aegean text-aegean hover:bg-aegean hover:text-white",
  ghost: "text-ink hover:bg-black/5",
  light: "bg-white text-ink hover:bg-brand-light shadow-sm",
  glass:
    "border border-white/35 text-white hover:border-white/70 hover:bg-white/10 backdrop-blur-md",
}

const sizes = {
  sm: "px-5 py-2 text-xs",
  md: "px-8 py-3 text-sm",
  lg: "px-10 py-4 text-base",
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  as = "button",
  href,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-wider transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`

  if (as === "a" && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
