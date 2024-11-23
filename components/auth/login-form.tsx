"use client";

import * as z from "zod";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";

import { LoginSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/actions/login";
import Link from "next/link";

export const LoginForm = () => {
    const SearchParams = useSearchParams();
    const urlError = useSearchParams().get("error") === "OAuthAccountNotLinked"
     ? "Email already in use with different provider!"
     : "";

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
    
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
        login(values)
            .then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            })
    });
  }

  return (
    <CardWrapper headerLabel="Welcome back!" showSocial>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="tyler@durden.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="••••••••"
                      type="password"
                    />
                  </FormControl>
                  <Button size="sm" variant="link" className="px-0 font-normal" asChild>
                    <Link href="/auth/rest">
                    Forgot password?
                    </Link>
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error || urlError }/>
          <FormSuccess message={success}/>
          <button
            type="submit"
            disabled={isPending}
            className="p-[3px] relative w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent text-center">
              Login
            </div>
          </button>
        </form>
      </Form>
    </CardWrapper>
  );
};