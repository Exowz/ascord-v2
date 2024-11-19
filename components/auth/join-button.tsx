"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthForm } from "./auth-form";

interface JoinButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const JoinButton = ({ children, mode = "redirect", asChild = false }: JoinButtonProps) => {
  const router = useRouter();

  const onClick = () => {
      router.push("/auth");
  };

  if (mode === "modal") { 
    return (
        <span>
            TODO: Implement modal
        </span>
    )
  }

  return (
      <span onClick={onClick} className="cursor-pointer">
        {children}
      </span>
  );
};