import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "https://picsum.photos/id/1015/1200/600",
  "https://picsum.photos/id/1020/1200/600",
  "https://picsum.photos/id/1024/1200/600",
];

export default function HeroCarousel() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="absolute inset-0 z-0 h-full">
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Text Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-6 md:px-12 text-white max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
          Discover the Best Electronics
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow-md">
          Shop smart, fast, and secure with unbeatable daily deals tailored just
          for you.
        </p>
        <a
          href="/products"
          className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition">
          Shop Now
        </a>
      </div>
    </section>
  );
}
