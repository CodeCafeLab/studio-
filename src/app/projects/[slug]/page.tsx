import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpen, Utensils, Users, ShieldCheck, Heart, Target, CheckCircle2, ArrowRight, Sparkles, Calendar, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { projects } from '@/lib/data';

const projectDetails: Record<string, {
  slug: string;
  highlights: string[];
  approach: string[];
  outcomes: string[];
  galleryImages: string[];
}> = {
  'free-education-classes': {
    slug: 'free-education-classes',
    highlights: [
      'Daily classes for 100+ children from SC/ST communities',
      'Safe and inclusive learning environment',
      'Qualified volunteer teachers with child-friendly approach',
      'Free textbooks, notebooks, and stationery provided',
      'Focus on building confidence alongside academics',
    ],
    approach: [
      'We provide free, high-quality education to children who face discrimination in mainstream schools.',
      'Our classes are held in community spaces where children feel comfortable and respected.',
      'We use activity-based learning methods, songs, games, and storytelling to make education engaging.',
      'Each child receives personalized attention to address their unique learning needs.',
    ],
    outcomes: [
      '100+ children receiving daily education',
      '85% improvement in basic literacy and numeracy',
      '40% increase in school attendance among enrolled students',
      'Multiple students have progressed to higher education',
    ],
    galleryImages: ['/gallery/1.jpg', '/gallery/2.jpg', '/gallery/3.jpg'],
  },
  'food-nutrition-program': {
    slug: 'food-nutrition-program',
    highlights: [
      'Nutritious meals served daily to 100+ children',
      'Balanced diet designed with local nutritionists',
      'Fresh, locally-sourced ingredients',
      'Hygienic preparation in community kitchen',
      'Special nutrition supplements for malnourished children',
    ],
    approach: [
      'We believe hungry children cannot focus on learning, so nutrition is integral to our education mission.',
      'Our community kitchen operates daily with local women volunteers preparing fresh meals.',
      'We serve breakfast and lunch to ensure children have energy for their studies.',
      'Regular health checkups help us identify and address nutritional deficiencies.',
    ],
    outcomes: [
      '100+ healthy meals served every day',
      '30% reduction in malnutrition among enrolled children',
      'Improved concentration and attendance in classes',
      'Healthier, more active children in our programs',
    ],
    galleryImages: ['/gallery/4.jpg', '/gallery/5.jpg', '/gallery/6.jpg'],
  },
  'women-youth-empowerment': {
    slug: 'women-youth-empowerment',
    highlights: [
      'Vocational training for mothers and young adults',
      'Financial literacy and banking awareness',
      'Self-help group formation and support',
      'Skill development in tailoring, handicrafts, and more',
      'Creating sustainable income opportunities',
    ],
    approach: [
      'Empowered mothers are the strongest advocates for their children\'s education.',
      'We provide vocational training in skills like tailoring, mehendi, and handicrafts.',
      'Financial literacy workshops teach savings, banking, and government scheme access.',
      'Self-help groups create support networks and collective economic opportunities.',
    ],
    outcomes: [
      '50+ women and youth trained in vocational skills',
      '20+ self-help groups formed across villages',
      '40% increase in family income for participants',
      'Stronger community support for children\'s education',
    ],
    galleryImages: ['/gallery/7.jpg', '/images/IMG-20250927-WA0002.jpg', '/images/IMG-20250927-WA0003.jpg'],
  },
  'anti-discrimination-campaigns': {
    slug: 'anti-discrimination-campaigns',
    highlights: [
      'Community awareness programs on equality',
      'School sensitization workshops',
      'Legal awareness about anti-discrimination laws',
      'Dialogue sessions with village leaders',
      'Support for families facing discrimination',
    ],
    approach: [
      'We actively challenge caste-based discrimination through education and dialogue.',
      'Community meetings bring together people from all backgrounds for respectful conversation.',
      'We work with schools to create inclusive environments for all children.',
      'Legal awareness helps families understand their rights and seek justice when needed.',
    ],
    outcomes: [
      '5,000+ community members reached through campaigns',
      '15 villages with active anti-discrimination committees',
      'Reduced incidents of discrimination in partner schools',
      'Increased community solidarity and mutual respect',
    ],
    galleryImages: ['/images/IMG-20250927-WA0004.jpg', '/images/IMG-20250927-WA0005.jpg', '/images/IMG-20250927-WA0006.jpg'],
  },
};

const projectIcons: Record<number, React.ReactNode> = {
  1: <BookOpen className="w-8 h-8" />,
  2: <Utensils className="w-8 h-8" />,
  3: <Users className="w-8 h-8" />,
  4: <ShieldCheck className="w-8 h-8" />,
};

