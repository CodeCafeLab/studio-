"use client";

import { useState } from "react";
import Image from "next/image";
import { blogPosts } from '@/lib/data';
import { BlogCard } from '@/components/BlogCard';
import { BookOpen, Sparkles, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";

export default function BlogPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Collect all images for gallery highlights
  const allGalleryImages = blogPosts.flatMap((post) => 
    post.summaryImages.slice(0, 2).map((img) => ({
      src: img,
      title: post.title,
      date: post.date
    }))
  );

  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % allGalleryImages.length);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + allGalleryImages.length) % allGalleryImages.length);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setSelectedImage(allGalleryImages[index].src);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-slate-900 via-primary/90 to-slate-800 text-primary-foreground overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500/20 rounded-full blur-[80px]" />
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-300" />
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-bounce delay-500" />
        </div>

        <div className="container relative z-10 text-center py-12 md:py-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full mb-8">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm font-medium">Stories of Hope & Impact</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed">
            Stay updated with our latest news, success stories, and impactful articles 
            about our welfare activities and community initiatives.
          </p>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0 120L48 108C96 96 192 72 288 60C384 48 480 48 576 54C672 60 768 72 864 78C960 84 1056 84 1152 78C1248 72 1344 60 1392 54L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="rgb(249 250 251)"/>
          </svg>
        </div>
      </section>

      {/* Gallery Highlights Section */}
      <section className="bg-gray-50 py-10">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Gallery Highlights</h2>
            </div>
            <span className="text-sm text-muted-foreground">{allGalleryImages.length} Photos</span>
          </div>
          
          {/* Scrollable Gallery Strip */}
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {allGalleryImages.map((item, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="relative flex-shrink-0 w-48 md:w-64 aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group snap-start"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 200px, 256px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-sm font-medium line-clamp-1">{item.title}</p>
                    <p className="text-white/70 text-xs">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section id="blog-posts" className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4 md:px-6 py-10 md:py-14">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 px-4 py-1.5 rounded-full mb-4">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Latest Articles</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Stories from the Field</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover stories of hope, impact, and transformation from our ongoing welfare programs
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-primary/5 via-orange-50 to-yellow-50 py-10">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Stay Connected
              </h2>
              <p className="text-muted-foreground">
                Follow our journey and be the first to know about our latest initiatives, 
                success stories, and ways to get involved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-lg transition-all"
                >
                  Contact Us
                </a>
                <a
                  href="/get-involved"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all"
                >
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0 rounded-3xl border-0 bg-black/95 backdrop-blur-xl">
          {/* REQUIRED FOR ACCESSIBILITY */}
          <DialogTitle className="sr-only">Gallery Image View</DialogTitle>
          {/* Navigation */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all z-20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition-all z-20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-sm px-4 py-2 rounded-full z-20">
            {lightboxIndex + 1} / {allGalleryImages.length}
          </div>

          <DialogClose className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-3 z-20 transition-colors">
            <X className="h-5 w-5 text-white" />
          </DialogClose>

          {selectedImage && (
            <div className="relative w-full h-[85vh]">
              <Image
                src={allGalleryImages[lightboxIndex].src}
                alt={allGalleryImages[lightboxIndex].title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              {/* Caption */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white px-6 py-3 rounded-xl text-center">
                <p className="font-medium">{allGalleryImages[lightboxIndex].title}</p>
                <p className="text-sm text-white/70">{allGalleryImages[lightboxIndex].date}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
