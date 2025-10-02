import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";

export default function Carousel(items = [], title) {
  if (items.length !== 0) {
    return (
      <section>
        <h2>{title}</h2>
        <Swiper slidesPerView={2} spaceBetween={12} breakpoints={{640: {slidesPerView: 3}, 1280: {slidesPerView: 6}}}>
          {items.map((items) => (
            <SwiperSlide key={items.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }
  return <h2>no data</h2>;
}
