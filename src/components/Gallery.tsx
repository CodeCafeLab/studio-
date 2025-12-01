"use client";

import Image from "next/image";

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
    <section className="w-full py-8 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800">
        Our Welfare Activities
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-64 overflow-hidden rounded-[10px] shadow-md hover:shadow-xl transition-shadow duration-300 group"
          >
            <Image
              src={src}
              alt={`Welfare activity ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

