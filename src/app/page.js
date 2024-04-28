import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Partners from "@/components/Partners";
import Testimonial from "@/components/Testimonial";
import Pricing from "@/components/Pricing";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Feature />
      <Partners />
      <Testimonial />
      <Pricing />
      <Footer />
    </main>
  );
}
