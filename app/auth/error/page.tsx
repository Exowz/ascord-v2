import { ErrorCard } from "@/components/auth/error-card";

const AuthErrorPage = () => {
    return (
        <div className="flex h-full flex-col items-center justify-center bg-stone-900">
            <ErrorCard />
        </div>
    );
};

export default AuthErrorPage;