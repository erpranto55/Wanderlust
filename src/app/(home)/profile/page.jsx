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

import { Modal } from "@heroui/react";

import { toast } from "react-toastify";

import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {

    const [user, setUser] =
        useState(null);

    const [imageError, setImageError] =
        useState(false);

    const [loading, setLoading] =
        useState(false);

    const [isOpen, setIsOpen] =
        useState(false);

    const [formData, setFormData] =
        useState({
            name: "",
            image: "",
            location: "",
        });

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

                    setFormData({
                        name:
                            session.data.user.name ||
                            "",

                        image:
                            session.data.user.image ||
                            "",

                        location:
                            session.data.user.location ||
                            "Bangladesh",
                    });
                }
            };

        getUser();

    }, []);

    // =========================================
    // HANDLE INPUT CHANGE
    // =========================================

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value,
        });
    };

    // =========================================
    // HANDLE UPDATE
    // =========================================

    const handleUpdate =
        async (e) => {

            e.preventDefault();

            try {

                setLoading(true);

                const res =
                    await fetch(
                        "/api/update-user",
                        {
                            method: "PATCH",

                            headers: {
                                "Content-Type":
                                    "application/json",
                            },

                            body: JSON.stringify(
                                {
                                    id:
                                        user.id,
                                    ...formData,
                                }
                            ),
                        }
                    );

                const data =
                    await res.json();

                if (data.success) {

                    toast.success(
                        "Profile Updated Successfully!"
                    );

                    setUser({
                        ...user,
                        ...formData,
                    });

                    setIsOpen(
                        false
                    );

                } else {

                    toast.error(
                        data.message
                    );
                }

            } catch (error) {

                toast.error(
                    error.message
                );

            } finally {

                setLoading(false);
            }
        };

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
                        "
                    >

                        My Profile

                    </h1>

                    <p
                        className="
                        mt-4
                        text-lg
                        text-base-content/60
                        "
                    >

                        Manage your account settings and travel preferences.

                    </p>

                </div>

                {/* GRID */}

                <div
                    className="
                    grid
                    grid-cols-1
                    lg:grid-cols-3
                    gap-8
                    "
                >

                    {/* LEFT CARD */}

                    <div
                        className="
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

                        <div className="flex flex-col items-center relative z-10">

                            {/* PROFILE IMAGE */}

                            <div className="relative">

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
                                            src={user.image}
                                            alt="profile"
                                            width={160}
                                            height={160}
                                            unoptimized
                                            className="w-full h-full object-cover"
                                            onLoad={() =>
                                                setImageError(false)
                                            }
                                            onError={() =>
                                                setImageError(true)
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

                                {/* CAMERA BTN */}

                                <button
                                    onClick={() =>
                                        setIsOpen(
                                            true
                                        )
                                    }
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
                                break-all
                                text-center
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

                                {formData.location}

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
                            "
                        >

                            <div className="flex items-center justify-between">

                                <span className="text-base-content/60">

                                    Member Since

                                </span>

                                <span className="font-bold">

                                    June 2026

                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <span className="text-base-content/60">

                                    Nationality

                                </span>

                                <span className="font-bold">

                                    Bangladesh

                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <span className="text-base-content/60">

                                    Status

                                </span>

                                <span
                                    className="
                                    px-3
                                    py-1
                                    rounded-full
                                    bg-green-500/10
                                    text-green-500
                                    text-sm
                                    font-semibold
                                    "
                                >

                                    Active

                                </span>

                            </div>

                        </div>

                        {/* EDIT BUTTON */}

                        <button
                            onClick={() =>
                                setIsOpen(
                                    true
                                )
                            }
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

                    {/* RIGHT SIDE */}

                    <div className="lg:col-span-2">

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

                            {[
                                {
                                    title:
                                        "Total Bookings",
                                    value:
                                        "12",
                                    icon:
                                        <FaPlane />,
                                    bg:
                                        "bg-cyan-500/10",
                                    text:
                                        "text-cyan-500",
                                },

                                {
                                    title:
                                        "Countries Visited",
                                    value:
                                        "18",
                                    icon:
                                        <FaRegCompass />,
                                    bg:
                                        "bg-green-500/10",
                                    text:
                                        "text-green-500",
                                },

                                {
                                    title:
                                        "Upcoming Trips",
                                    value:
                                        "2",
                                    icon:
                                        <FaSuitcaseRolling />,
                                    bg:
                                        "bg-orange-500/10",
                                    text:
                                        "text-orange-500",
                                },

                                {
                                    title:
                                        "Total Spent",
                                    value:
                                        "$15,750",
                                    icon:
                                        <MdPayments />,
                                    bg:
                                        "bg-pink-500/10",
                                    text:
                                        "text-pink-500",
                                },
                            ].map(
                                (
                                    item,
                                    index
                                ) => (

                                    <div
                                        key={
                                            index
                                        }
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
                                        "
                                    >

                                        <div>

                                            <p className="text-base-content/60">

                                                {
                                                    item.title
                                                }

                                            </p>

                                            <h3
                                                className="
                                                mt-3
                                                text-4xl
                                                font-black
                                                "
                                            >

                                                {
                                                    item.value
                                                }

                                            </h3>

                                        </div>

                                        <div
                                            className={`
                                            w-16
                                            h-16
                                            rounded-2xl
                                            flex
                                            items-center
                                            justify-center
                                            text-2xl
                                            ${item.bg}
                                            ${item.text}
                                            `}
                                        >

                                            {
                                                item.icon
                                            }

                                        </div>

                                    </div>
                                )
                            )}

                        </div>

                    </div>

                </div>

            </div>

            {/* MODAL */}

            {
                isOpen && (

                    <div
                        className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/60
            backdrop-blur-sm
            p-4
            "
                    >

                        <div
                            className="
                w-full
                max-w-2xl
                rounded-[32px]
                bg-base-100
                border
                border-base-300
                p-8
                relative
                "
                        >

                            {/* CLOSE BTN */}

                            <button
                                onClick={() =>
                                    setIsOpen(
                                        false
                                    )
                                }
                                className="
                    absolute
                    top-5
                    right-5
                    w-10
                    h-10
                    rounded-full
                    bg-base-200
                    hover:bg-red-500
                    hover:text-white
                    transition-all
                    duration-300
                    "
                            >

                                ✕

                            </button>

                            {/* TITLE */}

                            <h2
                                className="
                    text-3xl
                    font-black
                    text-base-content
                    mb-8
                    "
                            >

                                Edit Profile

                            </h2>

                            {/* FORM */}

                            <form
                                onSubmit={
                                    handleUpdate
                                }
                                className="space-y-6"
                            >

                                {/* NAME */}

                                <div>

                                    <label className="font-semibold">

                                        Full Name

                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        value={
                                            formData.name
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        className="
                            w-full
                            mt-2
                            h-14
                            rounded-2xl
                            bg-base-200
                            border
                            border-base-300
                            px-5
                            outline-none
                            "
                                    />

                                </div>

                                {/* IMAGE */}

                                <div>

                                    <label className="font-semibold">

                                        Profile Image URL

                                    </label>

                                    <input
                                        type="text"
                                        name="image"
                                        value={
                                            formData.image
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        className="
                            w-full
                            mt-2
                            h-14
                            rounded-2xl
                            bg-base-200
                            border
                            border-base-300
                            px-5
                            outline-none
                            "
                                    />

                                </div>

                                {/* LOCATION */}

                                <div>

                                    <label className="font-semibold">

                                        Location

                                    </label>

                                    <input
                                        type="text"
                                        name="location"
                                        value={
                                            formData.location
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        className="
                            w-full
                            mt-2
                            h-14
                            rounded-2xl
                            bg-base-200
                            border
                            border-base-300
                            px-5
                            outline-none
                            "
                                    />

                                </div>

                                {/* BUTTONS */}

                                <div className="flex justify-end gap-4 pt-4">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setIsOpen(
                                                false
                                            )
                                        }
                                        className="
                            px-6
                            h-12
                            rounded-2xl
                            bg-base-200
                            font-semibold
                            "
                                    >

                                        Cancel

                                    </button>

                                    <button
                                        type="submit"
                                        disabled={
                                            loading
                                        }
                                        className="
                            px-8
                            h-12
                            rounded-2xl
                            bg-linear-to-r
                            from-cyan-500
                            to-blue-600
                            text-white
                            font-bold
                            "
                                    >

                                        {loading
                                            ? "Updating..."
                                            : "Save Changes"}

                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>
                )
            }

        </section>
    );
};

export default ProfilePage;