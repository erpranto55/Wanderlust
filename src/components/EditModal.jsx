"use client";

import React, { useEffect, useState } from "react";

import {
    Button,
    FieldError,
    Input,
    Label,
    ListBox,
    Modal,
    Select,
    Surface,
    TextArea,
    TextField,
} from "@heroui/react";

import { FaEdit } from "react-icons/fa";

import Image from "next/image";

import { toast } from "react-toastify";

const categories = [
    "Beach",
    "Mountain",
    "City",
    "Adventure",
    "Luxury",
    "Cultural",
];

export function EditModal({ destination }) {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [imagePreview, setImagePreview] = useState("");

    const [formData, setFormData] = useState({
        destinationName: "",
        country: "",
        category: "",
        price: "",
        duration: "",
        departureDate: "",
        travelers: "",
        imageUrl: "",
        description: "",
    });

    // =========================================
    // LOAD DESTINATION DATA
    // =========================================

    useEffect(() => {

        if (destination) {

            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFormData({
                destinationName:
                    destination.destinationName || "",

                country:
                    destination.country || "",

                category:
                    destination.category || "",

                price:
                    destination.price || "",

                duration:
                    destination.duration || "",

                departureDate:
                    destination.departureDate || "",

                travelers:
                    destination.travelers || "",

                imageUrl:
                    destination.imageUrl || "",

                description:
                    destination.description || "",
            });

            setImagePreview(
                destination.imageUrl || ""
            );
        }

    }, [destination]);

    // =========================================
    // HANDLE INPUT CHANGE
    // =========================================

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // =========================================
    // HANDLE UPDATE
    // =========================================

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setIsSubmitting(true);

            const res = await fetch(
                `http://localhost:5000/destination/${destination._id}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify(formData),
                }
            );

            const data = await res.json();

            if (data.modifiedCount > 0) {

                toast.success(
                    "Destination Updated Successfully!"
                );

                window.location.reload();
            }

        } catch (error) {

            console.error(error);

            toast.error(
                "Failed To Update Destination"
            );

        } finally {

            setIsSubmitting(false);
        }
    };

    return (
        <Modal>

            {/* OPEN BUTTON */}

            <Modal.Trigger>

                <button
                    type="button"
                    className="h-10 px-6 rounded-2xl border border-slate-300 hover:bg-slate-100 transition-all duration-300 font-semibold flex items-center gap-3 cursor-pointer"
                >
                    <FaEdit />

                    Edit
                </button>

            </Modal.Trigger>

            {/* MODAL */}

            <Modal.Backdrop>

                <Modal.Container placement="center">

                    <Modal.Dialog className="sm:max-w-4xl rounded-[32px] max-h-[90vh] overflow-y-auto">

                        <Modal.CloseTrigger />

                        {/* HEADER */}

                        <Modal.Header>

                            <div>

                                <Modal.Heading className="text-3xl font-bold">

                                    Update Destination

                                </Modal.Heading>

                                <p className="mt-2 text-sm text-slate-500">

                                    Update your travel destination information

                                </p>

                            </div>

                        </Modal.Header>

                        {/* BODY */}

                        <Modal.Body className="p-6">

                            <Surface variant="default">

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-7 pb-6"
                                >

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                        {/* Destination Name */}

                                        <div className="md:col-span-2">

                                            <TextField
                                                name="destinationName"
                                                isRequired
                                            >

                                                <Label>
                                                    Destination Name
                                                </Label>

                                                <Input
                                                    value={formData.destinationName}
                                                    onChange={handleChange}
                                                    name="destinationName"
                                                    placeholder="Enter destination name"
                                                    className="rounded-2xl"
                                                />

                                                <FieldError />

                                            </TextField>

                                        </div>

                                        {/* Country */}

                                        <TextField
                                            name="country"
                                            isRequired
                                        >

                                            <Label>
                                                Country
                                            </Label>

                                            <Input
                                                value={formData.country}
                                                onChange={handleChange}
                                                name="country"
                                                placeholder="Enter country name"
                                                className="rounded-2xl"
                                            />

                                            <FieldError />

                                        </TextField>

                                        {/* Category */}

                                        <div>

                                            <Select
                                                selectedKeys={[formData.category]}
                                                onSelectionChange={(keys) => {

                                                    const selected =
                                                        Array.from(keys)[0];

                                                    setFormData({
                                                        ...formData,
                                                        category: selected,
                                                    });
                                                }}
                                                className="w-full"
                                            >

                                                <Label>
                                                    Category
                                                </Label>

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

                                        {/* PRICE */}

                                        <TextField
                                            name="price"
                                            type="number"
                                            isRequired
                                        >

                                            <Label>
                                                Price (USD)
                                            </Label>

                                            <Input
                                                value={formData.price}
                                                onChange={handleChange}
                                                name="price"
                                                type="number"
                                                placeholder="Enter package price in USD"
                                                className="rounded-2xl"
                                            />

                                            <FieldError />

                                        </TextField>

                                        {/* DURATION */}

                                        <TextField
                                            name="duration"
                                            isRequired
                                        >

                                            <Label>
                                                Duration
                                            </Label>

                                            <Input
                                                value={formData.duration}
                                                onChange={handleChange}
                                                name="duration"
                                                placeholder="Example: 5 Days / 4 Nights"
                                                className="rounded-2xl"
                                            />

                                            <FieldError />

                                        </TextField>

                                        {/* TRAVELERS */}

                                        <TextField
                                            name="travelers"
                                            isRequired
                                        >

                                            <Label>
                                                Travelers
                                            </Label>

                                            <Input
                                                value={formData.travelers}
                                                onChange={handleChange}
                                                name="travelers"
                                                placeholder="Example: 2 - 10 People"
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

                                            <Label>
                                                Departure Date
                                            </Label>

                                            <Input
                                                value={
                                                    formData.departureDate
                                                        ? formData.departureDate.split("T")[0]
                                                        : ""
                                                }
                                                onChange={handleChange}
                                                name="departureDate"
                                                type="date"
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

                                                <Label>
                                                    Image URL
                                                </Label>

                                                <Input
                                                    value={formData.imageUrl}
                                                    onChange={(e) => {

                                                        handleChange(e);

                                                        setImagePreview(
                                                            e.target.value
                                                        );
                                                    }}
                                                    name="imageUrl"
                                                    type="url"
                                                    placeholder="Paste destination image URL"
                                                    className="rounded-2xl"
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

                                                <Label>
                                                    Description
                                                </Label>

                                                <TextArea
                                                    value={formData.description}
                                                    onChange={handleChange}
                                                    name="description"
                                                    placeholder="Write detailed travel experience and package information"
                                                    className="rounded-3xl min-h-40"
                                                />

                                                <FieldError />

                                            </TextField>

                                        </div>

                                    </div>

                                    {/* IMAGE PREVIEW */}

                                    {imagePreview && (

                                        <div className="overflow-hidden rounded-3xl border border-slate-200">

                                            <div className="relative w-full h-64">

                                                <Image
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    fill
                                                    className="object-cover rounded-3xl"
                                                    unoptimized
                                                />

                                            </div>

                                        </div>
                                    )}

                                    {/* FOOTER */}

                                    <Modal.Footer className="pt-6">

                                        <Button
                                            slot="close"
                                            variant="secondary"
                                            className="h-12 px-6 rounded-2xl"
                                        >

                                            Cancel

                                        </Button>

                                        <Button
                                            type="submit"
                                            isDisabled={isSubmitting}
                                            className="h-12 px-8 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold"
                                        >

                                            {isSubmitting
                                                ? "Updating..."
                                                : "Confirm Edit"}

                                        </Button>

                                    </Modal.Footer>

                                </form>

                            </Surface>

                        </Modal.Body>

                    </Modal.Dialog>

                </Modal.Container>

            </Modal.Backdrop>

        </Modal>
    );
}