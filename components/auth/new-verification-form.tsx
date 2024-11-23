"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";

import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { NewVerification } from "@/actions/new-verification";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();

    const searchParams = useSearchParams();
    
    const token = searchParams.get("token");

    const onSubmit = useCallback(() => {
        if (success || error ) return;
        if (!token) {
            setError("Missing token!");
            return;
        }
        NewVerification(token)
        .then((data) => {
            setSuccess(data.success);
            setError(data.error);
        })
        .catch (() => {
            setError("Something went wrong!");
        })
    }, [token, success, error]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <CardWrapper
        headerLabel="Confirmin your verification"
        >
            <div className="flex items-center w-full justify-center">
                {!success && !error && (<BeatLoader size={20} color={"#36d7b7"} loading={true} />)}
                <FormSuccess message={success} />
                {!success && (<FormError message={error} />)}
            </div>
        </CardWrapper>
    )
}