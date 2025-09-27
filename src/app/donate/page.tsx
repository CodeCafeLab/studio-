import { DonationTabs } from './donation-tabs';

export default function DonatePage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container text-center py-16 md:py-24">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">Make a Donation</h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg md:text-xl">Your contribution empowers us to continue our work and create lasting change. Every donation, big or small, makes a difference.</p>
        </div>
      </section>

      <section id="donation-options">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <DonationTabs />
          </div>
        </div>
      </section>
    </>
  );
}
