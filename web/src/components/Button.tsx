import type { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "terciary"
}

export function Button({
  children,
  onClick,
  variant = "primary"
}: ButtonProps) {
  const baseStyle =
    "flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition cursor-pointer"

  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    secondary: "bg-zinc-800 text-zinc-200 hover:bg-zinc-700",
    terciary: "bg-zinc-800 text-zinc-200 hover:bg-orange-700"
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </button>
)
}
