import type { Metadata } from "next";
import Navbar from "@/components/Homepage/NavBar";
import Footer from "@/components/Homepage/Footer";
import PartnersBanner from "@/components/PartnersPage/PartnersBanner";
import TrustedPartnerGrid from "@/components/PartnersPage/TrustedPartnerGrid";
import ClosingCTA from "@/components/PartnersPage/ClosingCTA";

export const metadata: Metadata = {
    title: "Trusted Technology Partners | GridX Solar",
    description:
        "We work with leading brands to deliver reliable solar modules, inverters and energy storage solutions. Trusted by Tier 1 Manufacturers worldwide.",
};

export default function PartnersPage() {
    return (
        <>
            <Navbar />
            <PartnersBanner />
            <TrustedPartnerGrid />
            <ClosingCTA />
            <Footer />
        </>
    );
}
