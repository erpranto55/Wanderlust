import Image from "next/image";
import React from "react";

import {
    FaArrowRight,
    FaCamera,
    FaCompass,
    FaGlobeAsia,
    FaImages,
    FaPlay,
} from "react-icons/fa";

const galleryImages = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop",
        title: "Maldives Paradise",
        location: "Maldives",
        size: "col-span-1 row-span-2",
    },

    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop",
        title: "Swiss Alps",
        location: "Switzerland",
        size: "col-span-1 row-span-1",
    },

    {
        id: 3,
        image:
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2071&auto=format&fit=crop",
        title: "Tokyo Nights",
        location: "Japan",
        size: "col-span-1 row-span-1",
    },

    {
        id: 4,
        image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
        title: "Romantic Paris",
        location: "France",
        size: "col-span-1 row-span-2",
    },

    {
        id: 5,
        image:
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2070&auto=format&fit=crop",
        title: "Safari Adventure",
        location: "Kenya",
        size: "col-span-1 row-span-1",
    },

    {
        id: 6,
        image:
            "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070&auto=format&fit=crop",
        title: "Bali Escape",
        location: "Indonesia",
        size: "col-span-1 row-span-1",
    },
];

const Gallery = () => {

    return (
        <section className="relative overflow-hidden py-20 md:py-24 bg-[#020617]">

            {/* BACKGROUND EFFECTS */}

            <div className="absolute top-0 left-0 w-125 h-125 bg-cyan-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.12),transparent_40%)]"></div>

            {/* CONTAINER */}

            <div className="relative max-w-7xl mx-auto px-4">

                {/* TOP SECTION */}

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">

                    {/* LEFT */}

                    <div className="max-w-3xl">

                        {/* TAG */}

                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-md text-cyan-400 text-sm font-semibold">

                            <FaImages />

                            Travel Gallery

                        </div>

                        {/* TITLE */}

                        <h2 className="text-4xl md:text-6xl font-black text-white mt-6 leading-tight">

                            Explore Stunning
                            <br />

                            Travel Moments

                        </h2>

                        {/* DESCRIPTION */}

                        <p className="text-lg md:text-xl text-gray-400 mt-7 leading-relaxed">

                            Discover breathtaking destinations, unforgettable
                            adventures, and luxury experiences captured by travelers
                            around the world.

                        </p>
                    </div>

                    {/* RIGHT CARD */}

                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] px-8 py-7 shadow-[0_10px_50px_rgba(0,0,0,0.18)]">

                        <div className="flex items-center gap-5">

                            <div className="w-18 h-18 rounded-[28px] bg-linear-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center text-3xl shadow-[0_10px_30px_rgba(6,182,212,0.35)]">

                                <FaCamera />

                            </div>

                            <div>

                                <h3 className="text-4xl font-black text-white">

                                    5K+

                                </h3>

                                <p className="text-gray-400 mt-1">

                                    Travel Photos

                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* GALLERY */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-6">

                    {galleryImages.map((image) => (

                        <div
                            key={image.id}
                            className={`group relative overflow-hidden rounded-[36px] ${image.size} border border-white/10 shadow-[0_15px_60px_rgba(0,0,0,0.25)]`}
                        >

                            {/* IMAGE */}

                            <Image
                                src={image.image}
                                alt={image.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-all duration-1000"
                            />

                            {/* OVERLAY */}

                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent"></div>

                            {/* HOVER OVERLAY */}

                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-500/10 transition-all duration-700"></div>

                            {/* PLAY BUTTON */}

                            <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">

                                <FaPlay />

                            </div>

                            {/* CONTENT */}

                            <div className="absolute bottom-0 left-0 p-7 text-white">

                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-semibold">

                                    <FaGlobeAsia />

                                    {image.location}

                                </div>

                                <h3 className="text-3xl font-black mt-5 leading-tight">

                                    {image.title}

                                </h3>

                                {/* LINE */}

                                <div className="w-14 group-hover:w-full h-1 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 mt-6 transition-all duration-700"></div>
                            </div>

                            {/* BIG NUMBER */}

                            <div className="absolute -bottom-8 -right-2 text-[180px] font-black text-white/3 group-hover:text-cyan-400/6 transition-all duration-700 leading-none">

                                0{image.id}

                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTTOM CTA */}

                <div className="mt-20 relative overflow-hidden rounded-[40px] bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-700 p-10 md:p-14 shadow-[0_20px_80px_rgba(6,182,212,0.3)]">

                    {/* GLOW */}

                    <div className="absolute top-0 right-0 w-87.5 h-87.5 bg-white/10 rounded-full blur-3xl"></div>

                    {/* CONTENT */}

                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">

                        {/* LEFT */}

                        <div className="max-w-3xl text-white">

                            {/* TAG */}

                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sm font-semibold">

                                <FaCompass />

                                Start Your Adventure

                            </div>

                            <h3 className="text-4xl md:text-5xl font-black leading-tight mt-6">

                                Capture Your Next
                                <br />

                                Travel Story

                            </h3>

                            <p className="text-white/80 text-lg mt-6 leading-relaxed">

                                Discover breathtaking destinations and create
                                unforgettable memories across the world’s most
                                beautiful places.

                            </p>
                        </div>

                        {/* BUTTON */}

                        <button className="group flex items-center gap-3 h-16 px-8 rounded-2xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg shadow-2xl transition-all duration-500 hover:scale-105 whitespace-nowrap">

                            Explore Destinations

                            <FaArrowRight className="group-hover:translate-x-1 transition-all duration-300" />

                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;