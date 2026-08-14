import Navbar from "@/components/Homepage/NavBar";
import Footer from "@/components/Homepage/Footer";
import ProjectsBanner from "@/components/ProjectsPage/ProjectsBanner";
import ProjectPortfolio from "@/components/ProjectsPage/ProjectPortfolio";
import IndustriesWeServe from "@/components/ProjectsPage/IndustriesWeServe";
import GeographicReach from "@/components/ProjectsPage/GeographicReach";
import ProjectGallery from "@/components/ProjectsPage/ProjectGallery";
import CTASection from "@/components/ProjectsPage/CTASection";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <ProjectsBanner />
      <ProjectPortfolio />
      <IndustriesWeServe />
      <GeographicReach />
      <ProjectGallery />
      <CTASection />
      <Footer />
    </>
  );
}

