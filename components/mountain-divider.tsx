import { cn } from "@/lib/utils";

type MountainDividerProps = {
  className?: string;
  flip?: boolean;
  tone?: "light" | "dark";
};

export function MountainDivider({ className, flip = false, tone = "light" }: MountainDividerProps) {
  const fill = tone === "dark" ? "var(--color-pine-950)" : "var(--color-cream)";

  return (
    <div className={cn("pointer-events-none w-full overflow-hidden leading-[0]", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className={cn("h-[60px] w-full sm:h-[90px]", flip && "rotate-180")}
      >
        <path
          d="M0 92L120 70L228 86L350 44L470 76L596 30L720 68L842 38L964 74L1088 34L1214 72L1320 52L1440 84V110H0V92Z"
          fill={fill}
          opacity="0.55"
        />
        <path
          d="M0 102L140 82L262 96L402 62L532 92L668 50L804 88L944 56L1082 92L1210 58L1330 88L1440 70V110H0V102Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
