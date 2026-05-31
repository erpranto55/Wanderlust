import React from "react";

import {
    FaArrowRight,
    FaEnvelopeOpenText,
    FaGift,
    FaMapMarkedAlt,
    FaPaperPlane,
    FaPlaneDeparture,
    FaShieldAlt,
} from "react-icons/fa";

const NewsletterSection = () => {

    return (
        <section className="relative overflow-hidden py-20 md:py-28 bg-base-100 transition-all duration-500">

            {/* BACKGROUND EFFECTS */}

            <div className="absolute top-0 left-0 w-150 h-150 bg-cyan-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-150 h-150 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.12),transparent_40%)]"></div>

            {/* CONTAINER */}

            <div className="relative max-w-7xl mx-auto px-4">

                {/* MAIN CARD */}

                <div className="relative overflow-hidden rounded-[48px] border border-base-300 bg-base-200/60 backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.18)]">

                    {/* GRADIENT OVERLAY */}

                    <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-blue-500/5 to-indigo-500/10"></div>

                    {/* GLOW */}

                    <div className="absolute -top-24 -left-24 w-87.5 h-87.5 bg-cyan-500/20 rounded-full blur-3xl"></div>

                    <div className="absolute -bottom-24 -right-24 w-87.5 h-87.5 bg-blue-500/20 rounded-full blur-3xl"></div>

                    {/* CONTENT */}

                    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-14 p-8 md:p-14 lg:p-16">

                        {/* LEFT SIDE */}

                        <div className="flex flex-col justify-center">

                            {/* BADGE */}

                            <div className="inline-flex w-fit items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-md text-cyan-400 text-sm font-semibold">

                                <FaEnvelopeOpenText />

                                Premium Newsletter

                            </div>

                            {/* TITLE */}

                            <h2 className="text-4xl md:text-6xl font-black text-base-content mt-7 leading-tight">

                                Unlock Exclusive
                                <br />

                                Travel Experiences

                            </h2>

                            {/* DESCRIPTION */}

                            <p className="text-base-content/70 text-lg md:text-xl mt-7 leading-relaxed max-w-2xl">

                                Subscribe and receive premium travel deals,
                                destination inspiration, luxury getaway offers,
                                and exclusive travel insights directly in your inbox.

                            </p>

                            {/* FEATURES */}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

                                {/* ITEM */}

                                <div className="group flex items-start gap-4 rounded-3xl border border-base-300 bg-base-100/70 backdrop-blur-xl p-5 hover:border-cyan-400/30 transition-all duration-500">

                                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 text-base-content flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-all duration-500">

                                        <FaPlaneDeparture />

                                    </div>

                                    <div>

                                        <h4 className="text-base-content font-bold text-lg">

                                            Weekly Deals

                                        </h4>

                                        <p className="text-base-content/70 text-sm mt-1 leading-relaxed">

                                            Discover exclusive travel offers every week.

                                        </p>
                                    </div>
                                </div>

                                {/* ITEM */}

                                <div className="group flex items-start gap-4 rounded-3xl border border-base-300 bg-base-100/70 backdrop-blur-xl p-5 hover:border-cyan-400/30 transition-all duration-500">

                                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 text-base-content flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-all duration-500">

                                        <FaMapMarkedAlt />

                                    </div>

                                    <div>

                                        <h4 className="text-base-content font-bold text-lg">

                                            Destination Guides

                                        </h4>

                                        <p className="text-base-content/70 text-sm mt-1 leading-relaxed">

                                            Get curated travel tips and inspiration.

                                        </p>
                                    </div>
                                </div>

                                {/* ITEM */}

                                <div className="group flex items-start gap-4 rounded-3xl border border-base-300 bg-base-100/70 backdrop-blur-xl p-5 hover:border-cyan-400/30 transition-all duration-500">

                                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 text-base-content flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-all duration-500">

                                        <FaGift />

                                    </div>

                                    <div>

                                        <h4 className="text-base-content font-bold text-lg">

                                            Exclusive Discounts

                                        </h4>

                                        <p className="text-base-content/70 text-sm mt-1 leading-relaxed">

                                            Access members-only travel discounts.

                                        </p>
                                    </div>
                                </div>

                                {/* ITEM */}

                                <div className="group flex items-start gap-4 rounded-3xl border border-base-300 bg-base-100/70 backdrop-blur-xl p-5 hover:border-cyan-400/30 transition-all duration-500">

                                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-cyan-500 to-blue-600 text-base-content flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-all duration-500">

                                        <FaShieldAlt />

                                    </div>

                                    <div>

                                        <h4 className="text-base-content font-bold text-lg">

                                            Secure & Spam Free

                                        </h4>

                                        <p className="text-base-content/70 text-sm mt-1 leading-relaxed">

                                            Your information stays safe and protected.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}

                        <div className="relative">

                            {/* FORM CARD */}

                            <div className="relative overflow-hidden rounded-[40px] border border-base-300 bg-base-100/80 backdrop-blur-2xl p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.15)]">

                                {/* SMALL GLOW */}

                                <div className="absolute top-0 right-0 w-55 h-55 bg-cyan-500/10 rounded-full blur-3xl"></div>

                                {/* ICON */}

                                <div className="relative w-24 h-24 rounded-[30px] bg-linear-to-br from-cyan-500 to-blue-600 text-base-content text-5xl flex items-center justify-center shadow-[0_15px_40px_rgba(6,182,212,0.35)]">

                                    <FaPaperPlane />

                                </div>

                                {/* TITLE */}

                                <h3 className="relative text-4xl font-black text-base-content mt-8 leading-tight">

                                    Stay Updated
                                    <br />

                                    With WanderLust

                                </h3>

                                {/* DESCRIPTION */}

                                <p className="relative text-base-content/70 mt-6 leading-relaxed text-[15px]">

                                    Join thousands of travelers receiving
                                    premium travel deals, destination updates,
                                    and luxury travel inspiration.

                                </p>

                                {/* FORM */}

                                <form className="relative mt-10 space-y-5">

                                    {/* INPUT */}

                                    <div className="relative">

                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="w-full h-16 rounded-2xl border border-base-300 bg-base-200/70 backdrop-blur-md px-6 text-base-content placeholder:text-base-content/40 outline-none focus:border-cyan-400 transition-all duration-300"
                                        />

                                    </div>

                                    {/* BUTTON */}

                                    <button
                                        type="submit"
                                        className="group w-full h-16 rounded-2xl bg-linear-to-r from-primary to-info hover:from-cyan-600 hover:to-blue-700 text-base-content font-black text-lg flex items-center justify-center gap-3 transition-all duration-500 hover:scale-[1.02] shadow-[0_15px_40px_rgba(6,182,212,0.35)]"
                                    >

                                        Subscribe Now

                                        <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

                                    </button>
                                </form>

                                {/* FOOTER */}

                                <div className="relative mt-8 flex items-center justify-between gap-5 border-t border-white/10 pt-6">

                                    <div>

                                        <h4 className="text-base-content font-bold text-lg">

                                            15K+ Subscribers

                                        </h4>

                                        <p className="text-base-content/70 text-sm mt-1">

                                            Join our growing travel community

                                        </p>
                                    </div>

                                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-cyan-400 text-xl">

                                        <FaEnvelopeOpenText />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BIG TEXT */}

                    <div className="absolute -bottom-16 -right-4 text-[220px] font-black text-base-content/3 leading-none select-none">

                        TRAVEL

                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;