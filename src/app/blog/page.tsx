"use client";

import { useState } from "react";
import Image from "next/image";
import { blogPosts } from '@/lib/data';
import { BlogCard } from '@/components/BlogCard';
import { BookOpen, Sparkles, ZoomIn, X, ChevronLeft, ChevronRight, Newspaper, Heart, Users } from "lucide-react";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import Link from "next/link";

export default function BlogPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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
      {/* Hero Section - Light Theme */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-b from-[#E5F6FF] to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4B400]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#005A9C]/10 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 text-center py-16 md:py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#005A9C]/20 px-6 py-3 rounded-full shadow-sm mb-8 animate-fade-in">
            <Newspaper className="h-4 w-4 text-[#F4B400]" />
            <span className="text-sm font-medium text-[#005A9C]">Stories of Hope & Impact</span>
          </div>

          {/* Title - Centered */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-[#005A9C] mb-6 animate-fade-in-up">
            Our <span className="text-[#F4B400]">Blog</span>
          </h1>

          {/* Subtitle - Centered */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#005A9C]/70 text-center leading-relaxed animate-fade-in-up-delay">
            Stay updated with our latest news, success stories, and impactful articles 
            about our welfare activities and community initiatives.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10 animate-fade-in-up-delay">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#F4B400]">{blogPosts.length}</p>
              <p className="text-sm text-[#005A9C]/60">Stories Published</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#005A9C]">2000+</p>
              <p className="text-sm text-[#005A9C]/60">Lives Touched</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#F4B400]">50+</p>
              <p className="text-sm text-[#005A9C]/60">Volunteers Featured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Highlights Section */}
      <section className="bg-white py-12">
        <div className="container px-4 md:px-6">
          {/* Section Header - Centered */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#F4B400]/10 rounded-xl">
                <Sparkles className="h-6 w-6 text-[#F4B400]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#005A9C]">Gallery Highlights</h2>
                <p className="text-sm text-[#005A9C]/60">Moments captured from our initiatives</p>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-2 text-sm text-[#005A9C]/60 bg-[#E5F6FF] px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-[#F4B400] rounded-full animate-pulse" />
              {allGalleryImages.length} Photos
            </span>
          </div>
          
          {/* Scrollable Gallery Strip */}
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {allGalleryImages.map((item, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="relative flex-shrink-0 w-52 md:w-72 aspect-[4/3] rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer group snap-start"
                  style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 208px, 288px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#005A9C]/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[#005A9C]/0 group-hover:bg-[#005A9C]/30 transition-colors flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
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
      <section id="blog-posts" className="bg-[#E5F6FF]">
        <div className="container px-4 md:px-6 py-16 md:py-20">
          {/* Section Header - Centered */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white border border-[#005A9C]/20 px-4 py-2 rounded-full mb-4 shadow-sm">
              <BookOpen className="h-4 w-4 text-[#005A9C]" />
              <span className="text-sm font-semibold text-[#005A9C]">Latest Articles</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#005A9C] text-center mb-4">
              Stories from the <span className="text-[#F4B400]">Field</span>
            </h2>
            <p className="text-[#005A9C]/70 max-w-2xl mx-auto text-lg text-center">
              Discover stories of hope, impact, and transformation from our ongoing welfare programs
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-[#E5F6FF] rounded-3xl shadow-lg p-8 md:p-14 relative overflow-hidden border border-[#005A9C]/10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F4B400]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#005A9C]/10 rounded-full blur-2xl" />
            
            <div className="relative z-10 text-center space-y-6">
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Heart className="h-8 w-8 text-[#F4B400]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#005A9C] text-center">
                Stay <span className="text-[#F4B400]">Connected</span>
              </h2>
              <p className="text-[#005A9C]/70 text-lg max-w-xl mx-auto text-center">
                Follow our journey and be the first to know about our latest initiatives, 
                success stories, and ways to get involved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold bg-[#F4B400] text-[#005A9C] hover:bg-[#005A9C] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Contact Us
                </Link>
                <Link
                  href="/get-involved"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold bg-[#005A9C] text-white hover:bg-[#F4B400] hover:text-[#005A9C] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0 rounded-2xl border-0 bg-white shadow-2xl">
          <DialogTitle className="sr-only">Gallery Image View</DialogTitle>
          
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#005A9C] hover:bg-[#F4B400] text-white hover:text-[#005A9C] p-3 rounded-full transition-all z-20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#005A9C] hover:bg-[#F4B400] text-white hover:text-[#005A9C] p-3 rounded-full transition-all z-20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute top-4 left-4 bg-[#005A9C] text-white text-sm px-4 py-2 rounded-full z-20">
            {lightboxIndex + 1} / {allGalleryImages.length}
          </div>

          <DialogClose className="absolute top-4 right-4 bg-[#005A9C] hover:bg-[#F4B400] text-white hover:text-[#005A9C] rounded-full p-3 z-20 transition-colors">
            <X className="h-5 w-5" />
          </DialogClose>

          {selectedImage && (
            <div className="relative w-full h-[85vh] bg-[#E5F6FF] flex items-center justify-center">
              <Image
                src={allGalleryImages[lightboxIndex].src}
                alt={allGalleryImages[lightboxIndex].title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white text-[#005A9C] px-6 py-3 rounded-xl text-center shadow-lg">
                <p className="font-medium">{allGalleryImages[lightboxIndex].title}</p>
                <p className="text-sm text-[#005A9C]/70">{allGalleryImages[lightboxIndex].date}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
