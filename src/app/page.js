import Banner from "@/components/Banner";
import PopularDestinations from "@/components/PopularDestination";
import SpecialOffers from "@/components/SpecialOffers";
import TravelCategories from "@/components/TravelCategories";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularDestinations />
      <WhyChooseUs />
      <TravelCategories/>
      <SpecialOffers/>
    </div>
  );
}
