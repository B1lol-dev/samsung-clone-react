import { FOOTER } from "@/static";
import { Container } from "../helpers/Container";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";

export const Footer = () => {
  const { footer_categories, copyright, footer_links } = FOOTER();
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});

  const toggleCategory = (title: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <footer className="text-[#252525] w-full mt-4">
      <Container className="border-t-1 border-gray-300">
        <div className="md:hidden">
          {footer_categories.map((category) => (
            <div key={category.title} className="border-b border-gray-300">
              <button
                onClick={() => toggleCategory(category.title)}
                className="flex items-center justify-between w-full py-4 font-bold text-sm"
              >
                {category.title}
                {expandedCategories[category.title] ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              <div
                className={cn(
                  "grid grid-cols-1 gap-2 overflow-hidden transition-all duration-300",
                  expandedCategories[category.title]
                    ? "max-h-[1000px] pb-4"
                    : "max-h-0"
                )}
              >
                {category.links.map((link) => (
                  <Link
                    key={link}
                    to="#"
                    className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {footer_categories.map((category) => (
            <div
              key={category.title}
              className="border-r-1 border-r-gray-300 last:border-0 py-4"
            >
              <h3 className="font-bold text-sm mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <Container className="py-4 border-t-1 border-t-gray-300 flex items-center justify-between">
        <p className="text-xs text-gray-600">{copyright}</p>
        <div className="flex items-center gap-4">
          <img
            src="https://images.samsung.com/is/content/samsung/assets/us/footer/text-banner-2.svg"
            alt="text-banner"
          />
          <img
            src="https://images.samsung.com/is/image/samsung/assets/us/footer/ScomQR_PNG_20250122.png?$ORIGIN_PNG$"
            alt="text-banner"
          />
        </div>
      </Container>

      <Container className="border-t border-gray-300">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <h1 className="text-xs font-semibold pr-4 border-r-1 border-r-gray-300">
              USA/English
            </h1>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {footer_links.map((link, index) => (
                <Fragment key={link}>
                  <Link
                    to="#"
                    className="text-xs text-gray-600 hover:text-gray-900 hover:underline"
                  >
                    {link}
                  </Link>
                  {index < footer_links.length - 1 && (
                    <span className="text-xs text-gray-400 hidden md:inline">
                      |
                    </span>
                  )}
                </Fragment>
              ))}
            </div>
            <div className="flex ml-auto items-center gap-4">
              <p className="uppercase text-xs">Stay in the loop?</p>
              <Facebook />
              <Twitter />
              <Instagram />
              <Youtube />
              <Mail />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