const slugToId: Record<string, number> = {
  'free-education-classes': 1,
  'food-nutrition-program': 2,
  'women-youth-empowerment': 3,
  'anti-discrimination-campaigns': 4,
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectId = slugToId[slug];
  
  if (!projectId) {
    notFound();
  }

  const project = projects.find(p => p.id === projectId);
  const details = projectDetails[slug];
  
  if (!project || !details) {
    notFound();
  }

  const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);

  return (
    <>
      {/* Hero Section - Light Theme (Consistent with other pages) */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-b from-[#E5F6FF] to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F2B705]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#035A9D]/10 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 py-16 md:py-20">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-[#035A9D]/70 hover:text-[#035A9D] mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Programs
          </Link>
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#035A9D]/20 px-5 py-2.5 rounded-full shadow-sm">
              <div className="text-[#F2B705]">{projectIcons[projectId]}</div>
              <span className="text-sm font-semibold text-[#035A9D]">{project.category}</span>
            </div>
            
            {/* Title - Centered */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-[#035A9D]">
              {project.title}
            </h1>
            
            {/* Description - Centered */}
            <p className="text-lg md:text-xl text-[#035A9D]/70 max-w-2xl mx-auto text-center leading-relaxed">
              {project.description}
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-[#E5F6FF]">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-[#F2B705]" />
                  <span className="font-semibold text-[#035A9D]">{project.impact}</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-[#E5F6FF]">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#035A9D]" />
                  <span className="font-semibold text-[#035A9D]">Bandikui, Dausa</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl px-5 py-3 shadow-sm border border-[#E5F6FF]">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#035A9D]" />
                  <span className="font-semibold text-[#035A9D]">Ongoing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Image & Highlights */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Image */}
            <div className="relative">
              {projectImage && (
                <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E5F6FF] flex items-center justify-center">
                  <Image
                    src={projectImage.imageUrl}
                    alt={projectImage.description}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover object-center"
                    data-ai-hint={projectImage.imageHint}
                  />
                </div>
              )}
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#F2B705]/10 rounded-2xl -z-10" />
            </div>

            {/* Highlights */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E5F6FF] border border-[#035A9D]/20 px-4 py-2 rounded-full mb-6">
                <Target className="h-4 w-4 text-[#F2B705]" />
                <span className="text-sm font-semibold text-[#035A9D]">Program Highlights</span>
              </div>
              
              <h2 className="text-3xl font-bold text-[#035A9D] mb-6">What We Do</h2>
              
              <ul className="space-y-4">
                {details.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#F2B705] flex-shrink-0 mt-0.5" />
                    <span className="text-[#035A9D]/80 text-lg">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-20 bg-[#E5F6FF]">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white border border-[#035A9D]/20 px-4 py-2 rounded-full mb-4 shadow-sm">
                <Heart className="h-4 w-4 text-[#035A9D]" />
                <span className="text-sm font-semibold text-[#035A9D]">Our Approach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#035A9D] text-center">How We Make It Happen</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {details.approach.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-[#035A9D]/10 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#F2B705] flex items-center justify-center text-[#035A9D] font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-[#035A9D]/80 leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#F2B705]/10 border border-[#F2B705]/30 px-4 py-2 rounded-full mb-4">
              <Target className="h-4 w-4 text-[#F2B705]" />
              <span className="text-sm font-semibold text-[#035A9D]">Impact & Outcomes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#035A9D] text-center">The Difference We're Making</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {details.outcomes.map((outcome, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-[#E5F6FF] border border-[#035A9D]/10 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F2B705] flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <p className="text-[#035A9D] font-medium">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-[#E5F6FF]">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-[#035A9D]/20 px-4 py-2 rounded-full mb-4 shadow-sm">
              <Sparkles className="h-4 w-4 text-[#F2B705]" />
              <span className="text-sm font-semibold text-[#035A9D]">Gallery</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#035A9D] text-center">Moments from Our Program</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {details.galleryImages.map((img, index) => (
              <div 
                key={index}
                className="rounded-2xl overflow-hidden shadow-md border border-[#035A9D]/10 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="aspect-[4/3] relative overflow-hidden flex items-center justify-center">
                  <Image
                    src={img}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light Theme */}
      <section className="py-16 md:py-20 bg-[#035A9D] text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
              Support This <span className="text-[#F2B705]">Program</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 text-center">
              Your contribution can help us expand this program and reach more children in need. 
              Every donation makes a real difference in transforming lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full bg-[#F2B705] text-[#035A9D] hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Donate Now
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'free-education-classes' },
    { slug: 'food-nutrition-program' },
    { slug: 'women-youth-empowerment' },
    { slug: 'anti-discrimination-campaigns' },
  ];
}
