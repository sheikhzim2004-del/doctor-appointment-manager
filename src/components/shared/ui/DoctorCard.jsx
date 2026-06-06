"use client";
import Image from "next/image";
import { FiArrowRight, FiHome, FiMapPin } from "react-icons/fi";

export default function DoctorCard({ doctor }) {
  const {
    name,
    specialty,
    experience,
    hospital,
    location,
    fee,
    availability,
    image,
    rating = "4.9",
    patients = "1.2k",
  } = doctor;

  const isAvailable = availability && availability.length > 0;

  return (
    <div className=" bg-white rounded-[24px] overflow-hidden border border-[#E2E8F0] font-sans">

      {/* Tall Gradient Header */}
      <div
        className="relative h-[200px]"
        style={{ background: "linear-gradient(160deg, #0F766E 0%, #14B8A6 100%)" }}
      >
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/[0.07]" />
        <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-full bg-white/[0.06]" />

        {/* Available badge */}
        <div className="absolute top-3.5 right-3.5 inline-flex items-center gap-1.5 bg-white/[0.18] rounded-full px-2.5 py-1">
          <span
            className={`w-1.5 h-1.5 rounded-full ${isAvailable ? "bg-green-400" : "bg-red-400"}`}
            style={isAvailable ? { boxShadow: "0 0 0 2px rgba(74,222,128,0.35)" } : {}}
          />
          <span className="text-[11px] text-white font-medium">
            {isAvailable ? "Available" : "Unavailable"}
          </span>
        </div>

        {/* Circular image — overlaps header */}
        <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 w-[110px] h-[110px] rounded-full border-4 border-white overflow-hidden bg-[#CCFBF1] relative"
          style={{ boxShadow: "0 8px 24px rgba(15,118,110,0.25)" }}>
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
      </div>

      {/* Name & Specialty */}
      <div className="text-center pt-12 pb-4 px-5">
        <h3 className="text-[18px] font-bold text-[#0F172A] mb-1">{name}</h3>
        <span className="inline-block bg-[#F0FDFA] text-[#0F766E] text-[12px] font-semibold rounded-full px-3.5 py-1 border border-[#99F6E4]">
          {specialty}
        </span>
      </div>

      {/* Stats */}
      <div className="flex gap-2 mx-4 mb-4">
        {[
          { value: `${experience.replace(" years", "")}+`, label: "Yrs Exp", color: "#0F766E", bg: "#F0FDFA" },
          { value: `${rating}★`, label: "Rating", color: "#D97706", bg: "#FEF9EC" },
          { value: patients, label: "Patients", color: "#3B82F6", bg: "#EFF6FF" },
        ].map((s) => (
          <div key={s.label} className="flex-1 rounded-xl py-2.5 px-2 text-center" style={{ background: s.bg }}>
            <p className="text-[16px] font-extrabold m-0" style={{ color: s.color }}>{s.value}</p>
            <p className="text-[10px] text-[#94A3B8] m-0">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Info Rows */}
      <div className="px-4 flex flex-col gap-2">
        <div className="flex items-center gap-2.5 bg-[#F8FAFC] rounded-[10px] px-3 py-2">
          <div className="w-[30px] h-[30px] bg-[#F0FDFA] rounded-lg flex items-center justify-center flex-shrink-0">
            <FiHome className="text-[#0F766E]" size={14} />
          </div>
          <div>
            <p className="text-[10px] text-[#94A3B8] m-0">Hospital</p>
            <p className="text-[12px] font-semibold text-[#0F172A] m-0">{hospital}</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 bg-[#F8FAFC] rounded-[10px] px-3 py-2">
          <div className="w-[30px] h-[30px] bg-[#FEF3C7] rounded-lg flex items-center justify-center flex-shrink-0">
            <FiMapPin className="text-[#D97706]" size={14} />
          </div>
          <div>
            <p className="text-[10px] text-[#94A3B8] m-0">Location</p>
            <p className="text-[12px] font-semibold text-[#0F172A] m-0">{location}</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-4 mt-3.5 border-t border-dashed border-[#E2E8F0]" />

      {/* Footer */}
      <div className="px-4 py-3.5 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-[#94A3B8] uppercase tracking-wide m-0">Fee</p>
          <div className="flex items-baseline gap-1">
            <span className="text-[22px] font-extrabold text-[#0F766E]">৳{fee}</span>
            <span className="text-[11px] text-[#94A3B8]">/visit</span>
          </div>
        </div>
        <button
          className="flex items-center gap-1.5 text-white text-[13px] font-semibold px-5 py-2.5 rounded-xl transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #0F766E, #14B8A6)" }}
        >
          View Details
          <FiArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}