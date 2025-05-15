import { Container } from "@/components/helpers/Container";

// shadcn
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

// hooks
import { useRef } from "react";
import { useTranslation } from "react-i18next";

// icons
import { SearchIcon, ShoppingCart, User, X } from "lucide-react";

// components
import { Link } from "react-router-dom";

// assets
import logo_full from "@/assets/logo_full.svg";

// utils
import { v4 as uuidv4 } from "uuid";

export const Header = () => {
  const [t] = useTranslation("translation");

  const navLinks = t("header.nav_links", {
    returnObjects: true,
  }) as string[];

  const navLinksPathes = t("header.nav_links", {
    lng: "en",
    returnObjects: true,
  }) as string[];

  return (
    <>
      <SubHeader />
      <header>
        <Container>
          <nav className="flex items-center py-6">
            <Link to="/">
              <img src={logo_full} alt="SAMSUNG" />
            </Link>

            <ul className="flex items-center gap-4 ml-[72px]">
              {navLinks.map((link, index) => (
                <li
                  key={uuidv4()}
                  className="font-bold text-base duration-200 relative before:content-[''] before:absolute before:w-full before:h-0.5 before:bg-black before:left-0 before:-bottom-6 before:duration-200 before:opacity-0 hover:before:opacity-100"
                >
                  <Link
                    to={
                      "/" +
                      navLinksPathes[index]
                        .toLowerCase()
                        .replace("&", "and")
                        .split(" ")
                        .join("-")
                    }
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="relative ml-auto max-w-[144px]">
              <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
                <SearchIcon className="h-4 w-4" />
              </div>
              <Input
                id="search"
                type="search"
                placeholder={t("header.search")}
                className="w-full rounded-full pl-8 py-2 text-base border-none shadow-none bg-ss-light-gray"
              />
            </div>

            <div className="flex items-center gap-6 ml-6">
              <Link to="/cart">
                <button type="button">
                  <ShoppingCart />
                </button>
              </Link>
              <>
                <button type="button">
                  <User />
                </button>
              </>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

function SubHeader() {
  const [t, i18n] = useTranslation("translation");
  const handleChangeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
  };

  const subHeaderRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={subHeaderRef}>
      <Container className="flex items-center justify-end py-4 border-b-1">
        <p>{t("header.chose_loc_lang")}</p>
        <Select
          onValueChange={(value) => {
            handleChangeLanguage(value);
          }}
          defaultValue="en"
        >
          <SelectTrigger className="h-10 rounded-full max-w-[308px] w-full ml-[30px] py-2.5 px-6">
            <SelectValue placeholder="USA / English" className="text-sm" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">USA / English</SelectItem>
            <SelectItem value="ru">RU / Russia</SelectItem>
            {/* <SelectItem value="other">Other</SelectItem> */}
          </SelectContent>
        </Select>
        <Button className="ml-4 rounded-full h-10 text-sm px-6">
          {t("header.continue_btn")}
        </Button>
        <button
          type="button"
          onClick={() => subHeaderRef.current?.remove()}
          className="ml-6 flex items-start justify-center h-10"
        >
          <X size={16} />
        </button>
      </Container>
    </div>
  );
}
