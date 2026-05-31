import React from "react";

import {
    FaAward,
    FaGlobeAsia,
    FaHeadset,
    FaRocket,
    FaUsers,
} from "react-icons/fa";

const stats = [
    {
        id: 1,

        icon: <FaUsers />,

        number: "15K+",

        title: "Happy Travelers",

        description:
            "Thousands of travelers trust us for unforgettable journeys worldwide.",

        gradient:
            "from-cyan-500 to-blue-600",
    },

    {
        id: 2,

        icon: <FaGlobeAsia />,

        number: "120+",

        title: "Destinations",

        description:
            "Explore breathtaking destinations across beaches, mountains, cities, and more.",

        gradient:
            "from-emerald-500 to-green-600",
    },

    {
        id: 3,

        icon: <FaAward />,

        number: "98%",

        title: "Satisfaction Rate",

        description:
            "Exceptional travel experiences with premium service and customer care.",

        gradient:
            "from-amber-500 to-orange-600",
    },

    {
        id: 4,

        icon: <FaHeadset />,

        number: "24/7",

        title: "Customer Support",

        description:
            "Dedicated support team available anytime during your travel experience.",

        gradient:
            "from-violet-500 to-purple-600",
    },
];

const StatisticsSection = () => {

    return (
        <section className="relative overflow-hidden py-20 md:py-24 bg-base-100 transition-all duration-500">

            {/* BACKGROUND EFFECT */}

            <div className="absolute top-0 left-0 w-112.5 h-112.5 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-112.5 h-112.5 bg-blue-500/10 rounded-full blur-3xl"></div>

            {/* CONTAINER */}

            <div className="relative max-w-7xl mx-auto px-4">

                {/* TOP */}

                <div className="text-center max-w-4xl mx-auto mb-18">

                    {/* TAG */}

                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-md text-cyan-500 text-sm font-semibold">

                        <FaRocket />

                        Trusted Worldwide

                    </div>

                    {/* TITLE */}

                    <h2 className="text-4xl md:text-6xl font-black text-base-content mt-6 leading-tight">

                        Trusted By Travelers
                        <br />

                        Across The Globe

                    </h2>

                    {/* DESCRIPTION */}

                    <p className="text-lg md:text-xl text-base-content/70 mt-7 leading-relaxed">

                        Delivering unforgettable journeys, luxury
                        travel experiences, and world-class customer
                        support for travelers worldwide.

                    </p>
                </div>

                {/* GRID */}

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">

                    {stats.map((stat) => (

                        <div
                            key={stat.id}
                            className="group relative overflow-hidden rounded-[36px] border border-base-300 bg-base-200/60 backdrop-blur-xl p-8 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(6,182,212,0.18)]"
                        >

                            {/* HOVER OVERLAY */}

                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br ${stat.gradient} transition-all duration-700`}></div>

                            {/* GLOW */}

                            <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-linear-to-br ${stat.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-all duration-700`}></div>

                            {/* CONTENT */}

                            <div className="relative z-10">

                                {/* ICON */}

                                <div className={`w-20 h-20 rounded-[28px] bg-linear-to-br ${stat.gradient} text-white text-4xl flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.25)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>

                                    {stat.icon}

                                </div>

                                {/* NUMBER */}

                                <h3 className="text-5xl md:text-6xl font-black text-base-content group-hover:text-white mt-8 leading-none transition-all duration-500">

                                    {stat.number}

                                </h3>

                                {/* TITLE */}

                                <h4 className="text-2xl font-black text-base-content group-hover:text-white mt-5 transition-all duration-500">

                                    {stat.title}

                                </h4>

                                {/* DESCRIPTION */}

                                <p className="text-base-content/70 group-hover:text-white/80 leading-relaxed mt-5 text-[15px] transition-all duration-500">

                                    {stat.description}

                                </p>

                                {/* LINE */}

                                <div className="w-14 group-hover:w-full h-1 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 mt-8 transition-all duration-700"></div>
                            </div>

                            {/* BIG NUMBER */}

                            <div className="absolute -bottom-10 -right-2 text-[180px] font-black text-base-content/3 group-hover:text-white/8 transition-all duration-700 leading-none">

                                0{stat.id}

                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTTOM CTA */}

                <div className="mt-20 relative overflow-hidden rounded-[40px] border border-base-300 bg-base-200/60 backdrop-blur-xl p-10 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

                    {/* GLOW */}

                    <div className="absolute top-0 right-0 w-87.5 h-87.5 bg-cyan-500/10 rounded-full blur-3xl"></div>

                    {/* CONTENT */}

                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">

                        {/* LEFT */}

                        <div className="max-w-3xl">

                            <h3 className="text-4xl md:text-5xl font-black text-base-content leading-tight">

                                Your Dream Journey
                                <br />

                                Starts Here

                            </h3>

                            <p className="text-base-content/70 text-lg mt-6 leading-relaxed">

                                Join thousands of travelers exploring
                                breathtaking destinations and premium
                                travel experiences worldwide.

                            </p>
                        </div>

                        {/* BUTTON */}

                        <button className="group flex items-center gap-3 h-16 px-8 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg shadow-[0_10px_40px_rgba(6,182,212,0.35)] transition-all duration-500 hover:scale-105 whitespace-nowrap">

                            Explore Destinations

                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatisticsSection;