import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full rounded-2xl border border-pine-950/15 bg-white/70 px-4 text-sm text-pine-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-colors placeholder:text-pine-950/60 focus-visible:border-sand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand-500/30 aria-invalid:border-clay aria-invalid:ring-clay/20",
        className,
      )}
      {...props}
    />
  );
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-32 w-full resize-y rounded-2xl border border-pine-950/15 bg-white/70 px-4 py-3 text-sm text-pine-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-colors placeholder:text-pine-950/60 focus-visible:border-sand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand-500/30 aria-invalid:border-clay aria-invalid:ring-clay/20",
        className,
      )}
      {...props}
    />
  );
}

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn("text-xs font-semibold uppercase tracking-[0.16em] text-pine-900/70", className)}
      {...props}
    />
  );
}

export { Input, Label, Textarea };
