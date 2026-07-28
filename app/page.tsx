import Navbar from "@/components/Homepage/NavBar";
import styles from "./page.module.css";
import Hero from "@/components/Homepage/Hero";
import Stats from "@/components/Homepage/Stats";
import About from "@/components/Homepage/About";
import Solutions from "@/components/Homepage/Solutions";
import StarcEnergy from "@/components/Homepage/StarcEnergy";
import Portfolio from "@/components/Homepage/Portfolio";
import Milestone from "@/components/Homepage/Milestone";
import Projects from "@/components/Homepage/Projects";
import Achievements from "@/components/Homepage/Achievements";
import Footer from "@/components/Homepage/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Solutions />
      <StarcEnergy />
      <Portfolio />
      <Milestone />
      <Projects />
      <Achievements />
      <Footer />
    </>
  );
}