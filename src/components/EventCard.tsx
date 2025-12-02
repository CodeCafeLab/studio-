"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, MapPin, Users, ChevronRight, ChevronLeft, X, Tag, Heart, Share2, ZoomIn } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  beneficiaries: string;
  category?: string;
  shortDescription: string;
  fullDescription: string[];
  images: string[];
  featured?: boolean;
};

export function EventCard({
  title,
  date,
  location,
  beneficiaries,
  category = "Event",
  shortDescription,
  fullDescription,
  images,
  featured = false,
}: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    if (!isModalOpen) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [images.length, isModalOpen]);

  const categoryStyles: Record<string, { bg: string; text: string }> = {
    Healthcare: { bg: "bg-rose-100", text: "text-rose-600" },
    Education: { bg: "bg-[#E5F6FF]", text: "text-[#035A9D]" },
    "Women Empowerment": { bg: "bg-purple-100", text: "text-purple-600" },
    "Relief Work": { bg: "bg-[#F2B705]/10", text: "text-[#035A9D]" },
    "Food Security": { bg: "bg-green-100", text: "text-green-600" },
    Infrastructure: { bg: "bg-cyan-100", text: "text-cyan-600" },
    Event: { bg: "bg-gray-100", text: "text-gray-600" },
  };

  const categoryStyle = categoryStyles[category] || categoryStyles.Event;

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextGalleryImage = () => setGalleryIndex((prev) => (prev + 1) % images.length);
  const prevGalleryImage = () => setGalleryIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <Card
        className={`group overflow-hidden rounded-2xl border border-[#E5F6FF] shadow-md bg-white relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
          featured ? "md:col-span-2" : ""
        }`}
        style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
      >
        {/* Featured Badge - Top Right */}
        {featured && (
          <div className="absolute top-4 right-4 z-20 bg-[#F2B705] text-[#035A9D] text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
            <span>⭐</span> Featured
          </div>
        )}

        {/* Image Section - Full Width Banner with 16:9 Aspect Ratio */}
        <div className={`relative w-full ${featured ? "aspect-[16/9]" : "aspect-[16/10]"} overflow-hidden`}>
          {/* Main Image - Full Width Banner */}
          <Image
            src={images[currentImageIndex]}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            priority={featured}
          />

          {/* Soft Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#035A9D]/80 via-[#035A9D]/20 to-transparent" />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#035A9D] p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-md z-10"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#035A9D] p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 shadow-md z-10"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Image Indicator Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.slice(0, 5).map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentImageIndex
                      ? "w-8 h-2 bg-white"
                      : "w-2 h-2 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
              {images.length > 5 && (
                <span className="text-white text-xs ml-1">+{images.length - 5}</span>
              )}
            </div>
          )}

          {/* Category Badge - Top Left */}
          <div className="absolute top-4 left-4 z-10">
            <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${categoryStyle.bg} ${categoryStyle.text} shadow-sm`}>
              <Tag className="w-3 h-3 inline mr-1" />
              {category}
            </span>
          </div>

          {/* Title & Date Section - Bottom of Image, Vertically Centered */}
          <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <h3 className={`${featured ? 'text-xl md:text-2xl' : 'text-lg'} font-bold text-white leading-tight line-clamp-2`}>
              {title}
            </h3>
          </div>
        </div>

        {/* Card Content */}
        <CardContent className="p-5 space-y-4">
          {/* Meta Info Pills */}
          <div className="flex flex-wrap gap-2 justify-center">
            <div className="flex items-center gap-1.5 text-sm text-[#035A9D]/80 bg-[#E5F6FF] px-3 py-2 rounded-lg">
              <MapPin className="h-4 w-4 text-[#035A9D]" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-[#035A9D]/80 bg-[#E5F6FF] px-3 py-2 rounded-lg">
              <Users className="h-4 w-4 text-[#F2B705]" />
              <span>{beneficiaries}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#035A9D]/70 leading-relaxed line-clamp-3 text-sm text-center">
            {shortDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 rounded-xl font-semibold bg-[#F2B705] hover:bg-[#035A9D] text-[#035A9D] hover:text-white transition-all duration-300 h-12"
            >
              View Details
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-2 border-[#E5F6FF] hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-all h-12 w-12"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Event Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto p-0 rounded-2xl border-0 shadow-2xl bg-white">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          
          {/* Modal Header - Full Width Banner Image */}
          <div className="relative w-full aspect-[16/9] bg-[#E5F6FF]">
            <Image
              src={images[galleryIndex]}
              alt={title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 1000px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#035A9D]/80 via-[#035A9D]/20 to-transparent" />
            
            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button 
                  onClick={prevGalleryImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#035A9D] p-3 rounded-full transition-all z-10 shadow-md"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={nextGalleryImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#035A9D] p-3 rounded-full transition-all z-10 shadow-md"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-[#035A9D] text-white text-sm px-4 py-2 rounded-full z-10">
              {galleryIndex + 1} / {images.length}
            </div>
            
            {/* Close Button */}
            <DialogClose className="absolute top-4 right-4 bg-white/90 hover:bg-white text-[#035A9D] rounded-full p-3 transition-colors z-10 shadow-md">
              <X className="h-5 w-5" />
            </DialogClose>

            {/* Header Content - Vertically Centered */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${categoryStyle.bg} ${categoryStyle.text}`}>
                  {category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Calendar className="h-3.5 w-3.5" />
                  {date}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <MapPin className="h-3.5 w-3.5" />
                  {location}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Users className="h-3.5 w-3.5" />
                  {beneficiaries}
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {title}
              </h2>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="absolute bottom-4 right-4 hidden md:flex gap-2 z-10">
                {images.slice(0, 5).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGalleryIndex(idx)}
                    className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      idx === galleryIndex
                        ? "border-white scale-110 shadow-lg"
                        : "border-white/30 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover object-center" sizes="56px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8 space-y-8">
            {/* About Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-[#F2B705] rounded-full" />
                <h3 className="text-xl font-bold text-[#035A9D]">About This Event</h3>
              </div>
              <div className="space-y-4 text-[#035A9D]/70 leading-relaxed">
                {fullDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-[#035A9D] rounded-full" />
                <h3 className="text-xl font-bold text-[#035A9D]">Event Gallery ({images.length} Photos)</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group/img border border-[#E5F6FF]"
                  >
                    <Image
                      src={img}
                      alt={`Event photo ${index + 1}`}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover/img:scale-105"
                      sizes="(max-width: 768px) 50vw, 150px"
                    />
                    <div className="absolute inset-0 bg-[#035A9D]/0 group-hover/img:bg-[#035A9D]/40 transition-all duration-300 flex items-center justify-center">
                      <ZoomIn className="h-6 w-6 text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-[#E5F6FF] rounded-2xl p-6 space-y-4 border border-[#035A9D]/10">
              <div className="flex items-center gap-3 justify-center">
                <span className="text-2xl">🌟</span>
                <h3 className="text-xl font-bold text-[#035A9D]">Event Impact</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-2xl md:text-3xl font-bold text-[#F2B705]">
                    {beneficiaries.split(" ")[0]}+
                  </p>
                  <p className="text-xs text-[#035A9D]/60 mt-1">Beneficiaries</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-2xl md:text-3xl font-bold text-green-500">100%</p>
                  <p className="text-xs text-[#035A9D]/60 mt-1">Free Services</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-2xl md:text-3xl font-bold text-[#035A9D]">50+</p>
                  <p className="text-xs text-[#035A9D]/60 mt-1">Volunteers</p>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <p className="text-2xl md:text-3xl">❤️</p>
                  <p className="text-xs text-[#035A9D]/60 mt-1">Endless Love</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Button
                size="lg"
                className="rounded-xl font-semibold px-8 bg-[#F2B705] hover:bg-[#035A9D] text-[#035A9D] hover:text-white transition-all duration-300 h-12"
                onClick={() => (window.location.href = "/donate")}
              >
                <Heart className="h-5 w-5 mr-2" />
                Support Our Events
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl font-semibold px-8 border-2 border-[#035A9D] text-[#035A9D] hover:bg-[#035A9D] hover:text-white transition-all duration-300 h-12"
                onClick={() => (window.location.href = "/get-involved")}
              >
                Volunteer With Us
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-xl font-semibold px-8 text-[#035A9D]/60 hover:text-[#F2B705] h-12"
              >
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Full Image View Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 rounded-2xl border-0 bg-white shadow-2xl">
          <DialogTitle className="sr-only">Full Image View</DialogTitle>
          <DialogClose className="absolute top-4 right-4 bg-[#035A9D] hover:bg-[#F2B705] text-white hover:text-[#035A9D] rounded-full p-3 z-20 transition-colors">
            <X className="h-5 w-5" />
          </DialogClose>
          {selectedImage && (
            <div className="relative w-full h-[80vh] bg-[#E5F6FF] flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Full view"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 1000px"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
