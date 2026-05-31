"use client";

import React, {
    useEffect,
    useState,
} from "react";

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

import {
    FaCalendarAlt,
    FaEdit,
    FaGlobeAsia,
    FaImage,
    FaMapMarkedAlt,
    FaMoneyBillWave,
    FaUsers,
} from "react-icons/fa";

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

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const [imagePreview, setImagePreview] =
        useState("");

    const [formData, setFormData] =
        useState({
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

    // ======================================================
    // LOAD EXISTING DATA
    // ======================================================

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

    // ======================================================
    // HANDLE INPUT CHANGE
    // ======================================================

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // ======================================================
    // HANDLE UPDATE
    // ======================================================

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

                    body: JSON.stringify(
                        formData
                    ),
                }
            );

            const data =
                await res.json();

            if (
                data.modifiedCount > 0
            ) {

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

    // ======================================================
    // COMMON INPUT STYLE
    // ======================================================

    const inputStyle =
        `
        rounded-2xl
        bg-white/5
        border
        border-white/10
        focus-within:border-cyan-400/50
        focus-within:bg-white/10
        transition-all
        duration-300
    `;

    return (
        <Modal>

            {/* OPEN BUTTON */}

            <Modal.Trigger>

                <button
                    type="button"
                    className="
                    group
                    h-11
                    px-6
                    rounded-2xl
                    border
                    border-cyan-400/20
                    bg-linear-to-r
                    from-cyan-500
                    to-blue-600
                    hover:from-cyan-400
                    hover:to-blue-500
                    text-white
                    transition-all
                    duration-300
                    font-semibold
                    flex
                    items-center
                    gap-3
                    shadow-[0_15px_40px_rgba(6,182,212,0.35)]
                    hover:scale-105
                    cursor-pointer
                    "
                >

                    <FaEdit className="group-hover:rotate-12 transition-all duration-300" />

                    Edit

                </button>

            </Modal.Trigger>

            {/* MODAL BACKDROP */}

            <Modal.Backdrop className="bg-black/70 backdrop-blur-md">

                <Modal.Container
                    placement="center"
                    className="flex items-center justify-center p-2 sm:p-4"
                >

                    <Modal.Dialog
                        className="
                        relative
                        w-full
                        max-w-4xl
                        max-h-[95vh]
                        overflow-hidden
                        rounded-[32px]
                        border
                        border-white/10
                        bg-linear-to-br
                        from-[#020617]
                        via-[#0f172a]
                        to-[#111827]
                        shadow-[0_25px_80px_rgba(0,0,0,0.55)]
                        animate-in
                        fade-in
                        zoom-in-95
                        duration-300
                        "
                    >

                        {/* BG EFFECTS */}

                        <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

                        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

                        {/* CLOSE BUTTON */}

                        <Modal.CloseTrigger
                            className="
                            absolute
                            top-4
                            right-4
                            z-50
                            w-10
                            h-10
                            rounded-full
                            bg-white/5
                            hover:bg-white/10
                            backdrop-blur-xl
                            border
                            border-white/10
                            transition-all
                            duration-300
                            flex
                            items-center
                            justify-center
                            text-white
                            hover:rotate-90
                            "
                        />

                        {/* MAIN */}

                        <div className="relative flex flex-col max-h-[95vh]">

                            {/* HEADER */}

                            <div className="px-5 sm:px-7 pt-5 pb-4 border-b border-white/5 shrink-0">

                                <div className="flex items-start gap-4">

                                    {/* ICON */}

                                    <div
                                        className="
                                        w-16
                                        h-16
                                        sm:w-20
                                        sm:h-20
                                        rounded-[24px]
                                        bg-linear-to-br
                                        from-cyan-500
                                        to-blue-600
                                        text-white
                                        text-3xl
                                        sm:text-4xl
                                        flex
                                        items-center
                                        justify-center
                                        shadow-[0_15px_40px_rgba(6,182,212,0.35)]
                                        shrink-0
                                        "
                                    >

                                        <FaEdit />

                                    </div>

                                    {/* TEXT */}

                                    <div>

                                        <Modal.Heading
                                            className="
                                            text-3xl
                                            sm:text-[56px]
                                            tracking-tight
                                            font-black
                                            text-white
                                            leading-none
                                            "
                                        >

                                            Update Destination

                                        </Modal.Heading>

                                        <p
                                            className="
                                            mt-2
                                            text-sm
                                            text-slate-400/90
                                            leading-relaxed
                                            max-w-xl
                                            "
                                        >

                                            Edit your travel destination details,
                                            pricing, duration, and package
                                            information.

                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* BODY */}

                            <div
                                className="
                                flex-1
                                overflow-y-auto
                                px-4
                                sm:px-6
                                py-5
                                custom-scrollbar
                                "
                            >

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >

                                    {/* FORM SURFACE */}

                                    <Surface
                                        variant="default"
                                        className="
                                        rounded-[28px]
                                        border
                                        border-white/10
                                        bg-white/3
                                        backdrop-blur-xl
                                        p-4
                                        sm:p-6
                                        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                                        "
                                    >

                                        {/* GRID */}

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                            {/* DESTINATION */}

                                            <div className="md:col-span-2">

                                                <TextField
                                                    name="destinationName"
                                                    isRequired
                                                >

                                                    <Label className="text-white text-sm mb-3 flex items-center gap-2">

                                                        <FaMapMarkedAlt className="text-cyan-400" />

                                                        Destination Name

                                                    </Label>

                                                    <Input
                                                        value={formData.destinationName}
                                                        onChange={handleChange}
                                                        name="destinationName"
                                                        placeholder="Enter destination name"
                                                        className={inputStyle}
                                                    />

                                                    <FieldError />

                                                </TextField>

                                            </div>

                                            {/* COUNTRY */}

                                            <TextField
                                                name="country"
                                                isRequired
                                            >

                                                <Label className="text-white text-sm mb-3 flex items-center gap-2">

                                                    <FaGlobeAsia className="text-cyan-400" />

                                                    Country

                                                </Label>

                                                <Input
                                                    value={formData.country}
                                                    onChange={handleChange}
                                                    name="country"
                                                    placeholder="Enter country name"
                                                    className={inputStyle}
                                                />

                                                <FieldError />

                                            </TextField>

                                            {/* CATEGORY */}

                                            <div>

                                                <Label className="text-white text-sm mb-3 flex items-center gap-2">

                                                    <FaGlobeAsia className="text-cyan-400" />

                                                    Category

                                                </Label>

                                                <Select
                                                    selectedKeys={[
                                                        formData.category,
                                                    ]}
                                                    onSelectionChange={(keys) => {

                                                        const selected =
                                                            Array.from(keys)[0];

                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            category: selected,
                                                        }));
                                                    }}
                                                    className="w-full"
                                                >

                                                    <Select.Trigger
                                                        className="
                                                        rounded-2xl
                                                        h-14
                                                        border
                                                        border-white/10
                                                        bg-white/5
                                                        px-4
                                                        text-white
                                                        "
                                                    >

                                                        <Select.Value />

                                                        <Select.Indicator />

                                                    </Select.Trigger>

                                                    <Select.Popover>

                                                        <ListBox>

                                                            {categories.map(
                                                                (category) => (

                                                                    <ListBox.Item
                                                                        key={category}
                                                                        id={category}
                                                                        textValue={category}
                                                                    >

                                                                        {category}

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

                                                <Label className="text-white text-sm mb-3 flex items-center gap-2">

                                                    <FaMoneyBillWave className="text-cyan-400" />

                                                    Price

                                                </Label>

                                                <Input
                                                    value={formData.price}
                                                    onChange={handleChange}
                                                    name="price"
                                                    type="number"
                                                    placeholder="Enter package price"
                                                    className={inputStyle}
                                                />

                                                <FieldError />

                                            </TextField>

                                            {/* DURATION */}

                                            <TextField
                                                name="duration"
                                                isRequired
                                            >

                                                <Label className="text-white text-sm mb-3 flex items-center gap-2">

                                                    <FaCalendarAlt className="text-cyan-400" />

                                                    Duration

                                                </Label>

                                                <Input
                                                    value={formData.duration}
                                                    onChange={handleChange}
                                                    name="duration"
                                                    placeholder="5 Days / 4 Nights"
                                                    className={inputStyle}
                                                />

                                                <FieldError />

                                            </TextField>

                                            {/* TRAVELERS */}

                                            <TextField
                                                name="travelers"
                                                isRequired
                                            >

                                                <Label className="text-white text-sm mb-3 flex items-center gap-2">

                                                    <FaUsers className="text-cyan-400" />

                                                    Travelers

                                                </Label>

                                                <Input
                                                    value={formData.travelers}
                                                    onChange={handleChange}
                                                    name="travelers"
                                                    placeholder="2 - 10 People"
                                                    className={inputStyle}
                                                />

                                                <FieldError />

                                            </TextField>

                                            {/* DATE */}

                                            <TextField
                                                name="departureDate"
                                                type="date"
                                                isRequired
                                            >

                                                <Label className="text-white text-sm mb-3 flex items-center gap-2">

                                                    <FaCalendarAlt className="text-cyan-400" />

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
                                                    className={inputStyle}
                                                />

                                                <FieldError />

                                            </TextField>

                                            {/* IMAGE URL */}

                                            <div className="md:col-span-2">

                                                <TextField
                                                    name="imageUrl"
                                                    isRequired
                                                >

                                                    <Label className="text-white text-sm mb-3 flex items-center gap-2">

                                                        <FaImage className="text-cyan-400" />

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
                                                        placeholder="Paste image URL"
                                                        className={inputStyle}
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

                                                    <Label className="text-white text-sm mb-3">

                                                        Description

                                                    </Label>

                                                    <TextArea
                                                        value={formData.description}
                                                        onChange={handleChange}
                                                        name="description"
                                                        placeholder="Write package details..."
                                                        className="
                                                        rounded-3xl
                                                        min-h-35
                                                        bg-white/5
                                                        border
                                                        border-white/10
                                                        focus-within:border-cyan-400/50
                                                        focus-within:bg-white/10
                                                        transition-all
                                                        duration-300
                                                        "
                                                    />

                                                    <FieldError />

                                                </TextField>

                                            </div>

                                        </div>

                                        {/* IMAGE PREVIEW */}

                                        {imagePreview && (

                                            <div className="mt-6 relative overflow-hidden rounded-[28px] border border-white/10">

                                                <div className="relative w-full h-50 sm:h-65">

                                                    <Image
                                                        src={imagePreview}
                                                        alt="Preview"
                                                        fill
                                                        className="object-cover"
                                                        unoptimized
                                                    />

                                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                                                    <div className="absolute bottom-5 left-5">

                                                        <div
                                                            className="
                                                            inline-flex
                                                            items-center
                                                            gap-2
                                                            px-4
                                                            py-2
                                                            rounded-full
                                                            bg-black/30
                                                            backdrop-blur-md
                                                            border
                                                            border-white/10
                                                            text-white
                                                            text-sm
                                                            font-semibold
                                                            "
                                                        >

                                                            <FaImage />

                                                            Live Preview

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>
                                        )}

                                    </Surface>

                                    {/* FOOTER */}

                                    <div
                                        className="
                                        sticky
                                        bottom-0
                                        bg-[#071120]/80
                                        backdrop-blur-2xl
                                        border-t
                                        border-white/5
                                        py-4
                                        px-1
                                        flex
                                        justify-end
                                        gap-3
                                        z-20
                                        "
                                    >

                                        {/* CANCEL */}

                                        <Button
                                            slot="close"
                                            className="
                                            h-11
                                            px-6
                                            rounded-2xl
                                            border
                                            border-white/10
                                            bg-white/3
                                            hover:bg-white/[0.07]
                                            text-white
                                            font-semibold
                                            transition-all
                                            duration-300
                                            "
                                        >

                                            Cancel

                                        </Button>

                                        {/* UPDATE */}

                                        <Button
                                            type="submit"
                                            isDisabled={isSubmitting}
                                            className="
                                            h-11
                                            px-7
                                            rounded-2xl
                                            bg-linear-to-r
                                            from-cyan-500
                                            to-blue-600
                                            hover:from-cyan-400
                                            hover:to-blue-500
                                            text-white
                                            font-bold
                                            shadow-[0_10px_30px_rgba(6,182,212,0.35)]
                                            transition-all
                                            duration-300
                                            hover:scale-[1.02]
                                            "
                                        >

                                            {isSubmitting
                                                ? "Updating..."
                                                : "Update Destination"}

                                        </Button>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </Modal.Dialog>

                </Modal.Container>

            </Modal.Backdrop>

        </Modal>
    );
}