"use client";

import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    showSocial?: boolean;
};

export const CardWrapper = ({ children, headerLabel, showSocial }: CardWrapperProps) => {
    return (
        <Card className="max-w-md w-full mx-auto p-4 md:p-8 shadow-input bg-white dark:bg-black rounded-none md:rounded-2xl">
            <CardHeader>
                <Header label={headerLabel}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
        </Card>
    )
}