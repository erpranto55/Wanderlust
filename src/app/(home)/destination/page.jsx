import Image from "next/image";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Destination = async () => {

    const res = await fetch("http://localhost:5000/destination", {
        cache: "no-store",
    });

    const destinations = await res.json();

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

            {/* Filter Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <select className="border border-gray-300 rounded-xl px-4 h-12 outline-none">
                    <option>Category</option>
                    <option>Beach</option>
                    <option>Mountain</option>
                    <option>City</option>
                    <option>Adventure</option>
                </select>

                <select className="border border-gray-300 rounded-xl px-4 h-12 outline-none">
                    <option>Price Range</option>
                    <option>$1000 - $2000</option>
                    <option>$2000 - $3000</option>
                    <option>$3000 - $5000</option>
                </select>

                <select className="border border-gray-300 rounded-xl px-4 h-12 outline-none">
                    <option>Sort By</option>
                    <option>Newest</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                </select>
            </div>

            {/* Total */}
            <p className="text-gray-500 mb-8">
                Showing {destinations.length} destinations
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map((destination) => (
                    <div
                        key={destination._id}
                        className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
                    >
                        {/* Image */}
                        <div className="relative h-64 overflow-hidden">
                            <Image
                                src={destination.imageUrl}
                                alt={destination.destinationName}
                                fill
                                unoptimized
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Category */}
                            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                                {destination.category}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <p className="text-sm text-gray-500 flex gap-2 items-center">
                                <IoLocation /> {destination.country}
                            </p>

                            <div className="flex items-center justify-between mt-2 gap-4">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {destination.destinationName}
                                </h2>

                                <h3 className="text-cyan-600 font-bold text-lg whitespace-nowrap">
                                    ${destination.price}
                                </h3>
                            </div>

                            <p className="text-gray-500 mt-3 flex gap-2 items-center">
                                <FaCalendarAlt />
                                {destination.duration}
                            </p>

                            <p className="text-gray-500 text-sm mt-3 line-clamp-2">
                                {destination.description}
                            </p>

                            {/* Button */}
                            <button className="mt-6 w-full h-12 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all duration-300">
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destination;