"use client";

import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

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
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">

            <div className="max-w-7xl mx-auto px-4">

                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div>
                        <Link href="/">
                            <h1 className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                WanderLust
                            </h1>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
                        {navLinks}
                    </ul>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden lg:flex items-center gap-4">

                        <Link
                            href="/profile"
                            className="hover:text-cyan-500 transition-all duration-300 font-medium"
                        >
                            Profile
                        </Link>

                        <Link
                            href="/login"
                            className="px-5 py-2 rounded-xl border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 font-medium"
                        >
                            Login
                        </Link>

                        <Link
                            href="/signup"
                            className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-300 font-medium shadow-md"
                        >
                            Signup
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-3xl text-gray-700"
                    >
                        {isOpen ? <HiX /> : <HiMenuAlt3 />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden pb-6">

                        <ul className="flex flex-col gap-5 text-gray-700 font-medium border-t border-slate-200 pt-5">
                            {navLinks}
                        </ul>

                        {/* Mobile Buttons */}
                        <div className="flex flex-col gap-4 mt-6">

                            <Link
                                href="/profile"
                                className="text-center py-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition-all duration-300"
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