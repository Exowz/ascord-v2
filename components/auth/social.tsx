"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa"; // Import FaApple for the Apple icon

import { Button } from "@/components/ui/button";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
         {/* Apple Button */}
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => {
          // Handle Apple Login
        }}
      >
        <FaApple className="h-5 w-5" />
      </Button>
      {/* Google Button */}
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => {
          // Handle Google Login
        }}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      {/* GitHub Button */}
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => {
          // Handle GitHub Login
        }}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};