function CarouselItem({ src, alt }) {
  return (
    <div className="item-carousel">
      <img src={src} alt={alt} />
    </div>
  );
}

export default CarouselItem;