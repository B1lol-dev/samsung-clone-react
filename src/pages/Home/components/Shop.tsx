import { Container } from "@/components/helpers/Container";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { ForYou } from "./ShopTabs";

export const Shop = () => {
  const [t] = useTranslation("translation");

  const categoryList = t("pages.home.shop.categories", {
    returnObjects: true,
  }) as string[];

  const [currentTab, setCurrentTab] = useState("for-you");

  return (
    <section className="mt-[47px]">
      <Container>
        <div>
          <h1 className="text-[38px] font-bold text-center">
            {t("pages.home.shop.title")}
          </h1>
          <p className="text-center">
            <Link
              to="/shop/all-details"
              className="font-semibold text-center text-[18px] relative before:w-full before:content-[''] before:h-0.5 before:bg-black before:absolute before:-bottom-1 before:opacity-0 before:duration-200 hover:before:opacity-100"
            >
              {t("pages.home.shop.link")}
            </Link>
          </p>
          <ul className="flex items-center justify-center h-[58px] mt-4 gap-12 text-[18px] font-semibold">
            {categoryList.map((category, index) => (
              <li key={index}>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentTab(
                      category
                        .toLowerCase()
                        .replace("&", "and")
                        .split(" ")
                        .join("-")
                    )
                  }
                  className={`relative before:content-[''] before:w-full before:h-0.5 before:bg-black before:absolute before:-bottom-1 before:duration-200 ${
                    currentTab ===
                    category
                      .toLowerCase()
                      .replace("&", "and")
                      .split(" ")
                      .join("-")
                      ? "before:opacity-100"
                      : "before:opacity-0"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {currentTab === "for-you" ? (
          <ForYou />
        ) : currentTab === "new" ? (
          "new"
        ) : (
          ""
        )}
      </Container>
    </section>
  );
};
