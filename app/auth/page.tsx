"use client"

import { AuthTabs } from "@/components/auth/auth-tabs";
import { BackgroundLines } from "@/components/ui/background-lines";

const AuthPage = () => {
    return (
        <BackgroundLines>
            <div className="flex h-full flex-col items-center justify-center">
            <AuthTabs />
        </div>
        </BackgroundLines>
    )
}

export default AuthPage;