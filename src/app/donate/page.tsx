import { DonationTabs } from './donation-tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Utensils, PencilRuler, Heart, Sparkles, Shield, Users, Gift } from 'lucide-react';

export default function DonatePage() {
  const impactCards = [
    {
      icon: BookOpen,
      title: "Books & Supplies",
      description: "Provide essential books, stationery, uniforms, and learning tools to help children succeed academically.",
    },
    {
      icon: Utensils,
      title: "Nutritious Meals",
      description: "Support healthy meals that help students focus better, stay energized, and grow strong.",
    },
    {
      icon: PencilRuler,
      title: "Classroom Resources",
      description: "Help build better learning environments by enabling access to educational kits, furniture, and creative-learning materials.",
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
              <Gift className="h-4 w-4 text-[#F4B400]" />
              <span className="text-sm font-medium text-[#005A9C]">Give the Gift of Education</span>
            </div>

            {/* Title - Centered */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-[#005A9C] animate-fade-in-up">
              Make a <span className="text-[#F4B400]">Donation</span>
            </h1>

            {/* Subtitle - Centered */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#005A9C]/70 text-center leading-relaxed animate-fade-in-up-delay">
              Your small contribution can give a child dignity and education. 
              Every donation, big or small, creates ripples of change that transform lives forever.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 pt-4 animate-fade-in-up-delay">
              <div className="flex items-center gap-2 text-[#005A9C]/70">
                <Shield className="h-5 w-5 text-green-500" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2 text-[#005A9C]/70">
                <Users className="h-5 w-5 text-[#F4B400]" />
                <span>2000+ Lives Impacted</span>
              </div>
              <div className="flex items-center gap-2 text-[#005A9C]/70">
                <Heart className="h-5 w-5 text-red-500" />
                <span>Tax Deductible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Your Donation Helps Section */}
      <section id="donation-impact" className="bg-white py-16 md:py-20">
        <div className="container px-4 md:px-6">
          {/* Section Header - Centered */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#E5F6FF] border border-[#005A9C]/20 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-[#F4B400]" />
              <span className="text-sm font-semibold text-[#005A9C]">Your Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#005A9C] text-center mb-4">
              How Your Donation <span className="text-[#F4B400]">Helps</span>
            </h2>
            <p className="text-[#005A9C]/70 max-w-2xl mx-auto text-lg text-center">
              Every rupee you donate goes directly towards empowering children with education, 
              nutrition, and resources they need to thrive.
            </p>
          </div>

          {/* Impact Cards */}
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {impactCards.map((card, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-[#E5F6FF] shadow-md bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="h-1.5 bg-[#005A9C]" />
                
                <CardHeader className="text-center pt-8 pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#E5F6FF] flex items-center justify-center group-hover:bg-[#F4B400]/10 transition-colors">
                    <card.icon className="w-8 h-8 text-[#005A9C]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#005A9C]">{card.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center pb-8 px-6">
                  <p className="text-[#005A9C]/70 leading-relaxed">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section id="donation-options" className="bg-[#E5F6FF] py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Section Header - Centered */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-white border border-[#005A9C]/20 px-4 py-2 rounded-full mb-4 shadow-sm">
                <Heart className="h-4 w-4 text-[#005A9C]" />
                <span className="text-sm font-semibold text-[#005A9C]">Choose Your Way</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#005A9C] text-center mb-4">
                Make Your <span className="text-[#F4B400]">Contribution</span>
              </h2>
              <p className="text-[#005A9C]/70 max-w-xl mx-auto text-center">
                Select your preferred payment method below. All transactions are secure and encrypted.
              </p>
            </div>

            {/* Donation Tabs */}
            <DonationTabs />

            {/* Trust Footer */}
            <div className="mt-10 text-center">
              <div className="flex flex-wrap justify-center gap-6 text-sm text-[#005A9C]/60">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span>80G Tax Benefits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#F4B400]" />
                  <span>Instant Receipt</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-[#005A9C]/50">
                OJASH WELFARE Society is a registered non-profit organization. All donations are tax-deductible under Section 80G of the Income Tax Act.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#005A9C] text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6">💙</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">
              Every Rupee <span className="text-[#F4B400]">Counts</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto text-center">
              Your generosity today shapes a brighter tomorrow. Together, we can ensure 
              every child has access to education and opportunity.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="text-center p-4 rounded-2xl bg-white/10 border border-white/20">
                <p className="text-2xl font-bold text-[#F4B400]">₹500</p>
                <p className="text-xs text-white/60">School Kit</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/10 border border-white/20">
                <p className="text-2xl font-bold text-[#F4B400]">₹1000</p>
                <p className="text-xs text-white/60">Monthly Meals</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/10 border border-white/20">
                <p className="text-2xl font-bold text-[#F4B400]">₹5000</p>
                <p className="text-xs text-white/60">Year's Education</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
