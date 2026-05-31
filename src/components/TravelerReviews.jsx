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
        <section className="relative overflow-hidden py-20 md:py-24 bg-base-100 transition-all duration-500">

            {/* BACKGROUND EFFECT */}

            <div className="absolute top-0 left-0 w-112.5 h-112.5 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-112.5 h-112.5 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_40%)]"></div>

            {/* CONTAINER */}

            <div className="relative max-w-7xl mx-auto px-4">

                {/* TOP */}

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-18">

                    {/* LEFT */}

                    <div className="max-w-3xl">

                        {/* TAG */}

                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-md text-cyan-500 text-sm font-semibold">

                            <FaUsers />

                            Traveler Testimonials

                        </div>

                        {/* TITLE */}

                        <h2 className="text-4xl md:text-6xl font-black text-base-content mt-6 leading-tight">

                            What Travelers
                            <br />

                            Say About Us

                        </h2>

                        {/* DESCRIPTION */}

                        <p className="text-base-content/70 text-lg md:text-xl mt-7 leading-relaxed">

                            Real stories from travelers who explored
                            unforgettable destinations and premium
                            experiences with Wanderlust.

                        </p>
                    </div>

                    {/* STATS */}

                    <div className="grid grid-cols-2 gap-6">

                        <div className="rounded-[32px] border border-base-300 bg-base-200/60 backdrop-blur-xl px-8 py-7 text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

                            <h3 className="text-4xl font-black text-cyan-500">

                                15K+

                            </h3>

                            <p className="text-base-content/60 mt-2 text-sm">

                                Happy Travelers

                            </p>
                        </div>

                        <div className="rounded-[32px] border border-base-300 bg-base-200/60 backdrop-blur-xl px-8 py-7 text-center shadow-[0_10px_40px_rgba(0,0,0,0.05)]">

                            <h3 className="text-4xl font-black text-cyan-500">

                                4.9★

                            </h3>

                            <p className="text-base-content/60 mt-2 text-sm">

                                Average Rating

                            </p>
                        </div>
                    </div>
                </div>

                {/* GRID */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {reviews.map((review) => (

                        <div
                            key={review.id}
                            className="group relative overflow-hidden rounded-[38px] border border-base-300 bg-base-200/60 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(6,182,212,0.18)]"
                        >

                            {/* HOVER OVERLAY */}

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-cyan-500/10 to-blue-500/10 transition-all duration-700"></div>

                            {/* QUOTE */}

                            <div className="absolute top-7 right-7 text-7xl text-base-content/4 group-hover:text-cyan-500/10 transition-all duration-700">

                                <FaQuoteRight />

                            </div>

                            {/* CONTENT */}

                            <div className="relative z-10 p-8">

                                {/* USER */}

                                <div className="flex items-center gap-4">

                                    {/* IMAGE */}

                                    <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-cyan-500/20 group-hover:ring-cyan-400/40 transition-all duration-700">

                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            fill
                                            unoptimized
                                            className="object-cover"
                                        />

                                    </div>

                                    {/* INFO */}

                                    <div>

                                        <h3 className="text-2xl font-black text-base-content">

                                            {review.name}

                                        </h3>

                                        <p className="text-base-content/60 text-sm mt-1">

                                            {review.role}

                                        </p>

                                        <p className="text-cyan-500 text-sm font-semibold mt-1">

                                            {review.destination}

                                        </p>
                                    </div>
                                </div>

                                {/* STARS */}

                                <div className="flex items-center gap-2 mt-8">

                                    {[...Array(review.rating)].map((_, index) => (

                                        <div
                                            key={index}
                                            className="w-10 h-10 rounded-2xl border border-base-300 bg-base-100/70 flex items-center justify-center text-yellow-400"
                                        >

                                            <FaStar />

                                        </div>
                                    ))}

                                    <span className="text-base-content/60 text-sm ml-2">

                                        {review.rating}.0 Rating

                                    </span>
                                </div>

                                {/* REVIEW */}

                                <p className="text-base-content/70 leading-relaxed text-[15px] mt-8">

                                    `{review.review}`

                                </p>

                                {/* BOTTOM */}

                                <div className="flex items-center justify-between mt-10">

                                    {/* VERIFIED */}

                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-sm font-semibold">

                                        Verified Traveler

                                    </div>

                                    {/* BUTTON */}

                                    <button className="w-14 h-14 rounded-2xl border border-base-300 bg-base-100/70 hover:bg-cyan-500 hover:border-cyan-500 text-base-content hover:text-white flex items-center justify-center transition-all duration-500 hover:scale-110">

                                        <FaArrowRight />

                                    </button>
                                </div>

                                {/* LINE */}

                                <div className="w-14 group-hover:w-full h-1 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 mt-8 transition-all duration-700"></div>
                            </div>

                            {/* BIG NUMBER */}

                            <div className="absolute -bottom-10 -right-2 text-[180px] font-black text-base-content/3 group-hover:text-cyan-500/8 transition-all duration-700 leading-none">

                                0{review.id}

                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}

                <div className="mt-20 relative overflow-hidden rounded-[40px] border border-base-300 bg-base-200/60 backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.05)]">

                    {/* GLOW */}

                    <div className="absolute top-0 right-0 w-87.5 h-87.5 bg-cyan-500/10 rounded-full blur-3xl"></div>

                    {/* CONTENT */}

                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">

                        {/* LEFT */}

                        <div>

                            <h3 className="text-3xl md:text-5xl font-black text-base-content leading-tight">

                                Join Thousands Of
                                <br />

                                Happy Travelers

                            </h3>

                            <p className="text-base-content/70 mt-5 max-w-2xl leading-relaxed text-lg">

                                Discover breathtaking destinations,
                                premium travel experiences, and
                                unforgettable adventures tailored
                                for every explorer.

                            </p>
                        </div>

                        {/* BUTTON */}

                        <Link href="/destination">

                            <button className="group flex items-center gap-3 h-16 px-8 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg shadow-[0_10px_40px_rgba(6,182,212,0.35)] transition-all duration-500 hover:scale-105 whitespace-nowrap">

                                Start Your Journey

                                <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

                            </button>

                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TravelerReviews;