import { Container } from "@/components/helpers/Container";
import { Button } from "@/components/ui/button";

export const LiveBanner = () => {
  return (
    <section className="mt-[70px]">
      <Container>
        <div className="bg-ss-light-gray px-[90px] py-8">
          <h1 className="text-5xl font-bold">Galaxy Unpacked Special</h1>
          <h3 className="font-bold">Discover a bold new series</h3>
          <Button className="rounded-full w-[113px] mt-4">Watch live</Button>
        </div>
      </Container>
    </section>
  );
};
