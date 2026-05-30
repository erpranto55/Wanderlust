"use client";

import React, { useState } from "react";

import {
    Button,
    Modal,
} from "@heroui/react";

import { FaTrash } from "react-icons/fa";

const DeleteModal = ({ id }) => {

    const [isDeleting, setIsDeleting] = useState(false);

    // =========================
    // HANDLE DELETE
    // =========================

    const handleDelete = async () => {

        try {

            setIsDeleting(true);

            const res = await fetch(
                `http://localhost:5000/destination/${id}`,
                {
                    method: "DELETE",
                }
            );

            const data = await res.json();

            if (data.deletedCount > 0) {

                alert("Destination Deleted Successfully!");

                window.location.href = "/destination";
            }

        } catch (error) {

            console.error(error);

            alert(error.message);

        } finally {

            setIsDeleting(false);
        }
    };

    return (
        <Modal>

            {/* OPEN BUTTON */}
            <Modal.Trigger>

                <button
                    className="h-10 px-6 rounded-2xl bg-red-500 hover:bg-red-600 text-white transition-all duration-300 font-semibold flex items-center gap-3 cursor-pointer"
                >
                    <FaTrash />

                    Delete
                </button>

            </Modal.Trigger>

            {/* MODAL */}
            <Modal.Backdrop>

                <Modal.Container placement="center">

                    <Modal.Dialog className="max-w-md rounded-[32px]">

                        <Modal.CloseTrigger />

                        {/* HEADER */}
                        <Modal.Header>

                            <div>

                                <Modal.Heading className="text-3xl font-bold text-red-500">
                                    Delete Destination
                                </Modal.Heading>

                                <p className="mt-2 text-sm text-slate-500">
                                    This action cannot be undone.
                                </p>

                            </div>

                        </Modal.Header>

                        {/* BODY */}
                        <Modal.Body className="px-6 pb-6">

                            <div className="bg-red-50 border border-red-200 rounded-3xl p-5">

                                <p className="text-gray-700 leading-relaxed">
                                    Are you sure you want to permanently delete
                                    this destination package?
                                </p>

                            </div>

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
                                    onPress={handleDelete}
                                    isDisabled={isDeleting}
                                    className="h-12 px-8 rounded-2xl bg-red-500 hover:bg-red-600 text-white font-bold"
                                >
                                    {isDeleting
                                        ? "Deleting..."
                                        : "Confirm Delete"}
                                </Button>

                            </Modal.Footer>

                        </Modal.Body>

                    </Modal.Dialog>

                </Modal.Container>

            </Modal.Backdrop>

        </Modal>
    );
};

export default DeleteModal;