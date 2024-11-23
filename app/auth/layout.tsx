const AuthLayout = ({children}: {children : React.ReactNode}) => {
    return (
        <div className="flex h-full flex-col items-center justify-center bg-stone-900">
            {children}
        </div>
    );
}

export default AuthLayout;