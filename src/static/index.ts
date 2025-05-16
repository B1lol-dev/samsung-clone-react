import { useTranslation } from "react-i18next";

export interface IFooterCategory {
  title: string;
  links: string[];
}

export const FOOTER = () => {
  const [t] = useTranslation("translation");

  const footer_data = {
    footer_categories: t("footer.footer_categories", {
      returnObjects: true,
    }) as IFooterCategory[],
    copyright: t("footer.copyright"),
    footer_links: t("footer.footer_links", { returnObjects: true }) as string[],
  };

  return footer_data;
};
