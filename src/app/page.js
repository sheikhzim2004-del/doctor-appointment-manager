import Banner from "@/components/shared/Banner";
import HowItWorks from "@/components/shared/HowItsWorks";
import Testimonials from "@/components/shared/Testimonials";
import WhyChooseUs from "@/components/shared/WhyChooseUs";
import RatedDoctor from "@/components/ui/RatedDoctor";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <RatedDoctor></RatedDoctor>
      <WhyChooseUs></WhyChooseUs>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
    </div>
  );
}
