import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
    FaArrowRight,
    FaCalendarAlt,
    FaFilter,
    FaMapMarkerAlt,
    FaMoneyBillWave,
    FaSortAmountDown,
    FaUmbrellaBeach,
} from "react-icons/fa";

import { IoLocation } from "react-icons/io5";

const Destination = async ({ searchParams }) => {

    const params = await searchParams;

    const category = params?.category || "";
    const sort = params?.sort || "";

    const location = params?.location || "";
    const duration = params?.duration || "";
    const budget = params?.budget || "";

    const res = await fetch(
        "http://localhost:5000/destination",
        {
            cache: "no-store",
        }
    );

    let destinations =
        await res.json();

    // SEARCH BY LOCATION

    if (location) {

        destinations =
            destinations.filter(
                (item) =>
                    item.country
                        .toLowerCase()
                        .includes(
                            location.toLowerCase()
                        ) ||
                    item.destinationName
                        .toLowerCase()
                        .includes(
                            location.toLowerCase()
                        )
            );
    }

    // FILTER DURATION

    if (duration) {

        destinations =
            destinations.filter(
                (item) =>
                    item.duration.includes(
                        duration
                    )
            );
    }

    // FILTER BUDGET

    if (budget) {

        destinations =
            destinations.filter(
                (item) =>
                    Number(item.price) <=
                    Number(budget)
            );
    }

    // FILTER CATEGORY

    if (category) {

        destinations =
            destinations.filter(
                (item) =>
                    item.category ===
                    category
            );
    }

    // SORT PRICE

    if (sort === "low") {

        destinations.sort(
            (a, b) =>
                a.price - b.price
        );
    }

    if (sort === "high") {

        destinations.sort(
            (a, b) =>
                b.price - a.price
        );
    }

    return (
        <section className="relative overflow-hidden py-20 md:py-24 bg-base-100 transition-all duration-500">

            {/* BACKGROUND EFFECT */}

            <div className="absolute top-0 left-0 w-112.5 h-112.5 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-112.5 h-112.5 bg-blue-500/10 rounded-full blur-3xl"></div>

            {/* CONTAINER */}

            <div className="relative max-w-7xl mx-auto px-4">

                {/* HEADER */}

                <div className="text-center max-w-4xl mx-auto mb-16">

                    {/* TAG */}

                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-md text-cyan-500 text-sm font-semibold">

                        <FaUmbrellaBeach />

                        Explore Destinations

                    </div>

                    {/* TITLE */}

                    <h1 className="text-4xl md:text-6xl font-black text-base-content mt-6 leading-tight">

                        Find Your Perfect
                        <br />

                        Travel Destination

                    </h1>

                    {/* DESCRIPTION */}

                    <p className="text-lg md:text-xl text-base-content/70 mt-7 leading-relaxed">

                        Discover breathtaking destinations,
                        luxury experiences, and unforgettable
                        adventures curated for every traveler.

                    </p>
                </div>

                {/* ACTIVE FILTERS */}

                {(location ||
                    duration ||
                    budget ||
                    category ||
                    sort) && (

                        <div className="flex flex-wrap gap-4 mb-10">

                            {location && (

                                <div className="px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 text-sm font-semibold flex items-center gap-2">

                                    <FaMapMarkerAlt />

                                    {location}

                                </div>
                            )}

                            {duration && (

                                <div className="px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 text-sm font-semibold flex items-center gap-2">

                                    <FaCalendarAlt />

                                    {duration}

                                </div>
                            )}

                            {budget && (

                                <div className="px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 text-sm font-semibold flex items-center gap-2">

                                    <FaMoneyBillWave />

                                    Under ${budget}

                                </div>
                            )}

                            {category && (

                                <div className="px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 text-sm font-semibold flex items-center gap-2">

                                    <FaUmbrellaBeach />

                                    {category}

                                </div>
                            )}

                            {sort && (

                                <div className="px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 text-sm font-semibold flex items-center gap-2">

                                    <FaSortAmountDown />

                                    {sort === "low"
                                        ? "Low to High"
                                        : "High to Low"}

                                </div>
                            )}
                        </div>
                    )}

                {/* FILTER CARD */}

                <div className="relative overflow-hidden rounded-[40px] border border-base-300 bg-base-200/60 backdrop-blur-xl p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.05)] mb-14">

                    {/* GLOW */}

                    <div className="absolute top-0 right-0 w-62.5 h-62.5 bg-cyan-500/10 rounded-full blur-3xl"></div>

                    {/* FORM */}

                    <form className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

                        {/* CATEGORY */}

                        <div>

                            <label className="text-base-content font-semibold mb-3 flex items-center gap-2">

                                <FaUmbrellaBeach className="text-cyan-500" />

                                Category

                            </label>

                            <select
                                name="category"
                                defaultValue={
                                    category
                                }
                                className="w-full h-14 rounded-2xl border border-base-300 bg-base-100 px-5 text-base-content outline-none focus:border-cyan-500 transition-all duration-300"
                            >

                                <option value="">
                                    All Categories
                                </option>

                                <option value="Beach">
                                    Beach
                                </option>

                                <option value="Mountain">
                                    Mountain
                                </option>

                                <option value="City">
                                    City
                                </option>

                                <option value="Adventure">
                                    Adventure
                                </option>

                                <option value="Luxury">
                                    Luxury
                                </option>

                                <option value="Cultural">
                                    Cultural
                                </option>

                            </select>
                        </div>

                        {/* SORT */}

                        <div>

                            <label className="text-base-content font-semibold mb-3 flex items-center gap-2">

                                <FaSortAmountDown className="text-cyan-500" />

                                Sort Price

                            </label>

                            <select
                                name="sort"
                                defaultValue={
                                    sort
                                }
                                className="w-full h-14 rounded-2xl border border-base-300 bg-base-100 px-5 text-base-content outline-none focus:border-cyan-500 transition-all duration-300"
                            >

                                <option value="">
                                    Sort By Price
                                </option>

                                <option value="low">
                                    Low to High
                                </option>

                                <option value="high">
                                    High to Low
                                </option>

                            </select>
                        </div>

                        {/* APPLY */}

                        <button
                            type="submit"
                            className="group mt-auto h-14 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold shadow-[0_10px_40px_rgba(6,182,212,0.35)] transition-all duration-500 hover:scale-[1.02] flex items-center justify-center gap-3"
                        >

                            <FaFilter />

                            Apply Filters

                        </button>

                        {/* CLEAR */}

                        <Link
                            href="/destination"
                            className="mt-auto h-14 rounded-2xl border border-base-300 bg-base-100 hover:bg-base-300 text-base-content font-bold transition-all duration-300 flex items-center justify-center"
                        >

                            Clear Filters

                        </Link>
                    </form>
                </div>

                {/* TOTAL */}

                <div className="flex items-center justify-between mb-10">

                    <p className="text-base-content/70 text-lg">

                        Showing
                        <span className="text-cyan-500 font-bold mx-2">

                            {destinations.length}

                        </span>

                        destinations

                    </p>
                </div>

                {/* GRID */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {destinations.map(
                        (
                            destination,
                            index
                        ) => (

                            <div
                                key={
                                    destination._id
                                }
                                className="group relative overflow-hidden rounded-[38px] border border-base-300 bg-base-200/60 backdrop-blur-xl hover:-translate-y-3 transition-all duration-700 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_80px_rgba(6,182,212,0.18)]"
                            >

                                {/* IMAGE */}

                                <div className="relative h-80 overflow-hidden">

                                    <Image
                                        src={
                                            destination.imageUrl
                                        }
                                        alt={
                                            destination.destinationName
                                        }
                                        fill
                                        unoptimized
                                        className="object-cover group-hover:scale-110 transition-all duration-1000"
                                    />

                                    {/* OVERLAY */}

                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>

                                    {/* CATEGORY */}

                                    <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-cyan-500 text-white text-sm font-bold shadow-lg">

                                        {
                                            destination.category
                                        }

                                    </div>

                                    {/* COUNTRY */}

                                    <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm font-semibold">

                                        <IoLocation />

                                        {
                                            destination.country
                                        }

                                    </div>

                                    {/* CONTENT */}

                                    <div className="absolute bottom-0 left-0 w-full p-7 text-white">

                                        {/* PRICE */}

                                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-lg font-black">

                                            $
                                            {
                                                destination.price
                                            }

                                        </div>

                                        {/* TITLE */}

                                        <h3 className="text-3xl font-black mt-5 leading-tight">

                                            {
                                                destination.destinationName
                                            }

                                        </h3>

                                        {/* DURATION */}

                                        <div className="flex items-center gap-2 text-white/80 mt-4">

                                            <FaCalendarAlt className="text-cyan-400" />

                                            {
                                                destination.duration
                                            }

                                        </div>
                                    </div>

                                    {/* NUMBER */}

                                    <div className="absolute -bottom-10 -right-2 text-[160px] font-black text-white/4 leading-none">

                                        0
                                        {index + 1}

                                    </div>
                                </div>

                                {/* BODY */}

                                <div className="p-7">

                                    {/* DESCRIPTION */}

                                    <p className="text-base-content/70 leading-relaxed line-clamp-3">

                                        {
                                            destination.description
                                        }

                                    </p>

                                    {/* BUTTON */}

                                    <Link
                                        href={`/destination/${destination._id}`}
                                        className="group/button mt-7 h-14 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold flex items-center justify-center gap-3 transition-all duration-500 shadow-[0_15px_40px_rgba(6,182,212,0.25)] hover:scale-[1.02]"
                                    >

                                        View Details

                                        <FaArrowRight className="group-hover/button:translate-x-1 transition-all duration-300" />

                                    </Link>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Destination;