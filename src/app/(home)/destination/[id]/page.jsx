import BookingCard from "@/components/BookingCard";
import DeleteModal from "@/components/DeleteModal";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
    FaArrowLeft,
    FaCalendarAlt,
    FaCheck,
    FaMapMarkerAlt,
    FaQuoteRight,
    FaStar,
    FaUsers,
} from "react-icons/fa";

const DestinationDetails = async ({ params }) => {

    const { id } = await params;

    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    let destination = null;

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/destination/${id}`,
            {
                headers: {
                    authorization: `Bearer ${token}`
                },
                cache: "no-store",
            }
        );

        if (res.ok) {
            destination = await res.json();
            // Guard against error-object responses (e.g. { message: "Unauthorized" })
            if (!destination?._id) destination = null;
        }
    } catch (err) {
        console.error("Failed to fetch destination:", err);
    }

    // NOT FOUND
    if (!destination) {
        return (
            <section className="relative min-h-screen bg-base-100 flex items-center justify-center">
                <div className="text-center space-y-6 px-4">
                    <h1 className="text-5xl font-black text-base-content">Destination Not Found</h1>
                    <p className="text-base-content/60 text-lg">We couldn&apos;t load this destination. It may have been removed or you may need to log in.</p>
                    <Link
                        href="/destination"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-cyan-500 text-white font-bold hover:bg-cyan-600 transition-all duration-300"
                    >
                        <FaArrowLeft />
                        Back To Destinations
                    </Link>
                </div>
            </section>
        );
    }

    // REVIEWS

    const reviews = destination?.reviews || [];

    const totalReviews = reviews.length;

    const averageRating =
        totalReviews > 0
            ? (
                reviews.reduce(
                    (acc, review) =>
                        acc +
                        Number(
                            review.rating
                        ),
                    0
                ) / totalReviews
            ).toFixed(1)
            : 0;

    return (
        <section className="relative min-h-screen bg-base-100 transition-all duration-500">

            {/* BG EFFECT */}

            <div className="absolute top-0 left-0 w-112.5 h-112.5 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-112.5 h-112.5 bg-blue-500/10 rounded-full blur-3xl"></div>

            {/* CONTAINER */}

            <div className="relative max-w-7xl mx-auto px-4 py-12">

                {/* TOP */}

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10">

                    {/* BACK */}

                    <Link
                        href="/destination"
                        className="group inline-flex items-center gap-3 text-base-content/70 hover:text-cyan-500 transition-all duration-300 font-medium"
                    >

                        <FaArrowLeft className="group-hover:-translate-x-1 transition-all duration-300" />

                        Back To Destinations

                    </Link>

                    {/* ACTIONS */}

                    <div className="flex items-center gap-4">

                        <EditModal
                            destination={
                                destination
                            }
                        />

                        <DeleteModal
                            id={
                                destination._id
                            }
                        />

                    </div>
                </div>

                {/* HERO */}

                <div className="relative overflow-hidden rounded-[40px] border border-base-300 shadow-[0_25px_80px_rgba(0,0,0,0.10)]">

                    <div className="relative h-112.5 md:h-162.5 overflow-hidden">

                        <Image
                            src={
                                destination.imageUrl
                            }
                            alt={
                                destination.destinationName
                            }
                            fill
                            priority
                            unoptimized
                            className="object-cover"
                        />

                        {/* OVERLAY */}

                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>

                        {/* CATEGORY */}

                        <div className="absolute top-7 right-7 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white font-bold shadow-lg">

                            {
                                destination.category
                            }

                        </div>

                        {/* CONTENT */}

                        <div className="absolute bottom-0 left-0 p-8 md:p-14 text-white max-w-4xl">

                            {/* COUNTRY */}

                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-sm font-semibold">

                                <FaMapMarkerAlt />

                                {
                                    destination.country
                                }

                            </div>

                            {/* TITLE */}

                            <h1 className="text-4xl md:text-7xl font-black mt-6 leading-tight">

                                {
                                    destination.destinationName
                                }

                            </h1>

                            {/* INFO */}

                            <div className="flex flex-wrap items-center gap-6 mt-7 text-white/80">

                                <div className="flex items-center gap-2">

                                    <FaStar className="text-yellow-400" />

                                    <span>

                                        {
                                            averageRating
                                        }

                                        {" "}
                                        (
                                        {
                                            totalReviews
                                        }

                                        {" "}
                                        Reviews)

                                    </span>

                                </div>

                                <div className="flex items-center gap-2">

                                    <FaCalendarAlt className="text-cyan-400" />

                                    {
                                        destination.duration
                                    }

                                </div>

                                <div className="flex items-center gap-2">

                                    <FaUsers className="text-cyan-400" />

                                    {
                                        destination.travelers ||
                                        "1 - 10 Travelers"
                                    }

                                </div>
                            </div>
                        </div>

                        {/* BIG NUMBER */}

                        <div className="absolute -bottom-10 right-0 text-[180px] md:text-[260px] font-black text-white/4 leading-none">

                            01

                        </div>
                    </div>
                </div>

                {/* GRID */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-14">

                    {/* LEFT */}

                    <div className="lg:col-span-2 space-y-12">

                        {/* OVERVIEW */}

                        <div className="relative overflow-hidden rounded-[36px] border border-base-300 bg-base-200/60 backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)]">

                            <h2 className="text-3xl md:text-4xl font-black text-base-content mb-7">

                                Overview

                            </h2>

                            <p className="text-base-content/70 leading-relaxed text-lg">

                                {
                                    destination.description
                                }

                            </p>
                        </div>

                        {/* HIGHLIGHTS */}

                        <div className="relative overflow-hidden rounded-[36px] border border-base-300 bg-base-200/60 backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)]">

                            <h2 className="text-3xl md:text-4xl font-black text-base-content mb-8">

                                Highlights

                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                {[
                                    "Luxury accommodation included",
                                    "Professional travel guide",
                                    "Airport pickup & drop service",
                                    "Local cultural experiences",
                                    "Premium sightseeing tours",
                                    "24/7 customer support",
                                ].map(
                                    (
                                        item,
                                        index
                                    ) => (

                                        <div
                                            key={
                                                index
                                            }
                                            className="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100/70 px-5 py-4"
                                        >

                                            <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center">

                                                <FaCheck />

                                            </div>

                                            <p className="text-base-content/80 font-medium">

                                                {
                                                    item
                                                }

                                            </p>

                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* ITINERARY */}

                        <div className="relative overflow-hidden rounded-[36px] border border-base-300 bg-base-200/60 backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)]">

                            <h2 className="text-3xl md:text-4xl font-black text-base-content mb-10">

                                Travel Itinerary

                            </h2>

                            <div className="space-y-10">

                                {destination?.itinerary?.map(
                                    (
                                        item,
                                        index
                                    ) => (

                                        <div
                                            key={
                                                index
                                            }
                                            className="flex gap-5"
                                        >

                                            {/* TIMELINE */}

                                            <div className="flex flex-col items-center">

                                                <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center font-black shadow-lg">

                                                    {
                                                        item.day
                                                    }

                                                </div>

                                                {index !==
                                                    destination
                                                        .itinerary
                                                        .length -
                                                    1 && (

                                                        <div className="w-1 flex-1 bg-base-300 rounded-full mt-3"></div>
                                                    )}
                                            </div>

                                            {/* CONTENT */}

                                            <div className="pb-6">

                                                <h3 className="text-2xl font-black text-base-content">

                                                    {
                                                        item.title
                                                    }

                                                </h3>

                                                <p className="text-base-content/70 mt-4 leading-relaxed">

                                                    {
                                                        item.description
                                                    }

                                                </p>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>


                    {/* RIGHT */}

                    <div className="relative">

                        <div className="sticky top-28">

                            <BookingCard
                                destination={destination}
                            />

                        </div>

                    </div>
                </div>

                {/* REVIEWS */}

                <div className="mt-14 relative overflow-hidden rounded-[36px] border border-base-300 bg-base-200/60 backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)]">

                    <h2 className="text-3xl md:text-4xl font-black text-base-content mb-10">

                        Traveler Reviews

                    </h2>

                    {!reviews.length && (

                        <div className="rounded-[32px] border border-dashed border-base-300 bg-base-100/70 p-10 text-center">

                            <h3 className="text-2xl font-black text-base-content">

                                No Reviews Yet

                            </h3>

                            <p className="text-base-content/60 mt-3">

                                This destination
                                has not received
                                any traveler
                                reviews yet.

                            </p>
                        </div>
                    )}

                    <div className="space-y-7">

                        {reviews.map(
                            (
                                review,
                                index
                            ) => (

                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-[30px] border border-base-300 bg-base-100/70 p-7 hover:shadow-[0_15px_50px_rgba(6,182,212,0.12)] transition-all duration-500"
                                >

                                    {/* QUOTE */}

                                    <div className="absolute top-6 right-6 text-6xl text-base-content/4">

                                        <FaQuoteRight />

                                    </div>

                                    {/* TOP */}

                                    <div className="flex items-center gap-4">

                                        <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-cyan-500/10">

                                            <Image
                                                src={
                                                    review.image
                                                }
                                                alt={
                                                    review.name
                                                }
                                                fill
                                                unoptimized
                                                className="object-cover"
                                            />

                                        </div>

                                        <div>

                                            <h3 className="text-xl font-black text-base-content">

                                                {
                                                    review.name
                                                }

                                            </h3>

                                            <p className="text-base-content/60 text-sm mt-1">

                                                {
                                                    review.date
                                                }

                                            </p>

                                        </div>
                                    </div>

                                    {/* STARS */}

                                    <div className="flex items-center gap-2 mt-6">

                                        {[...Array(
                                            Number(
                                                review.rating
                                            )
                                        )].map(
                                            (
                                                _,
                                                i
                                            ) => (

                                                <div
                                                    key={
                                                        i
                                                    }
                                                    className="w-10 h-10 rounded-xl border border-base-300 bg-base-100 flex items-center justify-center text-yellow-400"
                                                >

                                                    <FaStar />

                                                </div>
                                            )
                                        )}
                                    </div>

                                    {/* COMMENT */}

                                    <p className="text-base-content/70 mt-6 leading-relaxed">
                                        `{
                                            review.comment
                                        }`
                                    </p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DestinationDetails;