"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "@heroui/react";

export default function Banner() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="h-[500px]"
    >
      <SwiperSlide>
        <div
          className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/banner1.png')",
          }}
        >
          {/* banner image blur er jonno */}
          <div className="absolute inset-0 bg-black/50"></div>


          <div className="relative flex flex-col items-center text-center text-white">
            <h1 className="text-5xl font-bold mb-3">
              Find & Book Trusted Doctors
            </h1>
            <p>Manage your health records and bookings in one place</p>
            <div className="my-3 flex gap-3">
              <Button className="bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-teal-800">Get Started</Button>
              <Button className="bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-teal-800">Find Doctors</Button>
            </div>
          </div>

        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/banner2.png')",
          }}
        >
          {/* banner image blur er jonno */}
          <div className="absolute inset-0 bg-black/50"></div>


          <div className="relative flex flex-col items-center text-center text-white">
            <h1 className="text-5xl font-bold mb-3">
              Your Health, Our Priority
            </h1>
            <p>Schedule appointments with top doctors anytime, anywhere</p>
            <div className="my-3 flex gap-3">
              <Button className="bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-teal-800">Get Started</Button>
              <Button className="bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-teal-800">Find Doctors</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/banner3.jpg')",
          }}
        >
          {/* banner image blur er jonno */}
          <div className="absolute inset-0 bg-black/50"></div>


          <div className="relative flex flex-col items-center text-center text-white">
            <h1 className="text-5xl font-bold mb-3">
              Fast & Easy Doctor Appointment System
            </h1>
            <p>Trusted healthcare professionals at your fingertips</p>
            <div className="my-3 flex gap-3">
              <Button className="bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-teal-800">Get Started</Button>
              <Button className="bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-teal-800">Find Doctors</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}