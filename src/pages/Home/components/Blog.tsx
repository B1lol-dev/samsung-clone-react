import { Container } from "@/components/helpers/Container";
import { Button } from "@/components/ui/button";
import { BLOGS } from "@/static/pages/home";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import type { IBlog } from "@/static/pages/home";

export const Blog = () => {
  const [t] = useTranslation("translation");

  return (
    <section className="mt-16">
      <Container>
        <h1 className="text-center text-[38px] font-semibold">
          {t("pages.home.blog.title")}
        </h1>
        <div className="grid grid-cols-4 justify-items-center gap-3 mt-4">
          {BLOGS().map((blog: IBlog) => (
            <BlogCard data={blog} />
          ))}
        </div>
      </Container>
    </section>
  );
};

function BlogCard({ data }: { data: IBlog }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div>
        <img src={data.img} alt={data.title} />
      </div>
      <div className="flex flex-col items-center px-6">
        <h3 className="text-center text-[28px] font-semibold h-[50px] overflow-auto">
          {data.title}
        </h3>
        <p className="text-sm text-center mt-10 overflow-auto h-[50px]">
          {data.desc}
        </p>
        <Link to={data.href} className="mt-11">
          <Button variant="link" className="text-sm font-semibold">
            {data.learn_more}
          </Button>
        </Link>
      </div>
    </div>
  );
}
