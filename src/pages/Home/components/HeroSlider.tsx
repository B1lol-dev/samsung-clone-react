import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Container } from "@/components/helpers/Container";

import { SLIDER_ITEMS } from "@/static/pages/home";

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const carouselItems = SLIDER_ITEMS();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  }, [carouselItems.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, currentSlide, nextSlide]);

  return (
    <section>
      <Container>
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselItems.map((item) => (
              <div
                key={item.id}
                className={`relative min-w-full h-[500px] md:h-[600px] lg:h-[700px] bg-gradient-to-r ${item.bgColor}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
                  <div className="text-white max-w-md z-10 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                      {/* {item.title} */}
                    </h2>
                    <h3 className="text-xl md:text-2xl font-medium mb-6">
                      {/* {item.subtitle} */}
                    </h3>
                    <p className="mb-6 text-sm md:text-base text-black mt-50">
                      {item.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="link" className="text-black underline">
                        {item.learnMore}
                      </Button>
                      <Button
                        variant="default"
                        className="bg-black hover:bg-gray-800 text-white rounded-full px-6"
                      >
                        {item.cta}
                      </Button>
                    </div>
                  </div>
                  <div className="hidden md:block text-white text-right max-w-md z-10">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-light">
                      {/* {item.tagline} */}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          {/* Indicator Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all ${
                  currentSlide === index ? "w-32 bg-white" : "w-32 bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
            <button
              onClick={togglePlayPause}
              className="ml-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-1"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
