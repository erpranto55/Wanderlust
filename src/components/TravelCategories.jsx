import Link from "next/link";
import React from "react";

import {
    FaArrowRight,
    FaCity,
    FaCompass,
    FaGlobeAsia,
    FaMountain,
    FaUmbrellaBeach,
} from "react-icons/fa";

import {
    GiIsland,
    GiMountaintop,
} from "react-icons/gi";

const categories = [
    {
        id: 1,

        name: "Beach",

        icon: <FaUmbrellaBeach />,

        description:
            "Sunny beaches, crystal-clear water & tropical escapes",

        tours: "24+ Tours",

        gradient:
            "from-cyan-500 via-sky-500 to-blue-600",
    },

    {
        id: 2,

        name: "Mountain",

        icon: <FaMountain />,

        description:
            "Snowy peaks, alpine resorts & breathtaking adventures",

        tours: "18+ Tours",

        gradient:
            "from-emerald-500 via-green-500 to-lime-600",
    },

    {
        id: 3,

        name: "Luxury",

        icon: <GiIsland />,

        description:
            "Luxury resorts, premium villas & unforgettable comfort",

        tours: "12+ Tours",

        gradient:
            "from-amber-400 via-orange-500 to-red-500",
    },

    {
        id: 4,

        name: "Adventure",

        icon: <GiMountaintop />,

        description:
            "Thrilling outdoor experiences & wild exploration",

        tours: "30+ Tours",

        gradient:
            "from-rose-500 via-pink-500 to-fuchsia-600",
    },

    {
        id: 5,

        name: "City",

        icon: <FaCity />,

        description:
            "Modern skylines, nightlife & cultural attractions",

        tours: "15+ Tours",

        gradient:
            "from-violet-500 via-purple-500 to-indigo-600",
    },

    {
        id: 6,

        name: "Cultural",

        icon: <FaGlobeAsia />,

        description:
            "Ancient history, traditions & local experiences",

        tours: "10+ Tours",

        gradient:
            "from-blue-500 via-indigo-500 to-purple-600",
    },
];

const TravelCategories = () => {

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

                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-md text-cyan-500 font-semibold text-sm">

                        <FaCompass />

                        Explore Categories

                    </div>

                    {/* TITLE */}

                    <h2 className="text-4xl md:text-6xl font-black text-base-content mt-6 leading-tight">

                        Find Your Perfect
                        <br />

                        Travel Experience

                    </h2>

                    {/* DESCRIPTION */}

                    <p className="text-lg md:text-xl text-base-content/70 mt-7 leading-relaxed">

                        Discover unforgettable travel experiences
                        designed for every explorer — from tropical
                        escapes to thrilling adventures.

                    </p>
                </div>

                {/* GRID */}

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

                    {categories.map((category) => (

                        <Link
                            key={category.id}
                            href={`/destination?category=${category.name}`}
                            className="group relative overflow-hidden rounded-[36px] border border-base-300 bg-base-200/60 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_80px_rgba(6,182,212,0.18)] transition-all duration-700 hover:-translate-y-3"
                        >

                            {/* HOVER OVERLAY */}

                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br ${category.gradient} transition-all duration-700`}></div>

                            {/* GLOW */}

                            <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-linear-to-br ${category.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-all duration-700`}></div>

                            {/* CONTENT */}

                            <div className="relative z-10 p-8">

                                {/* TOP */}

                                <div className="flex items-start justify-between">

                                    {/* ICON */}

                                    <div className={`w-22 h-22 rounded-[30px] bg-linear-to-br ${category.gradient} text-white text-5xl flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.18)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>

                                        {category.icon}

                                    </div>

                                    {/* NUMBER */}

                                    <div className="text-7xl font-black text-base-content/5 group-hover:text-white/10 transition-all duration-700">

                                        0{category.id}

                                    </div>
                                </div>

                                {/* CONTENT */}

                                <div className="mt-10">

                                    <h3 className="text-3xl font-black text-base-content group-hover:text-white transition-all duration-500">

                                        {category.name}

                                    </h3>

                                    <p className="text-base-content/70 group-hover:text-white/80 mt-5 leading-relaxed text-[15px] transition-all duration-500">

                                        {category.description}

                                    </p>
                                </div>

                                {/* BOTTOM */}

                                <div className="flex items-center justify-between mt-10">

                                    {/* TOURS */}

                                    <div className="px-5 py-2 rounded-full border border-base-300 bg-base-100/70 group-hover:bg-white/15 backdrop-blur-md text-base-content group-hover:text-white font-semibold text-sm transition-all duration-500">

                                        {category.tours}

                                    </div>

                                    {/* BUTTON */}

                                    <div className="w-14 h-14 rounded-2xl border border-base-300 bg-base-100/70 group-hover:bg-white/15 backdrop-blur-md flex items-center justify-center text-base-content group-hover:text-white transition-all duration-500 group-hover:translate-x-1">

                                        <FaArrowRight />

                                    </div>
                                </div>

                                {/* LINE */}

                                <div className="w-14 group-hover:w-full h-1 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 mt-8 transition-all duration-700"></div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TravelCategories;