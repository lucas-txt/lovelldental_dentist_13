"use client";

import { useState } from "react";
import { CheckCircle2, LoaderCircle, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/field";
import { services, site } from "@/lib/content";

const appointmentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Please keep your name under 80 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number where we can reach you.")
    .max(24, "Please enter a shorter phone number."),
  service: z.string().max(80),
  message: z
    .string()
    .trim()
    .min(10, "Please share a few details about your visit.")
    .max(1200, "Please keep your message under 1,200 characters."),
});

type AppointmentValues = z.infer<typeof appointmentSchema>;

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState<AppointmentValues | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  const onSubmit = async (values: AppointmentValues) => {
    setSubmitted(values);
    reset(values);
  };

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-pine-200 bg-pine-50 p-6 sm:p-8">
        <span className="grid size-12 place-items-center rounded-2xl bg-pine-950 text-sand-300">
          <CheckCircle2 className="size-6" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-display text-2xl text-pine-950">
          Thank you, {submitted.name.split(" ")[0]}.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-7 text-pine-900/75">
          Your appointment request has been received. Our team will follow up to confirm a time.
          For a dental emergency, call{" "}
          <a href={site.emergencyPhoneHref} className="font-semibold text-pine-950 underline">
            {site.emergencyPhone}
          </a>
          .
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button type="button" variant="outline" onClick={() => setSubmitted(null)}>
            Send another request
          </Button>
          <Button asChild variant="dark">
            <a href={site.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              Call {site.phone}
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Jane Doe"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          {errors.name ? (
            <p id="name-error" className="text-xs font-medium text-clay-dark">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(307) 000-0000"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          {errors.phone ? (
            <p id="phone-error" className="text-xs font-medium text-clay-dark">
              {errors.phone.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="jane@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email ? (
          <p id="email-error" className="text-xs font-medium text-clay-dark">
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">How can we help?</Label>
        <select
          id="service"
          className="h-12 w-full rounded-2xl border border-pine-950/15 bg-white/70 px-4 text-sm text-pine-950 transition-colors focus-visible:border-sand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand-500/30"
          {...register("service")}
        >
          <option value="">General appointment</option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Emergency appointment">Emergency appointment</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Tell us what you need, and when you'd like to come in."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message ? (
          <p id="message-error" className="text-xs font-medium text-clay-dark">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
          ) : null}
          Request appointment
        </Button>
        <p className="text-xs leading-5 text-pine-900/75">
          We&apos;ll follow up to confirm a time. For emergencies, call{" "}
          <a href={site.emergencyPhoneHref} className="font-semibold text-pine-950 underline">
            {site.emergencyPhone}
          </a>
          .
        </p>
      </div>
    </form>
  );
}
