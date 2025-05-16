import { Container } from "@/components/helpers/Container";

export const RecommendedAccessories = () => {
  return (
    <section className="mt-12">
      <Container>
        <h1 className="text-center text-5xl font-semibold">
          Recommended Accessories
        </h1>
        <p className="text-center text-base mt-4">
          Go next-level with our most popular accessories and hottest tech
          obsessions.
        </p>
        <ul className="flex items-center justify-center gap-12 mt-4">
          <li className="font-semibold text-[18px]">Mobila Accessories</li>
          <li className="font-semibold text-[18px]">Home Accessories</li>
        </ul>
        <div className="flex items-center gap-6 mt-4">
          <div className="flex flex-col gap-6">
            <RACardSmall
              data={{
                title: "The Freestyle",
                desc: "The mini projector you can set up in snap.",
                img: "https://images.samsung.com/is/image/samsung/assets/us/home/04102025/CX_HP_CO05_Mom_Freestyle_DT.jpg?$330_330_JPG$",
              }}
            />
            <RACardSmall
              data={{
                title: "Galaxy Buds3",
                desc: "AI-powered noise cancellation.",
                img: "https://images.samsung.com/is/image/samsung/assets/us/home/04102025/CX_HP_CO05_Mom_GalaxyBudsPro_DT.jpg?$330_330_JPG$",
              }}
            />
          </div>
          <RACardBig
            data={{
              title: "Galaxy S25 Ultra Accessories",
              desc: "Find accessories designed to elevate your device.",
              img: "https://images.samsung.com/is/image/samsung/assets/us/home/04102025/CX_HP_CO05_Mom_Acessories_DT.jpg?$684_684_JPG$",
            }}
          />
          <div className="flex flex-col gap-6">
            <RACardSmall
              data={{
                title: "Music Frame",
                desc: "Powerful sound. Personal style.",
                img: "https://images.samsung.com/is/image/samsung/assets/us/home/04102025/CX_HP_CO05_Mom_MusicFrame_DT.jpg?$330_330_JPG$",
              }}
            />
            <RACardSmall
              data={{
                title: "Galaxy Watch7",
                desc: "Smart support for every step.",
                img: "https://images.samsung.com/is/image/samsung/assets/us/home/04102025/CX_HP_CO05_Mom_GalaxyWatch7_DT.jpg?$330_330_JPG$",
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

interface IRaCard {
  title: string;
  img: string;
  desc: string;
}

function RACardSmall({ data }: { data: IRaCard }) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-full h-full">
        <img src={data.img} alt={data.title} />
      </div>
      <div className="absolute text-center bottom-15 flex flex-col items-center gap-5">
        <h3 className="text-[18px] font-semibold">{data.title}</h3>
        <p className="text-xs">{data.desc}</p>
      </div>
    </div>
  );
}

function RACardBig({ data }: { data: IRaCard }) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-full h-full">
        <img src={data.img} alt={data.title} />
      </div>
      <div className="absolute text-center top-15 flex flex-col items-center gap-5">
        <h1 className="text-2xl font-semibold">{data.title}</h1>
        <p className="text-sm max-w-[300px]">{data.desc}</p>
      </div>
    </div>
  );
}
