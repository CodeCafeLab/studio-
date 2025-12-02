"use client";

import Image from "next/image";
import { Camera } from "lucide-react";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
];

export default function Gallery() {
  return (
    <section className="w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Section Header - Centered */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-[#E5F6FF] border border-[#035A9D]/20 px-4 py-2 rounded-full mb-4">
          <Camera className="h-4 w-4 text-[#F2B705]" />
          <span className="text-sm font-semibold text-[#035A9D]">Photo Gallery</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#035A9D] text-center mb-4">
          Our Welfare Activities
        </h2>
        <p className="max-w-[700px] mx-auto text-[#035A9D]/70 md:text-xl text-center">
          Glimpses of our work transforming lives across communities.
        </p>
      </div>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md group cursor-pointer bg-white border border-[#E5F6FF] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
          >
            {/* Image Container */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl flex items-center justify-center">
              <Image
                src={src}
                alt={`Welfare activity ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.02]"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#035A9D]/0 group-hover:bg-[#035A9D]/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="h-8 w-8 text-white" />
                </div>
              </div>
              
              {/* Hover Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-[#035A9D]/80 to-transparent">
                <p className="text-white font-medium text-sm">
                  Community Impact #{index + 1}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
