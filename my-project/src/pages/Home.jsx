import Hero from "../components/Hero";
import ToursSection from "../components/ToursSection";
import DestinationCarousel from "../components/DestinationCarousel";
import HappyCustomers from "../components/HappyCustomer";
import DiscoverSection from "../components/DiscoverSection";
import GetReadyModern from "../components/GetReadyModern";

const Home = () => {
  return (
    <>
      <Hero />

      <ToursSection />

      <DestinationCarousel />

      <HappyCustomers />

      <DiscoverSection />

      <div className="mt-40 mb-40">
        <GetReadyModern />
      </div>
    </>
  );
};

export default Home;
