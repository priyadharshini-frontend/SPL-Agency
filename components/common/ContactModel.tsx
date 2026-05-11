"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { useModal } from "@/components/context/ModalContext";
import { useState } from "react";

export default function ContactModel() {
  const { open, setOpen } = useModal();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const data = {
      name: form.name,
      email: form.email.value,
      business: form.business.value,
      message: form.message.value,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogContent className="sm:max-w-[500px] bg-[#0B1120]/95 text-white">

        <DialogHeader>
          <DialogTitle>Let’s Grow Your Brand 🚀</DialogTitle>
          <DialogDescription>
            Fill the form and we will contact you
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">

          <Input name="name" placeholder="Name" required />
          <Input name="email" placeholder="Email" required />
          <Input name="business" placeholder="Business" />
          <Textarea name="message" placeholder="Message" required />

          <Button className="w-full">
            {loading ? "Sending..." : "Submit"}
          </Button>

        </form>

      </DialogContent>

    </Dialog>
  );
}