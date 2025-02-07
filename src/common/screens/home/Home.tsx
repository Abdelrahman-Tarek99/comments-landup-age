import { HeroSection } from "@/common/components";
import { Cards } from "@/common/components/cards";
import { cardsData } from "./cardsConstants";

export const Home = () => {
  return (
    <div className="absolute inset-0 p-3 md:p-0  ">
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 px-2">
        {cardsData.map((card, index) => (
          <Cards key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
