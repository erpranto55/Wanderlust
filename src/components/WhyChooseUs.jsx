import React from "react";

import {
    FaCheckCircle,
    FaGlobeAsia,
    FaHeadset,
    FaHotel,
    FaShieldAlt,
} from "react-icons/fa";

const features = [
    {
        id: 1,
        icon: <FaGlobeAsia />,
        title: "Worldwide Destinations",
        description:
            "Explore breathtaking destinations across the globe with carefully curated premium travel experiences.",
    },

    {
        id: 2,
        icon: <FaHotel />,
        title: "Luxury Accommodations",
        description:
            "Stay in handpicked luxury resorts, hotels, and villas designed for comfort and elegance.",
    },

    {
        id: 3,
        icon: <FaShieldAlt />,
        title: "Safe & Secure Travel",
        description:
            "Travel confidently with secure booking systems, verified tours, and trusted travel guides.",
    },

    {
        id: 4,
        icon: <FaHeadset />,
        title: "24/7 Customer Support",
        description:
            "Get dedicated travel assistance anytime before, during, and after your journey.",
    },
];

const WhyChooseUs = () => {

    return (
        <section className="relative py-16  overflow-hidden bg-linear-to-b from-white via-slate-50 to-white">

            {/* BACKGROUND BLUR */}

            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>

            {/* CONTAINER */}

            <div className="relative max-w-7xl mx-auto px-4">

                {/* TOP SECTION */}

                <div className="text-center max-w-4xl mx-auto mb-20">

                    <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-100 text-cyan-600 px-5 py-2 rounded-full text-sm font-semibold">

                        <FaCheckCircle />

                        Why Travelers Love Us

                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-6 leading-tight">

                        We Create Journeys
                        <br />

                        Worth Remembering

                    </h2>

                    <p className="text-gray-500 text-lg md:text-xl mt-7 leading-relaxed">

                        From luxury accommodations to unforgettable adventures,
                        we deliver premium travel experiences designed to make
                        every journey seamless, safe, and extraordinary.

                    </p>
                </div>

                {/* FEATURE GRID */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

                    {features.map((feature) => (

                        <div
                            key={feature.id}
                            className="group relative overflow-hidden rounded-[32px] bg-white/80 backdrop-blur-xl border border-white shadow-[0_10px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_70px_rgba(6,182,212,0.18)] transition-all duration-500 p-8 hover:-translate-y-3"
                        >

                            {/* HOVER GRADIENT */}

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-cyan-500/5 to-blue-500/5 transition-all duration-500"></div>

                            {/* ICON */}

                            <div className="relative w-20 h-20 rounded-[28px] bg-linear-to-br from-cyan-500 to-blue-600 text-white text-4xl flex items-center justify-center shadow-[0_10px_30px_rgba(6,182,212,0.35)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">

                                {feature.icon}

                            </div>

                            {/* CONTENT */}

                            <div className="relative">

                                <h3 className="text-2xl font-black text-slate-900 mt-8 leading-snug">

                                    {feature.title}

                                </h3>

                                <p className="text-gray-500 leading-relaxed mt-5 text-[15px]">

                                    {feature.description}

                                </p>

                            </div>

                            {/* BOTTOM LINE */}

                            <div className="relative mt-8 w-12 group-hover:w-full h-1 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 transition-all duration-500"></div>

                            {/* BIG BACKGROUND NUMBER */}

                            <div className="absolute -bottom-4 -right-2 text-8xl font-black text-slate-100 group-hover:text-cyan-50 transition-all duration-500">

                                0{feature.id}

                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTTOM STATS */}

                <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">

                    <div className="text-center">

                        <h3 className="text-5xl font-black text-cyan-600">
                            15K+
                        </h3>

                        <p className="text-gray-500 mt-3">
                            Happy Travelers
                        </p>
                    </div>

                    <div className="text-center">

                        <h3 className="text-5xl font-black text-cyan-600">
                            120+
                        </h3>

                        <p className="text-gray-500 mt-3">
                            Destinations
                        </p>
                    </div>

                    <div className="text-center">

                        <h3 className="text-5xl font-black text-cyan-600">
                            98%
                        </h3>

                        <p className="text-gray-500 mt-3">
                            Satisfaction Rate
                        </p>
                    </div>

                    <div className="text-center">

                        <h3 className="text-5xl font-black text-cyan-600">
                            24/7
                        </h3>

                        <p className="text-gray-500 mt-3">
                            Support Service
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;