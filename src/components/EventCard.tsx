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

  // Auto-rotate images on card
  useEffect(() => {
    if (!isModalOpen) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % Math.min(images.length, 4));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images.length, isModalOpen]);

  // Category colors
  const categoryColors: Record<string, string> = {
    Healthcare: "bg-rose-500/10 text-rose-600 border-rose-200",
    Education: "bg-blue-500/10 text-blue-600 border-blue-200",
    "Women Empowerment": "bg-purple-500/10 text-purple-600 border-purple-200",
    "Relief Work": "bg-amber-500/10 text-amber-700 border-amber-200",
    "Food Security": "bg-emerald-500/10 text-emerald-600 border-emerald-200",
    Infrastructure: "bg-cyan-500/10 text-cyan-600 border-cyan-200",
    Event: "bg-gray-500/10 text-gray-600 border-gray-200",
  };

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextGalleryImage = () => setGalleryIndex((prev) => (prev + 1) % images.length);
  const prevGalleryImage = () => setGalleryIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <Card
        className={`group overflow-hidden rounded-3xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white relative ${
          featured ? "md:col-span-2" : ""
        }`}
      >
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
            <span className="text-yellow-200">⭐</span> Featured Event
          </div>
        )}

        {/* Image Section with Slider */}
        <div className={`relative ${featured ? "h-80 md:h-[420px]" : "h-72"} overflow-hidden`}>
          {featured ? (
            // Featured event - large mosaic layout
            <div className="grid grid-cols-12 grid-rows-2 h-full gap-1.5 p-1.5">
              <div className="col-span-8 row-span-2 relative rounded-2xl overflow-hidden">
                <Image
                  src={images[currentImageIndex]}
                  alt={title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                {/* Navigation arrows */}
                <button 
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="col-span-4 row-span-1 relative rounded-2xl overflow-hidden">
                <Image
                  src={images[1] || images[0]}
                  alt={`${title} 2`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
              <div className="col-span-4 row-span-1 relative rounded-2xl overflow-hidden">
                <Image
                  src={images[2] || images[0]}
                  alt={`${title} 3`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                {images.length > 3 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-white text-2xl font-bold">+{images.length - 3} Photos</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Regular event - slider with thumbnails
            <>
              <Image
                src={images[currentImageIndex]}
                alt={title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Navigation arrows */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              {/* Thumbnail strip */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.slice(0, 6).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                    className={`transition-all duration-300 rounded-full overflow-hidden border-2 ${
                      idx === currentImageIndex
                        ? "w-8 h-2 bg-white border-white"
                        : "w-2 h-2 bg-white/50 border-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border backdrop-blur-md ${
                categoryColors[category] || categoryColors.Event
              }`}
            >
              <Tag className="w-3 h-3 inline mr-1" />
              {category}
            </span>
          </div>

          {/* Title on Image */}
          <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
            <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight drop-shadow-lg line-clamp-2">
              {title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-6 space-y-4">
          {/* Meta Info Pills */}
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-gray-50 px-3 py-2 rounded-xl">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span className="truncate max-w-[140px]">{location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-gray-50 px-3 py-2 rounded-xl">
              <Users className="h-3.5 w-3.5 text-primary" />
              <span>{beneficiaries}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm">
            {shortDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="flex-1 rounded-xl font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all duration-300 h-12"
            >
              View Event Details
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-2 hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-colors h-12 w-12"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Event Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto p-0 rounded-3xl border-0 shadow-2xl bg-white">
          {/* REQUIRED FOR ACCESSIBILITY */}
          <DialogTitle className="sr-only">{title}</DialogTitle>
          {/* Modal Header with Hero Slider */}
          <div className="relative h-72 md:h-[450px] w-full bg-black">
            <Image
              src={images[galleryIndex]}
              alt={title}
              fill
              className="object-cover transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 1000px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevGalleryImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextGalleryImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-sm px-4 py-2 rounded-full z-10">
              {galleryIndex + 1} / {images.length}
            </div>
            
            {/* Close Button */}
            <DialogClose className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full p-3 transition-colors z-10">
              <X className="h-5 w-5 text-white" />
            </DialogClose>

            {/* Header Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border backdrop-blur-md ${
                    categoryColors[category] || categoryColors.Event
                  }`}
                >
                  {category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-white/90 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <Calendar className="h-3.5 w-3.5" />
                  {date}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-white/90 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <MapPin className="h-3.5 w-3.5" />
                  {location}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-white/90 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <Users className="h-3.5 w-3.5" />
                  {beneficiaries}
                </span>
              </div>
              
              {/* Title */}
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                {title}
              </h2>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 right-4 flex gap-2 z-10">
              {images.slice(0, 6).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setGalleryIndex(idx)}
                  className={`relative w-12 h-12 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    idx === galleryIndex
                      ? "border-white scale-110 shadow-lg"
                      : "border-white/30 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="48px" />
                </button>
              ))}
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8 space-y-8">
            {/* Full Description */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-1.5 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                <h3 className="text-xl font-bold text-gray-800">About This Event</h3>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Related Photos Gallery */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-1.5 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
                <h3 className="text-xl font-bold text-gray-800">Event Gallery ({images.length} Photos)</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer group/img bg-gray-100"
                  >
                    <Image
                      src={img}
                      alt={`Event photo ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover/img:scale-110"
                      sizes="(max-width: 768px) 50vw, 200px"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                        <ZoomIn className="h-4 w-4 text-white" />
                        <span className="text-white text-sm font-medium">View Full</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-orange-50 rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🌟</span>
                <h3 className="text-xl font-bold text-gray-800">Event Impact</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {beneficiaries.split(" ")[0]}+
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Beneficiaries</p>
                </div>
                <div className="text-center p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                    100%
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Free Services</p>
                </div>
                <div className="text-center p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                    50+
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Volunteers</p>
                </div>
                <div className="text-center p-5 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-3xl md:text-4xl">❤️</p>
                  <p className="text-sm text-muted-foreground mt-1">Endless Love</p>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="relative bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl p-8 overflow-hidden">
              <div className="absolute top-2 left-6 text-8xl text-primary/10 font-serif leading-none">"</div>
              <blockquote className="relative z-10 text-lg md:text-xl text-gray-700 italic text-center max-w-3xl mx-auto pt-4">
                सेवा परमो धर्म: — Service to humanity is the highest duty
              </blockquote>
              <p className="text-center text-sm text-muted-foreground mt-4">— OJASH WELFARE Society</p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="rounded-xl font-semibold shadow-lg hover:shadow-xl px-8 bg-gradient-to-r from-primary to-primary/80 h-14"
                onClick={() => (window.location.href = "/donate")}
              >
                <Heart className="h-5 w-5 mr-2" />
                Support Our Events
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-xl font-semibold px-8 border-2 h-14"
                onClick={() => (window.location.href = "/get-involved")}
              >
                Volunteer With Us
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-xl font-semibold px-8 h-14"
              >
                <Share2 className="h-5 w-5 mr-2" />
                Share Event
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Full Image View Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0 rounded-3xl border-0 bg-black/95 backdrop-blur-xl">
          {/* REQUIRED FOR ACCESSIBILITY */}
          <DialogTitle className="sr-only">Full Image View</DialogTitle>
          <DialogClose className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-3 z-20 transition-colors">
            <X className="h-5 w-5 text-white" />
          </DialogClose>
          {selectedImage && (
            <div className="relative w-full h-[85vh]">
              <Image
                src={selectedImage}
                alt="Full view"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
