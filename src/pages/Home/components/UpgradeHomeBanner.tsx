import { Container } from "@/components/helpers/Container";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const UpgradeHomeBanner = () => {
  const [t] = useTranslation("translation");

  return (
    <section className="mt-12">
      <Container>
        <div className="flex flex-col items-center w-full py-4 bg-linear-90 from-sky-50 to-sky-300">
          <p className="text-center text-sm font-semibold">
            {t("pages.home.upgrade_home_banner.suptext")}
          </p>
          <h1 className="mt-4 text-5xl max-w-[517px] text-center font-bold">
            {t("pages.home.upgrade_home_banner.title")}
          </h1>
          <Button className="rounded-full mt-12 text-sm py-2.5 px-6">
            {t("pages.home.upgrade_home_banner.button")}
          </Button>
        </div>
      </Container>
    </section>
  );
};
