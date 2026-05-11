"use client";

import Image from "next/image";
import { useModal } from "../context/ModalContext";

import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { setOpen } = useModal();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock scroll for mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b
        ${scrolled
          ? "bg-background/90 backdrop-blur-md shadow-md py-2"
          : "bg-background/60 backdrop-blur-sm py-4"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Logo */}
        <Image src="/logo.png" width={100} height={40} alt="logo" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">Why Us</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button
            className="gap-2 p-5"
            onClick={() => setOpen(true)}
          >
            Get Started <ArrowRight size={16} />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 w-full bg-background border-t px-6 py-10 flex flex-col gap-6">

          <a onClick={closeMenu} href="#home">Home</a>
          <a onClick={closeMenu} href="#services">Services</a>
          <a onClick={closeMenu} href="#about">About</a>
          <a onClick={closeMenu} href="#process">Process</a>
          <a onClick={closeMenu} href="#contact">Contact</a>

          <Button
            className="w-full gap-2 mt-6"
            onClick={() => {
              setOpen(true);   // open modal
              closeMenu();     // close menu
            }}
          >
            Get Started <ArrowRight size={16} />
          </Button>

        </div>
      )}
    </header>
  );
}