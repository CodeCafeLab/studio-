import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Newspaper, HeartHandshake, Sparkles, Eye, Target, BookOpen, Heart, Users, Utensils, ShieldCheck, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { projects, blogPosts, partners, successStories } from '@/lib/data';
import Gallery from '@/components/Gallery';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  const projectRoutes: Record<number, string> = {
    1: '/projects/free-education-classes',
    2: '/projects/food-nutrition-program',
    3: '/projects/women-youth-empowerment',
    4: '/projects/anti-discrimination-campaigns',
  };

  const projectIcons: Record<number, React.ReactNode> = {
    1: <BookOpen className="w-6 h-6" />,
    2: <Utensils className="w-6 h-6" />,
    3: <Users className="w-6 h-6" />,
    4: <ShieldCheck className="w-6 h-6" />,
  };

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-[85vh] flex items-center justify-center text-center text-white py-0">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover object-center"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          {/* Gradient Overlay with OJASH colors */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#035A9D]/40" />
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#F2B705]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-40 right-20 w-48 h-48 bg-[#F2B705]/15 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#035A9D]/20 rounded-full blur-2xl animate-pulse delay-500" />
          </div>

          <div className="relative z-10 container px-4 md:px-6 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full animate-fade-in">
              <Sparkles className="h-4 w-4 text-[#F2B705]" />
              <span className="text-sm font-medium">Empowering Communities Since 2024</span>
            </div>

            {/* Main Heading with Gradient Effect */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center animate-fade-in-up">
              <span className="gradient-text-ojash drop-shadow-lg">
                OJASH WELFARE SOCIETY
              </span>
            </h1>

            {/* Subheading with fade-in animation */}
            <div className="space-y-3 animate-fade-in-up-delay">
              <p className="max-w-[700px] mx-auto text-xl md:text-2xl font-medium text-white/95 tracking-wide text-center">
                हर हाथ, एक नई उम्मीद | Every Hand, A New Hope
              </p>
              <p className="max-w-[700px] mx-auto text-lg md:text-xl text-white/80 text-center">
                Empowering children through education in Bandikui (Dausa)
              </p>
            </div>

            {/* CTA Buttons with Events page style animations */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up-delay">
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <HeartHandshake className="h-5 w-5" />
                Support Us
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full btn-donate-hover transition-all duration-300"
              >
                Donate Now
                <ArrowRight className="h-5 w-5" />
              </Link>
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
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section id="mission-vision" className="bg-white py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-[#E5F6FF] border border-[#035A9D]/20 px-4 py-2 rounded-full mb-4">
                <Sparkles className="h-4 w-4 text-[#F2B705]" />
                <span className="text-sm font-semibold text-[#035A9D]">Our Purpose</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#035A9D] text-center">
                Vision & Mission
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
              {/* Vision Card */}
              <div className="bg-[#E5F6FF] rounded-2xl p-8 border border-[#035A9D]/10 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#F2B705]/20">
                    <Eye className="w-8 h-8 text-[#F2B705]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#035A9D]">Our Vision</h3>
                </div>
                <p className="text-[#035A9D]/80 text-lg leading-relaxed">
                  A future where every child receives equal access to education, healthcare, and opportunities—regardless of background. We strive to build empowered communities with dignity and hope.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-[#E5F6FF] rounded-2xl p-8 border border-[#035A9D]/10 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-[#035A9D]/20">
                    <Target className="w-8 h-8 text-[#035A9D]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#035A9D]">Our Mission</h3>
                </div>
                <p className="text-[#035A9D]/80 text-lg leading-relaxed">
                  To support underprivileged children with quality education, nutrition, healthcare, and essential resources, while creating safe learning environments for holistic growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs & Activities Section */}
        <section id="programs" className="bg-[#E5F6FF] py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 bg-white border border-[#035A9D]/20 px-4 py-2 rounded-full shadow-sm">
                <Heart className="h-4 w-4 text-[#F2B705]" />
                <span className="text-sm font-semibold text-[#035A9D]">Making a Difference</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#035A9D] text-center">Programs & Activities</h2>
              <p className="max-w-[700px] mx-auto text-[#035A9D]/70 md:text-xl text-center">
                See how we're creating change and empowering communities.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((project) => {
                const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
                return (
                  <Card 
                    key={project.id} 
                    className="overflow-hidden group rounded-2xl border border-[#035A9D]/10 shadow-md bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <CardHeader className="p-0 relative overflow-hidden">
                      {projectImage && (
                        <div className="overflow-hidden flex items-center justify-center">
                          <Image
                            src={projectImage.imageUrl}
                            alt={projectImage.description}
                            width={600}
                            height={400}
                            className="w-full h-52 object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                            data-ai-hint={projectImage.imageHint}
                          />
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-[#035A9D]">
                          {projectIcons[project.id]}
                          {project.category}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl mb-3 text-[#035A9D]">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-3 mb-4 text-[#035A9D]/70">{project.description}</CardDescription>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-[#F2B705]">{project.impact}</span>
                        <Link 
                          href={projectRoutes[project.id] || '/projects'}
                          className="inline-flex items-center gap-1 text-[#035A9D] font-bold text-sm hover:text-[#F2B705] transition-colors"
                        >
                          Learn More <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <Gallery />

        {/* Success Stories Section - Modern Card Design */}
        <section id="success-stories" className="bg-white py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 bg-[#F2B705]/10 border border-[#F2B705]/30 px-4 py-2 rounded-full">
                <Sparkles className="h-4 w-4 text-[#F2B705]" />
                <span className="text-sm font-semibold text-[#035A9D]">Real Impact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#035A9D] text-center">Success Stories</h2>
              <p className="max-w-[700px] mx-auto text-[#035A9D]/70 md:text-xl text-center">
                Real stories of children who found confidence and opportunity through education.
              </p>
            </div>
            
            {/* Modern Testimonial Cards - 3 columns on desktop, stacked on mobile */}
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {successStories.map((story, index) => {
                const storyImage = PlaceHolderImages.find(p => p.id === story.imageId);
                // Alternate accent colors between yellow and blue
                const accentColor = index % 2 === 0 ? '#F2B705' : '#035A9D';
                
                return (
                  <div 
                    key={story.id} 
                    className="bg-white rounded-2xl overflow-hidden border border-[#E5F6FF] shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col"
                  >
                    {/* Image on Top */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      {storyImage && (
                        <Image
                          src={storyImage.imageUrl}
                          alt={storyImage.description}
                          fill
                          className="object-cover object-center"
                          data-ai-hint={storyImage.imageHint}
                        />
                      )}
                    </div>
                    
                    {/* Colored Accent Bar */}
                    <div 
                      className="h-1.5 w-full" 
                      style={{ backgroundColor: accentColor }}
                    />
                    
                    {/* Card Content */}
                    <div className="p-6 flex flex-col items-center text-center flex-grow">
                      {/* Name in Bold */}
                      <h3 className="text-xl font-bold text-[#035A9D] mb-4">
                        {story.name}
                      </h3>
                      
                      {/* Testimonial Quote - Centered */}
                      <p className="text-[#035A9D]/70 leading-relaxed mb-6 flex-grow italic">
                        "{story.quote}"
                      </p>
                      
                      {/* Star Rating Icons */}
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className="w-5 h-5 fill-[#F2B705] text-[#F2B705]" 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
              
              {/* Add a third testimonial card for better layout if only 2 exist */}
              {successStories.length === 2 && (
                <div className="bg-white rounded-2xl overflow-hidden border border-[#E5F6FF] shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
                  {/* Image on Top */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#E5F6FF] flex items-center justify-center">
                    <div className="text-center p-8">
                      <Heart className="w-16 h-16 text-[#035A9D]/30 mx-auto mb-4" />
                      <p className="text-[#035A9D]/50 font-medium">More stories coming soon</p>
                    </div>
                  </div>
                  
                  {/* Colored Accent Bar */}
                  <div className="h-1.5 w-full bg-[#035A9D]" />
                  
                  {/* Card Content */}
                  <div className="p-6 flex flex-col items-center text-center flex-grow">
                    {/* Name in Bold */}
                    <h3 className="text-xl font-bold text-[#035A9D] mb-4">
                      Your Story
                    </h3>
                    
                    {/* Testimonial Quote - Centered */}
                    <p className="text-[#035A9D]/70 leading-relaxed mb-6 flex-grow italic">
                      "Every child we support has a unique journey. Your contribution helps us create more success stories like these."
                    </p>
                    
                    {/* Star Rating Icons */}
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className="w-5 h-5 fill-[#F2B705] text-[#F2B705]" 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Latest News & Events Section */}
        <section id="news" className="bg-[#E5F6FF] py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 bg-white border border-[#035A9D]/20 px-4 py-2 rounded-full shadow-sm">
                <Newspaper className="h-4 w-4 text-[#035A9D]" />
                <span className="text-sm font-semibold text-[#035A9D]">Stay Updated</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#035A9D] text-center">
                Latest News & Events
              </h2>
              <p className="max-w-[700px] mx-auto text-[#035A9D]/70 md:text-xl text-center">
                Stay updated with our recent activities and stories of change.
              </p>
            </div>
            <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-6xl mx-auto">
              <CarouselContent className="-ml-4">
                {blogPosts.slice(0, 6).map((post) => (
                  <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full rounded-2xl overflow-hidden group border border-[#035A9D]/10 shadow-md bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <CardContent className="flex flex-col items-start p-0">
                        <div className="relative w-full h-52 overflow-hidden flex items-center justify-center">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                          <div className="absolute bottom-3 left-3">
                            <span className="bg-[#F2B705] text-[#035A9D] text-xs font-semibold px-3 py-1 rounded-full">
                              {post.date}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 space-y-4">
                          <CardTitle className="text-lg line-clamp-2 text-[#035A9D] group-hover:text-[#F2B705] transition-colors">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-3 text-[#035A9D]/70">
                            {post.summary}
                          </CardDescription>
                          <Link 
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center gap-2 text-[#035A9D] font-bold text-sm hover:text-[#F2B705] transition-all hover:gap-3"
                          >
                            Read More <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12 bg-white border-2 border-[#035A9D]/20 hover:bg-[#035A9D] hover:text-white hover:border-[#035A9D] transition-all" />
              <CarouselNext className="hidden md:flex -right-12 bg-white border-2 border-[#035A9D]/20 hover:bg-[#035A9D] hover:text-white hover:border-[#035A9D] transition-all" />
            </Carousel>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="bg-white py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 bg-[#E5F6FF] border border-[#035A9D]/20 px-4 py-2 rounded-full">
                <HeartHandshake className="h-4 w-4 text-[#F2B705]" />
                <span className="text-sm font-semibold text-[#035A9D]">Together We Grow</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#035A9D] text-center">Our Partners & Supporters</h2>
              <p className="max-w-[700px] mx-auto text-[#035A9D]/70 md:text-xl text-center">
                We are grateful for the support of our partners who make our work possible.
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-12">
              {partners.map(partner => (
                <div 
                  key={partner.id}
                  className="text-xl font-semibold px-8 py-4 bg-[#E5F6FF] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#035A9D]/10 text-[#035A9D] hover:text-[#F2B705] hover:border-[#F2B705]/30"
                >
                  {partner.name}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
