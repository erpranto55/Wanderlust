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
    FaTag,
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

        price: "$1,299",
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

        price: "$2,499",
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

        price: "$1,799",
    },
];

const SpecialOffers = () => {

    return (
        <section className="relative overflow-hidden py-20 md:py-24 bg-base-100 transition-all duration-500">

            {/* BACKGROUND EFFECT */}

            <div className="absolute top-0 left-0 w-112.5 h-112.5 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-112.5 h-112.5 bg-blue-500/10 rounded-full blur-3xl"></div>

            {/* CONTAINER */}

            <div className="relative max-w-7xl mx-auto px-4">

                {/* TOP SECTION */}

                <div className="text-center max-w-4xl mx-auto mb-18">

                    {/* TAG */}

                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-md text-cyan-500 text-sm font-semibold">

                        <FaBolt />

                        Limited Time Offers

                    </div>

                    {/* TITLE */}

                    <h2 className="text-4xl md:text-6xl font-black text-base-content mt-6 leading-tight">

                        Exclusive Travel Deals
                        <br />

                        Just For You

                    </h2>

                    {/* DESCRIPTION */}

                    <p className="text-lg md:text-xl text-base-content/70 mt-7 leading-relaxed">

                        Unlock premium destinations, unforgettable
                        experiences, and luxury travel packages
                        with exclusive discounts.

                    </p>
                </div>

                {/* GRID */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {offers.map((offer) => (

                        <div
                            key={offer.id}
                            className="group relative overflow-hidden rounded-[40px] border border-base-300 bg-base-200/60 backdrop-blur-xl hover:-translate-y-3 transition-all duration-700 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_80px_rgba(6,182,212,0.18)]"
                        >

                            {/* IMAGE */}

                            <div className="relative h-140 overflow-hidden">

                                <Image
                                    src={offer.image}
                                    alt={offer.title}
                                    fill
                                    unoptimized
                                    className="object-cover group-hover:scale-110 transition-all duration-1000"
                                />

                                {/* OVERLAY */}

                                <div className={`absolute inset-0 bg-linear-to-b ${offer.gradient}`}></div>

                                <div className="absolute inset-0 bg-black/20"></div>

                                {/* TOP */}

                                <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">

                                    {/* DISCOUNT */}

                                    <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/10 text-white font-bold shadow-lg">

                                        <FaPercent />

                                        {offer.discount}

                                    </div>

                                    {/* BADGE */}

                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white text-sm font-semibold">

                                        <FaFire className="text-orange-400" />

                                        {offer.badge}

                                    </div>
                                </div>

                                {/* CONTENT */}

                                <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">

                                    {/* ICON */}

                                    <div className="w-18 h-18 rounded-[28px] bg-white/15 backdrop-blur-md border border-white/10 text-white text-3xl flex items-center justify-center shadow-xl mb-7">

                                        <FaGift />

                                    </div>

                                    {/* TITLE */}

                                    <h3 className="text-4xl font-black leading-tight">

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

                                    {/* PRICE + BUTTON */}

                                    <div className="flex items-end justify-between mt-9">

                                        {/* PRICE */}

                                        <div>

                                            <p className="text-white/60 text-sm flex items-center gap-2">

                                                <FaTag />

                                                Starting From

                                            </p>

                                            <h4 className="text-4xl font-black mt-2">

                                                {offer.price}

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

                                    {/* LINE */}

                                    <div className="w-14 group-hover:w-full h-1 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 mt-8 transition-all duration-700"></div>
                                </div>

                                {/* BIG NUMBER */}

                                <div className="absolute -bottom-10 -right-2 text-[180px] font-black text-white/5 group-hover:text-white/8 transition-all duration-700 leading-none">

                                    0{offer.id}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers;