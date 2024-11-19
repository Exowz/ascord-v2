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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const onClick = () => {
    if (mode === "modal") {
      setIsModalOpen(true);
    } else {
      router.push("/auth");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <span onClick={onClick} className="cursor-pointer">
        {children}
      </span>

      {isModalOpen && (
        <>
          {/* Overlay with blur effect */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={closeModal}
          ></div>

          {/* Modal container */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-black p-6 rounded-lg shadow-lg relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
              <AuthForm />
            </div>
          </div>
        </>
      )}
    </>
  );
};