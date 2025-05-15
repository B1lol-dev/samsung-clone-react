import { Container } from "@/components/helpers/Container";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type TColorTheme = "light" | "dark";

interface IFeatureSectionProps {
  title: string;
  tabList: string[];
  img: string;
  mainText: string;
  desc: string;
  detailsBtn: string;
  btnText: string;
  colorTheme?: TColorTheme | string;
}

export const FeatureSection = ({
  title,
  tabList,
  img,
  mainText,
  desc,
  detailsBtn,
  btnText,
  colorTheme = "light",
}: IFeatureSectionProps) => {
  const [currentTab, setCurrentTab] = useState(
    tabList[0].toLowerCase().split(" ").join("-")
  );

  return (
    <section className="mt-12">
      <Container>
        <div
          className={`flex items-center flex-col ${
            colorTheme === "dark" ? "text-white" : "text-black"
          }`}
          style={{ background: `url(${img})` }}
        >
          <h1 className="mt-12 text-[38px] font-semibold">{title}</h1>
          <ul className="flex items-center gap-12">
            {tabList.map((tab) => (
              <Button
                variant="ghost"
                className={`rounded-full text-[18px] relative font-semibold hover:bg-white/40 ${
                  currentTab === tab.toLowerCase().split(" ").join("-")
                    ? `before:content-[''] before:absolute before:w-[70%] before:h-0.5 ${
                        colorTheme === "dark"
                          ? "before:bg-white"
                          : "before:bg-black"
                      } before:bottom-0`
                    : ""
                }`}
                onClick={() =>
                  setCurrentTab(tab.toLowerCase().split(" ").join("-"))
                }
                key={tab}
              >
                {tab}
              </Button>
            ))}
          </ul>
          <h2 className="mt-[418px] text-5xl font-bold text-center">
            {mainText}
          </h2>
          <p className="mt-2 text-[18px] text-center break-words">{desc}</p>
          <div className="flex items-center gap-5 mt-2 h-[88px]">
            <button
              type="button"
              className={`text-sm font-semibold relative before:content-[''] before:absolute before:w-full before:h-0.5 ${
                colorTheme === "dark" ? "before:bg-white" : "before:bg-black"
              } before:bottom-0`}
            >
              {detailsBtn}
            </button>
            <Button
              className={`rounded-full text-sm font-semibold text-nowrap py-2.5 px-6 ${
                colorTheme === "dark"
                  ? "bg-white text-black hover:bg-white/80"
                  : ""
              }`}
            >
              {btnText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
