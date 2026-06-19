import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CampaignBanner from "@/components/CampaignBanner";
import Audience from "@/components/Audience";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Flow from "@/components/Flow";
import Staff from "@/components/Staff";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CampaignBanner />
        <Audience />
        <Services />
        <Pricing />
        <Flow />
        <Staff />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
