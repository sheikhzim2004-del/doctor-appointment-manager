"use client";

import { useEffect, useRef, useState } from "react";
import { FaSearch, FaCalendarAlt, FaStethoscope } from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: FaSearch,
    title: "Search Doctor",
    description: "Find the right doctor by specialty, name, or hospital location",
  },
  {
    number: "02",
    icon: FaCalendarAlt,
    title: "Book Appointment",
    description: "Choose your preferred date and time slot in just a few clicks",
  },
  {
    number: "03",
    icon: FaStethoscope,
    title: "Get Consultation",
    description: "Meet your doctor and get the care you need, on time",
  },
];

export default function HowItWorks() {
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
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CCFBF1] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            <p className="text-xs md:text-sm uppercase tracking-widest text-[#0F766E] font-bold">
              How It Works
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#0F766E] bg-clip-text text-transparent">
              Three Simple{" "}
            </span>
            <span className="bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706] bg-clip-text text-transparent">
              Steps
            </span>
          </h2>

          <p className="text-[#475569] text-base md:text-lg mt-4">
            Booking your appointment has never been this easy
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          <div className="hidden md:block absolute top-14 left-0 right-0 h-0.5 mx-24 bg-[#E2E8F0] overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-[#0F766E] via-[#F59E0B] to-[#0F766E] transition-all duration-[1500ms] ease-out ${
                isVisible ? "w-full" : "w-0"
              }`}
            />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                style={{ transitionDelay: `${index * 200}ms` }}
                className={`relative flex flex-col items-center text-center transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <div className="group relative z-10 w-28 h-28 rounded-full bg-[#F0FDFA] border-4 border-white shadow-lg flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#0F766E] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="text-white text-3xl" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-[#F59E0B] text-white text-sm font-bold flex items-center justify-center border-4 border-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
