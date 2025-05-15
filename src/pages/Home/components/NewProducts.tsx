import { Container } from "@/components/helpers/Container";
import { Link } from "react-router-dom";
import { NEW_PRODUCTS } from "@/static/pages/home";
import { v4 as uuidv4 } from "uuid";

interface INewProductData {
  name: string;
  href: string;
  title: string;
  img: string;
}

export const NewProducts = () => {
  const products = NEW_PRODUCTS() as INewProductData[];

  return (
    <section className="mt-8">
      <Container>
        <div className="flex items-center w-full overflow-auto py-4 gap-8">
          {products.map((product) => (
            <NewProductCard data={product} key={uuidv4()} />
          ))}
        </div>
      </Container>
    </section>
  );
};

function NewProductCard({ data }: { data?: INewProductData }) {
  return (
    <Link to={`${data?.href}`}>
      <div className="size-[268px]">
        <img src={data?.img} alt={data?.name} className="w-full h-full" />
      </div>
      <div>
        <h1 className="text-center font-bold text-2xl">{data?.name}</h1>
      </div>
    </Link>
  );
}
