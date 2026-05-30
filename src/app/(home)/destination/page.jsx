import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
    FaCalendarAlt,
    FaMoneyBillWave,
    FaSortAmountDown,
    FaUmbrellaBeach,
    FaMapMarkerAlt,
} from "react-icons/fa";

import { IoLocation } from "react-icons/io5";

const Destination = async ({ searchParams }) => {

    const params = await searchParams;

    const category = params?.category || "";
    const sort = params?.sort || "";

    const location = params?.location || "";
    const duration = params?.duration || "";
    const budget = params?.budget || "";

    const res = await fetch("http://localhost:5000/destination", {
        cache: "no-store",
    });

    let destinations = await res.json();

    // Search by location
    if (location) {
        destinations = destinations.filter((item) =>
            item.country
                .toLowerCase()
                .includes(location.toLowerCase()) ||
            item.destinationName
                .toLowerCase()
                .includes(location.toLowerCase())
        );
    }

    // Filter by duration
    if (duration) {
        destinations = destinations.filter((item) =>
            item.duration.includes(duration)
        );
    }

    // Filter by budget
    if (budget) {
        destinations = destinations.filter(
            (item) => Number(item.price) <= Number(budget)
        );
    }

    // Filter by category
    if (category) {
        destinations = destinations.filter(
            (item) => item.category === category
        );
    }

    // Sort by price
    if (sort === "low") {
        destinations.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        destinations.sort((a, b) => b.price - a.price);
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-14">

            {/* Header */}
            <div className="mb-10">

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Explore All Destinations
                </h1>

                <p className="text-gray-500 mt-3 text-lg">
                    Find your perfect travel experience from our curated collection
                </p>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-3 mb-8">

                {location && (
                    <div className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium flex items-center gap-2">
                        <FaMapMarkerAlt />
                        {location}
                    </div>
                )}

                {duration && (
                    <div className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium flex items-center gap-2">
                        <FaCalendarAlt />
                        {duration}
                    </div>
                )}

                {budget && (
                    <div className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium flex items-center gap-2">
                        <FaMoneyBillWave />
                        Under ${budget}
                    </div>
                )}

                {category && (
                    <div className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium flex items-center gap-2">
                        <FaUmbrellaBeach />
                        {category}
                    </div>
                )}

                {sort && (
                    <div className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium flex items-center gap-2">
                        <FaSortAmountDown />
                        {sort === "low"
                            ? "Low to High"
                            : "High to Low"}
                    </div>
                )}
            </div>

            {/* Filters */}
            <form className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">

                {/* Category */}
                <select
                    name="category"
                    defaultValue={category}
                    className="border border-gray-300 rounded-2xl px-4 h-14 outline-none focus:border-cyan-500"
                >
                    <option value="">All Categories</option>
                    <option value="Beach">Beach</option>
                    <option value="Mountain">Mountain</option>
                    <option value="City">City</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Cultural">Cultural</option>
                </select>

                {/* Sort */}
                <select
                    name="sort"
                    defaultValue={sort}
                    className="border border-gray-300 rounded-2xl px-4 h-14 outline-none focus:border-cyan-500"
                >
                    <option value="">Sort By Price</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                </select>

                {/* Apply */}
                <button
                    type="submit"
                    className="h-14 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all duration-300"
                >
                    Apply Filters
                </button>

                {/* Clear */}
                <Link
                    href="/destination"
                    className="h-14 rounded-2xl border border-gray-300 flex items-center justify-center font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                    Clear Filters
                </Link>
            </form>

            {/* Total */}
            <p className="text-gray-500 mb-8">
                Showing {destinations.length} destinations
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {destinations.map((destination) => (

                    <div
                        key={destination._id}
                        className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                    >

                        {/* Image */}
                        <div className="relative h-64 overflow-hidden">

                            <Image
                                src={destination.imageUrl}
                                alt={destination.destinationName}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Category */}
                            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                                {destination.category}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">

                            {/* Country */}
                            <p className="text-sm text-gray-500 flex gap-2 items-center">
                                <IoLocation />
                                {destination.country}
                            </p>

                            {/* Title & Price */}
                            <div className="flex items-center justify-between mt-2 gap-4">

                                <h2 className="text-2xl font-bold text-gray-900">
                                    {destination.destinationName}
                                </h2>

                                <h3 className="text-cyan-600 font-bold text-lg whitespace-nowrap">
                                    ${destination.price}
                                </h3>
                            </div>

                            {/* Duration */}
                            <p className="text-gray-500 mt-3 flex gap-2 items-center">
                                <FaCalendarAlt />
                                {destination.duration}
                            </p>

                            {/* Description */}
                            <p className="text-gray-500 text-sm mt-3 line-clamp-2">
                                {destination.description}
                            </p>

                            {/* Button */}
                            <Link
                                href={`/destination/${destination._id}`}
                            >
                                <button className="mt-6 w-full h-12 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all duration-300 cursor-pointer">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destination;