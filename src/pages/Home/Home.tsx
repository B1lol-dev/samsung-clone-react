import { FEATURE_SECTIONS } from "@/static/pages/home";
import { FeatureSection } from "./components/FeatureSection";
import { HeroSlider } from "./components/HeroSlider";
import { LiveBanner } from "./components/LiveBanner";
import { NewProducts } from "./components/NewProducts";
import { Shop } from "./components/Shop";
import { UpgradeHomeBanner } from "./components/UpgradeHomeBanner";
import { Blog } from "./components/Blog";
import { SummerUpgrades } from "./components/SummerUpgrades";

export const Home = () => {
  return (
    <>
      <HeroSlider />
      <LiveBanner />
      <Shop />
      <UpgradeHomeBanner />
      <NewProducts />
      {FEATURE_SECTIONS().map((section, index) => (
        <FeatureSection
          title={section.title}
          tabList={section.tabList}
          mainText={section.mainText}
          desc={section.desc}
          detailsBtn={section.detailsBtn}
          btnText={section.btnText}
          img={section.img}
          colorTheme={section.colorTheme}
          key={index}
        />
      ))}
      <Blog />
      <SummerUpgrades />
    </>
  );
};
