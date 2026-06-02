"use client";

import Link from "next/link";

import React, {
    useEffect,
    useRef,
    useState,
} from "react";

import { useRouter } from "next/navigation";

import {
    HiMenuAlt3,
    HiX,
} from "react-icons/hi";

import {
    FaMoon,
    FaSun,
    FaUserCircle,
    FaUser,
    FaSignOutAlt,
} from "react-icons/fa";

import { toast } from "react-toastify";

import {
    authClient,
    useAuthSession,
} from "@/lib/auth-client";
import UserAvatar from "./UserAvatar";

const Navbar = () => {

    const router =
        useRouter();

    const [isOpen, setIsOpen] =
        useState(false);

    const [theme, setTheme] =
        useState("light");

    const [dropdownOpen, setDropdownOpen] =
        useState(false);

    const {
        data: session,
        refetch,
    } = useAuthSession();

    const user =
        session?.user || null;

    const dropdownRef =
        useRef(null);

    // ====================================
    // THEME
    // ====================================

    useEffect(() => {

        const savedTheme =
            localStorage.getItem(
                "theme"
            ) || "light";

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

    const userImage =
        user?.image?.trim() || "";

    // ====================================
    // CLOSE DROPDOWN
    // ====================================

    useEffect(() => {

        const handleClickOutside =
            (event) => {

                if (
                    dropdownRef.current &&
                    !dropdownRef.current.contains(
                        event.target
                    )
                ) {

                    setDropdownOpen(
                        false
                    );
                }
            };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };

    }, []);

    // ====================================
    // LOGOUT
    // ====================================

    const handleLogout =
        async () => {

            try {

                await authClient.signOut();

                sessionStorage.removeItem(
                    "welcome-toast"
                );

                toast.success(
                    "Logged out successfully!"
                );

                refetch();

                router.push("/login");

                router.refresh();

            } catch (error) {

                toast.error(
                    "Logout failed!"
                );

                console.error(error);
            }
        };

    // ====================================
    // NAV LINKS
    // ====================================

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

                    <Link href="/">

                        <h1 className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">

                            WanderLust

                        </h1>

                    </Link>

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

                        {/* USER */}

                        {user ? (

                            <div
                                className="relative"
                                ref={
                                    dropdownRef
                                }
                            >

                                {/* PROFILE IMAGE */}

                                <button
                                    onClick={() =>
                                        setDropdownOpen(
                                            !dropdownOpen
                                        )
                                    }
                                    className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500 shadow-lg"
                                >

                                    <UserAvatar
                                        src={userImage}
                                        className="w-full h-full object-cover"
                                        fallback={
                                        <div className="w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-2xl text-cyan-500">

                                            <FaUserCircle />

                                        </div>
                                        }
                                    />

                                </button>

                                {/* DROPDOWN */}

                                {dropdownOpen && (

                                    <div className="absolute right-0 mt-4 w-56 rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">

                                        {/* USER INFO */}

                                        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-700">

                                            <h3 className="font-bold text-slate-800 dark:text-white">

                                                {user.name}

                                            </h3>

                                            <p className="text-sm text-slate-500 truncate">

                                                {user.email}

                                            </p>

                                        </div>

                                        {/* PROFILE */}

                                        <Link
                                            href="/profile"
                                            className="flex items-center gap-3 px-5 py-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 text-slate-700 dark:text-slate-200"
                                        >

                                            <FaUser />

                                            Profile

                                        </Link>

                                        {/* LOGOUT */}

                                        <button
                                            onClick={
                                                handleLogout
                                            }
                                            className="w-full flex items-center gap-3 px-5 py-4 hover:bg-red-50 dark:hover:bg-red-950/40 text-red-500 transition-all duration-300"
                                        >

                                            <FaSignOutAlt />

                                            Logout

                                        </button>

                                    </div>
                                )}

                            </div>

                        ) : (

                            <>
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
                            </>
                        )}

                    </div>

                    {/* MOBILE */}

                    <div className="flex lg:hidden items-center gap-3">

                        {/* THEME */}

                        <button
                            onClick={toggleTheme}
                            className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg text-slate-700 dark:text-yellow-400"
                        >

                            {theme === "light"
                                ? <FaMoon />
                                : <FaSun />
                            }

                        </button>

                        {/* MENU */}

                        <button
                            onClick={() =>
                                setIsOpen(
                                    !isOpen
                                )
                            }
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

                        {/* MOBILE USER */}

                        <div className="flex flex-col gap-4 mt-6">

                            {user ? (

                                <>
                                    <Link
                                        href="/profile"
                                        className="text-center py-3 rounded-xl border border-slate-300 dark:border-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300"
                                    >

                                        Profile

                                    </Link>

                                    <button
                                        onClick={
                                            handleLogout
                                        }
                                        className="py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white transition-all duration-300"
                                    >

                                        Logout

                                    </button>
                                </>

                            ) : (

                                <>
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
                                </>
                            )}

                        </div>

                    </div>
                )}

            </div>

        </nav>
    );
};

export default Navbar;
