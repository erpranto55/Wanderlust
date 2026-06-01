"use client";

import React, {
    useEffect,
    useState,
} from "react";

import Image from "next/image";

import {
    FaCamera,
    FaGlobeAsia,
    FaMapMarkerAlt,
    FaPlane,
    FaRegCompass,
    FaSuitcaseRolling,
} from "react-icons/fa";

import { MdPayments } from "react-icons/md";

import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {

    const [user, setUser] =
        useState(null);

    const [imageError, setImageError] =
        useState(false);

    // =========================================
    // GET USER SESSION
    // =========================================

    useEffect(() => {

        const getUser =
            async () => {

                const session =
                    await authClient.getSession();

                if (
                    session?.data?.user
                ) {

                    setUser(
                        session.data.user
                    );
                }
            };

        getUser();

    }, []);

    return (
        <section
            className="
            min-h-screen
            bg-base-100
            px-4
            md:px-8
            py-10
            transition-all
            duration-500
            "
        >

            <div className="max-w-7xl mx-auto">

                {/* HEADER */}

                <div className="mb-12">

                    <div
                        className="
                        inline-flex
                        items-center
                        gap-3
                        px-5
                        py-2
                        rounded-full
                        bg-cyan-500/10
                        border
                        border-cyan-500/20
                        text-cyan-500
                        font-semibold
                        mb-5
                        "
                    >

                        <FaGlobeAsia />

                        Traveler Dashboard

                    </div>

                    <h1
                        className="
                        text-5xl
                        md:text-6xl
                        font-black
                        text-base-content
                        tracking-tight
                        "
                    >

                        My Profile

                    </h1>

                    <p
                        className="
                        mt-4
                        text-lg
                        text-base-content/60
                        max-w-2xl
                        "
                    >

                        Manage your account settings, travel preferences,
                        and explore your journey statistics.

                    </p>

                </div>

                {/* MAIN GRID */}

                <div
                    className="
                    grid
                    grid-cols-1
                    lg:grid-cols-3
                    gap-8
                    "
                >

                    {/* PROFILE CARD */}

                    <div
                        className="
                        lg:col-span-1
                        rounded-[36px]
                        border
                        border-base-300
                        bg-base-200/60
                        backdrop-blur-xl
                        p-8
                        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                        relative
                        overflow-hidden
                        "
                    >

                        {/* GLOW */}

                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />

                        {/* PROFILE IMAGE */}

                        <div className="flex flex-col items-center relative z-10">

                            <div className="relative">

                                {/* IMAGE */}

                                <div
                                    className="
                                    w-40
                                    h-40
                                    rounded-full
                                    overflow-hidden
                                    border-4
                                    border-cyan-500
                                    shadow-[0_15px_40px_rgba(6,182,212,0.35)]
                                    "
                                >

                                    {user?.image &&
                                        !imageError ? (

                                        <Image
                                            src={
                                                user.image
                                            }
                                            alt="profile"
                                            width={160}
                                            height={160}
                                            className="w-full h-full object-cover"
                                            onError={() =>
                                                setImageError(
                                                    true
                                                )
                                            }
                                        />

                                    ) : (

                                        <div
                                            className="
                                            w-full
                                            h-full
                                            bg-linear-to-br
                                            from-cyan-500
                                            to-blue-600
                                            flex
                                            items-center
                                            justify-center
                                            text-white
                                            text-6xl
                                            font-bold
                                            "
                                        >

                                            {user?.name?.charAt(
                                                0
                                            ) || "U"}

                                        </div>
                                    )}

                                </div>

                                {/* CAMERA */}

                                <button
                                    className="
                                    absolute
                                    bottom-2
                                    right-2
                                    w-12
                                    h-12
                                    rounded-full
                                    bg-cyan-500
                                    hover:bg-cyan-600
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                    shadow-lg
                                    transition-all
                                    duration-300
                                    hover:scale-110
                                    "
                                >

                                    <FaCamera />

                                </button>

                            </div>

                            {/* NAME */}

                            <h2
                                className="
                                mt-6
                                text-3xl
                                font-black
                                text-base-content
                                text-center
                                "
                            >

                                {user?.name ||
                                    "Traveler"}

                            </h2>

                            {/* EMAIL */}

                            <p
                                className="
                                mt-2
                                text-base-content/60
                                text-center
                                break-all
                                "
                            >

                                {user?.email}

                            </p>

                            {/* LOCATION */}

                            <div
                                className="
                                mt-4
                                inline-flex
                                items-center
                                gap-2
                                px-4
                                py-2
                                rounded-full
                                bg-base-100
                                border
                                border-base-300
                                text-base-content/70
                                "
                            >

                                <FaMapMarkerAlt className="text-cyan-500" />

                                Bangladesh

                            </div>

                        </div>

                        {/* INFO */}

                        <div
                            className="
                            mt-10
                            border-t
                            border-base-300
                            pt-8
                            space-y-5
                            relative
                            z-10
                            "
                        >

                            <div className="flex items-center justify-between">

                                <span className="text-base-content/60">

                                    Member Since

                                </span>

                                <span className="font-bold text-base-content">

                                    June 2026

                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <span className="text-base-content/60">

                                    Nationality

                                </span>

                                <span className="font-bold text-base-content">

                                    Bangladesh

                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <span className="text-base-content/60">

                                    Account Status

                                </span>

                                <span
                                    className="
                                    px-3
                                    py-1
                                    rounded-full
                                    bg-green-500/10
                                    text-green-500
                                    font-semibold
                                    text-sm
                                    "
                                >

                                    Active

                                </span>

                            </div>

                        </div>

                        {/* BUTTON */}

                        <button
                            className="
                            mt-8
                            w-full
                            h-14
                            rounded-2xl
                            bg-linear-to-r
                            from-cyan-500
                            to-blue-600
                            hover:from-cyan-400
                            hover:to-blue-500
                            text-white
                            font-bold
                            shadow-[0_15px_40px_rgba(6,182,212,0.35)]
                            transition-all
                            duration-300
                            hover:scale-[1.02]
                            "
                        >

                            Edit Profile

                        </button>

                    </div>

                    {/* RIGHT SECTION */}

                    <div className="lg:col-span-2">

                        {/* STATISTICS */}

                        <div>

                            <h2
                                className="
                                text-3xl
                                font-black
                                text-base-content
                                mb-7
                                "
                            >

                                Travel Statistics

                            </h2>

                            <div
                                className="
                                grid
                                grid-cols-1
                                md:grid-cols-2
                                gap-6
                                "
                            >

                                {/* CARD */}

                                <div
                                    className="
                                    rounded-[30px]
                                    border
                                    border-base-300
                                    bg-base-200/60
                                    backdrop-blur-xl
                                    p-7
                                    shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                                    flex
                                    items-center
                                    justify-between
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    "
                                >

                                    <div>

                                        <p className="text-base-content/60">

                                            Total Bookings

                                        </p>

                                        <h3
                                            className="
                                            mt-3
                                            text-4xl
                                            font-black
                                            text-base-content
                                            "
                                        >

                                            12

                                        </h3>

                                    </div>

                                    <div
                                        className="
                                        w-16
                                        h-16
                                        rounded-2xl
                                        bg-cyan-500/10
                                        text-cyan-500
                                        flex
                                        items-center
                                        justify-center
                                        text-2xl
                                        "
                                    >

                                        <FaPlane />

                                    </div>

                                </div>

                                {/* CARD */}

                                <div
                                    className="
                                    rounded-[30px]
                                    border
                                    border-base-300
                                    bg-base-200/60
                                    backdrop-blur-xl
                                    p-7
                                    shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                                    flex
                                    items-center
                                    justify-between
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    "
                                >

                                    <div>

                                        <p className="text-base-content/60">

                                            Countries Visited

                                        </p>

                                        <h3
                                            className="
                                            mt-3
                                            text-4xl
                                            font-black
                                            text-base-content
                                            "
                                        >

                                            18

                                        </h3>

                                    </div>

                                    <div
                                        className="
                                        w-16
                                        h-16
                                        rounded-2xl
                                        bg-green-500/10
                                        text-green-500
                                        flex
                                        items-center
                                        justify-center
                                        text-2xl
                                        "
                                    >

                                        <FaRegCompass />

                                    </div>

                                </div>

                                {/* CARD */}

                                <div
                                    className="
                                    rounded-[30px]
                                    border
                                    border-base-300
                                    bg-base-200/60
                                    backdrop-blur-xl
                                    p-7
                                    shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                                    flex
                                    items-center
                                    justify-between
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    "
                                >

                                    <div>

                                        <p className="text-base-content/60">

                                            Upcoming Trips

                                        </p>

                                        <h3
                                            className="
                                            mt-3
                                            text-4xl
                                            font-black
                                            text-base-content
                                            "
                                        >

                                            2

                                        </h3>

                                    </div>

                                    <div
                                        className="
                                        w-16
                                        h-16
                                        rounded-2xl
                                        bg-orange-500/10
                                        text-orange-500
                                        flex
                                        items-center
                                        justify-center
                                        text-2xl
                                        "
                                    >

                                        <FaSuitcaseRolling />

                                    </div>

                                </div>

                                {/* CARD */}

                                <div
                                    className="
                                    rounded-[30px]
                                    border
                                    border-base-300
                                    bg-base-200/60
                                    backdrop-blur-xl
                                    p-7
                                    shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                                    flex
                                    items-center
                                    justify-between
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    "
                                >

                                    <div>

                                        <p className="text-base-content/60">

                                            Total Spent

                                        </p>

                                        <h3
                                            className="
                                            mt-3
                                            text-4xl
                                            font-black
                                            text-base-content
                                            "
                                        >

                                            $15,750

                                        </h3>

                                    </div>

                                    <div
                                        className="
                                        w-16
                                        h-16
                                        rounded-2xl
                                        bg-pink-500/10
                                        text-pink-500
                                        flex
                                        items-center
                                        justify-center
                                        text-2xl
                                        "
                                    >

                                        <MdPayments />

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* ACTIVITY */}

                        <div className="mt-10">

                            <h2
                                className="
                                text-3xl
                                font-black
                                text-base-content
                                mb-7
                                "
                            >

                                Recent Activity

                            </h2>

                            <div
                                className="
                                rounded-[36px]
                                border
                                border-base-300
                                bg-base-200/60
                                backdrop-blur-xl
                                p-8
                                shadow-[0_15px_50px_rgba(0,0,0,0.06)]
                                "
                            >

                                <div className="space-y-6">

                                    <div
                                        className="
                                        flex
                                        items-start
                                        gap-5
                                        pb-6
                                        border-b
                                        border-base-300
                                        "
                                    >

                                        <div
                                            className="
                                            w-14
                                            h-14
                                            rounded-2xl
                                            bg-cyan-500/10
                                            text-cyan-500
                                            flex
                                            items-center
                                            justify-center
                                            text-xl
                                            "
                                        >

                                            ✈

                                        </div>

                                        <div>

                                            <h3 className="font-bold text-lg text-base-content">

                                                Booked Bali Adventure Tour

                                            </h3>

                                            <p className="mt-1 text-base-content/60">

                                                Your booking has been confirmed.

                                            </p>

                                            <span className="mt-2 inline-block text-sm text-cyan-500 font-semibold">

                                                2 days ago

                                            </span>

                                        </div>

                                    </div>

                                    <div
                                        className="
                                        flex
                                        items-start
                                        gap-5
                                        pb-6
                                        border-b
                                        border-base-300
                                        "
                                    >

                                        <div
                                            className="
                                            w-14
                                            h-14
                                            rounded-2xl
                                            bg-green-500/10
                                            text-green-500
                                            flex
                                            items-center
                                            justify-center
                                            text-xl
                                            "
                                        >

                                            ⭐

                                        </div>

                                        <div>

                                            <h3 className="font-bold text-lg text-base-content">

                                                Reviewed Santorini Package

                                            </h3>

                                            <p className="mt-1 text-base-content/60">

                                                You rated your trip 5 stars.

                                            </p>

                                            <span className="mt-2 inline-block text-sm text-green-500 font-semibold">

                                                1 week ago

                                            </span>

                                        </div>

                                    </div>

                                    <div
                                        className="
                                        flex
                                        items-start
                                        gap-5
                                        "
                                    >

                                        <div
                                            className="
                                            w-14
                                            h-14
                                            rounded-2xl
                                            bg-orange-500/10
                                            text-orange-500
                                            flex
                                            items-center
                                            justify-center
                                            text-xl
                                            "
                                        >

                                            🌍

                                        </div>

                                        <div>

                                            <h3 className="font-bold text-lg text-base-content">

                                                Updated Travel Preferences

                                            </h3>

                                            <p className="mt-1 text-base-content/60">

                                                Your profile settings were updated.

                                            </p>

                                            <span className="mt-2 inline-block text-sm text-orange-500 font-semibold">

                                                2 weeks ago

                                            </span>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ProfilePage;