import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Showcase from "@/components/Showcase";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <AboutMe />
        <WorkExperience />
        <Projects />
        <Showcase />
      </main>
      <Footer />
    </>
  );
}
