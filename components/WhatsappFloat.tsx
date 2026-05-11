"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/917871852142"
      target="_blank"
      className="
        fixed bottom-6 right-6 z-50
        group
      "
    >
      {/* Glow Ring */}
      <span className="
        absolute inset-0
        rounded-full
        bg-gradient-to-r from-green-400 to-emerald-600
        blur-xl opacity-70
        animate-pulse
      " />

      {/* Outer ring animation */}
      <span className="
        absolute inset-0
        rounded-full
        border-2 border-green-400/40
        animate-ping
      " />

      {/* Button */}
      <div className="
        relative
        w-14 h-14
        flex items-center justify-center
        rounded-full
        bg-gradient-to-r from-green-500 to-emerald-600
        text-white
        shadow-lg
        transition-all duration-300
        hover:scale-110 hover:shadow-green-500/50
      ">
        <FaWhatsapp className="w-6 h-6" />
      </div>

    </a>
  );
}