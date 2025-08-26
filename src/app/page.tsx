
import Navbar from "./components/NavBar";
import Explore from "./components/ExploreSection";
import Footer from "./components/Footer";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return <div>
        <Navbar />
        <Explore />
          <Testimonial/>
        <Footer />
  </div>
}
