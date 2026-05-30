import { EditModal } from "@/components/EditModal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
    FaArrowLeft,
    FaCalendarAlt,
    FaCheck,
    FaClock,
    FaEdit,
    FaGlobeAsia,
    FaMapMarkerAlt,
    FaStar,
    FaTrash,
    FaUsers,
} from "react-icons/fa";

const DestinationDetails = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(`http://localhost:5000/destination/${id}`, {
        cache: "no-store",
    });

    const destination = await res.json();

    return (
        <div className="bg-[#f8fafc] min-h-screen">

            {/* Container */}
            <div className="max-w-7xl mx-auto px-4 py-10">

                {/* Top Actions */}
                <div className="flex items-center justify-between mb-8">

                    {/* Back Button */}
                    <Link
                        href="/destination"
                        className="inline-flex items-center gap-3 text-gray-500 hover:text-cyan-600 transition-all duration-300"
                    >
                        <FaArrowLeft />
                        Back to Destinations
                    </Link>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">

                        {/* Edit */}
                        <EditModal/>

                        {/* Delete */}
                        <button
                            className="h-10 px-6 rounded-2xl bg-red-500 hover:bg-red-600 text-white transition-all duration-300 font-semibold flex items-center gap-3 cursor-pointer"
                        >
                            <FaTrash />
                            Delete
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative h-75 md:h-137.5 overflow-hidden rounded-[32px] shadow-2xl">

                    <Image
                        src={destination.imageUrl}
                        alt={destination.destinationName}
                        fill
                        className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>

                    {/* Category */}
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full font-semibold shadow-lg">
                        {destination.category}
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">

                        <p className="flex items-center gap-2 text-lg text-gray-200">
                            <FaMapMarkerAlt />

                            {destination.country}
                        </p>

                        <h1 className="text-4xl md:text-6xl font-black mt-3">
                            {destination.destinationName}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 mt-5 text-gray-200">

                            <p className="flex items-center gap-2">
                                <FaStar className="text-yellow-400" />

                                4.9 (234 Reviews)
                            </p>

                            <p className="flex items-center gap-2">
                                <FaCalendarAlt />

                                {destination.duration}
                            </p>

                            <p className="flex items-center gap-2">
                                <FaUsers />

                                2 - 10 Travelers
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">

                    {/* Left */}
                    <div className="lg:col-span-2">

                        {/* Overview */}
                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100">

                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Overview
                            </h2>

                            <p className="text-gray-600 leading-relaxed text-lg">
                                {destination.description}
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 mt-8">

                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                Highlights
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                                        <FaCheck />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            Luxury Accommodation
                                        </h3>

                                        <p className="text-gray-500 text-sm mt-1">
                                            Premium resorts and comfortable stays
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                                        <FaGlobeAsia />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            Guided Tours
                                        </h3>

                                        <p className="text-gray-500 text-sm mt-1">
                                            Explore famous attractions with guides
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                                        <FaClock />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            Flexible Schedule
                                        </h3>

                                        <p className="text-gray-500 text-sm mt-1">
                                            Travel at your own comfortable pace
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                                        <FaUsers />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            Family Friendly
                                        </h3>

                                        <p className="text-gray-500 text-sm mt-1">
                                            Perfect for couples and families
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div>

                        {/* Booking Card */}
                        <div className="sticky top-28 bg-white rounded-[32px] p-8 shadow-xl border border-slate-100">

                            <div className="border-b border-slate-200 pb-6">

                                <p className="text-gray-500">
                                    Starting From
                                </p>

                                <h2 className="text-5xl font-black text-cyan-600 mt-2">
                                    ${destination.price}
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    per person
                                </p>
                            </div>

                            {/* Departure */}
                            <div className="mt-6">

                                <label className="text-gray-700 font-semibold block mb-3">
                                    Departure Date
                                </label>

                                <div className="h-14 rounded-2xl border border-slate-200 flex items-center px-5 text-gray-600">
                                    {destination.departureDate}
                                </div>
                            </div>

                            {/* Button */}
                            <button className="w-full h-14 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg transition-all duration-300 shadow-[0_10px_30px_rgba(6,182,212,0.35)] mt-8">
                                Book Now →
                            </button>

                            {/* Features */}
                            <div className="space-y-4 mt-8">

                                <div className="flex items-center gap-3 text-gray-600">
                                    <FaCheck className="text-green-500" />

                                    Free cancellation up to 7 days
                                </div>

                                <div className="flex items-center gap-3 text-gray-600">
                                    <FaCheck className="text-green-500" />

                                    Travel insurance included
                                </div>

                                <div className="flex items-center gap-3 text-gray-600">
                                    <FaCheck className="text-green-500" />

                                    24/7 customer support
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;