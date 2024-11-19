import { AuthTabs } from "@/components/auth/auth-tabs";

const AuthPage = () => {
    return (
        <div className="flex h-full flex-col items-center justify-center bg-stone-900">
            <AuthTabs />
        </div>
    )
}

export default AuthPage;