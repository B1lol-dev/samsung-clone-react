import { HeroSlider } from "./components/HeroSlider";
import { LiveBanner } from "./components/LiveBanner";
import { Shop } from "./components/Shop";

export const Home = () => {
  return (
    <>
      <HeroSlider />
      <LiveBanner />
      <Shop />
    </>
  );
};
