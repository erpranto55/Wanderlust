"use client";

import React, { useState } from "react";
import Image from "next/image";

import {
    Button,
    FieldError,
    Input,
    Label,
    ListBox,
    Select,
    TextArea,
    TextField,
} from "@heroui/react";

import {
    FaCalendarAlt,
    FaGlobeAsia,
    FaImage,
    FaMapMarkedAlt,
    FaMoneyBillWave,
    FaPlus,
    FaUsers,
} from "react-icons/fa";

import { toast } from "react-toastify";

const categories = [
    "Beach",
    "Mountain",
    "City",
    "Adventure",
    "Cultural",
    "Luxury",
];

const AddDestination = () => {

    const [imagePreview, setImagePreview] =
        useState("");

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    // =========================================
    // HANDLE SUBMIT
    // =========================================

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setIsSubmitting(true);

            const formData =
                new FormData(
                    e.currentTarget
                );

            const destination =
                Object.fromEntries(
                    formData.entries()
                );

            // DEFAULT REVIEWS

            destination.reviews = [];

            // DEFAULT ITINERARY

            destination.itinerary = [
                {
                    day: "01",
                    title:
                        "Arrival & Welcome",
                    description:
                        "Arrive at your destination and enjoy a warm welcome experience with hotel check-in and relaxation.",
                },

                {
                    day: "02",
                    title:
                        "Explore The Destination",
                    description:
                        "Discover famous attractions, local culture, and unforgettable sightseeing experiences.",
                },

                {
                    day: "03",
                    title:
                        "Adventure & Activities",
                    description:
                        "Enjoy exciting adventures, outdoor activities, and premium travel experiences.",
                },

                {
                    day: "04",
                    title:
                        "Relax & Departure",
                    description:
                        "Relax, enjoy leisure time, and prepare for your comfortable departure journey.",
                },
            ];

            // API CALL

            const res = await fetch(
                "http://localhost:5000/destination",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify(
                        destination
                    ),
                }
            );

            if (!res.ok) {

                throw new Error(
                    "Failed to add destination"
                );
            }

            await res.json();

            toast.success(
                "Destination Added Successfully!"
            );

            e.target.reset();

            setImagePreview("");

        } catch (error) {

            console.error(error);

            toast.error(
                error.message
            );

        } finally {

            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative overflow-hidden min-h-screen bg-base-100 transition-all duration-500 py-16 px-4">

            {/* BACKGROUND EFFECT */}

            <div className="absolute top-0 left-0 w-112.5 h-112.5 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-112.5 h-112.5 bg-blue-500/10 rounded-full blur-3xl"></div>

            {/* CONTAINER */}

            <div className="relative max-w-7xl mx-auto">

                {/* HEADER */}

                <div className="text-center mb-16">

                    {/* TAG */}

                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-md text-cyan-500 text-sm font-semibold">

                        <FaPlus />

                        Add New Destination

                    </div>

                    {/* TITLE */}

                    <h1 className="text-4xl md:text-6xl font-black text-base-content mt-6 leading-tight">

                        Create Amazing
                        <br />

                        Travel Experiences

                    </h1>

                    {/* DESCRIPTION */}

                    <p className="text-lg md:text-xl text-base-content/70 mt-7 leading-relaxed max-w-3xl mx-auto">

                        Add stunning travel destinations,
                        luxury packages, and unforgettable
                        experiences to inspire travelers
                        around the world.

                    </p>
                </div>

                {/* MAIN CARD */}

                <div className="relative overflow-hidden rounded-[40px] border border-base-300 bg-base-200/60 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

                    {/* GLOW */}

                    <div className="absolute top-0 right-0 w-87.5 h-87.5 bg-cyan-500/10 rounded-full blur-3xl"></div>

                    {/* GRID */}

                    <div className="relative grid grid-cols-1 lg:grid-cols-5">

                        {/* LEFT */}

                        <div className="lg:col-span-2 bg-linear-to-br from-cyan-500 via-blue-600 to-indigo-700 text-white p-8 md:p-10 flex flex-col justify-between">

                            {/* CONTENT */}

                            <div>

                                <div className="w-20 h-20 rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-4xl shadow-xl">

                                    <FaMapMarkedAlt />

                                </div>

                                <h2 className="text-4xl font-black mt-8 leading-tight">

                                    Explore
                                    <br />

                                    The World

                                </h2>

                                <p className="mt-6 text-white/80 leading-relaxed text-lg">

                                    Create beautiful travel
                                    destinations with premium
                                    experiences, stunning visuals,
                                    and unforgettable adventures.

                                </p>
                            </div>

                            {/* PREVIEW */}

                            <div className="mt-10">

                                <div className="rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-xl p-4">

                                    {imagePreview ? (

                                        <div className="relative w-full h-80 rounded-[24px] overflow-hidden">

                                            <Image
                                                src={
                                                    imagePreview
                                                }
                                                alt="Preview"
                                                fill
                                                unoptimized
                                                className="object-cover"
                                            />

                                            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>

                                        </div>

                                    ) : (

                                        <div className="h-80 rounded-[24px] border-2 border-dashed border-white/20 flex flex-col items-center justify-center text-center px-6">

                                            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-4xl">

                                                <FaImage />

                                            </div>

                                            <p className="mt-6 text-white/70 text-lg font-medium">

                                                Destination Image
                                                Preview

                                            </p>

                                            <p className="text-white/50 text-sm mt-2">

                                                Your uploaded image
                                                preview will appear here

                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}

                        <div className="lg:col-span-3 p-6 md:p-10">

                            <form
                                onSubmit={
                                    handleSubmit
                                }
                                className="space-y-8"
                            >

                                {/* GRID */}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                    {/* DESTINATION */}

                                    <div className="md:col-span-2">

                                        <TextField
                                            name="destinationName"
                                            isRequired
                                        >

                                            <Label className="text-base-content font-semibold mb-3 flex items-center gap-2">

                                                <FaMapMarkedAlt className="text-cyan-500" />

                                                Destination Name

                                            </Label>

                                            <Input
                                                placeholder="Enter destination name"
                                                className="rounded-2xl"
                                            />

                                            <FieldError />

                                        </TextField>
                                    </div>

                                    {/* COUNTRY */}

                                    <TextField
                                        name="country"
                                        isRequired
                                    >

                                        <Label className="text-base-content font-semibold mb-3 flex items-center gap-2">

                                            <FaGlobeAsia className="text-cyan-500" />

                                            Country

                                        </Label>

                                        <Input
                                            placeholder="Enter country name"
                                            className="rounded-2xl"
                                        />

                                        <FieldError />

                                    </TextField>

                                    {/* CATEGORY */}

                                    <div>

                                        <Label className="text-base-content font-semibold mb-3 flex items-center gap-2">

                                            <FaGlobeAsia className="text-cyan-500" />

                                            Category

                                        </Label>

                                        <Select
                                            name="category"
                                            isRequired
                                            className="w-full"
                                            placeholder="Select category"
                                        >

                                            <Select.Trigger className="rounded-2xl h-14 border border-base-300 bg-base-100 px-4 text-base-content">

                                                <Select.Value />

                                                <Select.Indicator />

                                            </Select.Trigger>

                                            <Select.Popover>

                                                <ListBox>

                                                    {categories.map(
                                                        (
                                                            category
                                                        ) => (

                                                            <ListBox.Item
                                                                key={
                                                                    category
                                                                }
                                                                id={
                                                                    category
                                                                }
                                                                textValue={
                                                                    category
                                                                }
                                                            >

                                                                {
                                                                    category
                                                                }

                                                                <ListBox.ItemIndicator />

                                                            </ListBox.Item>
                                                        )
                                                    )}

                                                </ListBox>

                                            </Select.Popover>
                                        </Select>
                                    </div>

                                    {/* PRICE */}

                                    <TextField
                                        name="price"
                                        type="number"
                                        isRequired
                                    >

                                        <Label className="text-base-content font-semibold mb-3 flex items-center gap-2">

                                            <FaMoneyBillWave className="text-cyan-500" />

                                            Price (USD)

                                        </Label>

                                        <Input
                                            type="number"
                                            placeholder="Enter package price"
                                            className="rounded-2xl"
                                        />

                                        <FieldError />

                                    </TextField>

                                    {/* DURATION */}

                                    <TextField
                                        name="duration"
                                        isRequired
                                    >

                                        <Label className="text-base-content font-semibold mb-3 flex items-center gap-2">

                                            <FaCalendarAlt className="text-cyan-500" />

                                            Duration

                                        </Label>

                                        <Input
                                            placeholder="Example: 5 Days / 4 Nights"
                                            className="rounded-2xl"
                                        />

                                        <FieldError />

                                    </TextField>

                                    {/* DEPARTURE DATE */}

                                    <TextField
                                        name="departureDate"
                                        type="date"
                                        isRequired
                                    >

                                        <Label className="text-base-content font-semibold mb-3 flex items-center gap-2">

                                            <FaCalendarAlt className="text-cyan-500" />

                                            Departure Date

                                        </Label>

                                        <Input
                                            type="date"
                                            className="rounded-2xl"
                                        />

                                        <FieldError />

                                    </TextField>

                                    {/* TRAVELERS */}

                                    <TextField
                                        name="travelers"
                                        isRequired
                                    >

                                        <Label className="text-base-content font-semibold mb-3 flex items-center gap-2">

                                            <FaUsers className="text-cyan-500" />

                                            Travelers

                                        </Label>

                                        <Input
                                            placeholder="Example: 2 - 10 Travelers"
                                            className="rounded-2xl"
                                        />

                                        <FieldError />

                                    </TextField>

                                    {/* IMAGE URL */}

                                    <div className="md:col-span-2">

                                        <TextField
                                            name="imageUrl"
                                            isRequired
                                        >

                                            <Label className="text-base-content font-semibold mb-3 flex items-center gap-2">

                                                <FaImage className="text-cyan-500" />

                                                Image URL

                                            </Label>

                                            <Input
                                                type="url"
                                                placeholder="Paste destination image URL"
                                                className="rounded-2xl"
                                                onChange={(
                                                    e
                                                ) =>
                                                    setImagePreview(
                                                        e
                                                            .target
                                                            .value
                                                    )
                                                }
                                            />

                                            <FieldError />

                                        </TextField>
                                    </div>

                                    {/* DESCRIPTION */}

                                    <div className="md:col-span-2">

                                        <TextField
                                            name="description"
                                            isRequired
                                        >

                                            <Label className="text-base-content font-semibold mb-3">

                                                Description

                                            </Label>

                                            <TextArea
                                                placeholder="Write detailed travel experience and package information"
                                                className="rounded-3xl min-h-40"
                                            />

                                            <FieldError />

                                        </TextField>
                                    </div>
                                </div>

                                {/* BUTTONS */}

                                <div className="flex flex-col md:flex-row gap-4 pt-4">

                                    {/* SUBMIT */}

                                    <Button
                                        type="submit"
                                        isDisabled={
                                            isSubmitting
                                        }
                                        className="w-full h-15 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-base font-bold shadow-[0_10px_40px_rgba(6,182,212,0.35)] hover:scale-[1.02] transition-all duration-300"
                                    >

                                        {isSubmitting
                                            ? "Adding Destination..."
                                            : "Add Destination"}

                                    </Button>

                                    {/* RESET */}

                                    <Button
                                        type="reset"
                                        variant="bordered"
                                        className="w-full h-15 rounded-2xl border-base-300 bg-base-100 text-base-content hover:bg-base-200 transition-all duration-300"
                                        onPress={() =>
                                            setImagePreview(
                                                ""
                                            )
                                        }
                                    >

                                        Reset Form

                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddDestination;