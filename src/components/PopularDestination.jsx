import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
    FaArrowRight,
    FaMapMarkerAlt,
    FaStar,
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
        <section className="py-16  bg-white">

            <div className="max-w-7xl mx-auto px-4">

                {/* TOP */}

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">

                    <div>

                        <p className="text-cyan-500 font-semibold uppercase tracking-[3px]">
                            Popular Tours
                        </p>

                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 leading-tight">
                            Explore Popular Destinations
                        </h2>
                    </div>

                    <Link
                        href="/destination"
                        className="group inline-flex items-center gap-3 text-cyan-600 font-semibold"
                    >
                        View All Destinations

                        <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                </div>

                {/* GRID */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

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
                                className="group bg-white rounded-[32px] overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-500"
                            >

                                {/* IMAGE */}

                                <div className="relative h-72 overflow-hidden">

                                    <Image
                                        src={destination.imageUrl}
                                        alt={destination.destinationName}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-all duration-700"
                                    />

                                    {/* OVERLAY */}

                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>

                                    {/* CATEGORY */}

                                    <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        {destination.category}
                                    </div>

                                    {/* PRICE */}

                                    <div className="absolute bottom-5 left-5 bg-cyan-500 text-white px-5 py-2 rounded-full font-bold shadow-lg">
                                        ${destination.price}
                                    </div>
                                </div>

                                {/* CONTENT */}

                                <div className="p-7">

                                    {/* LOCATION */}

                                    <p className="flex items-center gap-2 text-gray-500">

                                        <FaMapMarkerAlt className="text-cyan-500" />

                                        {destination.country}
                                    </p>

                                    {/* TITLE */}

                                    <h3 className="text-2xl font-black text-slate-900 mt-3 leading-snug">
                                        {destination.destinationName}
                                    </h3>

                                    {/* INFO */}

                                    <div className="flex items-center justify-between mt-5">

                                        {/* RATING */}

                                        <div className="flex items-center gap-2">

                                            <FaStar className="text-yellow-400" />

                                            <span className="font-semibold">
                                                {averageRating}
                                            </span>

                                            <span className="text-gray-500 text-sm">
                                                ({totalReviews} Reviews)
                                            </span>
                                        </div>

                                        {/* DURATION */}

                                        <p className="text-gray-500 text-sm">
                                            {destination.duration}
                                        </p>
                                    </div>

                                    {/* DESCRIPTION */}

                                    <p className="text-gray-500 mt-5 leading-relaxed line-clamp-2">
                                        {destination.description}
                                    </p>

                                    {/* BUTTON */}

                                    <Link
                                        href={`/destination/${destination._id}`}
                                        className="group/button mt-7 h-13 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg"
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