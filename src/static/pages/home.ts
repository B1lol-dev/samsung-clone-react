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

export const SHOP_TABS = () => {
  const { t } = useTranslation("translation");

  const forYouData = t("pages.home.shop.tabs.for_you", {
    returnObjects: true,
  }) as { title: string; button: string; img: string }[];

  const data = forYouData.map((item) => {
    return {
      img: item.img || "",
      title: item.title || t("pages.home.shop.tabs.for_you.defaultTitle"),
      button: item.button || t("pages.home.shop.tabs.for_you.defaultButton"),
    };
  });

  return data;
};

export const NEW_PRODUCTS = () => {
  //   const { t } = useTranslation("translation");

  const data = [
    {
      name: "Galaxy S25 Edge",
      href: "/smartphones/galaxy-s25-edge/",
      title: "Pre-order now",
      img: "https://images.samsung.com/is/image/samsung/assets/us/home/05142025/CX_HP_Carousel_S25Edge_DT.png?$268_268_PNG$",
    },
    {
      name: "Galaxy Tab S10 FE+",
      href: "/tablets/galaxy-tab-s10-fe/buy/galaxy-tab-s10-fe-plus-blue-128gb-sku-sm-x620nlbaxar/",
      title: "Buy now",
      img: "https://images.samsung.com/is/image/samsung/assets/us/home/05022025/CX_HP_Carousel_TabS10FE_DT_268x268.png?$268_268_PNG$",
    },
    {
      name: "Bespoke AI Vacuum",
      href: "/home-appliances/vacuums/jet-stick/bespoke-ai-jet-ultra-cordless-stick-vacuum-with-all-in-one-clean-station-and-400aw-suction-power-in-satin-black-vs90f40dmk-aa/",
      title: "Buy now",
      img: "https://images.samsung.com/is/image/samsung/assets/us/home/04172025/HP-Carousel_DT-02.png?$268_268_PNG$",
    },
    {
      name: "Neo QLED 8K TV",
      href: "/tvs/neo-qled/75-class-neo-qled-8k-tv-qn900f-sku-qn75qn900ffxza/",
      title: "Buy now",
      img: "https://images.samsung.com/is/image/samsung/assets/us/home/04172025/HP-Carousel_DT-03.png?$268_268_PNG$",
    },
    {
      name: "Odyssey G9 Gaming Monitor",
      href: "/monitors/gaming/49-inch-odyssey-g9-g91f-dqhd-144hz-gaming-monitor-sku-ls49fg910enxza/",
      title: "Buy now",
      img: "https://images.samsung.com/is/image/samsung/assets/us/home/04172025/HP-Carousel_DT-09.png?$268_268_PNG$",
    },
    {
      name: "The Frame Pro",
      href: "/lifestyle-tvs/the-frame/75-inch-class-the-frame-pro-neo-qled-4k-tv-ls03fw-sku-qn75ls03fwfxza/",
      title: "Buy now",
      img: "https://images.samsung.com/is/image/samsung/assets/us/home/04172025/HP-Carousel_DT-06.png?$268_268_PNG$",
    },
    {
      name: "Bespoke Dishwasher",
      href: "/home-appliances/dishwashers/rotary/38-dba-bespoke-smart-dishwasher-with-3rd-rack-washing-system-in-fingerprint-resistant-stainless-steel-dw90f89t0usraa/",
      title: "Buy now",
      img: "https://images.samsung.com/is/image/samsung/assets/us/home/04172025/HP-Carousel_DT-07.png?$268_268_PNG$",
    },
    {
      name: "Bespoke Refrigerator",
      href: "/home-appliances/refrigerators/bespoke/bespoke-29-cu-ft-4-door-french-door-refrigerator-with-ai-home-ai-vision-inside-in-charcoal-glass-and-stainless-steel-rf90f29becraa/",
      title: "Buy now",
      img: "https://images.samsung.com/is/image/samsung/assets/us/home/04172025/HP-Carousel_DT-04.png?$268_268_PNG$",
    },
    {
      name: "Neo QLED 4K TV",
      href: "/tvs/neo-qled/75-class-neo-qled-4k-tv-qn90f-sku-qn75qn90fafxza/",
      title: "Buy now",
      img: "https://images.samsung.com/is/image/samsung/assets/us/home/04172025/HP-Carousel_DT-10.png?$268_268_PNG$",
    },
    {
      name: "Bespoke AI Refrigerator",
      href: "/home-appliances/refrigerators/bespoke/bespoke-23-cu-ft-counter-depth-4-door-french-door-refrigerator-with-ai-hybrid-cooling-beverage-center-in-stainless-steel-rm80f23vmraa/",
      title: "Buy now",
      img: "https://images.samsung.com/is/image/samsung/assets/us/home/04172025/HP-Carousel_DT-11.png?$268_268_PNG$",
    },
    {
      name: "Ballie Home Robot",
      href: "/projectors/home-robot-ballie/",
      title: "Buy now",
      img: "https://images.samsung.com/is/image/samsung/assets/us/home/05022025/CX_HP_Carousel_Ballie_DT_268x268.png?$268_268_PNG$",
    },
  ];

  return data;
};

type TColorTheme = "light" | "dark";
interface IFeatureSectionData {
  title: string;
  tabList: string[];
  img: string;
  mainText: string;
  desc: string;
  detailsBtn: string;
  btnText: string;
  colorTheme?: TColorTheme | string;
}

export const FEATURE_SECTIONS = () => {
  const [t] = useTranslation("translation");

  const sections = t("pages.home.feature_sections", {
    returnObjects: true,
  }) as Array<IFeatureSectionData>;

  return sections;
};

export interface IBlog {
  img: string;
  title: string;
  desc: string;
  learn_more: string;
  href: string;
}

export const BLOGS = () => {
  const [t] = useTranslation("translation");

  const blogs = t("pages.home.blog.blogs", {
    returnObjects: true,
  }) as Array<IBlog>;

  return blogs;
};
