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

        gradient:
            "from-cyan-500 via-sky-500 to-blue-600",
    },

    {
        id: 2,

        icon: <FaHotel />,

        title: "Luxury Accommodations",

        description:
            "Stay in handpicked luxury resorts, hotels, and villas designed for comfort and elegance.",

        gradient:
            "from-amber-400 via-orange-500 to-red-500",
    },

    {
        id: 3,

        icon: <FaShieldAlt />,

        title: "Safe & Secure Travel",

        description:
            "Travel confidently with secure booking systems, verified tours, and trusted travel guides.",

        gradient:
            "from-emerald-500 via-green-500 to-lime-600",
    },

    {
        id: 4,

        icon: <FaHeadset />,

        title: "24/7 Customer Support",

        description:
            "Get dedicated travel assistance anytime before, during, and after your journey.",

        gradient:
            "from-violet-500 via-purple-500 to-indigo-600",
    },
];

const WhyChooseUs = () => {

    return (
        <section className="relative overflow-hidden py-20 md:py-24 bg-base-100 transition-all duration-500">

            {/* BACKGROUND EFFECT */}

            <div className="absolute top-0 left-0 w-112.5 h-112.5 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-112.5 h-112.5 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_40%)]"></div>

            {/* CONTAINER */}

            <div className="relative max-w-7xl mx-auto px-4">

                {/* TOP */}

                <div className="text-center max-w-4xl mx-auto mb-18">

                    {/* TAG */}

                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-md text-cyan-500 text-sm font-semibold">

                        <FaCheckCircle />

                        Why Travelers Love Us

                    </div>

                    {/* TITLE */}

                    <h2 className="text-4xl md:text-6xl font-black text-base-content mt-6 leading-tight">

                        We Create Journeys
                        <br />

                        Worth Remembering

                    </h2>

                    {/* DESCRIPTION */}

                    <p className="text-lg md:text-xl text-base-content/70 mt-7 leading-relaxed">

                        From luxury accommodations to unforgettable
                        adventures, we deliver premium travel
                        experiences designed to make every journey
                        seamless, safe, and extraordinary.

                    </p>
                </div>

                {/* GRID */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

                    {features.map((feature) => (

                        <div
                            key={feature.id}
                            className="group relative overflow-hidden rounded-[38px] border border-base-300 bg-base-200/60 backdrop-blur-xl p-8 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(6,182,212,0.18)]"
                        >

                            {/* HOVER OVERLAY */}

                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br ${feature.gradient} transition-all duration-700`}></div>

                            {/* GLOW */}

                            <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-linear-to-br ${feature.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-all duration-700`}></div>

                            {/* CONTENT */}

                            <div className="relative z-10">

                                {/* ICON */}

                                <div className={`w-22 h-22 rounded-[30px] bg-linear-to-br ${feature.gradient} text-white text-5xl flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.18)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>

                                    {feature.icon}

                                </div>

                                {/* TITLE */}

                                <h3 className="text-3xl font-black text-base-content group-hover:text-white mt-10 leading-snug transition-all duration-500">

                                    {feature.title}

                                </h3>

                                {/* DESCRIPTION */}

                                <p className="text-base-content/70 group-hover:text-white/80 leading-relaxed mt-5 text-[15px] transition-all duration-500">

                                    {feature.description}

                                </p>

                                {/* LINE */}

                                <div className="w-14 group-hover:w-full h-1 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 mt-8 transition-all duration-700"></div>
                            </div>

                            {/* BIG NUMBER */}

                            <div className="absolute -bottom-10 -right-2 text-[180px] font-black text-base-content/3 group-hover:text-white/8 transition-all duration-700 leading-none">

                                0{feature.id}

                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTTOM CTA */}

                <div className="mt-20 relative overflow-hidden rounded-[40px] border border-base-300 bg-base-200/60 backdrop-blur-xl p-10 md:p-14 shadow-[0_20px_80px_rgba(0,0,0,0.05)]">

                    {/* GLOW */}

                    <div className="absolute top-0 right-0 w-87.5 h-87.5 bg-cyan-500/10 rounded-full blur-3xl"></div>

                    {/* CONTENT */}

                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">

                        {/* LEFT */}

                        <div className="max-w-3xl">

                            <h3 className="text-4xl md:text-5xl font-black text-base-content leading-tight">

                                Ready For Your
                                <br />

                                Next Adventure?

                            </h3>

                            <p className="text-base-content/70 text-lg mt-6 leading-relaxed">

                                Discover premium destinations,
                                luxury experiences, and unforgettable
                                journeys crafted for every traveler.

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

export default WhyChooseUs;