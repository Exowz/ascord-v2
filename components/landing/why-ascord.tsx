"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export default function WhyAscord() {
  return (
    <section className="py-20">
      {/* Heading Section */}
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
        <h2 className="text-2xl md:text-7xl font-bold dark:text-white">
          Why Ascord?
        </h2>
      </div>

      {/* Card Section */}
      <div className="flex justify-center">
        <TextRevealCard
          text="In a world filled with distractions, Ascord is designed to help you focus on what matters."
          revealText="Whether you’re working solo or with a team, Ascord creates a balanced, immersive experience that’s both powerful and easy to use."
        />
      </div>
    </section>
  );
}