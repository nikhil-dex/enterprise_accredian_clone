"use client";

import { useState } from "react";

export default function Layout({
    children,
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Navbar setIsOpen={setIsOpen} />

            {children}

            <EnquiryForm
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            {isOpen && (
                <div
                    className="
                        fixed
                        inset-0
                        bg-black/50
                        z-40
                    "
                    onClick={() =>
                        setIsOpen(false)
                    }
                />
            )}
        </>
    );
}