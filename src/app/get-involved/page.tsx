import { VolunteerForm } from "./volunteer-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Briefcase, Heart, Sparkles, Users, ArrowRight, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";

export default function GetInvolvedPage() {
  const involvementOptions = [
    {
      icon: Heart,
      title: "Volunteer",
      description: "Share your time as a teacher or mentor. Your support can directly impact a child's life and help build a stronger community.",
      benefits: ["Direct impact on children's lives", "Flexible scheduling", "Training provided", "Community of changemakers"],
    },
    {
      icon: Briefcase,
      title: "Internships",
      description: "Get hands-on experience in education and social work, contributing to real-world projects while learning valuable skills.",
      benefits: ["Real-world experience", "Professional mentorship", "Certificate of completion", "Network building"],
    },
    {
      icon: Handshake,
      title: "Partnerships",
      description: "Collaborate with us. We welcome partnerships with schools, NGOs, and organizations to amplify our collective impact.",
      benefits: ["CSR fulfillment", "Brand visibility", "Community engagement", "Meaningful impact"],
    },
  ];

  return (
    <>
      {/* Hero Section - Light Theme */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-b from-[#E5F6FF] to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4B400]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#005A9C]/10 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#005A9C]/20 px-6 py-3 rounded-full shadow-sm animate-fade-in">
              <Users className="h-4 w-4 text-[#F4B400]" />
              <span className="text-sm font-medium text-[#005A9C]">Join Our Community of Changemakers</span>
            </div>

            {/* Title - Centered */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-[#005A9C] animate-fade-in-up">
              Join <span className="text-[#F4B400]">Us</span>
            </h1>

            {/* Subtitle - Centered */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#005A9C]/70 text-center leading-relaxed animate-fade-in-up-delay">
              Your time, skills, and passion can help build a world free from discrimination. 
              Join our mission and make a lasting difference in the lives of underprivileged children.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 pt-4 animate-fade-in-up-delay">
              <div className="flex items-center gap-2 text-[#005A9C]/70">
                <Star className="h-5 w-5 text-[#F4B400]" />
                <span>100+ Active Volunteers</span>
              </div>
              <div className="flex items-center gap-2 text-[#005A9C]/70">
                <Heart className="h-5 w-5 text-red-500" />
                <span>2000+ Lives Impacted</span>
              </div>
              <div className="flex items-center gap-2 text-[#005A9C]/70">
                <Sparkles className="h-5 w-5 text-[#F4B400]" />
                <span>Endless Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section id="ways-to-help" className="bg-white py-16 md:py-20">
        <div className="container px-4 md:px-6">
          {/* Section Header - Centered */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#E5F6FF] border border-[#005A9C]/20 px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-[#F4B400]" />
              <span className="text-sm font-semibold text-[#005A9C]">Ways to Contribute</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#005A9C] text-center mb-4">
              Choose How You Want to <span className="text-[#F4B400]">Make a Difference</span>
            </h2>
            <p className="text-[#005A9C]/70 max-w-2xl mx-auto text-lg text-center">
              Whether you have a few hours a week or want to build a long-term partnership, 
              there's a perfect way for you to contribute to our mission.
            </p>
          </div>

          {/* Involvement Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {involvementOptions.map((option, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-[#E5F6FF] shadow-md bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="h-1.5 bg-[#005A9C]" />
                
                <CardHeader className="text-center pt-8 pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#E5F6FF] flex items-center justify-center group-hover:bg-[#F4B400]/10 transition-colors">
                    <option.icon className="w-8 h-8 text-[#005A9C]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#005A9C]">{option.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center pb-8 px-6">
                  <p className="text-[#005A9C]/70 mb-6 leading-relaxed">{option.description}</p>
                  
                  <div className="space-y-2 text-left mb-6">
                    {option.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-[#005A9C]/70">
                        <CheckCircle2 className="h-4 w-4 text-[#F4B400] flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#volunteer-form-section"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#005A9C] hover:text-[#F4B400] transition-all hover:gap-3"
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="bg-[#E5F6FF] py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white border border-[#005A9C]/20 px-4 py-1.5 rounded-full shadow-sm">
                  <Heart className="h-4 w-4 text-[#F4B400]" />
                  <span className="text-sm font-semibold text-[#005A9C]">Why Volunteer With Us</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#005A9C]">
                  Create Lasting Impact in <span className="text-[#F4B400]">Children's Lives</span>
                </h2>
                <p className="text-[#005A9C]/70 text-lg leading-relaxed">
                  When you volunteer with OJASH WELFARE Society, you become part of a family dedicated 
                  to breaking the cycle of poverty through education. Your contribution – whether teaching, 
                  mentoring, or organizing events – directly transforms a child's future.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { title: "Meaningful Work", desc: "See real impact in children's lives", color: "bg-green-100", iconColor: "text-green-600" },
                    { title: "Flexible Hours", desc: "Volunteer on your schedule", color: "bg-blue-100", iconColor: "text-[#005A9C]" },
                    { title: "Training Provided", desc: "Learn effective teaching methods", color: "bg-[#F4B400]/10", iconColor: "text-[#F4B400]" },
                    { title: "Great Community", desc: "Connect with like-minded people", color: "bg-purple-100", iconColor: "text-purple-600" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`p-2 ${item.color} rounded-lg`}>
                        <CheckCircle2 className={`h-5 w-5 ${item.iconColor}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#005A9C]">{item.title}</h4>
                        <p className="text-sm text-[#005A9C]/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-[#005A9C]/10">
                  <div className="space-y-6">
                    <div className="bg-[#E5F6FF] rounded-2xl p-6">
                      <div className="text-4xl text-[#F4B400] font-serif mb-2">"</div>
                      <p className="text-[#005A9C]/80 italic mb-4">
                        Volunteering with OJASH changed my perspective on life. Seeing the smile on a 
                        child's face when they learn to read their first sentence – that's priceless.
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#005A9C] rounded-full flex items-center justify-center text-white font-bold">
                          R
                        </div>
                        <div>
                          <p className="font-semibold text-[#005A9C]">Rahul Sharma</p>
                          <p className="text-sm text-[#005A9C]/60">Volunteer Teacher, 2 years</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-[#E5F6FF] rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-[#F4B400]">100+</p>
                        <p className="text-xs text-[#005A9C]/60">Volunteers</p>
                      </div>
                      <div className="bg-[#E5F6FF] rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-[#005A9C]">500+</p>
                        <p className="text-xs text-[#005A9C]/60">Children</p>
                      </div>
                      <div className="bg-[#E5F6FF] rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-[#F4B400]">15+</p>
                        <p className="text-xs text-[#005A9C]/60">Villages</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Registration Form Section */}
      <section id="volunteer-form-section" className="bg-white py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Section Header - Centered */}
            <div className="text-center space-y-4 mb-10">
              <div className="inline-flex items-center gap-2 bg-[#E5F6FF] border border-[#005A9C]/20 px-4 py-1.5 rounded-full">
                <Heart className="h-4 w-4 text-[#005A9C]" />
                <span className="text-sm font-semibold text-[#005A9C]">Start Your Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#005A9C] text-center">
                Register as a Volunteer
              </h2>
              <p className="text-[#005A9C]/70 text-lg max-w-xl mx-auto text-center">
                Fill out the form to express your interest. Our team will review your details 
                and contact you with the next steps to join our mission.
              </p>
            </div>

            {/* Form Card */}
            <Card className="rounded-2xl border border-[#E5F6FF] shadow-lg bg-white overflow-hidden">
              <div className="h-1.5 bg-[#005A9C]" />
              <CardContent className="p-8 md:p-10">
                <VolunteerForm />
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-[#005A9C]/60">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#F4B400]" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#F4B400]" />
                <span>Flexible scheduling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#F4B400]" />
                <span>Training provided</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#005A9C] text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
              Ready to Make a <span className="text-[#F4B400]">Difference</span>?
            </h2>
            <p className="text-white/70 text-lg mb-8 text-center">
              Every hour you give, every skill you share, creates ripples of change 
              that transform communities for generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#volunteer-form-section"
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full bg-[#F4B400] text-[#005A9C] hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Start Volunteering
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
