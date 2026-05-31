"use client";

import Link from "next/link";

import {
    FaArrowRight,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkedAlt,
    FaPaperPlane,
    FaPhoneAlt,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {

    return (
        <footer className="relative overflow-hidden bg-base-200 border-t border-base-300">

            {/* BACKGROUND GLOW */}

            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

            {/* CONTAINER */}

            <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-4 py-20">

                {/* TOP */}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

                    {/* BRAND */}

                    <div className="lg:col-span-5">

                        {/* LOGO */}

                        <div className="flex items-center gap-4">

                            <div className="w-16 h-16 rounded-[24px] bg-linear-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center text-2xl shadow-[0_10px_40px_rgba(6,182,212,0.35)]">

                                <FaMapMarkedAlt />

                            </div>

                            <div>

                                <h2 className="text-4xl md:text-5xl font-black text-base-content">

                                    Wanderlust

                                </h2>

                                <p className="text-base-content/60 mt-1">

                                    Explore The World

                                </p>

                            </div>
                        </div>

                        {/* DESCRIPTION */}

                        <p className="mt-8 text-lg leading-relaxed text-base-content/70 max-w-xl">

                            Discover breathtaking destinations,
                            luxury travel experiences, and unforgettable
                            adventures across the world with Wanderlust.

                        </p>

                        {/* SOCIALS */}

                        <div className="flex items-center gap-4 mt-8">

                            {[
                                FaFacebookF,
                                FaTwitter,
                                FaInstagram,
                                FaLinkedinIn,
                            ].map((Icon, index) => (

                                <button
                                    key={index}
                                    className="group w-13 h-13 rounded-2xl border border-base-300 bg-base-100 hover:bg-linear-to-br hover:from-cyan-500 hover:to-blue-600 text-base-content hover:text-white flex items-center justify-center text-lg transition-all duration-500 hover:scale-110 shadow-lg"
                                >

                                    <Icon />

                                </button>
                            ))}
                        </div>
                    </div>

                    {/* LINKS */}

                    <div className="lg:col-span-2">

                        <h3 className="text-xl font-bold text-base-content mb-7">

                            Quick Links

                        </h3>

                        <ul className="space-y-5">

                            {[
                                "Home",
                                "Destinations",
                                "My Bookings",
                                "Add Destination",
                            ].map((item, index) => (

                                <li key={index}>

                                    <Link
                                        href="/"
                                        className="group inline-flex items-center gap-2 text-base-content/70 hover:text-cyan-500 transition-all duration-300"
                                    >

                                        <FaArrowRight className="text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />

                                        {item}

                                    </Link>

                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SUPPORT */}

                    <div className="lg:col-span-2">

                        <h3 className="text-xl font-bold text-base-content mb-7">

                            Support

                        </h3>

                        <ul className="space-y-5">

                            {[
                                "Help Center",
                                "Privacy Policy",
                                "Terms & Conditions",
                                "Travel Guidelines",
                            ].map((item, index) => (

                                <li key={index}>

                                    <button
                                        className="group inline-flex items-center gap-2 text-base-content/70 hover:text-cyan-500 transition-all duration-300"
                                    >

                                        <FaArrowRight className="text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />

                                        {item}

                                    </button>

                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* NEWSLETTER */}

                    <div className="lg:col-span-3">

                        <h3 className="text-xl font-bold text-base-content mb-7">

                            Newsletter

                        </h3>

                        <p className="text-base-content/70 leading-relaxed mb-6">

                            Subscribe to get special travel deals,
                            destination updates, and exclusive offers.

                        </p>

                        {/* INPUT */}

                        <div className="relative">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full h-15 rounded-2xl border border-base-300 bg-base-100 px-5 pr-16 outline-none text-base-content placeholder:text-base-content/40 focus:border-cyan-500 transition-all duration-300"
                            />

                            <button
                                className="absolute top-1/2 right-2 -translate-y-1/2 w-11 h-11 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105"
                            >

                                <FaPaperPlane />

                            </button>
                        </div>

                        {/* CONTACT */}

                        <div className="mt-7 space-y-4">

                            <div className="flex items-center gap-4 text-base-content/70">

                                <div className="w-11 h-11 rounded-xl bg-base-100 border border-base-300 flex items-center justify-center text-cyan-500">

                                    <FaPhoneAlt />

                                </div>

                                <span>
                                    +880 1738 878950
                                </span>

                            </div>

                            <div className="flex items-center gap-4 text-base-content/70">

                                <div className="w-11 h-11 rounded-xl bg-base-100 border border-base-300 flex items-center justify-center text-cyan-500">

                                    <FaPaperPlane />

                                </div>

                                <span>
                                    info@wanderlust.com
                                </span>

                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}

                <div className="mt-16 pt-8 border-t border-base-300 flex flex-col md:flex-row items-center justify-between gap-5">

                    <p className="text-base-content/60 text-sm text-center md:text-left">

                        © 2026 Wanderlust. All rights reserved.

                    </p>

                    <div className="flex items-center gap-6 text-sm text-base-content/60">

                        <button className="hover:text-cyan-500 transition-all duration-300">

                            Privacy

                        </button>

                        <button className="hover:text-cyan-500 transition-all duration-300">

                            Terms

                        </button>

                        <button className="hover:text-cyan-500 transition-all duration-300">

                            Cookies

                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;