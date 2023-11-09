import React from "react";
import Image from "next/image";

export default function Loading() {
    return (
        <main className=" h-screen flex items-center justify-center">
            <div className=" relative animate-bounce">
                <Image src="/img/logo.png" alt="company logo" width={140} height={60} />
            </div>
        </main>
    );
}
