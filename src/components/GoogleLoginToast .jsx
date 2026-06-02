"use client";

import {
    useEffect,
    useRef,
} from "react";

import { toast } from "react-toastify";

import { useAuthSession } from "@/lib/auth-client";

const GoogleLoginToast = () => {

    const hasShownToast =
        useRef(false);

    const {
        data: session,
    } = useAuthSession();

    useEffect(() => {

        const alreadyShown =
            sessionStorage.getItem(
                "welcome-toast"
            );

        if (!session?.user) {

            hasShownToast.current =
                false;

            return;
        }

        if (
            alreadyShown ||
            hasShownToast.current
        ) return;

        toast.success(
            `Welcome ${session.user.name}!`
        );

        sessionStorage.setItem(
            "welcome-toast",
            "true"
        );

        hasShownToast.current =
            true;

    }, [session?.user]);

    return null;
};

export default GoogleLoginToast;
