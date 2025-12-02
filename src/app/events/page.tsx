import { events } from "@/lib/data";
import { EventCard } from "@/components/EventCard";
import { Calendar, Heart, Users, MapPin, Sparkles, ArrowRight, Target } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
  const featuredEvents = events.filter((e) => e.featured);
  const regularEvents = events.filter((e) => !e.featured);
  const categories = [...new Set(events.map((e) => e.category))];

  return (
    <>
      {/* Hero Section - Light Theme */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-b from-[#E5F6FF] to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4B400]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#005A9C]/10 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#005A9C]/20 px-6 py-3 rounded-full shadow-sm animate-fade-in">
              <Sparkles className="h-4 w-4 text-[#F4B400]" />
              <span className="text-sm font-medium text-[#005A9C]">Making a Difference in Rural India</span>
            </div>

            {/* Title - Centered */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-[#005A9C] animate-fade-in-up">
              Our Events &{" "}
              <span className="text-[#F4B400]">Initiatives</span>
            </h1>

            {/* Subtitle - Centered */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#005A9C]/70 text-center leading-relaxed animate-fade-in-up-delay">
              From the dusty villages of Rajasthan to the hearts of our community — 
              bringing healthcare, education, and hope to those who need it most.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-6 animate-fade-in-up-delay">
              <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-[#E5F6FF]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#F4B400]/10 rounded-xl">
                    <Users className="h-5 w-5 text-[#F4B400]" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-[#005A9C]">2000+</p>
                    <p className="text-xs text-[#005A9C]/60">Lives Touched</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-[#E5F6FF]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#005A9C]/10 rounded-xl">
                    <Calendar className="h-5 w-5 text-[#005A9C]" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-[#005A9C]">{events.length}+</p>
                    <p className="text-xs text-[#005A9C]/60">Events Organized</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-[#E5F6FF]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#005A9C]/10 rounded-xl">
                    <MapPin className="h-5 w-5 text-[#005A9C]" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-[#005A9C]">20+</p>
                    <p className="text-xs text-[#005A9C]/60">Villages Served</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-[#E5F6FF]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-xl">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-[#005A9C]">100%</p>
                    <p className="text-xs text-[#005A9C]/60">Free Services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 bg-[#F4B400] hover:bg-[#005A9C] text-[#005A9C] hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Heart className="h-5 w-5" />
                Support Our Mission
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 bg-[#005A9C] hover:bg-[#F4B400] text-white hover:text-[#005A9C] font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Join as Volunteer
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="bg-white py-6 sticky top-20 z-40 border-b border-[#E5F6FF]">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <span className="text-sm text-[#005A9C]/60 whitespace-nowrap">Filter by:</span>
            <button className="px-4 py-2 bg-[#005A9C] text-white text-sm font-medium rounded-full whitespace-nowrap transition-all hover:bg-[#F4B400] hover:text-[#005A9C]">
              All Events
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 bg-[#E5F6FF] text-[#005A9C] text-sm font-medium rounded-full whitespace-nowrap border border-[#005A9C]/10 hover:border-[#F4B400] hover:bg-[#F4B400]/10 transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="bg-[#E5F6FF] py-16 md:py-20">
        <div className="container px-4 md:px-6">
          {/* Section Header - Centered */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-[#F4B400]/30 px-4 py-1.5 rounded-full mb-4 shadow-sm">
              <span className="text-[#F4B400] text-lg">⭐</span>
              <span className="text-sm font-semibold text-[#005A9C]">Highlighted Events</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#005A9C] text-center mb-3">
              Featured Initiatives
            </h2>
            <p className="text-[#005A9C]/70 max-w-xl mx-auto text-center">
              Our most impactful programmes that have transformed hundreds of lives 
              across the villages of Dausa district.
            </p>
          </div>

          {/* Featured Events Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                beneficiaries={event.beneficiaries}
                category={event.category}
                shortDescription={event.shortDescription}
                fullDescription={event.fullDescription}
                images={event.images}
                featured={event.featured}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Events Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container px-4 md:px-6">
          {/* Section Header - Centered */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#E5F6FF] border border-[#005A9C]/20 px-4 py-1.5 rounded-full mb-4">
              <Calendar className="h-4 w-4 text-[#005A9C]" />
              <span className="text-sm font-semibold text-[#005A9C]">All Initiatives</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#005A9C] text-center mb-4">
              Our Events & Programmes
            </h2>
            <p className="text-[#005A9C]/70 max-w-2xl mx-auto text-lg text-center">
              Every event we organize brings us closer to our vision of an empowered, 
              healthy, and educated rural India.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {regularEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                beneficiaries={event.beneficiaries}
                category={event.category}
                shortDescription={event.shortDescription}
                fullDescription={event.fullDescription}
                images={event.images}
                featured={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section - Light Theme */}
      <section className="relative bg-[#E5F6FF] py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F4B400]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#005A9C]/10 rounded-full blur-[100px]" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl md:text-7xl text-[#F4B400] font-serif mb-4">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-[#005A9C] leading-relaxed mb-6">
              सेवा परमो धर्म:
            </blockquote>
            <p className="text-lg md:text-xl text-[#005A9C]/70 italic mb-4">
              "Service to humanity is the highest duty"
            </p>
            <p className="text-[#005A9C]/50 text-sm">
              — Guiding principle of OJASH WELFARE Society
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#E5F6FF] rounded-3xl shadow-lg p-8 md:p-12 relative overflow-hidden border border-[#005A9C]/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F4B400]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#005A9C]/10 rounded-full blur-2xl" />
              
              <div className="relative z-10 text-center space-y-6">
                <div className="inline-flex items-center gap-2 bg-white border border-[#005A9C]/20 px-4 py-2 rounded-full shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#005A9C] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#005A9C]"></span>
                  </span>
                  <span className="text-sm font-medium text-[#005A9C]">More Events Coming Soon</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-[#005A9C] text-center">
                  Stay Updated on Our Journey
                </h2>

                <p className="text-[#005A9C]/70 text-lg max-w-2xl mx-auto text-center">
                  We're constantly planning new initiatives to serve our community. 
                  Join us as a volunteer or supporter to be part of this beautiful journey.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-[#F4B400] text-[#005A9C] hover:bg-[#005A9C] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Contact Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/get-involved"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-[#005A9C] text-white hover:bg-[#F4B400] hover:text-[#005A9C] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Become a Volunteer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Summary Footer - Light Theme */}
      <section className="bg-[#005A9C] text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center text-white">Our Impact in Numbers</h3>
            <p className="text-white/70 text-center">Every number represents a life touched, a hope kindled</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="text-center p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-3xl md:text-4xl font-bold text-[#F4B400]">
                {events.length}+
              </p>
              <p className="text-white/70 mt-1 text-sm">Major Events</p>
            </div>
            <div className="text-center p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-3xl md:text-4xl font-bold text-[#F4B400]">
                2000+
              </p>
              <p className="text-white/70 mt-1 text-sm">Lives Touched</p>
            </div>
            <div className="text-center p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-3xl md:text-4xl font-bold text-[#F4B400]">
                100+
              </p>
              <p className="text-white/70 mt-1 text-sm">Volunteers</p>
            </div>
            <div className="text-center p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-3xl md:text-4xl font-bold text-[#F4B400]">
                ∞
              </p>
              <p className="text-white/70 mt-1 text-sm">Love & Dedication</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
