import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "white";
  size?: "sm" | "md";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const sizes = size === "sm" ? "h-10 px-4 text-sm" : "h-12 px-5 text-[15px]";
  const variants = {
    primary: "bg-orange text-white hover:bg-orange-hover",
    secondary: "border border-line bg-white text-ink hover:bg-fog",
    ghost: "text-ink hover:text-orange",
    white: "bg-white text-ink hover:bg-fog",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg font-semibold transition-colors ${sizes} ${variants} ${className}`}
    >
      {children}
    </Link>
  );
}
