"use client";

import React, {
    useEffect,
    useState,
} from "react";

import Image from "next/image";
import Link from "next/link";

import {
    FaCalendarAlt,
    FaCheckCircle,
    FaClock,
    FaEye,
    FaMapMarkerAlt,
    FaTrash,
    FaUsers,
    FaPlaneDeparture,
} from "react-icons/fa";

import { toast } from "react-toastify";

import { authClient } from "@/lib/auth-client";
import { auth } from "@/lib/auth";

const MyBookingsPage = () => {

    const [bookings, setBookings] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    // LOAD BOOKINGS

    useEffect(() => {

        const loadBookings =
            async () => {

                try {

                    const session =
                        await authClient.getSession();

                    if (
                        !session?.data?.user?.email
                    ) {

                        setLoading(false);

                        return;
                    }
                    const { data: tokenData } = await authClient.token();

                    const res =
                        await fetch(
                            `${process.env.NEXT_PUBLIC_URL}/bookings/${session.data.user.email}`,
                            {
                                headers: {
                                    authorization: `Bearer ${tokenData?.token}`
                                },
                            }
                        );

                    const data =
                        await res.json();

                    setBookings(data);

                } catch (error) {

                    console.error(error);

                    toast.error(
                        "Failed to load bookings!"
                    );

                } finally {

                    setLoading(false);
                }
            };

        loadBookings();

    }, []);

    // DELETE BOOKING

    const handleDelete =
        async (id) => {

            const confirmDelete =
                confirm(
                    "Are you sure you want to cancel this booking?"
                );

            if (!confirmDelete) {

                return;
            }

            try {
                const { Data } = await auth.api.getToken({
                    headers: await headers()
                })
                const res =
                    await fetch(
                        `${process.env.NEXT_PUBLIC_URL}/bookings/${id}`,
                        {
                            method: "DELETE",
                            headers: {
                                authorization: `Bearer ${Data?.token}`
                            }
                        }
                    );

                const data =
                    await res.json();

                if (
                    data.deletedCount > 0
                ) {

                    toast.success(
                        "Booking cancelled successfully!"
                    );

                    setBookings(
                        bookings.filter(
                            (
                                booking
                            ) =>
                                booking._id !== id
                        )
                    );

                } else {

                    toast.error(
                        "Failed to cancel booking!"
                    );
                }

            } catch (error) {

                console.error(error);

                toast.error(
                    "Something went wrong!"
                );
            }
        };

    return (

        <section
            className="
            relative
            min-h-screen
            overflow-hidden
            bg-base-100
            "
        >

            {/* BG */}

            <div
                className="
                absolute
                top-0
                left-0
                w-100
                h-100
                bg-cyan-500/10
                rounded-full
                blur-3xl
                "
            ></div>

            <div
                className="
                absolute
                bottom-0
                right-0
                w-100
                h-100
                bg-blue-500/10
                rounded-full
                blur-3xl
                "
            ></div>

            {/* MAIN */}

            <div
                className="
                relative
                max-w-7xl
                mx-auto
                px-4
                md:px-6
                py-14
                "
            >

                {/* HEADER */}

                <div
                    className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    md:justify-between
                    gap-6
                    mb-12
                    "
                >

                    <div>

                        <div
                            className="
                            inline-flex
                            items-center
                            gap-2
                            px-5
                            py-2
                            rounded-full
                            bg-cyan-500/10
                            border
                            border-cyan-500/20
                            text-cyan-400
                            font-semibold
                            text-sm
                            mb-5
                            "
                        >

                            <FaPlaneDeparture />

                            Travel Dashboard

                        </div>

                        <h1
                            className="
                            text-5xl
                            md:text-6xl
                            font-black
                            text-base-content
                            "
                        >

                            My Bookings

                        </h1>

                        <p
                            className="
                            mt-4
                            text-lg
                            text-base-content/60
                            "
                        >

                            Manage your booked destinations beautifully.

                        </p>

                    </div>

                    {/* STATS */}

                    <div
                        className="
                        flex
                        gap-4
                        "
                    >

                        <div
                            className="
                            rounded-3xl
                            border
                            border-base-300
                            bg-base-200/60
                            backdrop-blur-xl
                            px-7
                            py-5
                            "
                        >

                            <h3
                                className="
                                text-3xl
                                font-black
                                text-cyan-400
                                "
                            >

                                {
                                    bookings.length
                                }

                            </h3>

                            <p
                                className="
                                text-sm
                                text-base-content/60
                                mt-1
                                "
                            >

                                Total Trips

                            </p>

                        </div>

                        <div
                            className="
                            rounded-3xl
                            border
                            border-base-300
                            bg-base-200/60
                            backdrop-blur-xl
                            px-7
                            py-5
                            "
                        >

                            <h3
                                className="
                                text-3xl
                                font-black
                                text-green-400
                                "
                            >

                                {
                                    bookings.length
                                }

                            </h3>

                            <p
                                className="
                                text-sm
                                text-base-content/60
                                mt-1
                                "
                            >

                                Active

                            </p>

                        </div>

                    </div>

                </div>

                {/* LOADING */}

                {loading && (

                    <div
                        className="
                        h-100
                        flex
                        items-center
                        justify-center
                        "
                    >

                        <span
                            className="
                            loading
                            loading-spinner
                            loading-lg
                            text-cyan-500
                            scale-150
                            "
                        ></span>

                    </div>
                )}

                {/* EMPTY */}

                {!loading &&
                    bookings.length === 0 && (

                        <div
                            className="
                            rounded-[36px]
                            border
                            border-base-300
                            bg-base-200/60
                            backdrop-blur-xl
                            p-14
                            text-center
                            "
                        >

                            <h2
                                className="
                                text-5xl
                                font-black
                                text-base-content
                                "
                            >

                                No Bookings Yet

                            </h2>

                            <p
                                className="
                                text-lg
                                text-base-content/60
                                mt-5
                                "
                            >

                                Start exploring amazing destinations.

                            </p>

                            <Link
                                href="/destination"
                                className="
                                inline-flex
                                items-center
                                justify-center
                                h-14
                                px-8
                                rounded-2xl
                                bg-linear-to-r
                                from-cyan-500
                                to-blue-600
                                text-white
                                font-bold
                                mt-8
                                hover:scale-105
                                transition-all
                                duration-300
                                "
                            >

                                Explore Destinations

                            </Link>

                        </div>
                    )}

                {/* BOOKINGS */}

                <div className="space-y-6">

                    {bookings.map(
                        (
                            booking,
                            index
                        ) => {

                            const isConfirmed =
                                index % 2 === 0;

                            return (

                                <div
                                    key={booking._id}
                                    className="
                                    group
                                    rounded-[28px]
                                    border
                                    border-base-300
                                    bg-base-200/60
                                    backdrop-blur-xl
                                    overflow-hidden
                                    hover:border-cyan-500/30
                                    transition-all
                                    duration-300
                                    "
                                >

                                    <div
                                        className="
                                        flex
                                        flex-col
                                        md:flex-row
                                        gap-5
                                        p-5
                                        "
                                    >

                                        {/* IMAGE */}

                                        <div
                                            className="
                                            relative
                                            w-full
                                            md:w-65
                                            h-47.5
                                            rounded-[24px]
                                            overflow-hidden
                                            shrink-0
                                            "
                                        >

                                            <Image
                                                src={booking.image}
                                                alt={
                                                    booking.destinationName
                                                }
                                                fill
                                                unoptimized
                                                className="
                                                object-cover
                                                group-hover:scale-105
                                                transition-all
                                                duration-500
                                                "
                                            />

                                            {/* STATUS */}

                                            <div
                                                className={`
                                                absolute
                                                top-4
                                                left-4
                                                px-3
                                                py-1.5
                                                rounded-full
                                                text-xs
                                                font-bold
                                                backdrop-blur-xl
                                                border
                                                flex
                                                items-center
                                                gap-2
                                                ${isConfirmed
                                                        ? "bg-green-500/15 text-green-400 border-green-500/20"
                                                        : "bg-yellow-500/15 text-yellow-400 border-yellow-500/20"
                                                    }
                                                `}
                                            >

                                                {isConfirmed ? (
                                                    <FaCheckCircle />
                                                ) : (
                                                    <FaClock />
                                                )}

                                                {isConfirmed
                                                    ? "Confirmed"
                                                    : "Pending"}

                                            </div>

                                        </div>

                                        {/* CONTENT */}

                                        <div
                                            className="
                                            flex-1
                                            flex
                                            flex-col
                                            justify-between
                                            "
                                        >

                                            {/* TOP */}

                                            <div>

                                                <div
                                                    className="
                                                    flex
                                                    flex-col
                                                    lg:flex-row
                                                    lg:items-start
                                                    lg:justify-between
                                                    gap-4
                                                    "
                                                >

                                                    <div>

                                                        <h2
                                                            className="
                                                            text-3xl
                                                            font-black
                                                            text-base-content
                                                            "
                                                        >

                                                            {
                                                                booking.destinationName
                                                            }

                                                        </h2>

                                                        <div
                                                            className="
                                                            flex
                                                            items-center
                                                            gap-2
                                                            mt-3
                                                            text-base-content/60
                                                            "
                                                        >

                                                            <FaMapMarkerAlt className="text-cyan-400" />

                                                            <span>

                                                                {
                                                                    booking.country
                                                                }

                                                            </span>

                                                        </div>

                                                    </div>

                                                    {/* PRICE */}

                                                    <div
                                                        className="
                                                        text-left
                                                        lg:text-right
                                                        "
                                                    >

                                                        <p
                                                            className="
                                                            text-sm
                                                            text-base-content/50
                                                            "
                                                        >

                                                            Total Price

                                                        </p>

                                                        <h3
                                                            className="
                                                            text-4xl
                                                            font-black
                                                            text-cyan-400
                                                            "
                                                        >

                                                            $
                                                            {
                                                                booking.totalPrice
                                                            }

                                                        </h3>

                                                    </div>

                                                </div>

                                                {/* INFO + ACTIONS */}

                                                <div
                                                    className="
                                                        flex
                                                        flex-col
                                                        xl:flex-row
                                                        xl:items-end
                                                        xl:justify-between
                                                        gap-6
                                                        mt-6
                                                        "
                                                >

                                                    {/* INFO */}

                                                    <div
                                                        className="
                                                            flex
                                                            flex-wrap
                                                            gap-4
                                                            "
                                                    >

                                                        {/* DATE */}

                                                        <div
                                                            className="
                                                            flex
                                                            items-center
                                                            gap-3
                                                            px-4
                                                            py-3
                                                            rounded-2xl
                                                            bg-base-100/70
                                                            border
                                                            border-base-300
                                                            "
                                                        >

                                                            <div
                                                                className="
                                                                w-10
                                                                h-10
                                                                rounded-xl
                                                                bg-cyan-500/10
                                                                flex
                                                                items-center
                                                                justify-center
                                                                text-cyan-400
                                                                "
                                                            >

                                                                <FaCalendarAlt />

                                                            </div>

                                                            <div>

                                                                <p
                                                                    className="
                                                                    text-xs
                                                                    text-base-content/50
                                                                    "
                                                                >

                                                                    Departure

                                                                </p>

                                                                <h4
                                                                    className="
                                                                    font-bold
                                                                    text-sm
                                                                    "
                                                                >

                                                                    {
                                                                        booking.departureDate
                                                                    }

                                                                </h4>

                                                            </div>

                                                        </div>

                                                        {/* TRAVELERS */}

                                                        <div
                                                            className="
                                                            flex
                                                            items-center
                                                            gap-3
                                                            px-4
                                                            py-3
                                                            rounded-2xl
                                                            bg-base-100/70
                                                            border
                                                            border-base-300
                                                            "
                                                        >

                                                            <div
                                                                className="
                                                                    w-10
                                                                    h-10
                                                                    rounded-xl
                                                                    bg-blue-500/10
                                                                    flex
                                                                    items-center
                                                                    justify-center
                                                                    text-blue-400
                                                                    "
                                                            >

                                                                <FaUsers />

                                                            </div>

                                                            <div>

                                                                <p
                                                                    className="
                                                                    text-xs
                                                                    text-base-content/50
                                                                    "
                                                                >

                                                                    Travelers

                                                                </p>

                                                                <h4
                                                                    className="
                                                                    font-bold
                                                                    text-sm
                                                                    "
                                                                >

                                                                    {
                                                                        booking.travelers || 1
                                                                    }{" "}
                                                                    Person

                                                                </h4>

                                                            </div>

                                                        </div>

                                                    </div>

                                                    {/* BUTTONS */}

                                                    <div
                                                        className="
                                                        flex
                                                        flex-wrap
                                                        gap-3
                                                        xl:justify-end
                                                        "
                                                    >

                                                        {/* VIEW */}

                                                        <Link
                                                            href={`/destination/${booking.destinationId}`}
                                                            className="
                                                            h-11
                                                            px-5
                                                            rounded-xl
                                                            bg-linear-to-r
                                                            from-cyan-500
                                                            to-blue-600
                                                            text-white
                                                            font-semibold
                                                            text-sm
                                                            flex
                                                            items-center
                                                            gap-2
                                                            hover:scale-105
                                                            transition-all
                                                            duration-300
                                                            shadow-[0_10px_25px_rgba(6,182,212,0.25)]
                                                            "
                                                        >

                                                            <FaEye />

                                                            View Destination

                                                        </Link>

                                                        {/* DELETE */}

                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    booking._id
                                                                )
                                                            }
                                                            className="
                                                                h-11
                                                                px-5
                                                                rounded-xl
                                                                border
                                                                border-red-500/20
                                                                bg-red-500/10
                                                                text-red-400
                                                                font-semibold
                                                                text-sm
                                                                flex
                                                                items-center
                                                                gap-2
                                                                hover:bg-red-500
                                                                hover:text-white
                                                                transition-all
                                                                duration-300
                                                                "
                                                        >

                                                            <FaTrash />

                                                            Cancel

                                                        </button>

                                                    </div>

                                                </div>

                                            </div>



                                        </div>

                                    </div>

                                </div>
                            );
                        }
                    )}

                </div>

            </div>

        </section>
    );
};

export default MyBookingsPage;