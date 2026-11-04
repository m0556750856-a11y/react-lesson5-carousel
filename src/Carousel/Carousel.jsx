import { useState, useEffect } from "react";
import CarouselItem from "./CarouselItem";
import "./Carousel.css";

function Carousel({ images, intervalSeconds = 3 }) {
  const [selected, setSelected] = useState(0);

  function move(step) {
    setSelected((prev) => (prev + step + images.length) % images.length);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      move(1);
    }, intervalSeconds * 1000);

    return () => clearTimeout(timer);
  }, [selected, intervalSeconds]);

  return (
    <div className="carousel">
      <button className="carousel-arrow prev" onClick={() => move(-1)}>❯</button>

      {images.map((src, index) =>
        index === selected && (
          <CarouselItem key={index} src={src} alt={`תמונה ${index + 1}`} />
        )
      )}

      <button className="carousel-arrow next" onClick={() => move(1)}>❮</button>

      <div className="dots-carousel">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === selected ? "active dot-carousel" : "dot-carousel"}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;