"use client";

import React, { useState } from "react";
import AscordLightMode from "@/components/ui/logo-lightmode";
import { JoinButton } from "@/components/auth/join-button";
import { ModeToggle } from "@/components/mode-toogle";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed md:top-4 left-0 w-full z-[9999]">
      <div className="flex justify-center">
        <div className="flex justify-between items-center bg-white dark:bg-black md:border md:border-slate-300 md:dark:border-white/[0.15] p-2.5 md:rounded-xl w-full  md:mx-8 md:bg-white md:dark:bg-black shadow-md transition-colors duration-300">
          {/* Logo and App Name Section */}
          <div className="flex items-center gap-2">
            <div className="border h-12 w-12 rounded-lg flex justify-center items-center border-slate-300 dark:border-white/[0.15]">
              <AscordLightMode className="h-10 w-10" />
            </div>
            <span className="font-bold text-black dark:text-white">Ascord</span>
          </div>

          {/* Navigation Section */}
          <nav
            className={`absolute md:static top-full left-0 w-full md:w-auto bg-white dark:bg-black border md:border-none border-slate-300 dark:border-white/[0.15] md:rounded-xl shadow-md md:shadow-none transition-all duration-300 ${
              isMenuOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none md:opacity-100 md:scale-100 md:pointer-events-auto"
            } md:flex md:items-center md:gap-8`}
          >
            <a
              className="block md:inline-block px-6 py-4 md:py-0 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition"
              href="#features"
            >
              Features
            </a>
            <a
              className="block md:inline-block px-6 py-4 md:py-0 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition"
              href="#testimonials"
            >
              Testimonials
            </a>
            <a
              className="block md:inline-block px-6 py-4 md:py-0 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition"
              href="#changelog"
            >
              Changelog
            </a>
          </nav>

          {/* Mobile Controls Section */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Get Started Button */}
            <JoinButton mode="modal" asChild>
              <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 dark:border-slate-300 bg-[linear-gradient(110deg,#eaeaea,45%,#dcdcdc,55%,#eaeaea)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-900 dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-950">
                Get started
              </button>
            </JoinButton>

            {/* Mode Toggle */}
            <ModeToggle />

            {/* Hamburger Icon */}
            <button
              className="flex items-center justify-center h-10 w-10 text-black dark:text-white"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center gap-2">
            {/* Get Started Button */}
            <JoinButton mode="modal" asChild>
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 dark:border-slate-300 bg-[linear-gradient(110deg,#eaeaea,45%,#dcdcdc,55%,#eaeaea)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-900 dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-950">
                Get started
              </button>
            </JoinButton>

            {/* Mode Toggle */}
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}