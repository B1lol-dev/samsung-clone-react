import { Container } from "@/components/helpers/Container";
import {
  SUMMER_UPGRADES_CARDS,
  SUMMER_UPGRADES_TABS,
  type ISummerUpgradeCard,
} from "@/static/pages/home";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const SummerUpgrades = () => {
  const [t] = useTranslation("translation");

  const [currentTab, setCurrentTab] = useState(SUMMER_UPGRADES_TABS()[0]);

  return (
    <section className="mt-12">
      <Container>
        <h1 className="text-center text-5xl font-semibold">
          {t("pages.home.summer_upgrades.title")}
        </h1>
        <ul className="flex items-center gap-12 justify-center mt-4">
          {SUMMER_UPGRADES_TABS().map((tab) => (
            <li
              key={tab}
              className={`text-[18px] font-semibold relative cursor-pointer ${
                tab === currentTab
                  ? "before:absolute before:w-fulll before:h-0.5 before:bg-black before:-bottom-1"
                  : ""
              }`}
              onClick={() => setCurrentTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6 mt-4">
          {SUMMER_UPGRADES_CARDS().map((card, index) => (
            <SummerUpgrade data={card} key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

function SummerUpgrade({ data }: { data: ISummerUpgradeCard }) {
  return (
    <div className="h-[684px] w-[448px] relative flex justify-center">
      <img src={data.img} alt={data.title} />
      <div className="absolute bottom-10 text-white text-center">
        <h1 className="text-2xl font-semibold">{data.title}</h1>
        <p className="text-sm mt-6">{data.desc}</p>
      </div>
    </div>
  );
}
