"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function Banner() {
  return (
    <section className="relative w-full h-[70vh]">
      {/* Gambar Background */}
      <img
        src="https://picsum.photos/1920/1080?grayscale"
        alt="Banner Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Konten */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Upgrade Your Tech Game
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl drop-shadow">
          Find the latest gadgets and best deals, all in one place.
        </p>
        <Button asChild size="lg" className="gap-2 text-base font-semibold">
          <Link to="/products">
            Browse Products <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </section>
  );
}
