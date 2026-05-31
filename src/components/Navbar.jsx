"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
    HiMenuAlt3,
    HiX,
} from "react-icons/hi";

import {
    FaMoon,
    FaSun,
} from "react-icons/fa";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [theme, setTheme] = useState("light");

    useEffect(() => {

        const savedTheme =
            localStorage.getItem("theme") || "light";

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTheme(savedTheme);

        document.documentElement.setAttribute(
            "data-theme",
            savedTheme
        );

    }, []);


    const toggleTheme = () => {

        const newTheme =
            theme === "light"
                ? "dark"
                : "light";

        setTheme(newTheme);

        localStorage.setItem(
            "theme",
            newTheme
        );

        document.documentElement.setAttribute(
            "data-theme",
            newTheme
        );
    };

    const navLinks = (
        <>
            <li>
                <Link
                    href="/"
                    className="hover:text-cyan-500 transition-all duration-300"
                >
                    Home
                </Link>
            </li>

            <li>
                <Link
                    href="/destination"
                    className="hover:text-cyan-500 transition-all duration-300"
                >
                    Destination
                </Link>
            </li>

            <li>
                <Link
                    href="/my-bookings"
                    className="hover:text-cyan-500 transition-all duration-300"
                >
                    My Bookings
                </Link>
            </li>

            <li>
                <Link
                    href="/add-destination"
                    className="hover:text-cyan-500 transition-all duration-300"
                >
                    Add Destination
                </Link>
            </li>
        </>
    );

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-all duration-500">

            <div className="max-w-7xl mx-auto px-4">

                <div className="flex justify-between items-center h-20">

                    {/* LOGO */}

                    <div>

                        <Link href="/">

                            <h1 className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">

                                WanderLust

                            </h1>

                        </Link>

                    </div>

                    {/* DESKTOP MENU */}

                    <ul className="hidden lg:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">

                        {navLinks}

                    </ul>

                    {/* RIGHT SIDE */}

                    <div className="hidden lg:flex items-center gap-4">

                        {/* THEME BUTTON */}

                        <button
                            onClick={toggleTheme}
                            className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:scale-110 transition-all duration-300 flex items-center justify-center text-xl text-slate-700 dark:text-yellow-400 shadow-md"
                        >

                            {theme === "light"
                                ? <FaMoon />
                                : <FaSun />
                            }

                        </button>

                        {/* PROFILE */}

                        <Link
                            href="/profile"
                            className="hover:text-cyan-500 dark:text-gray-200 transition-all duration-300 font-medium"
                        >
                            Profile
                        </Link>

                        {/* LOGIN */}

                        <Link
                            href="/login"
                            className="px-5 py-2 rounded-xl border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 font-medium"
                        >
                            Login
                        </Link>

                        {/* SIGNUP */}

                        <Link
                            href="/signup"
                            className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-300 font-medium shadow-md"
                        >
                            Signup
                        </Link>
                    </div>

                    {/* MOBILE RIGHT */}

                    <div className="flex lg:hidden items-center gap-3">

                        {/* MOBILE THEME BUTTON */}

                        <button
                            onClick={toggleTheme}
                            className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg text-slate-700 dark:text-yellow-400 transition-all duration-300"
                        >

                            {theme === "light"
                                ? <FaMoon />
                                : <FaSun />
                            }

                        </button>

                        {/* MENU BUTTON */}

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-3xl text-gray-700 dark:text-gray-200"
                        >

                            {isOpen
                                ? <HiX />
                                : <HiMenuAlt3 />
                            }

                        </button>
                    </div>
                </div>

                {/* MOBILE MENU */}

                {isOpen && (

                    <div className="lg:hidden pb-6">

                        <ul className="flex flex-col gap-5 text-gray-700 dark:text-gray-200 font-medium border-t border-slate-200 dark:border-slate-800 pt-5">

                            {navLinks}

                        </ul>

                        {/* MOBILE BUTTONS */}

                        <div className="flex flex-col gap-4 mt-6">

                            <Link
                                href="/profile"
                                className="text-center py-3 rounded-xl border border-slate-300 dark:border-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
                            >
                                Profile
                            </Link>

                            <Link
                                href="/login"
                                className="text-center py-3 rounded-xl border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300"
                            >
                                Login
                            </Link>

                            <Link
                                href="/signup"
                                className="text-center py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-300"
                            >
                                Signup
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;