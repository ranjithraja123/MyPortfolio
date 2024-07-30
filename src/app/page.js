import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar.jsx";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container mx-auto px-3 py-4">
    <Navbar />
      {/* <h1 className="text-black">Port Website</h1> */}
      <div className="container mt-24 mx-auto px-1 py-2">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <EmailSection />
      </div>
     
    </main>
  );
}
