import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { projects } from '@/lib/data';
import { BarChart3, ArrowRight, BookOpen, Utensils, Users, ShieldCheck, Heart, Sparkles, Target, MapPin } from 'lucide-react';

const projectRoutes: Record<number, string> = {
  1: '/projects/free-education-classes',
  2: '/projects/food-nutrition-program',
  3: '/projects/women-youth-empowerment',
  4: '/projects/anti-discrimination-campaigns',
};

const projectIcons: Record<number, React.ReactNode> = {
  1: <BookOpen className="w-5 h-5" />,
  2: <Utensils className="w-5 h-5" />,
  3: <Users className="w-5 h-5" />,
  4: <ShieldCheck className="w-5 h-5" />,
};

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Education': { bg: 'bg-[#035A9D]/10', text: 'text-[#035A9D]', border: 'border-[#035A9D]/20' },
  'Health': { bg: 'bg-green-500/10', text: 'text-green-600', border: 'border-green-200' },
  'Empowerment': { bg: 'bg-[#F2B705]/10', text: 'text-[#035A9D]', border: 'border-[#F2B705]/30' },
  'Advocacy': { bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-200' },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section - Light Theme (Matching Other Pages) */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-b from-[#E5F6FF] to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F2B705]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#035A9D]/10 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#035A9D]/20 px-6 py-3 rounded-full shadow-sm animate-fade-in">
              <Sparkles className="h-4 w-4 text-[#F2B705]" />
              <span className="text-sm font-medium text-[#035A9D]">Creating Change Together</span>
            </div>

            {/* Title - Centered */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-[#035A9D] animate-fade-in-up">
              Our Programs & <span className="text-[#F2B705]">Activities</span>
            </h1>

            {/* Subtitle - Centered */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#035A9D]/70 text-center leading-relaxed animate-fade-in-up-delay">
              Explore our core initiatives aimed at fostering equality, empowerment, 
              and educational opportunities for underprivileged children.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 pt-6 animate-fade-in-up-delay">
              <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-[#E5F6FF]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#F2B705]/10 rounded-xl">
                    <Target className="h-5 w-5 text-[#F2B705]" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-[#035A9D]">{projects.length}</p>
                    <p className="text-xs text-[#035A9D]/60">Active Programs</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-[#E5F6FF]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-xl">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-[#035A9D]">500+</p>
                    <p className="text-xs text-[#035A9D]/60">Children Supported</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-[#E5F6FF]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#035A9D]/10 rounded-xl">
                    <MapPin className="h-5 w-5 text-[#035A9D]" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-[#035A9D]">15+</p>
                    <p className="text-xs text-[#035A9D]/60">Villages Reached</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-[#E5F6FF]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-xl">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold text-[#035A9D]">100%</p>
                    <p className="text-xs text-[#035A9D]/60">Free Services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 bg-[#F2B705] hover:bg-[#035A9D] text-[#035A9D] hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Heart className="h-5 w-5" />
                Support Our Programs
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 bg-[#035A9D] hover:bg-[#F2B705] text-white hover:text-[#035A9D] font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Join as Volunteer
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section id="project-list" className="bg-[#E5F6FF] py-16 md:py-20">
        <div className="container px-4 md:px-6">
          {/* Section Header - Centered */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-[#035A9D]/20 px-4 py-1.5 rounded-full mb-4 shadow-sm">
              <Sparkles className="h-4 w-4 text-[#F2B705]" />
              <span className="text-sm font-semibold text-[#035A9D]">Making a Difference</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#035A9D] text-center mb-4">
              Our Initiatives
            </h2>
            <p className="text-[#035A9D]/70 max-w-2xl mx-auto text-lg text-center">
              Each program is designed to address specific challenges faced by underprivileged 
              communities and create lasting positive change.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
            {projects.map((project) => {
              const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
              const colors = categoryColors[project.category] || categoryColors['Education'];
              
              return (
                <Card 
                  key={project.id} 
                  className="group overflow-hidden rounded-2xl border border-[#035A9D]/10 shadow-md bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden flex items-center justify-center">
                    {projectImage && (
                      <Image
                        src={projectImage.imageUrl}
                        alt={projectImage.description}
                        fill
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                        data-ai-hint={projectImage.imageHint}
                      />
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <div className={`inline-flex items-center gap-1.5 ${colors.bg} backdrop-blur-md ${colors.text} border ${colors.border} px-3 py-1.5 rounded-full text-xs font-semibold`}>
                        {projectIcons[project.id]}
                        <span>{project.category}</span>
                      </div>
                    </div>

                    {/* Impact Badge */}
                    <div className="absolute bottom-3 right-3">
                      <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-[#035A9D] px-3 py-1.5 rounded-full text-xs font-medium">
                        <BarChart3 className="w-3.5 h-3.5 text-[#F2B705]" />
                        <span>{project.impact}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-bold text-[#035A9D] mb-3 group-hover:text-[#F2B705] transition-colors line-clamp-1">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-[#035A9D]/70 text-sm leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </CardDescription>
                    
                    {/* Learn More Button */}
                    <Link
                      href={projectRoutes[project.id] || '/projects'}
                      className="inline-flex items-center gap-2 text-[#035A9D] font-bold text-sm group/btn hover:text-[#F2B705] transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#E5F6FF] rounded-3xl shadow-lg p-8 md:p-12 relative overflow-hidden border border-[#035A9D]/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F2B705]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#035A9D]/10 rounded-full blur-2xl" />
              
              <div className="relative z-10 text-center space-y-6">
                <div className="inline-flex items-center gap-2 bg-white border border-[#035A9D]/20 px-4 py-2 rounded-full shadow-sm">
                  <Heart className="h-4 w-4 text-[#F2B705]" />
                  <span className="text-sm font-semibold text-[#035A9D]">Join Our Mission</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[#035A9D] text-center">
                  Help Us Create More <span className="text-[#F2B705]">Impact</span>
                </h2>

                <p className="text-[#035A9D]/70 text-lg max-w-2xl mx-auto text-center leading-relaxed">
                  Your support enables us to expand these programs and reach more children in need. 
                  Together, we can build a brighter future for underprivileged communities.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Link
                    href="/donate"
                    className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full bg-[#F2B705] text-[#035A9D] hover:bg-[#035A9D] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Donate Now
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/get-involved"
                    className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full bg-[#035A9D] text-white hover:bg-[#F2B705] hover:text-[#035A9D] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Become a Volunteer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section - Light Theme */}
      <section className="bg-[#035A9D] text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center text-white">Our Impact in Numbers</h3>
            <p className="text-white/70 text-center">Every number represents a life touched, a hope kindled</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="text-center p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-3xl md:text-4xl font-bold text-[#F2B705]">{projects.length}</p>
              <p className="text-white/70 mt-1 text-sm">Core Programs</p>
            </div>
            <div className="text-center p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-3xl md:text-4xl font-bold text-[#F2B705]">500+</p>
              <p className="text-white/70 mt-1 text-sm">Children Supported</p>
            </div>
            <div className="text-center p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-3xl md:text-4xl font-bold text-[#F2B705]">50+</p>
              <p className="text-white/70 mt-1 text-sm">Active Volunteers</p>
            </div>
            <div className="text-center p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <p className="text-3xl md:text-4xl font-bold text-[#F2B705]">∞</p>
              <p className="text-white/70 mt-1 text-sm">Love & Dedication</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
