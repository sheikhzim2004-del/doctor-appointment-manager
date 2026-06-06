import DoctorCard from '@/components/shared/ui/DoctorCard';
import React from 'react';

const DoctorsPage = async () => {

  const res = await fetch("http://localhost:8080/doctors", {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch doctors");
  }

  const data = await res.json();
  console.log(data);




  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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