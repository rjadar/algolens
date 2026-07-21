import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Demo from "../components/Demo";
import FeatureCard from "../components/FeatureCard";
import CTA from "../components/CTA";
export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Demo />
            <FeatureCard />
            <CTA />
        </>
    );
}