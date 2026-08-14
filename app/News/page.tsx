import type { Metadata } from "next";
import Navbar from "@/components/Homepage/NavBar";
import Footer from "@/components/Homepage/Footer";
import NewsBanner from "@/components/NewsPage/NewsBanner";
import NewsGrid from "@/components/NewsPage/NewsGrid";

export const metadata: Metadata = {
    title: "News & Updates | GridX Solar",
    description:
        "Stay updated with the latest news, project milestones, company announcements, product launches and events from GridX Solar.",
};

export default function NewsPage() {
    return (
        <>
            <Navbar />
            <NewsBanner />
            <NewsGrid />
            <Footer />
        </>
    );
}
