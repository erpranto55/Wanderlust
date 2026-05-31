import DeleteModal from "@/components/DeleteModal";
import { EditModal } from "@/components/EditModal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
    FaArrowLeft,
    FaCalendarAlt,
    FaCheck,
    FaMapMarkerAlt,
    FaStar,
    FaUsers,
} from "react-icons/fa";

const DestinationDetails = async ({ params }) => {

    const { id } = await params;

    const res = await fetch(
        `http://localhost:5000/destination/${id}`,
        {
            cache: "no-store",
        }
    );

    const destination = await res.json();

    // =========================
    // DYNAMIC REVIEW STATS
    // =========================

    const reviews = destination?.reviews || [];

    const totalReviews = reviews.length;

    const averageRating =
        totalReviews > 0
            ? (
                reviews.reduce(
                    (acc, review) =>
                        acc + Number(review.rating),
                    0
                ) / totalReviews
            ).toFixed(1)
            : 0;

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
                        <EditModal destination={destination} />

                        {/* Delete */}
                        <DeleteModal id={destination._id} />
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative h-75 md:h-137.5 overflow-hidden rounded-[32px] shadow-2xl">

                    <Image
                        src={destination.imageUrl}
                        alt={destination.destinationName}
                        fill
                        className="object-cover"
                        priority
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

                            {/* Dynamic Rating */}
                            <p className="flex items-center gap-2">
                                <FaStar className="text-yellow-400" />

                                {averageRating} ({totalReviews} Reviews)
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

                    {/* LEFT */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Overview */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                Overview
                            </h2>

                            <p className="text-gray-600 leading-relaxed text-lg">
                                {destination.description}
                            </p>
                        </div>

                        {/* Highlights */}
                        <div>

                            <h2 className="text-3xl font-bold mb-6">
                                Highlights
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <div className="flex items-center gap-3">
                                    <span className="text-green-500">✓</span>
                                    <p>Luxury accommodation included</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-green-500">✓</span>
                                    <p>Professional travel guide</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-green-500">✓</span>
                                    <p>Airport pickup & drop service</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-green-500">✓</span>
                                    <p>Local cultural experiences</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-green-500">✓</span>
                                    <p>Premium sightseeing tours</p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="text-green-500">✓</span>
                                    <p>24/7 customer support</p>
                                </div>

                            </div>
                        </div>

                        {/* Itinerary */}
                        <div>

                            <h2 className="text-3xl font-bold mb-8">
                                Itinerary
                            </h2>

                            <div className="space-y-8">

                                {destination?.itinerary?.map((item, index) => (

                                    <div
                                        key={index}
                                        className="flex gap-5"
                                    >

                                        {/* Timeline */}
                                        <div className="flex flex-col items-center">

                                            <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold">
                                                {item.day}
                                            </div>

                                            {index !== destination.itinerary.length - 1 && (
                                                <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="pb-8">

                                            <h3 className="text-xl font-semibold">
                                                {item.title}
                                            </h3>

                                            <p className="text-gray-500 mt-2 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Reviews */}
                        <div>

                            <h2 className="text-3xl font-bold mb-8">
                                Traveler Reviews
                            </h2>

                            {/* Empty State */}
                            {!destination?.reviews?.length && (

                                <div className="border border-dashed border-gray-300 rounded-3xl p-10 text-center bg-white">

                                    <h3 className="text-2xl font-bold text-gray-700">
                                        No Traveler Reviews Yet
                                    </h3>

                                    <p className="text-gray-500 mt-3">
                                        This destination has not received any reviews yet.
                                    </p>
                                </div>
                            )}

                            {/* Review List */}
                            <div className="space-y-6">

                                {destination?.reviews?.map((review, index) => (

                                    <div
                                        key={index}
                                        className="border border-gray-200 rounded-3xl p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                                    >

                                        {/* Top */}
                                        <div className="flex items-center gap-4">

                                            {/* Avatar */}
                                            <div className="relative w-14 h-14 overflow-hidden rounded-full">

                                                <Image
                                                    src={review.image}
                                                    alt={review.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* User Info */}
                                            <div>

                                                <h3 className="font-bold text-lg">
                                                    {review.name}
                                                </h3>

                                                <p className="text-sm text-gray-500">
                                                    {review.date}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1 mt-5">

                                            {[...Array(Number(review.rating))].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    className="text-yellow-400"
                                                />
                                            ))}
                                        </div>

                                        {/* Comment */}
                                        <p className="text-gray-600 mt-5 leading-relaxed">
                                            {review.comment}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div>

                        {/* Booking Card */}
                        <div className="sticky top-28 bg-white rounded-[32px] p-8 shadow-xl border border-slate-100">

                            {/* Price */}
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

                            {/* Travelers */}
                            <div className="mt-5">

                                <label className="text-gray-700 font-semibold block mb-3">
                                    Travelers
                                </label>

                                <div className="h-14 rounded-2xl border border-slate-200 flex items-center px-5 text-gray-600">
                                    2 - 10 People
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