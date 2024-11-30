"use client";

import React from 'react'
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { JoinButton } from '../auth/join-button';

export default function CallToAction() {
    const words = [
        {
          text: "Manage",
        },
        {
          text: "awesome",
        },
        {
          text: "projects",
        },
        {
          text: "with",
        },
        {
          text: "Ascord.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
  return (
    <section className="py-12">
         <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <JoinButton mode="modal" asChild>
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 dark:border-slate-300 bg-[linear-gradient(110deg,#eaeaea,45%,#dcdcdc,55%,#eaeaea)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-900 dark:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-950">
                Get started
              </button>
            </JoinButton>
      </div>
    </div>
    </section>
  )
}
