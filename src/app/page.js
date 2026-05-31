import Banner from "@/components/Banner";
import Gallery from "@/components/Gallery";
import NewsletterSection from "@/components/Newsletter";
import PopularDestinations from "@/components/PopularDestination";
import SpecialOffers from "@/components/SpecialOffers";
import StatisticsSection from "@/components/Statistics";
import TravelCategories from "@/components/TravelCategories";
import TravelerReviews from "@/components/TravelerReviews";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularDestinations />
      <WhyChooseUs />
      <TravelCategories />
      <Gallery />
      <SpecialOffers />
      <TravelerReviews />
      <StatisticsSection />
      <NewsletterSection />
    </div>
  );
}
