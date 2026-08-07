import DoctorCard from '@/components/ui/DoctorCard';
import React from 'react';

const DoctorsPage = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVERURL}/doctors`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch doctors");
  }

  const data = await res.json();
  console.log(data);




  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* All Doctors Section Header */}
      <div className="text-center mb-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700 mb-2">
          Browse Our Specialists
        </p>
        <h2 className="text-4xl font-bold text-gray-800">
          All <span className="text-cyan-400">Doctors</span>
        </h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-teal-600" />
        <p className="mt-4 text-gray-500 max-w-md mx-auto text-sm">
          Find and book appointments with top-rated doctors across all specialties.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          data.map(doctor => (
            <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>
          ))
        }
      </div>
    </div>
  );
};

export default DoctorsPage;