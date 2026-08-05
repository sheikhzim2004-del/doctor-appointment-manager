"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Rahim Uddin",
        role: "Patient, Dhanmondi",
        image: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        review:
            "Booking an appointment took less than two minutes. Dr. Ayesha was incredibly attentive and the whole process felt effortless.",
    },
    {
        name: "Farhana Akter",
        role: "Patient, Gulshan",
        image: "https://i.pravatar.cc/150?img=32",
        rating: 5,
        review:
            "I love how easy it is to track my bookings and update them without any hassle. Support team responded within minutes when I had a question.",
    },
    {
        name: "Kamal Hossain",
        role: "Patient, Uttara",
        image: "https://i.pravatar.cc/150?img=51",
        rating: 4,
        review:
            "Finding a verified cardiologist near me used to take days. With this platform, I booked my consultation the same evening I searched.",
    },
    {
        name: "Nusrat Jahan",
        role: "Patient, Mirpur",
        image: "https://i.pravatar.cc/150?img=45",
        rating: 5,
        review:
            "The doctor profiles are detailed and honest. I knew exactly what to expect before walking into the clinic. Highly recommended.",
    },
];

export default function Testimonials() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 px-6 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto">
                <div
                    className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CCFBF1] mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                        <p className="text-xs md:text-sm uppercase tracking-widest text-[#0F766E] font-bold">
                            Testimonials
                        </p>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                        <span className="bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#0F766E] bg-clip-text text-transparent">
                            What Our{" "}
                        </span>
                        <span className="bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706] bg-clip-text text-transparent">
                            Patients Say
                        </span>
                    </h2>

                    <p className="text-[#475569] text-base md:text-lg mt-4">
                        Real experiences from real patients who trust us with their care
                    </p>
                </div>

                <div
                    className={`transition-all duration-700 ease-out delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        loop
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination={{ clickable: true, el: ".testimonial-pagination" }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-4"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="h-auto pb-10">
                                <div className="h-full bg-white rounded-2xl p-7 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                                    <FaQuoteLeft className="text-[#CCFBF1] text-3xl mb-4" />

                                    <p className="text-[#475569] text-sm leading-relaxed mb-6 line-clamp-3 min-h-[63px]">
                                        {testimonial.review}
                                    </p>

                                    <div className="flex items-center gap-1 mb-4">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={
                                                    i < testimonial.rating
                                                        ? "text-[#F59E0B] text-sm"
                                                        : "text-[#E2E8F0] text-sm"
                                                }
                                            />
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-[#CCFBF1]"
                                        />
                                        <div>
                                            <p className="font-bold text-[#0F172A] text-sm">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-[#94A3B8] text-xs">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="testimonial-pagination flex justify-center gap-2 mt-2" />
                </div>
            </div>

            <style>{`
        .testimonial-pagination .swiper-pagination-bullet {
          background-color: #CCFBF1;
          opacity: 1;
          width: 8px;
          height: 8px;
        }
        .testimonial-pagination .swiper-pagination-bullet-active {
          background-color: #0F766E;
          width: 24px;
          border-radius: 9999px;
        }
      `}</style>
        </section>
    );
}
