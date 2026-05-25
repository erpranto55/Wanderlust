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

const categories = [
    "Beach",
    "Mountain",
    "City",
    "Adventure",
    "Cultural",
    "Luxury",
];

const AddDestination = () => {
    const [imagePreview, setImagePreview] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsSubmitting(true);

            const formData = new FormData(e.currentTarget);
            const destination = Object.fromEntries(formData.entries());

            console.log(destination);

            const res = await fetch("http://localhost:5000/destination", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(destination),
            });

            if (!res.ok) {
                throw new Error("Failed to add destination");
            }

            const data = await res.json();

            console.log(data);

            alert("Destination Added Successfully!");

            e.target.reset();
            setImagePreview("");

        } catch (error) {
            console.error(error);
            alert(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-cyan-50 via-white to-blue-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                        Add Destination
                    </h1>

                    <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
                        Create stunning travel destinations with beautiful details and
                        attract more travelers.
                    </p>
                </div>

                {/* Main Card */}
                <div className="bg-white/80 backdrop-blur-lg border border-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-[40px] overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                        {/* Left Side */}
                        <div className="lg:col-span-2 bg-linear-to-br from-cyan-500 to-blue-600 text-white p-10 flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-bold leading-tight">
                                    Explore The World 🌍
                                </h2>

                                <p className="mt-5 text-white/80 leading-relaxed">
                                    Add amazing travel destinations and manage your travel
                                    experiences beautifully with a modern dashboard.
                                </p>
                            </div>

                            {/* Preview */}
                            <div className="mt-10">
                                <div className="bg-white/10 border border-white/20 rounded-3xl p-4 backdrop-blur-md">
                                    {imagePreview ? (
                                        <div className="relative w-full h-72 rounded-2xl overflow-hidden">
                                            <Image
                                                src={imagePreview}
                                                alt="Preview"
                                                fill
                                                className="object-cover"
                                                unoptimized
                                            />
                                        </div>
                                    ) : (
                                        <div className="h-72 rounded-2xl border-2 border-dashed border-white/30 flex items-center justify-center text-white/60 text-center px-6">
                                            Image Preview Will Appear Here
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="lg:col-span-3 p-6 md:p-10">
                            <form onSubmit={handleSubmit} className="space-y-7">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Destination Name */}
                                    <div className="md:col-span-2">
                                        <TextField name="destinationName" isRequired>
                                            <Label>Destination Name</Label>

                                            <Input
                                                placeholder="Enter destination name"
                                                className="rounded-2xl"
                                            />

                                            <FieldError />
                                        </TextField>
                                    </div>

                                    {/* Country */}
                                    <TextField name="country" isRequired>
                                        <Label>Country</Label>

                                        <Input
                                            placeholder="Enter country name"
                                            className="rounded-2xl"
                                        />

                                        <FieldError />
                                    </TextField>

                                    {/* Category */}
                                    <div>
                                        <Select
                                            name="category"
                                            isRequired
                                            className="w-full"
                                            placeholder="Select category"
                                        >
                                            <Label>Category</Label>

                                            <Select.Trigger className="rounded-2xl h-12 border border-slate-300 px-4">
                                                <Select.Value />
                                                <Select.Indicator />
                                            </Select.Trigger>

                                            <Select.Popover>
                                                <ListBox>
                                                    {categories.map((category) => (
                                                        <ListBox.Item
                                                            key={category}
                                                            id={category}
                                                            textValue={category}
                                                        >
                                                            {category}
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                    ))}
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>
                                    </div>

                                    {/* Price */}
                                    <TextField name="price" type="number" isRequired>
                                        <Label>Price (USD)</Label>

                                        <Input
                                            type="number"
                                            placeholder="Enter package price in USD"
                                            className="rounded-2xl"
                                        />

                                        <FieldError />
                                    </TextField>

                                    {/* Duration */}
                                    <TextField name="duration" isRequired>
                                        <Label>Duration</Label>

                                        <Input
                                            placeholder="Example: 5 Days / 4 Nights"
                                            className="rounded-2xl"
                                        />

                                        <FieldError />
                                    </TextField>

                                    {/* Departure Date */}
                                    <TextField name="departureDate" type="date" isRequired>
                                        <Label>Departure Date</Label>

                                        <Input
                                            type="date"
                                            placeholder="Select departure date"
                                            className="rounded-2xl"
                                        />

                                        <FieldError />
                                    </TextField>

                                    {/* Image URL */}
                                    <div>
                                        <TextField name="imageUrl" isRequired>
                                            <Label>Image URL</Label>

                                            <Input
                                                type="url"
                                                placeholder="Paste destination image URL"
                                                className="rounded-2xl"
                                                onChange={(e) =>
                                                    setImagePreview(e.target.value)
                                                }
                                            />

                                            <FieldError />
                                        </TextField>
                                    </div>
                                    {/* Description */}
                                    <div className="md:col-span-2">
                                        <TextField name="description" isRequired>
                                            <Label>Description</Label>

                                            <TextArea
                                                placeholder="Write detailed travel experience and package information"
                                                className="rounded-3xl min-h-40"
                                            />

                                            <FieldError />
                                        </TextField>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col md:flex-row gap-4 pt-4">
                                    <Button
                                        type="submit"
                                        isDisabled={isSubmitting}
                                        className="w-full h-14 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white text-base font-bold shadow-lg hover:scale-[1.02] transition-all duration-300"
                                    >
                                        {isSubmitting
                                            ? "Adding Destination..."
                                            : "Add Destination"}
                                    </Button>

                                    <Button
                                        type="reset"
                                        variant="bordered"
                                        className="w-full h-14 rounded-2xl border-slate-300"
                                        onPress={() => setImagePreview("")}
                                    >
                                        Reset Form
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDestination;