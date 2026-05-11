"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { useModal } from "../context/ModalContext";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const { setOpen } = useModal();

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "#",
      color: "hover:text-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]",
    },
    {
      icon: FaInstagram,
      href: "#",
      color: "hover:text-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/917871852142",
      color: "hover:text-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)]",
    },
  ];

  return (
    <footer className="relative border-t bg-background px-6 py-20 overflow-hidden" id="contact">

      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 relative z-10">

        {/* BRAND */}
        <div className="space-y-5">

          <img
            src="/logo.png"
            alt="logo"
            className="w-[140px] h-auto"
          />

          <p className="text-sm text-muted-foreground leading-relaxed">
            We build high-converting websites, funnels, and digital marketing systems
            that turn visitors into customers.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-3 pt-2">

            {socialLinks.map((item, i) => {
              const Icon = item.icon;

              return (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  className={`
                    group relative p-3 rounded-xl
                    bg-white/5 border border-white/10
                    transition-all duration-300
                    hover:-translate-y-1
                    ${item.color}
                  `}
                >
                  {/* glow background */}
                  <span className="
                    absolute inset-0 rounded-xl
                    bg-white/5 opacity-0
                    group-hover:opacity-100
                    blur-xl transition
                  " />

                  <Icon className="w-5 h-5 relative z-10 transition-transform group-hover:scale-110" />
                </a>
              );
            })}

          </div>
        </div>

        {/* LINKS */}
        <div className="space-y-4">
          <h3 className="font-semibold text-white">Quick Links</h3>

          <ul className="space-y-3 text-sm text-muted-foreground">
            {["Home", "Services", "About", "Process", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-primary cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-4">

          <h3 className="font-semibold text-white">Contact</h3>

          <div className="space-y-4 text-sm text-muted-foreground">

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Gudiyattam & Vellore</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 78718 52142</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>slpagency@gmail.com</span>
            </div>

          </div>
        </div>

        {/* CTA BOX */}
        <div className="p-6 rounded-2xl border bg-white/5 backdrop-blur space-y-4">

          <h3 className="font-semibold text-white">
            Let’s Build Something Big 🚀
          </h3>

          <p className="text-sm text-muted-foreground">
            Book a free consultation and grow your business online.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="
              w-full py-2 rounded-lg
              bg-gradient-to-r from-purple-500 to-blue-500
              text-white
              hover:scale-[1.02]
              transition
            "
          >
            Get Free Call
          </button>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mt-16 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground relative z-10">

        <p>© {new Date().getFullYear()} Priya Agency. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-primary cursor-pointer">Privacy</span>
          <span className="hover:text-primary cursor-pointer">Terms</span>
        </div>

      </div>

    </footer>
  );
}