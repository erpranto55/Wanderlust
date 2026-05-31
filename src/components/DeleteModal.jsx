"use client";

import React, {
    useState,
} from "react";

import {
    Button,
    Modal,
} from "@heroui/react";

import {
    FaExclamationTriangle,
    FaTrash,
    FaTimes,
} from "react-icons/fa";

import { toast } from "react-toastify";

const DeleteModal = ({ id }) => {

    const [isDeleting, setIsDeleting] =
        useState(false);

    // ======================================================
    // HANDLE DELETE
    // ======================================================

    const handleDelete = async () => {

        try {

            setIsDeleting(true);

            const res = await fetch(
                `http://localhost:5000/destination/${id}`,
                {
                    method: "DELETE",
                }
            );

            const data =
                await res.json();

            if (
                data.deletedCount > 0
            ) {

                toast.success(
                    "Destination Deleted Successfully!"
                );

                window.location.href =
                    "/destination";
            }

        } catch (error) {

            console.error(error);

            toast.error(
                "Failed To Delete Destination"
            );

        } finally {

            setIsDeleting(false);
        }
    };

    return (
        <Modal>

            {/* ====================================================== */}
            {/* OPEN BUTTON */}
            {/* ====================================================== */}

            <Modal.Trigger>

                <button
                    type="button"
                    className="
                    group
                    h-11
                    px-6
                    rounded-2xl
                    bg-linear-to-r
                    from-red-500
                    via-rose-500
                    to-pink-600
                    hover:from-red-400
                    hover:via-rose-400
                    hover:to-pink-500
                    text-white
                    transition-all
                    duration-300
                    font-semibold
                    flex
                    items-center
                    gap-3
                    shadow-[0_15px_40px_rgba(244,63,94,0.35)]
                    hover:scale-105
                    active:scale-95
                    cursor-pointer
                    "
                >

                    <FaTrash className="group-hover:rotate-12 transition-all duration-300" />

                    Delete

                </button>

            </Modal.Trigger>

            {/* ====================================================== */}
            {/* BACKDROP */}
            {/* ====================================================== */}

            <Modal.Backdrop
                className="
                bg-black/70
                backdrop-blur-md
                "
            >

                <Modal.Container
                    placement="center"
                    className="
                    flex
                    items-center
                    justify-center
                    p-4
                    "
                >

                    {/* ====================================================== */}
                    {/* DIALOG */}
                    {/* ====================================================== */}

                    <Modal.Dialog
                        className="
                        relative
                        w-full
                        max-w-md
                        overflow-hidden
                        rounded-[32px]
                        border
                        border-white/10
                        bg-linear-to-br
                        from-[#020617]
                        via-[#0f172a]
                        to-[#111827]
                        shadow-[0_30px_100px_rgba(0,0,0,0.65)]
                        animate-in
                        fade-in
                        zoom-in-95
                        duration-300
                        "
                    >

                        {/* ====================================================== */}
                        {/* BG EFFECTS */}
                        {/* ====================================================== */}

                        <div className="absolute -top-28 -right-28 w-72 h-72 bg-red-500/20 rounded-full blur-3xl" />

                        <div className="absolute -bottom-28 -left-28 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" />

                        {/* ====================================================== */}
                        {/* CLOSE BUTTON */}
                        {/* ====================================================== */}

                        <Modal.CloseTrigger
                            className="
                            absolute
                            top-4
                            right-4
                            z-50
                            w-10
                            h-10
                            rounded-full
                            border
                            border-white/10
                            bg-white/4
                            hover:bg-white/8
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            flex
                            items-center
                            justify-center
                            text-white
                            hover:rotate-90
                            "
                        >

                            <FaTimes size={14} />

                        </Modal.CloseTrigger>

                        {/* ====================================================== */}
                        {/* CONTENT */}
                        {/* ====================================================== */}

                        <div className="relative p-6 sm:p-7">

                            {/* ====================================================== */}
                            {/* ICON */}
                            {/* ====================================================== */}

                            <div
                                className="
                                mx-auto
                                w-24
                                h-24
                                rounded-[30px]
                                bg-linear-to-br
                                from-red-500
                                via-rose-500
                                to-pink-600
                                flex
                                items-center
                                justify-center
                                text-white
                                text-4xl
                                shadow-[0_20px_60px_rgba(244,63,94,0.45)]
                                "
                            >

                                <FaExclamationTriangle />

                            </div>

                            {/* ====================================================== */}
                            {/* TITLE */}
                            {/* ====================================================== */}

                            <div className="text-center mt-6">

                                <Modal.Heading
                                    className="
                                    text-3xl
                                    sm:text-4xl
                                    font-black
                                    tracking-tight
                                    text-white
                                    leading-none
                                    "
                                >

                                    Delete Destination

                                </Modal.Heading>

                                <p
                                    className="
                                    mt-4
                                    text-slate-400
                                    text-sm
                                    leading-relaxed
                                    max-w-sm
                                    mx-auto
                                    "
                                >

                                    This action is permanent and cannot
                                    be undone. The selected destination
                                    will be removed forever.

                                </p>

                            </div>

                            {/* ====================================================== */}
                            {/* WARNING CARD */}
                            {/* ====================================================== */}

                            <div
                                className="
                                relative
                                mt-7
                                overflow-hidden
                                rounded-[28px]
                                border
                                border-red-500/20
                                bg-white/3
                                backdrop-blur-xl
                                p-5
                                shadow-[0_10px_40px_rgba(0,0,0,0.25)]
                                "
                            >

                                {/* INNER GLOW */}

                                <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl" />

                                <div className="relative">

                                    {/* BADGE */}

                                    <div
                                        className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        px-4
                                        py-2
                                        rounded-full
                                        bg-red-500/10
                                        border
                                        border-red-500/20
                                        text-red-400
                                        text-sm
                                        font-semibold
                                        "
                                    >

                                        <FaExclamationTriangle />

                                        Warning

                                    </div>

                                    {/* TEXT */}

                                    <p
                                        className="
                                        mt-5
                                        text-slate-300
                                        leading-relaxed
                                        text-sm
                                        "
                                    >

                                        Are you absolutely sure you want
                                        to permanently delete this travel
                                        destination from your collection?

                                    </p>

                                </div>

                            </div>

                            {/* ====================================================== */}
                            {/* ACTION BUTTONS */}
                            {/* ====================================================== */}

                            <div
                                className="
                                mt-7
                                flex
                                flex-col-reverse
                                sm:flex-row
                                gap-3
                                sm:justify-end
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

                                {/* DELETE */}

                                <Button
                                    onPress={handleDelete}
                                    isDisabled={isDeleting}
                                    className="
                                    h-11
                                    px-7
                                    rounded-2xl
                                    bg-linear-to-r
                                    from-red-500
                                    via-rose-500
                                    to-pink-600
                                    hover:from-red-400
                                    hover:via-rose-400
                                    hover:to-pink-500
                                    text-white
                                    font-bold
                                    shadow-[0_15px_40px_rgba(244,63,94,0.35)]
                                    transition-all
                                    duration-300
                                    hover:scale-[1.02]
                                    active:scale-[0.98]
                                    "
                                >

                                    {isDeleting
                                        ? "Deleting..."
                                        : "Confirm Delete"}

                                </Button>

                            </div>

                        </div>

                    </Modal.Dialog>

                </Modal.Container>

            </Modal.Backdrop>

        </Modal>
    );
};

export default DeleteModal;