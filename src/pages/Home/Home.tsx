import { HeroSlider } from "./components/HeroSlider";
import { LiveBanner } from "./components/LiveBanner";
import { NewProducts } from "./components/NewProducts";
import { Shop } from "./components/Shop";
import { UpgradeHomeBanner } from "./components/UpgradeHomeBanner";

export const Home = () => {
  return (
    <>
      <HeroSlider />
      <LiveBanner />
      <Shop />
      <UpgradeHomeBanner />
      <NewProducts />
    </>
  );
};
