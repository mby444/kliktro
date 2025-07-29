// components/CategorySlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
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
import { Link } from "react-router";

const categories = [
  {
    icon: Headphones,
    name: "Audio",
    path: "/products?category=audio",
  },
  {
    icon: Tv,
    name: "Television",
    path: "/products?category=television",
  },
  {
    icon: Laptop,
    name: "Computers",
    path: "/products?category=computers",
  },
  {
    icon: Smartphone,
    name: "Smartphone",
    path: "/products?category=smartphone",
  },
  {
    icon: Camera,
    name: "Camera",
    path: "/products?category=camera",
  },
  {
    icon: Mouse,
    name: "Computer Accessories",
    path: "/products?category=computer+accessories",
  },
  {
    icon: Watch,
    name: "Wearable",
    path: "/products?category=wearable",
  },
  {
    icon: TabletSmartphone,
    name: "Tablet",
    path: "/products?category=tablet",
  },
  {
    icon: PackageSearch,
    name: "Accessories",
    path: "/products?category=accessories",
  },
  {
    icon: Plane,
    name: "Drone",
    path: "/products?category=drone",
  },
];

const formatSearchValue = (searchValue = "") => {
  return searchValue.split(" ").join("+");
};

export default function CategorySlider() {
  return (
    <section className="w-full py-12">
      <h2 className="text-2xl md:text-3xl font-semibold px-4 md:px-8 lg:px-16 mb-6">
        Browse by Category
      </h2>
      <div className="relative flex items-center gap-4 w-full px-4">
        {/* Prev Button */}
        <div className="hidden md:flex left-0 z-10 swiper-button-prev-custom cursor-pointer p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
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
            0: { slidesPerView: 2, spaceBetween: 12 },
            480: { slidesPerView: 3, spaceBetween: 14 },
            768: { slidesPerView: 4, spaceBetween: 16 },
            1024: { slidesPerView: 6, spaceBetween: 16 },
          }}>
          {categories.map(({ icon: Icon, name, path }, i) => (
            <SwiperSlide key={i}>
              <Link
                to={`/products?category=${formatSearchValue(name)}`}
                className="flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer hover:shadow-lg hover:scale-105 transition-transform">
                <Icon className="h-8 w-8 mb-2" />
                <p className="text-sm text-center">{name}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button */}
        <div className="hidden md:flex right-0 z-10 swiper-button-next-custom cursor-pointer p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
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
