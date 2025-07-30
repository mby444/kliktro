import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router";
import heroBg1 from "@/assets/hero/hero_1.png";
import heroBg2 from "@/assets/hero/hero_2.png";
import heroBg3 from "@/assets/hero/hero_3.png";
import heroMobileBg1 from "@/assets/hero/hero_mobile_1.png";
import heroMobileBg2 from "@/assets/hero/hero_mobile_2.png";
import heroMobileBg3 from "@/assets/hero/hero_mobile_3.png";

const images = [heroBg1, heroBg2, heroBg3];
const imagesMobile = [heroMobileBg1, heroMobileBg2, heroMobileBg3];

export default function HeroCarousel() {
  return (
    <section className="relative h-[50rem] w-full overflow-hidden bg-black md:h-[40rem]">
      {/* Overlay Text Content */}
      <div className="relative md:absolute h-1/2 md:h-full inset-0 z-10 flex flex-col justify-center items-start px-6 md:px-12 text-white max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">
          Discover the Best Electronics
        </h1>
        <p className="text-lg md:text-xl mb-6 drop-shadow-md">
          Shop smart, fast, and secure with unbeatable daily deals tailored just
          for you.
        </p>
        <Link
          to="/products"
          className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition">
          Shop Now
        </Link>
      </div>
      {/* Background Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        className="absolute inset-0 z-0 h-1/2 md:h-full">
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            {/* Desktop */}
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="absolute w-full h-full object-cover bg-black hidden md:inline"
            />
            {/* Mobile */}
            <img
              src={imagesMobile[i]}
              alt={`Slide ${i + 1}`}
              className="absolute w-full h-full object-cover bg-black md:hidden"
            />
            <div className="absolute inset-0 bg-black/0 md:bg-black/20" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
