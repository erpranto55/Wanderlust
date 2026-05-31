"use client";

import React, { useState } from "react";

import Link from "next/link";

import {
    Button,
    FieldError,
    Input,
    Label,
    TextField,
} from "@heroui/react";

import {
    FaEnvelope,
    FaEye,
    FaEyeSlash,
    FaGlobeAsia,
    FaLock,
    FaGithub,
} from "react-icons/fa";

import { toast } from "react-toastify";

import { authClient } from "@/lib/auth-client";

const LogInPage = () => {

    const [showPassword, setShowPassword] =
        useState(false);

    const [isLoading, setIsLoading] =
        useState(false);

    // =========================================
    // HANDLE LOGIN
    // =========================================

    const onSubmit = async (e) => {

        e.preventDefault();

        try {

            setIsLoading(true);

            const formData =
                new FormData(
                    e.currentTarget
                );

            const user =
                Object.fromEntries(
                    formData.entries()
                );

            const { data, error } =
                await authClient.signIn.email({

                    email: user.email,

                    password:
                        user.password,
                });

            // ERROR

            if (error) {

                toast.error(
                    error.message ||
                    "Login Failed!"
                );

                return;
            }

            // SUCCESS

            if (data) {

                toast.success(
                    "Login Successful!"
                );

                window.location.href =
                    "/";
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

    return (
        <section className="relative overflow-hidden min-h-[90vh] bg-base-100 transition-all duration-500">

            {/* BACKGROUND */}

            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-500/10 rounded-full blur-3xl"></div>

                <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-500/10 rounded-full blur-3xl"></div>

            </div>

            {/* CONTAINER */}

            <div className="relative max-w-7xl mx-auto min-h-[90vh] flex items-center justify-center px-4 py-10">

                <div className="w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] rounded-[40px] overflow-hidden border border-base-300 bg-base-200/60 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

                    {/* LEFT SIDE */}

                    <div className="relative hidden lg:flex flex-col justify-between p-16 bg-linear-to-br from-[#020617] via-[#071120] to-[#0f172a] overflow-hidden">

                        {/* GLOW */}

                        <div className="absolute top-0 right-0 w-75 h-75 bg-cyan-500/20 rounded-full blur-3xl"></div>

                        {/* CONTENT */}

                        <div className="relative z-10">

                            {/* LOGO */}

                            <div className="inline-flex items-center gap-5">

                                <div className="w-16 h-16 rounded-3xl bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-3xl shadow-[0_10px_40px_rgba(6,182,212,0.35)]">

                                    <FaGlobeAsia />

                                </div>

                                <h1 className="text-6xl font-black text-white">

                                    WanderLust

                                </h1>

                            </div>

                            {/* TEXT */}

                            <div className="mt-24">

                                <h2 className="text-7xl font-black text-white leading-[1.1]">

                                    Welcome
                                    <br />

                                    Back Explorer

                                </h2>

                                <p className="mt-8 text-xl leading-relaxed text-slate-300 max-w-xl">

                                    Continue your travel journey,
                                    manage bookings, and explore
                                    breathtaking destinations
                                    around the world with premium
                                    travel experiences.

                                </p>
                            </div>
                        </div>

                        {/* CARD */}

                        <div className="relative z-10 mt-16 rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">

                            <div className="flex items-center gap-6">

                                <div className="w-24 h-24 rounded-[32px] bg-linear-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_10px_40px_rgba(6,182,212,0.35)]">

                                    <FaGlobeAsia className="text-4xl text-white" />

                                </div>

                                <div>

                                    <h3 className="text-5xl font-black text-white">

                                        10K+

                                    </h3>

                                    <p className="mt-2 text-slate-300 text-xl">

                                        Trusted Travelers

                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}

                    <div className="relative p-8 md:p-12 lg:p-16 backdrop-blur-xl">

                        {/* MOBILE LOGO */}

                        <div className="lg:hidden mb-10 text-center">

                            <h1 className="text-5xl font-black bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">

                                WanderLust

                            </h1>
                        </div>

                        {/* HEADER */}

                        <div>

                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 text-sm font-semibold">

                                Welcome Back

                            </div>

                            <h2 className="text-5xl md:text-6xl font-black text-base-content mt-8 leading-tight">

                                Log In Account

                            </h2>

                            <p className="mt-5 text-base-content/60 text-xl leading-relaxed max-w-xl">

                                Enter your credentials to access
                                your travel dashboard and continue
                                your adventures.

                            </p>
                        </div>

                        {/* FORM */}

                        <form
                            onSubmit={
                                onSubmit
                            }
                            className="mt-10 space-y-6"
                        >

                            {/* EMAIL */}

                            <TextField
                                isRequired
                                name="email"
                                type="email"
                                className="w-full"
                            >

                                <Label className="mb-4 text-sm font-bold text-base-content">

                                    Email Address

                                </Label>

                                <div className="relative w-full">

                                    <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-500 z-10 text-lg" />

                                    <Input
                                        placeholder="Enter your email"
                                        className="w-full h-16 rounded-2xl border border-base-300 bg-base-100/70 pl-14 text-base-content"
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

                                <Label className="mb-4 text-sm font-bold text-base-content">

                                    Password

                                </Label>

                                <div className="relative w-full">

                                    <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-500 z-10 text-lg" />

                                    <Input
                                        placeholder="Enter password"
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        className="w-full h-16 rounded-2xl border border-base-300 bg-base-100/70 pl-14 pr-14 text-base-content"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                !showPassword
                                            )
                                        }
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-base-content/50 hover:text-cyan-500 transition-all duration-300 z-10 text-lg"
                                    >

                                        {showPassword
                                            ? <FaEyeSlash />
                                            : <FaEye />}

                                    </button>

                                </div>

                                <FieldError />

                            </TextField>

                            {/* LOGIN BUTTON */}

                            <Button
                                type="submit"
                                isDisabled={
                                    isLoading
                                }
                                className="w-full h-16 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xl font-bold shadow-[0_10px_40px_rgba(6,182,212,0.35)] hover:scale-[1.02] transition-all duration-300 mt-4"
                            >

                                {isLoading
                                    ? "Logging In..."
                                    : "Log In Account →"}

                            </Button>

                            {/* GOOGLE BUTTON */}

                            <Button
                                type="button"
                                className="
                                    w-full
                                    h-16
                                    rounded-2xl
                                    border
                                    border-base-300
                                    bg-base-100/70
                                    text-base-content
                                    text-lg
                                    font-semibold
                                    hover:bg-base-200
                                    transition-all
                                    duration-300
                                    flex
                                    items-center
                                    justify-center
                                    gap-3
                                    "
                                onPress={async () => {

                                    await authClient.signIn.social({
                                        provider: "google",
                                        callbackURL: "/",
                                    });
                                }}
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

                                Continue With Google

                            </Button>

                            {/* SIGNUP */}

                            <p className="text-center text-base-content/60 text-lg pt-2">

                                Don&apos;t have an account?

                                <Link
                                    href="/signup"
                                    className="ml-2 text-cyan-500 font-bold hover:text-cyan-600 transition-all duration-300"
                                >

                                    Sign Up

                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogInPage;