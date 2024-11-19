"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { LoginForm } from "@/components/auth/login-form";
import { RegisterForm } from "@/components/auth/register-form";

export const AuthTabs = () => {
  return (
    <div className="w-[400px] shadow-md rounded-none md:rounded-2xl">
      <Tabs defaultValue="login" className="w-full">
        {/* Tabs Header */}
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        {/* Login Card */}
        <TabsContent value="login">
              <LoginForm />
        </TabsContent>

        {/* Register Card */}
        <TabsContent value="register">
              <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};