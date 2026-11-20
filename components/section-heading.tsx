import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        tone === "dark" && "on-dark",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        className={cn(
          "mt-4 font-display text-3xl leading-[1.06] tracking-[-0.03em] sm:text-4xl lg:text-[2.9rem]",
          tone === "dark" ? "text-cream" : "text-pine-950",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-7 sm:text-lg sm:leading-8",
            tone === "dark" ? "text-cream/70" : "text-pine-900/75",
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  );
}
