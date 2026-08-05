import React from 'react';
import DoctorCard from './DoctorCard';

const RatedDoctor = async () => {

    const res = await fetch('http://localhost:8080/doctors')
    const doctors = await res.json();

    const sortedDoctors = [...doctors].sort((a, b) => b.rating - a.rating);
    const topThreeDoctors = sortedDoctors.slice(0, 3);


    return (
        <div>
            <div className="text-center max-w-3xl mx-auto my-14">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CCFBF1] mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                    <p className="text-xs md:text-sm uppercase tracking-widest text-[#0F766E] font-bold">
                        Top Rated Doctors
                    </p>
                </div>

                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                    <span className="bg-gradient-to-r from-[#0891B2] via-[#0891B2] to-[#0891B2] bg-clip-text text-transparent">
                        Meet Our{" "}
                    </span>
                    <span className="bg-gradient-to-r from-[#0891B2] via-[#06B6D4] to-[#D97706] bg-clip-text text-transparent">
                        Top Specialists
                    </span>
                </h2>

                <p className="text-[#475569] text-base md:text-lg mt-4">
                    Handpicked doctors trusted and highly rated by patients like you
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {topThreeDoctors.map((doctor) => (
                    <DoctorCard
                        key={doctor._id}
                        doctor={doctor}
                    />
                ))}
            </div>
        </div>
    );
};

export default RatedDoctor;