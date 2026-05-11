"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
 import { useModal } from "@/components/context/ModalContext";
import { use } from "react";

export default function Hero() {
    const { setOpen } = useModal();

  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center justify-center px-6
        bg-[url('/hero.jpg')]
        bg-cover bg-center bg-no-repeat overflow-hidden
      "
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full" />

      {/* Content */}
      <div
        className="relative z-10 text-center max-w-4xl space-y-8"
        data-aos="fade-up"
      >

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/10 backdrop-blur-md">
          <span className="text-sm text-white/80">
            🚀 Premium Digital Marketing Agency
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white">
          Grow Your Business with{" "}
          <span className="text-primary">
            High-Converting clients
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          We design modern landing pages & full-stack web apps
          that turn visitors into paying customers.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">

          <Button
            size="lg"
            className="gap-2 px-8 py-6 text-base font-medium"
            onClick={()=>{
              setOpen(true)
            }}
          >
            Get Free Consultation
            <ArrowRight size={18} />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="
              px-8 py-6 text-base
              bg-white/10 border-white/20
              text-white hover:bg-white/20
              backdrop-blur-md
            "
          >
            <a href="#portfolio">
 View Our Work
            </a>
           
          </Button>

        </div>

        {/* Secondary CTA */}
        <p className="text-sm text-white/60">
          No credit card required • Free strategy call
        </p>
      </div>
    </section>
  );
}