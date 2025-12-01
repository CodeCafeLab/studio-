import { events } from "@/lib/data";
import { EventCard } from "@/components/EventCard";
import { Calendar, Heart, Users, MapPin, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
  // Separate featured and regular events
  const featuredEvents = events.filter((e) => e.featured);
  const regularEvents = events.filter((e) => !e.featured);

  // Get unique categories
  const categories = [...new Set(events.map((e) => e.category))];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-slate-900 via-primary/90 to-slate-800 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
          
          {/* Floating shapes */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-300" />
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-green-400 rounded-full animate-bounce delay-500" />
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-700" />
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container relative z-10 py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full animate-fade-in">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium">Making a Difference in Rural India</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Our Events &{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Initiatives
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed">
              From the dusty villages of Rajasthan to the hearts of our community — 
              bringing healthcare, education, and hope to those who need it most.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-8">
              <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/20 rounded-xl">
                    <Users className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-3xl font-bold">2000+</p>
                    <p className="text-xs text-white/70">Lives Touched</p>
                  </div>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-xl">
                    <Calendar className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-3xl font-bold">{events.length}+</p>
                    <p className="text-xs text-white/70">Events Organized</p>
                  </div>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-xl">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-3xl font-bold">20+</p>
                    <p className="text-xs text-white/70">Villages Served</p>
                  </div>
                </div>
              </div>
              <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/20 rounded-xl">
                    <Heart className="h-6 w-6 text-red-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-3xl font-bold">100%</p>
                    <p className="text-xs text-white/70">Free Services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Heart className="h-5 w-5" />
                Support Our Mission
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Join as Volunteer
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L48 108C96 96 192 72 288 60C384 48 480 48 576 54C672 60 768 72 864 78C960 84 1056 84 1152 78C1248 72 1344 60 1392 54L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
              fill="rgb(249 250 251)"
            />
          </svg>
        </div>
      </section>

      {/* Category Pills */}
      <section className="bg-gray-50 py-8 sticky top-14 z-40 border-b border-gray-100 backdrop-blur-md bg-gray-50/95">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <span className="text-sm text-muted-foreground whitespace-nowrap">Filter by:</span>
            <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-full whitespace-nowrap transition-all hover:shadow-md">
              All Events
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-full whitespace-nowrap border border-gray-200 hover:border-primary hover:text-primary transition-all"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="bg-gray-50 py-10 md:py-14">
        <div className="container px-4 md:px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-200 px-4 py-1.5 rounded-full mb-4">
                <span className="text-amber-600 text-lg">⭐</span>
                <span className="text-sm font-semibold text-amber-700">Highlighted Events</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">
                Featured Initiatives
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Our most impactful programmes that have transformed hundreds of lives 
                across the villages of Dausa district.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{featuredEvents.length} Featured Events</span>
            </div>
          </div>

          {/* Featured Events Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
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
      <section className="bg-white py-10 md:py-14">
        <div className="container px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 px-4 py-1.5 rounded-full mb-4">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">All Initiatives</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Events & Programmes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Every event we organize brings us closer to our vision of an empowered, 
              healthy, and educated rural India.
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Quote Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 py-10 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-[100px]" />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl md:text-8xl text-primary/30 font-serif mb-4">"</div>
            <blockquote className="text-2xl md:text-4xl font-medium text-white leading-relaxed mb-8">
              सेवा परमो धर्म:
            </blockquote>
            <p className="text-lg md:text-xl text-white/80 italic mb-6">
              "Service to humanity is the highest duty"
            </p>
            <p className="text-white/60 text-sm">
              — Guiding principle of OJASH WELFARE Society
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Teaser */}
      <section className="bg-gradient-to-br from-primary/5 via-orange-50 to-yellow-50 py-10">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-yellow-500/10 to-primary/10 rounded-full blur-2xl" />
              
              <div className="relative z-10 text-center space-y-6">
                <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium text-green-700">More Events Coming Soon</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Stay Updated on Our Journey
                </h2>

                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  We're constantly planning new initiatives to serve our community. 
                  Join us as a volunteer or supporter to be part of this beautiful journey 
                  of service and transformation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Contact Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/get-involved"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Become a Volunteer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Summary Footer */}
      <section className="bg-slate-900 text-white py-10">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Our Impact in Numbers</h3>
            <p className="text-white/60">Every number represents a life touched, a hope kindled</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {events.length}+
              </p>
              <p className="text-white/70 mt-2">Major Events</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                2000+
              </p>
              <p className="text-white/70 mt-2">Lives Touched</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                100+
              </p>
              <p className="text-white/70 mt-2">Volunteers</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                ∞
              </p>
              <p className="text-white/70 mt-2">Love & Dedication</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
