import Image from "next/image";
import Hero from "@/components/ui/home/Hero";
import Navbar from "@/components/common/Navbar";
import Service from "@/components/ui/home/Service";
import WhyUs from "@/components/ui/home/WhyUs";
import Process from "@/components/ui/home/Process";
import Stats from "@/components/ui/home/Stats";
import Cta from "@/components/ui/home/Cta";
import Portfolio from "@/components/ui/home/Portfolio";
import Testimonials from "@/components/ui/home/Testimonials";
import Footer from "@/components/common/Footer";
import ContactModel from "@/components/common/ContactModel";
export default function Home() {
  return (
    <>
    <ContactModel/>
    <Navbar/>
    <Hero/>
    <Service/>
    <WhyUs/>
    <Process/>
    <Stats/>
    <Portfolio/>
    <Testimonials/>
    <Cta/>
    <Footer/> 

   
   
    </>
    
  );
}
