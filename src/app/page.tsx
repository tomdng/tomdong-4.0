import React from "react";
import Image from "next/image";
import draftingImage from "./images/drafting.png";

export default function Home() {
  return (
    <section className="container mx-auto flex h-screen flex-col items-center gap-y-8 md:flex-row md:justify-center">
      <Image
        src={draftingImage}
        alt="Drafting Illustration"
        width={500}
        height={300}
        className="dark-mode-lights"
      />
      <div className="flex flex-col gap-y-3 text-center md:text-left">
        <h1 className="max-w-lg font-serif text-5xl font-bold">
          Hi, my site&apos;s under design right now.
        </h1>
        <p className="text-2xl">Please check back later 🙂</p>
      </div>
    </section>
  );
}
