import Navbar from "@/components/Homepage/NavBar";
import Footer from "@/components/Homepage/Footer";
import styles from "@/components/Aboutpage/page.module.css"

import Banner from "@/components/Aboutpage/Banner";
import OurJourney from "@/components/Aboutpage/OurJourney";
import VisionMission from "@/components/Aboutpage/VisionMission";
import StatsStrip from "@/components/Aboutpage/StatsStrip";
import MilestoneTimeline from "@/components/Aboutpage/MilestoneTimeline";
import AccoladesRecognition from "@/components/Aboutpage/AccoladesRecognition";
import AppCallout from "@/components/Aboutpage/AppCallout";
import OurPresence from "@/components/Aboutpage/OurPresence";
import ClosingCTA from "@/components/Aboutpage/ClosingCTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Banner />
      <OurJourney />
      <VisionMission />
      <StatsStrip />
      <MilestoneTimeline />
      <AccoladesRecognition />
      <ClosingCTA />
      <OurPresence />
      <AppCallout />
      <Footer />
    </>
  );
}




