import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import "./carousel.css";

type CarouselStoryProps = {
  items: string[];
};

export const CarouselDemo = ({ items }: CarouselStoryProps) => {
  return (
    <Carousel className="carousel-container">
      <CarouselContent className="carousel-track">
        {items.map((item, index) => (
          <CarouselItem key={index} className="carousel-item">
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="carousel-button carousel-prev" />
      <CarouselNext className="carousel-button carousel-next" />
    </Carousel>
  );
};
