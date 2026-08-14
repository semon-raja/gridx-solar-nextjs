import Navbar from "@/components/Homepage/NavBar";
import Footer from "@/components/Homepage/Footer";
import Banner from "@/components/ServicePage/Banner";
import CoreServices from "@/components/ServicePage/CoreServices";
import LifecycleExcellence from "@/components/ServicePage/LifecycleExcellence";
import CTA from "@/components/ServicePage/CTA";

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <CoreServices />
      <LifecycleExcellence />
      <CTA />
      <Footer />
    </>
  );
}
