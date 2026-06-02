"use client";

/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

const UserAvatar = ({
    src,
    alt = "profile",
    fallback,
    className = "",
}) => {

    const [failedSrc, setFailedSrc] =
        useState("");

    const imageSrc =
        src?.trim() || "";

    const canShowImage =
        imageSrc &&
        failedSrc !== imageSrc;

    if (!canShowImage) {

        return fallback;
    }

    return (
        // Google profile images can fail through framework image wrappers;
        // use the browser's native image loader for OAuth avatars.
        <img
            key={imageSrc}
            src={imageSrc}
            alt={alt}
            referrerPolicy="no-referrer"
            className={className}
            onError={() =>
                setFailedSrc(
                    imageSrc
                )
            }
        />
    );
};

export default UserAvatar;
