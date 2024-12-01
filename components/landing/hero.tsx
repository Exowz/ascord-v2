"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "VSCode",
    link: "https://code.visualstudio.com",
    thumbnail:
      "https://raw.githubusercontent.com/Exowz/ascord-v2/refs/heads/main/app/assets/hero-thumbnails/VSCode%402x.png",
  },
  {
    title: "ChatGPT",
    link: "https://chat.openai.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Supabase",
    link: "https://supabase.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Auth.js",
    link: "https://authjs.dev",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Socket.IO",
    link: "https://socket.io",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Resend",
    link: "https://resend.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Warp",
    link: "https://warp.dev",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "Framer Motion",
    link: "https://framer.com/motion",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Shadcn UI",
    link: "https://ui.shadcn.com/",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Vercel",
    link: "https://vercel.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Next.js",
    link: "https://nextjs.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Prisma",
    link: "https://prisma.io",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "Uploadthing",
    link: "https://uploadthing.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];
