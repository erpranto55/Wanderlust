"use client";

import React, {
    useMemo,
    useState,
} from "react";

import {
    FaCalendarAlt,
    FaCheck,
    FaUsers,
} from "react-icons/fa";

import { toast } from "react-toastify";

import { authClient } from "@/lib/auth-client";

const BookingCard = ({
    destination,
}) => {

    const [loading, setLoading] =
        useState(false);

    const [persons, setPersons] =
        useState(1);

    const [date, setDate] =
        useState("");

    // TOTAL PRICE

    const totalPrice =
        useMemo(() => {

            return (
                Number(
                    destination.price
                ) * Number(persons)
            );

        }, [
            persons,
            destination.price,
        ]);

    // HANDLE BOOKING

    const handleBooking =
        async () => {

            try {

                setLoading(true);

                // SESSION

                const session = await authClient.getSession();

                if (!session?.data?.user) {
                    toast.error("Please login first!");
                    return;
                }

                // VALIDATION

                if (!date) {
                    toast.error("Please select a date!");
                    return;
                }

                // BOOKING OBJECT

                const bookingData = {
                    destinationId: destination._id,
                    destinationName: destination.destinationName,
                    image: destination.imageUrl,
                    country: destination.country,
                    duration: destination.duration,
                    departureDate: date,
                    travelers: persons,
                    pricePerPerson: destination.price,
                    totalPrice,
                    userName: session.data.user.name,
                    userEmail: session.data.user.email,
                    userImage: session.data.user.image,
                    bookingDate: new Date(),
                };

                // SEND TO BACKEND

                const { data: tokenData } = await authClient.token();

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_URL}/bookings`,
                    {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${tokenData?.token}`
                        },
                        body: JSON.stringify(bookingData),
                    }
                );

                if (!res.ok) {

                    throw new Error(
                        "Backend Error"
                    );
                }

                const data =
                    await res.json();

                if (
                    data.insertedId
                ) {

                    toast.success(
                        "Booking Successful!"
                    );

                } else {

                    toast.error(
                        "Booking Failed!"
                    );
                }

            } catch (error) {

                console.error(error);

                toast.error(
                    "Something went wrong!"
                );

            } finally {

                setLoading(false);
            }
        };

    return (

        <div
            className="
            overflow-hidden
            rounded-[36px]
            border
            border-base-300
            bg-base-200/60
            backdrop-blur-xl
            p-8
            shadow-[0_20px_80px_rgba(0,0,0,0.08)]
            relative
            "
        >

            {/* GLOW */}

            <div className="absolute top-0 right-0 w-55 h-55 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="relative">

                {/* PRICE */}

                <div className="border-b border-base-300 pb-7">

                    <p className="text-base-content/60">

                        Price Per Person

                    </p>

                    <h2 className="text-5xl font-black text-cyan-500 mt-3">

                        $
                        {
                            destination.price
                        }

                    </h2>

                    <p className="text-base-content/60 mt-2">

                        premium package

                    </p>

                </div>

                {/* DATE */}

                <div className="mt-7">

                    <label className="text-base-content font-bold block mb-3">

                        Select Date

                    </label>

                    <div className="relative">

                        <FaCalendarAlt
                            className="
                            absolute
                            left-5
                            top-1/2
                            -translate-y-1/2
                            text-cyan-500
                            "
                        />

                        <input
                            type="date"
                            value={date}
                            onChange={(e) =>
                                setDate(
                                    e.target.value
                                )
                            }
                            className="
                            w-full
                            h-14
                            rounded-2xl
                            border
                            border-base-300
                            bg-base-100
                            px-14
                            outline-none
                            text-base-content
                            "
                        />

                    </div>

                </div>

                {/* PERSON */}

                <div className="mt-6">

                    <label className="text-base-content font-bold block mb-3">

                        Travelers

                    </label>

                    <div className="relative">

                        <FaUsers
                            className="
                            absolute
                            left-5
                            top-1/2
                            -translate-y-1/2
                            text-cyan-500
                            "
                        />

                        <select
                            value={persons}
                            onChange={(e) =>
                                setPersons(
                                    e.target.value
                                )
                            }
                            className="
                            w-full
                            h-14
                            rounded-2xl
                            border
                            border-base-300
                            bg-base-100
                            px-14
                            outline-none
                            text-base-content
                            appearance-none
                            "
                        >

                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                                (
                                    item
                                ) => (

                                    <option
                                        key={
                                            item
                                        }
                                        value={
                                            item
                                        }
                                    >

                                        {
                                            item
                                        }

                                        {" "}
                                        Person

                                    </option>
                                )
                            )}

                        </select>

                    </div>

                </div>

                {/* TOTAL */}

                <div
                    className="
                    mt-7
                    rounded-3xl
                    border
                    border-cyan-500/20
                    bg-cyan-500/5
                    p-6
                    "
                >

                    <div className="flex items-center justify-between">

                        <p className="text-base-content/60 font-medium">

                            Total Price

                        </p>

                        <h3 className="text-4xl font-black text-cyan-500">

                            $
                            {
                                totalPrice
                            }

                        </h3>

                    </div>

                </div>

                {/* BUTTON */}

                <button
                    onClick={
                        handleBooking
                    }
                    disabled={loading}
                    className="
                    w-full
                    h-15
                    rounded-2xl
                    bg-linear-to-r
                    from-cyan-500
                    to-blue-600
                    hover:from-cyan-600
                    hover:to-blue-700
                    text-white
                    font-black
                    text-lg
                    shadow-[0_10px_40px_rgba(6,182,212,0.35)]
                    transition-all
                    duration-500
                    hover:scale-[1.02]
                    mt-8
                    "
                >

                    {loading
                        ? "Booking..."
                        : "Book Now →"}

                </button>

                {/* FEATURES */}

                <div className="space-y-5 mt-8">

                    {[
                        "Free cancellation up to 7 days",
                        "Travel insurance included",
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
                                className="flex items-center gap-4 text-base-content/70"
                            >

                                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center">

                                    <FaCheck />

                                </div>

                                <p>

                                    {
                                        item
                                    }

                                </p>

                            </div>
                        )
                    )}

                </div>

            </div>

        </div>
    );
};

export default BookingCard;