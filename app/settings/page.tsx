"use client";

import { logout } from "@/actions/logout"
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
    const user = useCurrentUser();
    const onClick = () => {
        logout();
    }
    return (
        <div className="bg-stone-600 p-10 rounded-xl">
        </div>
    )
}

export default SettingsPage