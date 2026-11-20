import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-sand-400 text-pine-950 shadow-[0_14px_34px_-18px_rgba(198,162,119,0.9)] hover:-translate-y-0.5 hover:bg-sand-300",
        dark: "bg-pine-950 text-cream shadow-[0_14px_34px_-20px_rgba(11,33,28,0.9)] hover:-translate-y-0.5 hover:bg-pine-900",
        outline:
          "border border-pine-950/20 bg-transparent text-pine-950 hover:border-pine-950/40 hover:bg-pine-950 hover:text-cream",
        "outline-light":
          "border border-cream/25 bg-cream/5 text-cream hover:border-cream/50 hover:bg-cream/10",
        ghost: "text-pine-950 hover:bg-pine-950/5",
        clay: "bg-clay text-cream shadow-[0_14px_34px_-18px_rgba(180,86,47,0.9)] hover:-translate-y-0.5 hover:bg-clay-dark",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-12 px-7 text-[0.95rem]",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
