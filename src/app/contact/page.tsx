import Image from "next/image";
import { ContactForm } from "./contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ContactPage() {
    const mapImage = PlaceHolderImages.find(p => p.id === 'map');
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container text-center py-10 md:py-14">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl">We'd love to hear from you. Whether you have a question, a proposal, or just want to say hello, feel free to reach out.</p>
        </div>
      </section>

      <section id="contact-details">
        <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Send us a Message</h2>
                    <ContactForm />
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                    <div className="space-y-4 text-lg">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 text-primary mt-1"/>
                            <div>
                                <h3 className="font-semibold">Our Office</h3>
                                <p className="text-muted-foreground">Greta bhgwan shiv colony gudha road Bandikui Dausa</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-primary mt-1"/>
                            <div>
                                <h3 className="font-semibold">Email Us</h3>
                                <a href="mailto:info@ojash.org" className="text-muted-foreground hover:text-primary transition-colors">info@ojash.org</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-primary mt-1"/>
                            <div>
                                <h3 className="font-semibold">Call Us</h3>
                                <a href="tel:+919511355744" className="text-muted-foreground hover:text-primary transition-colors">+91 95113 55744</a>
                            </div>
                        </div>
                    </div>
                    {mapImage && (
                        <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={mapImage.imageUrl}
                                alt={mapImage.description}
                                width={800}
                                height={500}
                                className="w-full h-auto object-cover"
                                data-ai-hint={mapImage.imageHint}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
      </section>
    </>
  );
}
