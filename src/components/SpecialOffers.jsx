import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
    FaArrowRight,
    FaBolt,
    FaFire,
    FaGift,
    FaPercent,
    FaStar,
} from "react-icons/fa";

const offers = [
    {
        id: 1,
        title: "Summer Beach Escape",
        description:
            "Luxury beach resorts, crystal-clear waters, tropical adventures, and unforgettable sunsets.",

        discount: "40% OFF",

        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",

        gradient:
            "from-cyan-500/80 via-sky-500/60 to-blue-900/90",

        badge: "Trending",
    },

    {
        id: 2,
        title: "Luxury Honeymoon Retreat",
        description:
            "Romantic overwater villas, private dinners, luxury spas, and premium honeymoon experiences.",

        discount: "25% OFF",

        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",

        gradient:
            "from-rose-500/80 via-pink-500/60 to-fuchsia-900/90",

        badge: "Premium",
    },

    {
        id: 3,
        title: "Mountain Adventure Tour",
        description:
            "Explore snowy mountains, scenic hiking trails, and thrilling outdoor adventures.",

        discount: "30% OFF",

        image:
            "https://images.unsplash.com/photo-1517821365201-7734f463f9f1?q=80&w=2070&auto=format&fit=crop",

        gradient:
            "from-emerald-500/80 via-green-500/60 to-lime-900/90",

        badge: "Popular",
    },
];

const SpecialOffers = () => {

    return (
        <section className="relative overflow-hidden py-20 md:py-24 bg-[#020617]">

            {/* BACKGROUND EFFECTS */}

            <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.12),transparent_40%)]"></div>

            {/* CONTAINER */}

            <div className="relative max-w-7xl mx-auto px-4">

                {/* TOP SECTION */}

                <div className="text-center max-w-4xl mx-auto mb-16">

                    {/* TAG */}

                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-md text-cyan-400 text-sm font-semibold">

                        <FaBolt />

                        Exclusive Travel Deals

                    </div>

                    {/* TITLE */}

                    <h2 className="text-4xl md:text-6xl font-black text-white mt-6 leading-tight">

                        Special Offers
                        <br />

                        You Can’t Miss

                    </h2>

                    {/* DESCRIPTION */}

                    <p className="text-gray-400 text-lg md:text-xl mt-7 leading-relaxed">

                        Discover limited-time travel deals, premium destinations,
                        and unforgettable experiences at exclusive discounted prices.

                    </p>
                </div>

                {/* GRID */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {offers.map((offer) => (

                        <div
                            key={offer.id}
                            className="group relative overflow-hidden rounded-[40px] h-150 border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] hover:-translate-y-3 transition-all duration-700"
                        >

                            {/* IMAGE */}

                            <Image
                                src={offer.image}
                                alt={offer.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-all duration-1000"
                            />

                            {/* DARK OVERLAY */}

                            <div className={`absolute inset-0 bg-linear-to-b ${offer.gradient}`}></div>

                            {/* GLOW */}

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition-all duration-700"></div>

                            {/* TOP BADGES */}

                            <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">

                                {/* DISCOUNT */}

                                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/20 text-white font-bold shadow-lg">

                                    <FaPercent />

                                    {offer.discount}

                                </div>

                                {/* TAG */}

                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white text-sm font-semibold">

                                    <FaFire className="text-orange-400" />

                                    {offer.badge}

                                </div>
                            </div>

                            {/* CONTENT */}

                            <div className="relative z-10 h-full flex flex-col justify-end p-8">

                                {/* SMALL ICON */}

                                <div className="w-16 h-16 rounded-3xl bg-white/15 backdrop-blur-md border border-white/10 text-white text-2xl flex items-center justify-center shadow-xl mb-6">

                                    <FaGift />

                                </div>

                                {/* TITLE */}

                                <h3 className="text-4xl font-black text-white leading-tight">

                                    {offer.title}

                                </h3>

                                {/* DESCRIPTION */}

                                <p className="text-white/80 mt-5 leading-relaxed text-[15px]">

                                    {offer.description}

                                </p>

                                {/* RATING */}

                                <div className="flex items-center gap-2 mt-6">

                                    {[...Array(5)].map((_, index) => (

                                        <FaStar
                                            key={index}
                                            className="text-yellow-400"
                                        />
                                    ))}

                                    <span className="text-white/80 text-sm ml-2">

                                        4.9 Rating

                                    </span>
                                </div>

                                {/* BOTTOM */}

                                <div className="flex items-center justify-between mt-8">

                                    {/* PRICE */}

                                    <div>

                                        <p className="text-white/60 text-sm">
                                            Starting From
                                        </p>

                                        <h4 className="text-3xl font-black text-white mt-1">

                                            $1,299

                                        </h4>
                                    </div>

                                    {/* BUTTON */}

                                    <Link
                                        href="/destination"
                                        className="group/button w-16 h-16 rounded-2xl bg-white text-slate-900 hover:bg-cyan-500 hover:text-white flex items-center justify-center text-xl shadow-2xl transition-all duration-500 hover:scale-110"
                                    >

                                        <FaArrowRight className="group-hover/button:translate-x-1 transition-all duration-300" />

                                    </Link>
                                </div>

                                {/* BOTTOM LINE */}

                                <div className="w-14 group-hover:w-full h-1 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 mt-8 transition-all duration-700"></div>
                            </div>

                            {/* BIG NUMBER */}

                            <div className="absolute -bottom-8 -right-2 text-[180px] font-black text-white/5 group-hover:text-white/10 transition-all duration-700 leading-none">

                                0{offer.id}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;