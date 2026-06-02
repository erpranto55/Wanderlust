"use client";

import Link from "next/link";
import React, {
    useEffect,
    useState,
} from "react";

import { useRouter } from "next/navigation";

import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";

import {
    FaArrowRight,
    FaEnvelope,
    FaEye,
    FaEyeSlash,
    FaGlobeAsia,
    FaLock,
    FaUser,
} from "react-icons/fa";

import { authClient } from "@/lib/auth-client";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {

    const router = useRouter();

    const [mounted, setMounted] =
        useState(false);

    const [showPassword, setShowPassword] =
        useState(false);

    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    const [isLoading, setIsLoading] =
        useState(false);

    const [googleLoading, setGoogleLoading] =
        useState(false);

    useEffect(() => {

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);

    }, []);

    useEffect(() => {

        const checkUser =
            async () => {

                const alreadyShown =
                    typeof window !== "undefined"
                        ? sessionStorage.getItem(
                            "welcome-toast"
                        )
                        : null;

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

    if (!mounted) {

        return (
            <div className="min-h-screen bg-base-100"></div>
        );
    }

    // ======================================================
    // HANDLE EMAIL SIGNUP
    // ======================================================

    const onSubmit = async (e) => {

        e.preventDefault();

        const formData =
            new FormData(
                e.currentTarget
            );

        const user =
            Object.fromEntries(
                formData.entries()
            );

        // PASSWORD MATCH CHECK

        if (
            user.password !==
            user.confirmPassword
        ) {

            toast.error(
                "Passwords do not match!"
            );

            return;
        }

        // PASSWORD LENGTH CHECK

        if (user.password.length < 8) {

            toast.error(
                "Password must be at least 8 characters!"
            );

            return;
        }

        try {

            setIsLoading(true);

            const { data, error } =
                await authClient.signUp.email({

                    email: user.email,
                    password: user.password,
                    name: user.name,
                    image: user.image,
                });

            // ERROR

            if (error) {

                toast.error(
                    error.message ||
                    "Signup Failed!"
                );

                return;
            }

            // SUCCESS

            if (data) {

                toast.success(
                    "Account Created Successfully!"
                );

                authClient.$store.notify(
                    "$sessionSignal"
                );

                router.refresh();

                router.push("/");
            }

        } catch (err) {

            console.error(err);

            toast.error(
                "Something went wrong!"
            );

        } finally {

            setIsLoading(false);
        }
    };

    // ======================================================
    // HANDLE GOOGLE SIGNUP
    // ======================================================

    const handleGoogleSignup =
        async () => {

            try {

                setGoogleLoading(true);

                await authClient.signIn.social({

                    provider: "google",

                    callbackURL: "/",
                });

            } catch (error) {

                console.error(error);

                toast.error(
                    "Google Signup Failed!"
                );

            } finally {

                setGoogleLoading(false);
            }
        };

    return (
        <section
            className="
            relative
            min-h-screen
            overflow-hidden
            bg-base-100
            transition-all
            duration-500
            flex
            items-center
            justify-center
            px-4
            py-10
            "
        >

            {/* BACKGROUND */}

            <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-500/10 rounded-full blur-3xl" />

            {/* MAIN CONTAINER */}

            <div
                className="
                relative
                w-full
                max-w-7xl
                overflow-hidden
                rounded-[40px]
                border
                bg-base-200/60
                border-base-300
                backdrop-blur-2xl
                shadow-[0_25px_80px_rgba(0,0,0,0.15)]
                grid
                lg:grid-cols-[1fr_1.1fr]
                "
            >

                {/* LEFT SIDE */}

                <div
                    className="
                    hidden
                    lg:flex
                    relative
                    flex-col
                    justify-between
                    p-14
                    border-r
                    border-base-300
                    overflow-hidden
                    bg-linear-to-br
                    from-cyan-500/8
                    via-transparent
                    to-blue-500/8
                    "
                >

                    <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />

                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />

                    <div className="relative z-10">

                        {/* LOGO */}

                        <div
                            className="
                            inline-flex
                            items-center
                            gap-3
                            px-5
                            py-3
                            rounded-2xl
                            bg-base-100/70
                            border
                            border-base-300
                            backdrop-blur-xl
                            shadow-[0_10px_40px_rgba(0,0,0,0.15)]
                            "
                        >

                            <div
                                className="
                                w-12
                                h-12
                                rounded-2xl
                                bg-linear-to-br
                                from-cyan-500
                                to-blue-600
                                flex
                                items-center
                                justify-center
                                text-white
                                text-lg
                                shadow-[0_10px_30px_rgba(6,182,212,0.35)]
                                "
                            >

                                <FaGlobeAsia />

                            </div>

                            <div>

                                <h3 className="text-base-content font-bold text-xl">

                                    WanderLust

                                </h3>

                                <p className="text-base-content/60 text-sm">

                                    Premium Travel Platform

                                </p>

                            </div>

                        </div>

                        {/* HERO */}

                        <div className="mt-20">

                            <div
                                className="
                                inline-flex
                                items-center
                                gap-2
                                px-4
                                py-2
                                rounded-full
                                bg-cyan-500/10
                                border
                                border-cyan-500/20
                                text-cyan-500
                                text-sm
                                font-semibold
                                "
                            >

                                ✈ Explore Premium Destinations

                            </div>

                            <h1
                                className="
                                mt-7
                                text-[68px]
                                font-black
                                leading-[0.95]
                                tracking-tight
                                text-base-content
                                "
                            >

                                Travel Beyond

                                <span className="block mt-3 text-cyan-500">

                                    Boundaries

                                </span>

                            </h1>

                            <p
                                className="
                                mt-8
                                text-lg
                                leading-relaxed
                                text-base-content/60
                                max-w-xl
                                "
                            >

                                Discover breathtaking destinations,
                                unforgettable adventures, and luxury
                                travel experiences curated for modern
                                explorers worldwide.

                            </p>

                        </div>

                        {/* FEATURES */}

                        <div className="mt-12 grid grid-cols-2 gap-4">

                            <div
                                className="
                                rounded-3xl
                                border
                                border-base-300
                                bg-base-100/70
                                backdrop-blur-xl
                                p-5
                                "
                            >

                                <div
                                    className="
                                    w-12
                                    h-12
                                    rounded-2xl
                                    bg-cyan-500/10
                                    flex
                                    items-center
                                    justify-center
                                    text-cyan-500
                                    text-xl
                                    "
                                >

                                    ✈

                                </div>

                                <h4 className="mt-4 text-base-content font-bold text-lg">

                                    120+

                                </h4>

                                <p className="mt-1 text-base-content/60 text-sm">

                                    Global Destinations

                                </p>

                            </div>

                            <div
                                className="
                                rounded-3xl
                                border
                                border-base-300
                                bg-base-100/70
                                backdrop-blur-xl
                                p-5
                                "
                            >

                                <div
                                    className="
                                    w-12
                                    h-12
                                    rounded-2xl
                                    bg-blue-500/10
                                    flex
                                    items-center
                                    justify-center
                                    text-cyan-500
                                    text-xl
                                    "
                                >

                                    ⭐

                                </div>

                                <h4 className="mt-4 text-base-content font-bold text-lg">

                                    4.9

                                </h4>

                                <p className="mt-1 text-base-content/60 text-sm">

                                    Average Rating

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* BOTTOM CARD */}

                    <div
                        className="
                        relative
                        z-10
                        mt-16
                        rounded-[32px]
                        border
                        border-base-300
                        bg-base-100/70
                        backdrop-blur-xl
                        p-7
                        shadow-[0_15px_50px_rgba(0,0,0,0.12)]
                        overflow-hidden
                        "
                    >

                        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />

                        <div className="relative flex items-center gap-5">

                            <div
                                className="
                                w-16
                                h-16
                                rounded-2xl
                                bg-linear-to-br
                                from-cyan-500
                                to-blue-600
                                flex
                                items-center
                                justify-center
                                text-white
                                text-2xl
                                shadow-[0_10px_30px_rgba(6,182,212,0.35)]
                                "
                            >

                                <FaGlobeAsia />

                            </div>

                            <div>

                                <h3 className="text-2xl font-bold text-base-content">

                                    10K+ Travelers

                                </h3>

                                <p className="mt-1 text-base-content/60">

                                    Trusted by travelers worldwide

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}

                <div
                    className="
                    relative
                    flex
                    items-center
                    justify-center
                    p-8
                    sm:p-12
                    lg:p-16
                    "
                >

                    <div className="w-full max-w-xl">

                        {/* MOBILE LOGO */}

                        <div className="lg:hidden flex justify-center mb-10">

                            <div
                                className="
                                inline-flex
                                items-center
                                gap-3
                                px-5
                                py-3
                                rounded-2xl
                                bg-base-100/70
                                border
                                border-base-300
                                text-base-content
                                font-bold
                                text-lg
                                "
                            >

                                <div
                                    className="
                                    w-10
                                    h-10
                                    rounded-xl
                                    bg-linear-to-br
                                    from-cyan-500
                                    to-blue-600
                                    flex
                                    items-center
                                    justify-center
                                    text-white
                                    "
                                >

                                    <FaGlobeAsia />

                                </div>

                                WanderLust

                            </div>

                        </div>

                        {/* HEADING */}

                        <div className="text-center">

                            <h2
                                className="
                                text-5xl
                                sm:text-6xl
                                font-black
                                tracking-tight
                                text-base-content
                                leading-none
                                "
                            >

                                Create Account

                            </h2>

                            <p
                                className="
                                mt-5
                                text-lg
                                text-base-content/60
                                "
                            >

                                Join thousands of travelers worldwide.

                            </p>

                        </div>

                        {/* FORM */}

                        <Form
                            onSubmit={onSubmit}
                            className="mt-12 flex flex-col gap-7"
                        >

                            {/* FULL NAME */}

                            <TextField
                                isRequired
                                name="name"
                                className="w-full"
                            >

                                <Label className="mb-3 text-sm font-semibold text-base-content">

                                    Full Name

                                </Label>

                                <div className="relative w-full">

                                    <FaUser
                                        className="
                                        absolute
                                        left-5
                                        top-1/2
                                        -translate-y-1/2
                                        text-cyan-500
                                        z-10
                                        "
                                    />

                                    <Input
                                        placeholder="Your Name"
                                        className="
                                        w-full
                                        h-14
                                        rounded-2xl
                                        border
                                        border-base-300
                                        bg-base-100/70
                                        pl-12
                                        text-base-content
                                        "
                                    />

                                </div>

                                <FieldError />

                            </TextField>

                            {/* IMAGE URL */}

                            <TextField
                                isRequired
                                name="image"
                                type="url"
                                className="w-full"
                            >

                                <Label className="mb-3 text-sm font-semibold text-base-content">

                                    Profile Image URL

                                </Label>

                                <div className="relative w-full">

                                    <FaGlobeAsia
                                        className="
                                        absolute
                                        left-5
                                        top-1/2
                                        -translate-y-1/2
                                        text-cyan-500
                                        z-10
                                        "
                                    />

                                    <Input
                                        placeholder="https://example.com/profile.jpg"
                                        className="
                                        w-full
                                        h-14
                                        rounded-2xl
                                        border
                                        border-base-300
                                        bg-base-100/70
                                        pl-12
                                        text-base-content
                                        "
                                    />

                                </div>

                                <FieldError />

                            </TextField>

                            {/* EMAIL */}

                            <TextField
                                isRequired
                                type="email"
                                name="email"
                                className="w-full"
                            >

                                <Label className="mb-3 text-sm font-semibold text-base-content">

                                    Email Address

                                </Label>

                                <div className="relative w-full">

                                    <FaEnvelope
                                        className="
                                        absolute
                                        left-5
                                        top-1/2
                                        -translate-y-1/2
                                        text-cyan-500
                                        z-10
                                        "
                                    />

                                    <Input
                                        placeholder="Your Email"
                                        className="
                                        w-full
                                        h-14
                                        rounded-2xl
                                        border
                                        border-base-300
                                        bg-base-100/70
                                        pl-12
                                        text-base-content
                                        "
                                    />

                                </div>

                                <FieldError />

                            </TextField>

                            {/* PASSWORD */}

                            <TextField
                                isRequired
                                name="password"
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                className="w-full"
                            >

                                <Label className="mb-3 text-sm font-semibold text-base-content">

                                    Password

                                </Label>

                                <div className="relative w-full">

                                    <FaLock
                                        className="
                                        absolute
                                        left-5
                                        top-1/2
                                        -translate-y-1/2
                                        text-cyan-500
                                        z-10
                                        "
                                    />

                                    <Input
                                        placeholder="Enter your password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        className="
                                        w-full
                                        h-14
                                        rounded-2xl
                                        border
                                        border-base-300
                                        bg-base-100/70
                                        pl-12
                                        pr-14
                                        text-base-content
                                        "
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                !showPassword
                                            )
                                        }
                                        className="
                                        absolute
                                        right-5
                                        top-1/2
                                        -translate-y-1/2
                                        text-base-content/60
                                        hover:text-base-content
                                        transition-all
                                        z-20
                                        "
                                    >

                                        {showPassword
                                            ? <FaEyeSlash />
                                            : <FaEye />}

                                    </button>

                                </div>

                                <Description className="mt-3 text-sm text-base-content/60">

                                    Minimum 8 characters

                                </Description>

                                <FieldError />

                            </TextField>

                            {/* CONFIRM PASSWORD */}

                            <TextField
                                isRequired
                                name="confirmPassword"
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                className="w-full"
                            >

                                <Label className="mb-3 text-sm font-semibold text-base-content">

                                    Confirm Password

                                </Label>

                                <div className="relative w-full">

                                    <FaLock
                                        className="
                                        absolute
                                        left-5
                                        top-1/2
                                        -translate-y-1/2
                                        text-cyan-500
                                        z-10
                                        "
                                    />

                                    <Input
                                        placeholder="Confirm your password"
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        className="
                                        w-full
                                        h-14
                                        rounded-2xl
                                        border
                                        border-base-300
                                        bg-base-100/70
                                        pl-12
                                        pr-14
                                        text-base-content
                                        "
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                        className="
                                        absolute
                                        right-5
                                        top-1/2
                                        -translate-y-1/2
                                        text-base-content/60
                                        hover:text-base-content
                                        transition-all
                                        z-20
                                        "
                                    >

                                        {showConfirmPassword
                                            ? <FaEyeSlash />
                                            : <FaEye />}

                                    </button>

                                </div>

                                <FieldError />

                            </TextField>

                            {/* SUBMIT BUTTON */}

                            <Button
                                type="submit"
                                isDisabled={
                                    isLoading
                                }
                                className="
                                mt-2
                                h-14
                                w-full
                                rounded-2xl
                                bg-linear-to-r
                                from-cyan-500
                                to-blue-600
                                hover:from-cyan-400
                                hover:to-blue-500
                                text-lg
                                font-bold
                                text-white
                                shadow-[0_15px_40px_rgba(6,182,212,0.35)]
                                transition-all
                                duration-300
                                hover:scale-[1.01]
                                "
                            >

                                {isLoading
                                    ? "Creating..."
                                    : "Create Account"}

                                <FaArrowRight />

                            </Button>

                            {/* GOOGLE BUTTON */}

                            <Button
                                type="button"
                                onPress={
                                    handleGoogleSignup
                                }
                                isDisabled={
                                    googleLoading
                                }
                                className="
                                h-14
                                w-full
                                rounded-2xl
                                border
                                border-base-300
                                bg-base-100/70
                                text-base-content
                                text-lg
                                font-semibold
                                transition-all
                                duration-300
                                hover:bg-base-200
                                flex
                                items-center
                                justify-center
                                gap-3
                                "
                            >

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    className="w-7 h-7"
                                >

                                    <path
                                        fill="#FFC107"
                                        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
                                    />

                                    <path
                                        fill="#FF3D00"
                                        d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
                                    />

                                    <path
                                        fill="#4CAF50"
                                        d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
                                    />

                                    <path
                                        fill="#1976D2"
                                        d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6.2 7.1l6.2 5.2C39.5 36.5 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5z"
                                    />

                                </svg>

                                {googleLoading
                                    ? "Redirecting..."
                                    : "Continue With Google"}

                            </Button>

                        </Form>

                        {/* FOOTER */}

                        <p
                            className="
                            mt-10
                            text-center
                            text-base
                            text-base-content/60
                            "
                        >

                            Already have an account?

                            <Link
                                href="/login"
                                className="
                                ml-2
                                font-semibold
                                text-cyan-500
                                hover:text-cyan-400
                                transition-all
                                "
                            >

                                Sign In

                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default SignUpPage;
