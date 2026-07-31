import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import DualAudience from "@/components/DualAudience";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <StatsSection />
        <HowItWorks />
        <DualAudience />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  );
}
