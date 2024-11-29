import { JoinButton } from "@/components/auth/join-button";
import { ModeToggle } from "@/components/mode-toogle";
import { Button } from "@/components/ui/button";
import { main } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  // Define navigation items for FloatingNav
  return (
    <main className="flex h-full flex-col items-center justify-center bg-stone-900">
      <div className="space-y-6">
        <JoinButton mode="modal" asChild>
      <Button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Join now
  </span>
</Button>
</JoinButton>
      </div>
    </main>
  );
}