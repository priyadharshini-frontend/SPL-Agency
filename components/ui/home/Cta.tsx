'use client'
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/context/ModalContext";

export default function Cta() {
  const {setOpen}=useModal()
  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">

      <div className="max-w-4xl mx-auto text-center space-y-6" data-aos="fade-up">

        <h2 className="text-3xl md:text-5xl font-bold">
          Ready to Grow Your Business?
        </h2>

        <p className="opacity-90">
          Get a free strategy call and start generating more leads.
        </p>

        <Button variant="secondary" size="lg" className="p-5" onClick={()=>{
          setOpen(true)
        }}>
          Get Free Consultation
        </Button>

      </div>

    </section>
  );
}