"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Sparkles, ZoomIn, X, ChevronLeft, ChevronRight, Heart, Images } from "lucide-react";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import Link from "next/link";

// Gallery images with captions
const galleryImages = [
  { src: "/gallery/1.jpg", caption: "Education for All", description: "Children engaged in learning activities at our community center" },
  { src: "/gallery/2.jpg", caption: "Nurturing Young Minds", description: "Students receiving educational support and guidance" },
  { src: "/gallery/3.jpg", caption: "Learning Together", description: "Group study sessions fostering collaborative education" },
  { src: "/gallery/4.jpg", caption: "Warmth and Care", description: "Winter relief distribution to underprivileged families" },
  { src: "/gallery/5.jpg", caption: "Community Outreach", description: "Volunteers reaching out to remote village communities" },
  { src: "/gallery/6.jpg", caption: "Empowering Through Education", description: "Teaching sessions transforming young lives" },
  { src: "/gallery/7.jpg", caption: "Growing Together", description: "Children participating in educational programs" },
];

const additionalImages = [
  { src: "/images/IMG-20250927-WA0002.jpg", caption: "Classroom Sessions", description: "Interactive learning at OJASH education center" },
  { src: "/images/IMG-20250927-WA0003.jpg", caption: "Study Time", description: "Dedicated children focused on their studies" },
  { src: "/images/IMG-20250927-WA0004.jpg", caption: "Group Learning", description: "Collaborative education building future leaders" },
  { src: "/images/IMG-20250927-WA0005.jpg", caption: "Community Support", description: "Providing essential resources to families in need" },
  { src: "/images/IMG-20250927-WA0006.jpg", caption: "Welfare Activities", description: "Outreach programs making a real difference" },
];

const allImages = [...galleryImages, ...additionalImages];
const fallbackImage = "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=600&q=80";

export default function GalleryPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % allImages.length);
    }
  };
  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + allImages.length) % allImages.length);
    }
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  };

  const getImageSrc = (index: number, originalSrc: string) => {
    return imageErrors.has(index) ? fallbackImage : originalSrc;
  };

  return (
    <>
      {/* Hero Section - Light Theme */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-b from-[#E5F6FF] to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4B400]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#005A9C]/10 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#005A9C]/20 px-6 py-3 rounded-full shadow-sm animate-fade-in">
              <Camera className="h-4 w-4 text-[#F4B400]" />
              <span className="text-sm font-medium text-[#005A9C]">Capturing Moments of Impact</span>
            </div>

            {/* Title - Centered */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-[#005A9C] animate-fade-in-up">
              Our <span className="text-[#F4B400]">Gallery</span>
            </h1>

            {/* Subtitle - Centered */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#005A9C]/70 text-center leading-relaxed animate-fade-in-up-delay">
              A glimpse into our world of action, compassion, and change — showcasing real moments 
              from our welfare programs, events, and community initiatives.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-in-up-delay">
              <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-[#E5F6FF]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#F4B400]/10 rounded-xl">
                    <Images className="h-5 w-5 text-[#F4B400]" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-[#005A9C]">{allImages.length}+</p>
                    <p className="text-xs text-[#005A9C]/60">Photos</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-[#E5F6FF]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#005A9C]/10 rounded-xl">
                    <Sparkles className="h-5 w-5 text-[#005A9C]" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-[#005A9C]">Real</p>
                    <p className="text-xs text-[#005A9C]/60">Moments</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-[#E5F6FF]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-xl">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-[#005A9C]">Lives</p>
                    <p className="text-xs text-[#005A9C]/60">Touched</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="bg-[#E5F6FF] py-16 md:py-20">
        <div className="container px-4 md:px-6">
          {/* Section Header - Centered */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-[#F4B400]/30 px-4 py-1.5 rounded-full mb-4 shadow-sm">
              <Camera className="h-4 w-4 text-[#F4B400]" />
              <span className="text-sm font-semibold text-[#005A9C]">Photo Collection</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#005A9C] text-center mb-4">
              Moments That Matter
            </h2>
            <p className="text-[#005A9C]/70 max-w-2xl mx-auto text-center">
              Every photograph tells a story of hope, transformation, and community impact. 
              These are real moments from our programs and initiatives.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {allImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Photo Card with Hover Effect */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 ease-out hover:shadow-lg group-hover:-translate-y-1"
                  style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                >
                  {/* Image Container - Centered with flex */}
                  <div className="relative aspect-[4/3] overflow-hidden flex items-center justify-center">
                    <Image
                      src={getImageSrc(index, image.src)}
                      alt={image.description}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                      onError={() => handleImageError(index)}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#005A9C]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                        <ZoomIn className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Image Number Badge */}
                    <div className="absolute top-3 right-3 bg-white/90 text-[#005A9C] text-xs font-medium px-2.5 py-1 rounded-full">
                      {index + 1}/{allImages.length}
                    </div>
                  </div>
                  
                  {/* Caption - Centered */}
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-[#005A9C] mb-1">{image.caption}</h3>
                    <p className="text-sm text-[#005A9C]/60 line-clamp-2">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#E5F6FF] border border-[#005A9C]/20 px-4 py-2 rounded-full mb-6">
              <Heart className="h-4 w-4 text-[#F4B400]" />
              <span className="text-sm font-semibold text-[#005A9C]">Be Part of Our Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#005A9C] text-center mb-4">
              Want to Create More <span className="text-[#F4B400]">Beautiful Moments</span>?
            </h2>
            <p className="text-[#005A9C]/70 text-lg mb-8 text-center">
              Join us as a volunteer or supporter and help us capture more stories of hope and transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full bg-[#F4B400] text-[#005A9C] hover:bg-[#005A9C] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Support Our Work
                <Heart className="h-5 w-5" />
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full bg-[#005A9C] text-white hover:bg-[#F4B400] hover:text-[#005A9C] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-5xl p-0 rounded-2xl border-0 bg-white overflow-hidden shadow-2xl">
          <DialogTitle className="sr-only">
            {selectedImageIndex !== null ? allImages[selectedImageIndex].caption : "Gallery Image"}
          </DialogTitle>
          
          {selectedImageIndex !== null && (
            <>
              {/* Navigation Arrows */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#005A9C] hover:bg-[#F4B400] text-white hover:text-[#005A9C] p-3 rounded-full transition-all z-20"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#005A9C] hover:bg-[#F4B400] text-white hover:text-[#005A9C] p-3 rounded-full transition-all z-20"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 bg-[#005A9C] text-white text-sm px-4 py-2 rounded-full z-20">
                {selectedImageIndex + 1} / {allImages.length}
              </div>

              {/* Close Button */}
              <DialogClose className="absolute top-4 right-4 bg-[#005A9C] hover:bg-[#F4B400] text-white hover:text-[#005A9C] rounded-full p-3 z-20 transition-colors">
                <X className="h-5 w-5" />
              </DialogClose>

              {/* Image */}
              <div className="relative w-full h-[70vh] md:h-[80vh] bg-[#E5F6FF] flex items-center justify-center">
                <Image
                  src={getImageSrc(selectedImageIndex, allImages[selectedImageIndex].src)}
                  alt={allImages[selectedImageIndex].description}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 1000px"
                  priority
                />
              </div>

              {/* Caption */}
              <div className="bg-white p-6 text-center border-t border-[#E5F6FF]">
                <h3 className="text-[#005A9C] font-bold text-xl mb-1">
                  {allImages[selectedImageIndex].caption}
                </h3>
                <p className="text-[#005A9C]/70 text-sm">
                  {allImages[selectedImageIndex].description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
