import Image from "next/image";
import { ContactForm } from "./contact-form";
import { Mail, Phone, MapPin, MessageCircle, Clock, Sparkles } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ContactPage() {
  const mapImage = PlaceHolderImages.find(p => p.id === 'map');
  
  return (
    <>
      {/* Hero Section - Light Theme */}
      <section className="relative min-h-[45vh] flex items-center bg-gradient-to-b from-[#E5F6FF] to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4B400]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#005A9C]/10 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 text-center py-16 md:py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#005A9C]/20 px-5 py-2.5 rounded-full shadow-sm mb-8 animate-fade-in">
            <MessageCircle className="h-4 w-4 text-[#F4B400]" />
            <span className="text-sm font-medium text-[#005A9C]">We're Here to Help</span>
          </div>

          {/* Title - Centered */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center text-[#005A9C] mb-6 animate-fade-in-up">
            Contact <span className="text-[#F4B400]">Us</span>
          </h1>

          {/* Subtitle - Centered */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#005A9C]/70 text-center leading-relaxed animate-fade-in-up-delay">
            We'd love to hear from you. Whether you have a question, a proposal, or simply want to say hello, 
            our team is here to assist you. Reach out anytime—we're always happy to help.
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 animate-fade-in-up-delay">
            <div className="flex items-center gap-2 text-[#005A9C]/70">
              <Clock className="h-5 w-5 text-[#F4B400]" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2 text-[#005A9C]/70">
              <Sparkles className="h-5 w-5 text-[#F4B400]" />
              <span>Friendly & Professional Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section id="contact-details" className="bg-white py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
            
            {/* Left Side - Contact Form */}
            <div className="bg-[#E5F6FF] rounded-3xl shadow-lg p-8 md:p-10 relative overflow-hidden border border-[#005A9C]/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4B400]/10 rounded-bl-[100px]" />
              
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-white border border-[#005A9C]/20 px-4 py-1.5 rounded-full mb-4 shadow-sm">
                    <Mail className="h-4 w-4 text-[#005A9C]" />
                    <span className="text-sm font-semibold text-[#005A9C]">Write to Us</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#005A9C] mb-3">
                    Send us a <span className="text-[#F4B400]">Message</span>
                  </h2>
                  <p className="text-[#005A9C]/70 leading-relaxed">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Right Side - Contact Info & Map */}
            <div className="space-y-8">
              {/* Get in Touch Card */}
              <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-[#E5F6FF]">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-[#E5F6FF] border border-[#005A9C]/20 px-4 py-1.5 rounded-full mb-4">
                    <Phone className="h-4 w-4 text-[#F4B400]" />
                    <span className="text-sm font-semibold text-[#005A9C]">Reach Out</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#005A9C]">
                    Get in <span className="text-[#F4B400]">Touch</span>
                  </h2>
                </div>

                {/* Contact Info Blocks */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-[#E5F6FF] rounded-2xl hover:bg-[#005A9C]/5 transition-colors group">
                    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#005A9C]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#005A9C] text-lg mb-1">Our Office</h3>
                      <p className="text-[#005A9C]/70 leading-relaxed">
                        Greta Bhagwan Shiv Colony,<br />
                        Gudha Road, Bandikui,<br />
                        Dausa, Rajasthan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-[#E5F6FF] rounded-2xl hover:bg-[#F4B400]/5 transition-colors group">
                    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#F4B400]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#005A9C] text-lg mb-1">Email Us</h3>
                      <a 
                        href="mailto:ojashwelfaresociety@gmail.com" 
                        className="text-[#005A9C]/70 hover:text-[#F4B400] transition-colors font-medium"
                      >
                        ojashwelfaresociety@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-[#E5F6FF] rounded-2xl hover:bg-green-50 transition-colors group">
                    <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#005A9C] text-lg mb-1">Call Us</h3>
                      <a 
                        href="tel:+919680404555" 
                        className="text-[#005A9C]/70 hover:text-green-600 transition-colors font-medium"
                      >
                        +91 96804 04555
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Image */}
              {mapImage && (
                <div className="rounded-3xl overflow-hidden shadow-lg bg-white p-3 border border-[#E5F6FF]">
                  <div className="rounded-2xl overflow-hidden flex items-center justify-center">
                    <Image
                      src={mapImage.imageUrl}
                      alt={mapImage.description}
                      width={800}
                      height={400}
                      className="w-full h-auto object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
                      data-ai-hint={mapImage.imageHint}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm text-[#005A9C]/60">
                      📍 Find us on the map – Visit our office in Bandikui, Dausa
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Spacing Section */}
      <section className="bg-[#E5F6FF] py-12">
        <div className="container px-4 text-center">
          <p className="text-[#005A9C]/60">
            Looking forward to connecting with you! 💙
          </p>
        </div>
      </section>
    </>
  );
}
