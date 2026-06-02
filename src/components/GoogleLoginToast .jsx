"use client";

import {
    useEffect,
    useRef,
} from "react";

import { toast } from "react-toastify";

import { authClient } from "@/lib/auth-client";

const GoogleLoginToast = () => {

    const hasShownToast =
        useRef(false);

    useEffect(() => {

        const checkUser = async () => {

            const alreadyShown =
                sessionStorage.getItem(
                    "welcome-toast"
                );

            if (alreadyShown) return;

            const session =
                await authClient.getSession();

            if (
                session?.data?.user
            ) {

                toast.success(
                    `Welcome ${session.data.user.name}!`
                );

                sessionStorage.setItem(
                    "welcome-toast",
                    "true"
                );
            }
        };

        checkUser();

    }, []);

    return null;
};

export default GoogleLoginToast;