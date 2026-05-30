import Link from "next/link";
import React from "react";
import {
    FaMapMarkedAlt,
    FaUsers,
    FaWallet,
    FaCalendarAlt,
    FaSearch,
} from "react-icons/fa";

const Banner = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/assets/banner.png')] bg-cover bg-center scale-105"></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 min-h-screen flex flex-col justify-center">

                {/* Hero Section */}
                <div className="max-w-4xl pt-24">

                    {/* Tag */}
                    <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-3 rounded-full mb-6 shadow-lg">

                        <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></span>

                        <p className="text-sm tracking-[4px] uppercase text-cyan-300 font-semibold">
                            Explore The World
                        </p>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] text-white">
                        Discover Your
                        <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Next Adventure
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-2xl text-gray-200 mt-8 leading-relaxed max-w-3xl">
                        Explore breathtaking destinations, luxurious resorts,
                        thrilling adventures, and unforgettable memories with
                        curated travel experiences around the world.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5 mt-10">

                        <Link href="/destination">
                            <button className="group h-14 px-8 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg transition-all duration-300 shadow-[0_10px_30px_rgba(6,182,212,0.4)] hover:scale-105 cursor-pointer">
                                Explore Now
                            </button>
                        </Link>

                        <Link href="/destination">
                            <button className="h-14 px-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white hover:text-black text-white font-semibold text-lg transition-all duration-300 cursor-pointer">
                                View Destinations
                            </button>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-10 mt-14">

                        <div>
                            <h2 className="text-4xl font-bold text-white">
                                15K+
                            </h2>

                            <p className="text-gray-300 mt-1">
                                Happy Travelers
                            </p>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold text-white">
                                120+
                            </h2>

                            <p className="text-gray-300 mt-1">
                                Top Destinations
                            </p>
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold text-white">
                                4.9★
                            </h2>

                            <p className="text-gray-300 mt-1">
                                Average Rating
                            </p>
                        </div>
                    </div>
                </div>

                {/* Search Box */}
                <div className="mt-16 mb-10">

                    <div className="bg-black/20 border border-white/10 backdrop-blur-2xl rounded-[32px] p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

                        <form
                            action="/destination"
                            method="GET"
                            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 items-end"
                        >

                            {/* Location */}
                            <div>
                                <label className="text-white font-semibold text-lg flex items-center gap-3 mb-4">

                                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-300 text-xl">
                                        <FaMapMarkedAlt />
                                    </div>

                                    Location
                                </label>

                                <input
                                    type="text"
                                    name="location"
                                    placeholder="Search destination"
                                    className="w-full h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white placeholder:text-gray-300 px-5 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300"
                                />
                            </div>

                            {/* Duration */}
                            <div>
                                <label className="text-white font-semibold text-lg flex items-center gap-3 mb-4">

                                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-300 text-xl">
                                        <FaCalendarAlt />
                                    </div>

                                    Duration
                                </label>

                                <select
                                    name="duration"
                                    className="w-full h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white px-5 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300 appearance-none"
                                >
                                    <option className="text-black bg-white" value="">
                                        Select Duration
                                    </option>

                                    <option className="text-black bg-white" value="3 Days">
                                        3 Days
                                    </option>

                                    <option className="text-black bg-white" value="5 Days">
                                        5 Days
                                    </option>

                                    <option className="text-black bg-white" value="7 Days">
                                        7 Days
                                    </option>

                                    <option className="text-black bg-white" value="10 Days">
                                        10 Days
                                    </option>
                                </select>
                            </div>

                            {/* Budget */}
                            <div>
                                <label className="text-white font-semibold text-lg flex items-center gap-3 mb-4">

                                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-300 text-xl">
                                        <FaWallet />
                                    </div>

                                    Budget
                                </label>

                                <select
                                    name="budget"
                                    className="w-full h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white px-5 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300 appearance-none"
                                >
                                    <option className="text-black bg-white" value="">
                                        Select Budget
                                    </option>

                                    <option className="text-black bg-white" value="1000">
                                        Under $1000
                                    </option>

                                    <option className="text-black bg-white" value="3000">
                                        Under $3000
                                    </option>

                                    <option className="text-black bg-white" value="5000">
                                        Under $5000
                                    </option>
                                </select>
                            </div>

                            {/* Travelers */}
                            <div>
                                <label className="text-white font-semibold text-lg flex items-center gap-3 mb-4">

                                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-300 text-xl">
                                        <FaUsers />
                                    </div>

                                    Travelers
                                </label>

                                <select
                                    name="travelers"
                                    className="w-full h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white px-5 outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300 appearance-none"
                                >
                                    <option className="text-black bg-white" value="">
                                        Number of Travelers
                                    </option>

                                    <option className="text-black bg-white" value="1-2">
                                        1 - 2 Persons
                                    </option>

                                    <option className="text-black bg-white" value="3-5">
                                        3 - 5 Persons
                                    </option>

                                    <option className="text-black bg-white" value="5-10">
                                        5 - 10 Persons
                                    </option>
                                </select>
                            </div>

                            {/* Search Button */}
                            <button
                                type="submit"
                                className="w-full h-14 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-lg transition-all duration-300 shadow-[0_10px_30px_rgba(6,182,212,0.4)] hover:scale-[1.02] flex items-center justify-center gap-3"
                            >
                                <FaSearch />

                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;