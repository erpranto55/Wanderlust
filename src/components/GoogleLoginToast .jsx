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

        const checkUser =
            async () => {

                try {

                    const session =
                        await authClient.getSession();

                    // USER EXISTS

                    if (
                        session?.data?.user &&
                        !hasShownToast.current
                    ) {

                        hasShownToast.current =
                            true;

                        toast.success(
                            `Welcome ${session.data.user.name}!`
                        );
                    }

                } catch (error) {

                    console.error(error);
                }
            };

        checkUser();

    }, []);

    return null;
};

export default GoogleLoginToast;