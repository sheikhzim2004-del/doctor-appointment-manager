"use client";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiArrowLeft, FiCalendar, FiMapPin, FiHome, FiBriefcase, FiDollarSign, FiStar, FiUsers } from "react-icons/fi";

export default function DoctorDetailsClient({ doctor }) {
    const router = useRouter();

    const {
        name,
        specialty,
        experience,
        hospital,
        location,
        fee,
        availability,
        image,
        description,
        rating = "4.9",
        patients = "1.2k",
    } = doctor;

    const isAvailable = availability && availability.length > 0;

    return (
        <div className="min-h-screen bg-[#F0FDFA] font-sans">

            {/* Hero Banner */}
            <div
                className="relative w-full h-[280px] md:h-[340px]"
                style={{ background: "linear-gradient(160deg, #0F766E 0%, #14B8A6 100%)" }}
            >
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-white/[0.06]" />
                <div className="absolute bottom-0 -left-10 w-48 h-48 rounded-full bg-white/[0.05]" />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-white/[0.03] -translate-x-1/2 -translate-y-1/2" />

                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="absolute top-5 left-5 flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
                >
                    <FiArrowLeft size={18} />
                    Back
                </button>

                {/* Available Badge */}
                <div className="absolute top-5 right-5 inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <span
                        className={`w-2 h-2 rounded-full ${isAvailable ? "bg-green-400" : "bg-red-400"}`}
                        style={isAvailable ? { boxShadow: "0 0 0 3px rgba(74,222,128,0.3)" } : {}}
                    />
                    <span className="text-xs text-white font-semibold">
                        {isAvailable ? "Available" : "Unavailable"}
                    </span>
                </div>

                {/* Doctor Image — overlaps banner */}
                <div
                    className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full border-4 border-white overflow-hidden bg-teal-100"
                    style={{ boxShadow: "0 12px 32px rgba(15,118,110,0.3)" }}
                >
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover" />
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-2xl mx-auto px-4 pt-24 pb-12">

                {/* Name & Specialty */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] mb-2">{name}</h1>
                    <span className="inline-block bg-white text-[#0F766E] text-sm font-semibold rounded-full px-4 py-1.5 border border-[#99F6E4] shadow-sm">
                        {specialty}
                    </span>
                </div>

                {/* Stats Row */}
                <div className="flex gap-3 mb-6">
                    {[
                        { icon: <FiBriefcase size={15} />, value: experience, label: "Experience", color: "#0F766E", bg: "#F0FDFA", border: "#99F6E4" },
                        { icon: <FiStar size={15} />, value: `${rating} ★`, label: "Rating", color: "#D97706", bg: "#FEF9EC", border: "#FDE68A" },
                        { icon: <FiUsers size={15} />, value: patients, label: "Patients", color: "#3B82F6", bg: "#EFF6FF", border: "#BFDBFE" },
                    ].map((s) => (
                        <div
                            key={s.label}
                            className="flex-1 rounded-2xl py-3 px-2 text-center border"
                            style={{ background: s.bg, borderColor: s.border }}
                        >
                            <div className="flex justify-center mb-1" style={{ color: s.color }}>{s.icon}</div>
                            <p className="text-[15px] font-extrabold" style={{ color: s.color }}>{s.value}</p>
                            <p className="text-[10px] text-[#94A3B8] font-medium">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Info Cards */}
                <div className="bg-white rounded-3xl border border-[#E2E8F0] p-5 mb-5 shadow-sm">
                    <h2 className="text-sm font-bold text-[#0F172A] mb-4 uppercase tracking-wide">Details</h2>
                    <div className="flex flex-col gap-3">
                        <InfoRow icon={<FiHome className="text-[#0F766E]" />} label="Hospital" value={hospital} bg="#F0FDFA" />
                        <InfoRow icon={<FiMapPin className="text-[#D97706]" />} label="Location" value={location} bg="#FEF9EC" />
                        <InfoRow icon={<FiDollarSign className="text-[#3B82F6]" />} label="Consultation Fee" value={`৳ ${fee} / visit`} bg="#EFF6FF" />
                    </div>
                </div>

                {/* Availability */}
                <div className="bg-white rounded-3xl border border-[#E2E8F0] p-5 mb-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                        <FiCalendar className="text-[#0F766E]" size={16} />
                        <h2 className="text-sm font-bold text-[#0F172A] uppercase tracking-wide">Available Days</h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {availability?.map((day) => (
                            <span
                                key={day}
                                className="text-xs font-semibold text-[#0F766E] bg-[#F0FDFA] border border-[#99F6E4] rounded-full px-4 py-1.5"
                            >
                                {day}
                            </span>
                        ))}
                    </div>
                </div>

                {/* About */}
                <div className="bg-white rounded-3xl border border-[#E2E8F0] p-5 mb-8 shadow-sm">
                    <h2 className="text-sm font-bold text-[#0F172A] mb-3 uppercase tracking-wide">About</h2>
                    <p className="text-sm text-[#64748B] leading-relaxed">{description}</p>
                </div>

                {/* Book Button */}
                <Link
                    href={`/appoint-booking`}>
                    <button className="w-full text-white text-base font-bold py-6 rounded-2xl cursor-pointer transition-opacity hover:opacity-90"
                        style={{ background: "linear-gradient(135deg, #0F766E, #14B8A6)" }}>

                    Book Appointment
                    </button>
                </Link>
            </div>
        </div>
    );
}

/* Info Row */
function InfoRow({ icon, label, value, bg }) {
    return (
        <div className="flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ background: bg }}>
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                {icon}
            </div>
            <div>
                <p className="text-[10px] text-[#94A3B8] font-medium">{label}</p>
                <p className="text-[13px] font-semibold text-[#0F172A]">{value}</p>
            </div>
        </div>
    );
}
