// components/CategorySlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  MonitorSmartphone,
  Tv,
  Headphones,
  Laptop,
  Smartphone,
  Camera,
  Mouse,
  Watch,
  TabletSmartphone,
  PackageSearch,
  Plane,
} from "lucide-react";

const categories = [
  { icon: Headphones, name: "Audio" },
  { icon: Tv, name: "Television" },
  { icon: Laptop, name: "Computers" },
  { icon: Smartphone, name: "Smartphone" },
  { icon: Camera, name: "Camera" },
  { icon: Mouse, name: "Computer Accessories" },
  { icon: Watch, name: "Wearable" },
  { icon: TabletSmartphone, name: "Tablet" },
  { icon: PackageSearch, name: "Accessories" },
  { icon: Plane, name: "Drone" },
];

export default function CategorySlider() {
  return (
    <section className="w-full my-8">
      <h2 className="text-xl font-bold mb-6 px-4">Browse by Category</h2>
      <div className="relative flex items-center gap-4 w-full px-4">
        {/* Prev Button */}
        <div className="swiper-button-prev-custom cursor-pointer p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={16}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          className="w-full py-4"
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}>
          {categories.map(({ icon: Icon, name }, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer hover:shadow-lg hover:scale-105 transition-transform">
                <Icon className="h-8 w-8 mb-2" />
                <p className="text-sm text-center">{name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button */}
        <div className="swiper-button-next-custom cursor-pointer p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
