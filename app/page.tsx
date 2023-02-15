import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Cities from "./components/Cities";
import CoreCourse from "./components/CoreCourse";
import ProgramParticipant from "./components/ProgramParticipant";
import Outcome from "./components/Outcome";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cities />
      <CoreCourse />
      <ProgramParticipant />
      <Outcome />
      <Footer />
   
    </div>
  );
}
