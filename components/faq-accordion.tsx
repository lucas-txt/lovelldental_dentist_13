"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/lib/content";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  items: Faq[];
  className?: string;
  defaultOpen?: number;
};

export function FaqAccordion({ items, className, defaultOpen }: FaqAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen !== undefined ? `faq-${defaultOpen}` : undefined}
      className={cn("w-full", className)}
    >
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`faq-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
