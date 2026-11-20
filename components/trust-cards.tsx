import { CreditCard, HeartHandshake, ShieldCheck } from "lucide-react";

import { trustCallouts } from "@/lib/content";
import { Reveal } from "@/components/reveal";

const icons = {
  shield: ShieldCheck,
  card: CreditCard,
  heart: HeartHandshake,
};

export function TrustCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {trustCallouts.map((item, index) => {
        const Icon = icons[item.icon];
        return (
          <Reveal key={item.title} delay={index * 0.08}>
            <div className="group flex h-full flex-col gap-4 rounded-3xl border border-pine-950/10 bg-white/55 p-6 transition-colors hover:border-sand-500/40 hover:bg-white/80">
              <span className="grid size-11 place-items-center rounded-2xl bg-pine-950 text-sand-300 transition-colors group-hover:bg-sand-500 group-hover:text-pine-950">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-pine-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-pine-900/70">{item.description}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
