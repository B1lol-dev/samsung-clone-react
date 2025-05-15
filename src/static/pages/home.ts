import { useTranslation } from "react-i18next";

export const SLIDER_ITEMS = () => {
  const { t } = useTranslation("translation");
  return [
    {
      id: 1,
      image:
        "https://images.samsung.com/is/image/samsung/assets/in/2504/home/HOME_GalaxyS25Edge_Main-KV_1440x640_pc.jpg?imwidth=1366",
      title: t("pages.home.slider.1.title"),
      subtitle: t("pages.home.slider.1.subtitle"),
      tagline: t("pages.home.slider.1.tagline"),
      description: t("pages.home.slider.1.description"),
      cta: t("pages.home.slider.1.cta"),
      learnMore: t("pages.home.slider.1.learnMore"),
      bgColor: "from-blue-200 to-blue-900",
    },
    {
      id: 2,
      image:
        "https://images.samsung.com/is/image/samsung/assets/us/2505/home/hp/05082025/Scom_HP_HD01_KV4-S25U-PC.jpg?$LazyLoad_Home_JPG$",
      title: t("pages.home.slider.2.title"),
      subtitle: t("pages.home.slider.2.subtitle"),
      tagline: t("pages.home.slider.2.tagline"),
      description: t("pages.home.slider.2.description"),
      cta: t("pages.home.slider.2.cta"),
      learnMore: t("pages.home.slider.2.learnMore"),
      bgColor: "from-purple-200 to-purple-900",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=800&width=1600",
      title: t("pages.home.slider.3.title"),
      subtitle: t("pages.home.slider.3.subtitle"),
      tagline: t("pages.home.slider.3.tagLine"),
      description: t("pages.home.slider.3.description"),
      cta: t("pages.home.slider.3.cta"),
      learnMore: t("pages.home.slider.3.learnMore"),
      bgColor: "from-gray-200 to-gray-900",
    },
  ];
};
