import React from "react";
import AscordLightMode from "@/components/ui/logo-lightmode";
import { JoinButton } from "@/components/auth/join-button";
import { ModeToggle } from "@/components/mode-toogle";

export default function Header() {

  return (
    <header className="py-4 border-b border-slate-300 dark:border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center border border-slate-300 dark:border-white/15 p-2.5 rounded-xl max-w-2xl mx-auto md">
          {/* Logo and App Name Section */}
          <div className="flex items-center gap-2">
            <div className="border h-12 w-12 rounded-lg flex justify-center items-center border-slate-300 dark:border-white/15">
                <AscordLightMode className="h-10 w-10" />
            </div>
            <span className="font-bold text-black dark:text-white">Ascord</span>
          </div>

          {/* Navigation Section */}
          <div className="hidden md:flex gap-8">
            <nav className="flex gap-8">
              <a
                className="text-slate-600 dark:text-white/70 hover:text-black dark:hover:text-white transition"
                href="#"
              >
                Features
              </a>
              <a
                className="text-slate-600 dark:text-white/70 hover:text-black dark:hover:text-white transition"
                href="#"
              >
                Testimonials
              </a>
              <a
                className="text-slate-600 dark:text-white/70 hover:text-black dark:hover:text-white transition"
                href="#"
              >
                Changelog
              </a>
            </nav>
          </div>

          {/* Join Button and Toggle Section */}
          <div className="flex items-center gap-2">
            <JoinButton mode="modal" asChild>
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 dark:border-slate-300 bg-[linear-gradient(110deg,#eaeaea,45%,#dcdcdc,55%,#eaeaea)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-900 dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-950">
                Get started
              </button>
            </JoinButton>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}