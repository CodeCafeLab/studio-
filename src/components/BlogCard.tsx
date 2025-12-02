"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, X, Sparkles, ZoomIn, Quote, Heart, Share2, BookOpen, Camera, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";

type BlogPost = {
  id: number;
  title: string;
  image: string;
  summary: string;
  content: string;
  date: string;
  fullSummary: string[];
  summaryImages: string[];
};

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [currentCardImage, setCurrentCardImage] = useState(0);

  const handleSummarize = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 500);
  };

  const nextGalleryImage = () => setGalleryIndex((prev) => (prev + 1) % post.summaryImages.length);
  const prevGalleryImage = () => setGalleryIndex((prev) => (prev - 1 + post.summaryImages.length) % post.summaryImages.length);

  return (
    <>
      <Card className="flex flex-col overflow-hidden group transition-all duration-300 rounded-2xl border border-[#E5F6FF] shadow-md bg-white h-full hover:shadow-lg hover:-translate-y-1"
        style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
      >
        {/* Blog Image with Hover Effect */}
        <CardHeader className="p-0 relative overflow-hidden flex-shrink-0">
          <div className="relative h-56 w-full flex items-center justify-center">
            <Image
              src={post.summaryImages[currentCardImage] || post.image}
              alt={post.title}
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#035A9D]/70 via-transparent to-transparent" />

            {/* Photo Count Badge */}
            <div className="absolute top-4 right-4 bg-white/90 text-[#035A9D] text-xs font-medium px-3 py-2 rounded-full flex items-center gap-1.5">
              <Camera className="h-3.5 w-3.5" />
              {post.summaryImages.length} Photos
            </div>

            {/* Mini Image Dots */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {post.summaryImages.slice(0, 5).map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentCardImage(idx); }}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentCardImage
                      ? "w-6 h-2 bg-white"
                      : "w-2 h-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

            {/* Title on Image */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-lg font-bold text-white leading-snug line-clamp-2">
                {post.title}
              </h3>
            </div>
          </div>
        </CardHeader>

        {/* Blog Content */}
        <CardContent className="p-5 flex-grow flex flex-col">
          {/* Date Badge */}
          <div className="flex items-center gap-2 text-xs text-[#035A9D] font-semibold mb-3">
            <Calendar className="h-3.5 w-3.5" />
            <span>{post.date}</span>
          </div>

          {/* Description */}
          <CardDescription className="text-[#035A9D]/70 leading-relaxed text-sm flex-grow">
            <span className="line-clamp-5">{post.summary}</span>
          </CardDescription>

          {/* Thumbnail Preview Strip */}
          <div className="flex gap-2 mt-4 pt-4 border-t border-[#E5F6FF]">
            {post.summaryImages.slice(0, 4).map((img, idx) => (
              <div 
                key={idx} 
                className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-[#E5F6FF] hover:border-[#F2B705] transition-colors cursor-pointer group/thumb flex items-center justify-center"
                onClick={() => setCurrentCardImage(idx)}
              >
                <Image src={img} alt="" fill className="object-cover object-center transition-transform duration-300 group-hover/thumb:scale-[1.02]" sizes="48px" />
                {idx === 3 && post.summaryImages.length > 4 && (
                  <div className="absolute inset-0 bg-[#035A9D]/70 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">+{post.summaryImages.length - 4}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>

        {/* Read Full Story Button */}
        <CardFooter className="p-5 pt-0 mt-auto">
          <Button
            onClick={handleSummarize}
            disabled={isLoading}
            className="w-full rounded-xl font-semibold bg-[#F2B705] hover:bg-[#035A9D] text-[#035A9D] hover:text-white transition-all duration-300 h-12"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#035A9D] border-t-transparent mr-2" />
                Loading...
              </>
            ) : (
              <>
                <BookOpen className="h-4 w-4 mr-2" />
                Read Full Story
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      {/* Summary Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto p-0 rounded-2xl border-0 shadow-2xl bg-white">
          <DialogTitle className="sr-only">{post.title}</DialogTitle>

          {/* Hero Image Slider */}
          <div className="relative h-72 md:h-[420px] w-full bg-[#E5F6FF]">
            <Image
              src={post.summaryImages[galleryIndex] || post.image}
              alt={post.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#035A9D]/80 via-transparent to-transparent" />

            {/* Navigation Arrows */}
            <button
              onClick={prevGalleryImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#035A9D] p-3 rounded-full transition-all z-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextGalleryImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#035A9D] p-3 rounded-full transition-all z-10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-[#035A9D] text-white text-sm px-4 py-2 rounded-full z-10 flex items-center gap-2">
              <Camera className="h-4 w-4" />
              {galleryIndex + 1} / {post.summaryImages.length}
            </div>

            {/* Close Button */}
            <DialogClose className="absolute top-4 right-4 bg-white/80 hover:bg-white text-[#035A9D] rounded-full p-3 transition-colors z-10">
              <X className="h-5 w-5" />
            </DialogClose>

            {/* Header Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="text-xs font-medium text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                {post.date}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mt-4">
                {post.title}
              </h2>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 right-4 flex gap-2 z-10">
              {post.summaryImages.slice(0, 6).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setGalleryIndex(idx)}
                  className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    idx === galleryIndex
                      ? "border-white scale-110 shadow-lg"
                      : "border-white/30 opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover object-center" sizes="48px" />
                </button>
              ))}
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8 space-y-8">
            {/* Highlighted Quote */}
            <div className="relative bg-[#E5F6FF] rounded-2xl p-8 overflow-hidden border border-[#035A9D]/10">
              <Quote className="absolute top-4 left-4 h-12 w-12 text-[#F2B705]/30" />
              <blockquote className="relative z-10 text-lg md:text-xl text-[#035A9D]/80 italic text-center max-w-3xl mx-auto leading-relaxed">
                "{post.fullSummary[0].slice(0, 250)}..."
              </blockquote>
            </div>

            {/* Full Summary Paragraphs */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-[#F2B705]" />
                <h3 className="text-xl font-bold text-[#035A9D]">Full Story</h3>
              </div>
              <div className="space-y-5 text-[#035A9D]/70 leading-relaxed">
                {post.fullSummary.map((paragraph, index) => (
                  <p key={index} className="text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Full Gallery Grid */}
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-1.5 bg-[#F2B705] rounded-full" />
                  <h3 className="text-xl font-bold text-[#035A9D]">Photo Gallery</h3>
                </div>
                <span className="text-sm text-[#035A9D]/60 flex items-center gap-1.5">
                  <Camera className="h-4 w-4" />
                  {post.summaryImages.length} Photos
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {post.summaryImages.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group/img bg-[#E5F6FF] border border-[#035A9D]/10 flex items-center justify-center"
                  >
                    <Image
                      src={img}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover/img:scale-[1.02]"
                      sizes="(max-width: 768px) 50vw, 200px"
                    />
                    <div className="absolute inset-0 bg-[#035A9D]/0 group-hover/img:bg-[#035A9D]/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                        <ZoomIn className="h-4 w-4 text-white" />
                        <span className="text-white text-sm font-medium">View Full</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-[#E5F6FF] rounded-2xl p-8 text-center space-y-4 border border-[#035A9D]/10">
              <p className="text-[#035A9D]/70">
                Want to support our mission and help us create more impact?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-xl font-semibold shadow-md px-8 bg-[#F2B705] hover:bg-[#035A9D] text-[#035A9D] hover:text-white transition-all duration-300"
                  onClick={() => (window.location.href = "/donate")}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Donate Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-xl font-semibold px-8 border-2 border-[#035A9D] text-[#035A9D] hover:bg-[#035A9D] hover:text-white transition-all"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Story
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Full Image View Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0 rounded-2xl border-0 bg-white shadow-2xl">
          <DialogTitle className="sr-only">Full Image View</DialogTitle>

          <DialogClose className="absolute top-4 right-4 bg-[#035A9D] hover:bg-[#F2B705] text-white hover:text-[#035A9D] rounded-full p-3 z-20 transition-colors">
            <X className="h-5 w-5" />
          </DialogClose>

          {selectedImage && (
            <div className="relative w-full h-[85vh] bg-[#E5F6FF] flex items-center justify-center">
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
