import { Container } from "@/components/helpers/Container";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const LiveBanner = () => {
  const [t] = useTranslation("translation");

  return (
    <section className="mt-[70px]">
      <Container>
        <div className="bg-ss-light-gray px-[90px] py-8">
          <h1 className="text-5xl font-bold">
            {t("pages.home.live_banner.title")}
          </h1>
          <h3 className="font-bold">{t("pages.home.live_banner.text")}</h3>
          <Button className="rounded-full min-w-[113px] mt-4">
            {t("pages.home.live_banner.button")}
          </Button>
        </div>
      </Container>
    </section>
  );
};
