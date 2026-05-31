import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
    FaArrowRight,
    FaQuoteRight,
    FaStar,
    FaUsers,
} from "react-icons/fa";

const reviews = [
    {
        id: 1,
        name: "Sophia Carter",
        role: "Travel Blogger",
        image:
            "https://i.pravatar.cc/300?img=1",
        rating: 5,
        destination: "Santorini, Greece",
        review:
            "Absolutely one of the best travel experiences I've ever had. Everything from the luxury resort to the sunset cruise was perfectly organized.",
    },

    {
        id: 2,
        name: "James Walker",
        role: "Adventure Traveler",
        image:
            "https://i.pravatar.cc/300?img=3",
        rating: 5,
        destination: "Swiss Alps",
        review:
            "The mountain views were breathtaking and the tour guides were extremely professional. Highly recommended for adventure lovers.",
    },

    {
        id: 3,
        name: "Emma Wilson",
        role: "Luxury Explorer",
        image:
            "https://i.pravatar.cc/300?img=5",
        rating: 4,
        destination: "Maldives",
        review:
            "Beautiful overwater villas and premium hospitality. The entire honeymoon experience felt magical and unforgettable.",
    },
];

const TravelerReviews = () => {

    return (
        <section className="relative overflow-hidden py-20 md:py-24 bg-[#020617]">

            {/* BACKGROUND EFFECTS */}

            <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.12),transparent_40%)]"></div>

            {/* CONTAINER */}

            <div className="relative max-w-7xl mx-auto px-4">

                {/* TOP */}

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">

                    {/* LEFT */}

                    <div className="max-w-3xl">

                        {/* TAG */}

                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-md text-cyan-400 text-sm font-semibold">

                            <FaUsers />

                            Traveler Testimonials

                        </div>

                        {/* TITLE */}

                        <h2 className="text-4xl md:text-6xl font-black text-white mt-6 leading-tight">

                            What Travelers
                            <br />

                            Say About Us

                        </h2>

                        {/* DESCRIPTION */}

                        <p className="text-gray-400 text-lg md:text-xl mt-7 leading-relaxed">

                            Real stories from travelers who explored unforgettable
                            destinations and premium experiences with WanderLust.

                        </p>
                    </div>

                    {/* RIGHT STATS */}

                    <div className="grid grid-cols-2 gap-6">

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-6 text-center">

                            <h3 className="text-4xl font-black text-cyan-400">

                                15K+

                            </h3>

                            <p className="text-gray-400 mt-2 text-sm">

                                Happy Travelers

                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-6 text-center">

                            <h3 className="text-4xl font-black text-cyan-400">

                                4.9★

                            </h3>

                            <p className="text-gray-400 mt-2 text-sm">

                                Average Rating

                            </p>
                        </div>
                    </div>
                </div>

                {/* REVIEW GRID */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {reviews.map((review) => (

                        <div
                            key={review.id}
                            className="group relative overflow-hidden rounded-[36px] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(6,182,212,0.18)]"
                        >

                            {/* TOP GLOW */}

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-cyan-500/10 to-blue-500/10 transition-all duration-700"></div>

                            {/* QUOTE ICON */}

                            <div className="absolute top-7 right-7 text-7xl text-white/5 group-hover:text-cyan-400/10 transition-all duration-700">

                                <FaQuoteRight />

                            </div>

                            {/* CONTENT */}

                            <div className="relative z-10 p-8">

                                {/* USER */}

                                <div className="flex items-center gap-4">

                                    {/* IMAGE */}

                                    <div className="relative w-18 h-18 rounded-full overflow-hidden ring-4 ring-cyan-500/20 group-hover:ring-cyan-400/40 transition-all duration-700">

                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            fill
                                            className="object-cover"
                                        />

                                    </div>

                                    {/* INFO */}

                                    <div>

                                        <h3 className="text-2xl font-black text-white">

                                            {review.name}

                                        </h3>

                                        <p className="text-gray-400 text-sm mt-1">

                                            {review.role}

                                        </p>

                                        <p className="text-cyan-400 text-sm font-semibold mt-1">

                                            {review.destination}

                                        </p>
                                    </div>
                                </div>

                                {/* STARS */}

                                <div className="flex items-center gap-2 mt-8">

                                    {[...Array(review.rating)].map((_, index) => (

                                        <div
                                            key={index}
                                            className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400"
                                        >

                                            <FaStar />

                                        </div>
                                    ))}

                                    <span className="text-white/70 text-sm ml-2">

                                        {review.rating}.0 Rating

                                    </span>
                                </div>

                                {/* REVIEW */}

                                <p className="text-gray-300 leading-relaxed text-[15px] mt-8">

                                    `{review.review}`

                                </p>

                                {/* BOTTOM */}

                                <div className="flex items-center justify-between mt-10">

                                    {/* VERIFIED */}

                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold">

                                        Verified Traveler

                                    </div>

                                    {/* BUTTON */}

                                    <button className="w-14 h-14 rounded-2xl bg-white/5 hover:bg-cyan-500 border border-white/10 hover:border-cyan-500 text-white flex items-center justify-center transition-all duration-500 hover:scale-110">

                                        <FaArrowRight />

                                    </button>
                                </div>

                                {/* LINE */}

                                <div className="w-14 group-hover:w-full h-1 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 mt-8 transition-all duration-700"></div>
                            </div>

                            {/* BIG NUMBER */}

                            <div className="absolute -bottom-10 -right-2 text-[180px] font-black text-white/3 group-hover:text-cyan-400/5 transition-all duration-700 leading-none">

                                0{review.id}

                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTTOM SECTION */}

                <div className="mt-20 flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[36px] p-8 md:p-10">

                    {/* LEFT */}

                    <div>

                        <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">

                            Join Thousands Of
                            <br />

                            Happy Travelers

                        </h3>

                        <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">

                            Discover breathtaking destinations, premium travel
                            experiences, and unforgettable adventures tailored
                            for every explorer.

                        </p>
                    </div>

                    {/* BUTTON */}

                    <Link href={'/destination'}>
                        <button className="group flex items-center gap-3 h-16 px-8 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg shadow-[0_10px_40px_rgba(6,182,212,0.35)] transition-all duration-500 hover:scale-105 whitespace-nowrap">

                            Start Your Journey

                            <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default TravelerReviews;