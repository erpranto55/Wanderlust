import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
    FaArrowRight,
    FaClock,
    FaGlobeAsia,
    FaMapMarkerAlt,
    FaStar,
    FaUsers,
} from "react-icons/fa";

const PopularDestinations = async () => {

    const res = await fetch(
        "http://localhost:5000/destination",
        {
            cache: "no-store",
        }
    );

    const destinations = await res.json();

    const popularDestinations =
        destinations.slice(0, 3);

    return (
        <section className="relative overflow-hidden py-20 lg:py-28 bg-base-100">

            {/* BG EFFECT */}

            <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-500/10 rounded-full blur-3xl" />

            <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-500/10 rounded-full blur-3xl" />

            {/* CONTAINER */}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* TOP */}

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16 lg:mb-20">

                    {/* LEFT */}

                    <div className="max-w-3xl">

                        {/* BADGE */}

                        <div
                            className="
                            inline-flex
                            items-center
                            gap-2
                            px-4
                            py-2
                            rounded-full
                            border
                            border-cyan-500/20
                            bg-cyan-500/10
                            backdrop-blur-md
                            text-cyan-500
                            text-sm
                            font-semibold
                            "
                        >

                            <FaGlobeAsia />

                            Popular Destinations

                        </div>

                        {/* TITLE */}

                        <h2
                            className="
                            mt-6
                            text-4xl
                            md:text-5xl
                            lg:text-6xl
                            font-black
                            tracking-tight
                            leading-[1.05]
                            text-base-content
                            "
                        >

                            Explore The World’s
                            <span className="block text-cyan-500">
                                Most Beautiful Places
                            </span>

                        </h2>

                        {/* DESCRIPTION */}

                        <p
                            className="
                            mt-6
                            text-base
                            md:text-lg
                            leading-relaxed
                            text-base-content/70
                            max-w-2xl
                            "
                        >

                            Discover breathtaking travel destinations,
                            luxury experiences, and unforgettable adventures
                            curated for modern explorers.

                        </p>

                    </div>

                    {/* BUTTON */}

                    <Link
                        href="/destination"
                        className="
                        group
                        inline-flex
                        items-center
                        justify-center
                        gap-3
                        h-13
                        px-7
                        rounded-2xl
                        bg-linear-to-r
                        from-cyan-500
                        to-blue-600
                        hover:from-cyan-400
                        hover:to-blue-500
                        text-white
                        font-semibold
                        transition-all
                        duration-300
                        shadow-[0_10px_35px_rgba(6,182,212,0.28)]
                        hover:scale-[1.03]
                        "
                    >

                        Explore All

                        <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

                    </Link>

                </div>

                {/* GRID */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

                    {popularDestinations.map((destination) => {

                        const reviews =
                            destination?.reviews || [];

                        const totalReviews =
                            reviews.length;

                        const averageRating =
                            totalReviews > 0
                                ? (
                                    reviews.reduce(
                                        (acc, review) =>
                                            acc +
                                            Number(review.rating),
                                        0
                                    ) / totalReviews
                                ).toFixed(1)
                                : 0;

                        return (

                            <div
                                key={destination._id}
                                className="
                                group
                                overflow-hidden
                                rounded-[30px]
                                border
                                border-base-300/60
                                bg-base-200/40
                                backdrop-blur-xl
                                transition-all
                                duration-500
                                hover:-translate-y-2
                                hover:border-cyan-500/20
                                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                                hover:shadow-[0_20px_60px_rgba(6,182,212,0.12)]
                                "
                            >

                                {/* IMAGE */}

                                <div className="relative h-80 overflow-hidden">

                                    <Image
                                        src={destination.imageUrl}
                                        alt={destination.destinationName}
                                        fill
                                        unoptimized
                                        className="
                                        object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                        "
                                    />

                                    {/* OVERLAY */}

                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />

                                    {/* TOP BADGES */}

                                    <div className="absolute top-5 left-5 right-5 flex items-start justify-between gap-3">

                                        {/* COUNTRY */}

                                        <div
                                            className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            px-4
                                            py-2
                                            rounded-full
                                            bg-black/30
                                            backdrop-blur-md
                                            border
                                            border-white/10
                                            text-white
                                            text-sm
                                            font-medium
                                            "
                                        >

                                            <FaMapMarkerAlt className="text-cyan-400" />

                                            {destination.country}

                                        </div>

                                        {/* CATEGORY */}

                                        <div
                                            className="
                                            px-4
                                            py-2
                                            rounded-full
                                            bg-cyan-500
                                            text-white
                                            text-sm
                                            font-semibold
                                            shadow-lg
                                            "
                                        >

                                            {destination.category}

                                        </div>

                                    </div>

                                    {/* BOTTOM CONTENT */}

                                    <div className="absolute bottom-0 left-0 w-full p-6 text-white">

                                        {/* PRICE */}

                                        <div
                                            className="
                                            inline-flex
                                            items-center
                                            px-4
                                            py-2
                                            rounded-full
                                            bg-white/10
                                            backdrop-blur-md
                                            border
                                            border-white/10
                                            text-lg
                                            font-black
                                            "
                                        >

                                            ${destination.price}

                                        </div>

                                        {/* TITLE */}

                                        <h3
                                            className="
                                            mt-4
                                            text-3xl
                                            font-black
                                            leading-tight
                                            "
                                        >

                                            {destination.destinationName}

                                        </h3>

                                        {/* INFO */}

                                        <div
                                            className="
                                            flex
                                            flex-wrap
                                            items-center
                                            gap-4
                                            mt-4
                                            text-sm
                                            text-white/80
                                            "
                                        >

                                            <div className="flex items-center gap-2">

                                                <FaClock className="text-cyan-400" />

                                                {destination.duration}

                                            </div>

                                            <div className="flex items-center gap-2">

                                                <FaUsers className="text-cyan-400" />

                                                {destination.travelers || "2 - 10 Travelers"}

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* CONTENT */}

                                <div className="p-6">

                                    {/* REVIEW ROW */}

                                    <div className="flex items-center justify-between">

                                        <div className="flex items-center gap-3">

                                            <div className="flex items-center gap-1 text-yellow-400">

                                                <FaStar />

                                                <span className="font-bold text-base-content">

                                                    {averageRating}

                                                </span>

                                            </div>

                                            <span className="text-sm text-base-content/60">

                                                ({totalReviews} Reviews)

                                            </span>

                                        </div>

                                        <p className="text-sm text-base-content/60">

                                            {destination.departureDate}

                                        </p>

                                    </div>

                                    {/* DESCRIPTION */}

                                    <p
                                        className="
                                        mt-5
                                        text-base-content/70
                                        leading-relaxed
                                        text-[15px]
                                        line-clamp-3
                                        "
                                    >

                                        {destination.description}

                                    </p>

                                    {/* BUTTON */}

                                    <Link
                                        href={`/destination/${destination._id}`}
                                        className="
                                        group/button
                                        mt-6
                                        h-12
                                        rounded-2xl
                                        bg-linear-to-r
                                        from-cyan-500
                                        to-blue-600
                                        hover:from-cyan-400
                                        hover:to-blue-500
                                        text-white
                                        font-semibold
                                        flex
                                        items-center
                                        justify-center
                                        gap-3
                                        transition-all
                                        duration-300
                                        shadow-[0_10px_30px_rgba(6,182,212,0.22)]
                                        hover:scale-[1.02]
                                        "
                                    >

                                        View Details

                                        <FaArrowRight className="group-hover/button:translate-x-1 transition-all duration-300" />

                                    </Link>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
};

export default PopularDestinations;