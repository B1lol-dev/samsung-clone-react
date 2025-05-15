import { Button } from "@/components/ui/button";
import { SHOP_TABS } from "@/static/pages/home";
import { v4 as uuidv4 } from "uuid";

interface IForYouCardData {
  img: string;
  title: string;
  button: string;
}

export const ForYou = () => {
  const forYouProducts = SHOP_TABS() as IForYouCardData[];

  return (
    <div className="flex items-center gap-6">
      <ForYouCard data={forYouProducts[0]} />
      <div className="grid grid-cols-2 justify-items-center gap-6">
        {Array(
          forYouProducts.map((product, index) => {
            if (index === 0) {
              return;
            }

            return (
              <ForYouCard
                data={product}
                className="size-[330px]! *:first:scale-50 group *:first:group-hover:scale-55 *:nth-2:text-xl"
                key={uuidv4()}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

function ForYouCard({
  data,
  className,
}: {
  data: IForYouCardData;
  className?: string;
}) {
  return (
    <div
      className={`size-[684px] relative flex justify-center cursor-pointer group duration-200 transition-all overflow-hidden bg-ss-light-gray rounded-[20px] ${className}`}
    >
      <img
        src={data.img}
        alt={data.title}
        className="size-full duration-200 group-hover:scale-105"
      />
      <div className="absolute bottom-10 text-2xl font-semibold flex flex-col items-center gap-2">
        <h2>{data.title}</h2>
        <Button className="rounded-full text-base px-6 py-2 duration-200 opacity-0 translate-y-[100%] group-hover:opacity-100 group-hover:translate-y-0">
          {data.button}
        </Button>
      </div>
    </div>
  );
}
