import Banner from "@/components/Banner";
import PopularDestinations from "@/components/PopularDestination";
import TravelCategories from "@/components/TravelCategories";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularDestinations />
      <WhyChooseUs />
      <TravelCategories/>
    </div>
  );
}
