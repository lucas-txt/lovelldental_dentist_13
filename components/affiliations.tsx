import Image from "next/image";

import { affiliations } from "@/lib/content";

export function Affiliations() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {affiliations.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-center gap-3 rounded-2xl border border-pine-950/10 bg-cream p-4 text-center"
        >
          <div className="flex h-10 items-center justify-center">
            <Image loading="eager"
              src={item.logo}
              alt={item.name}
              width={112}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </div>
          <p className="text-[0.68rem] font-semibold uppercase leading-4 tracking-[0.12em] text-pine-800">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}
