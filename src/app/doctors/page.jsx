import React from 'react';

const DoctorsPage = async () => {

  const res = await fetch("http://localhost:8080/doctors")
  const data = await res.json();
  console.log(data);


  return (
    <div>
      {
        data.map(doctor => (
          <div key={doctor._id} className='border p-4 rounded-md mb-4'>
            <h2 className='text-xl font-bold mb-2'>{doctor.name}</h2>
            <p><strong>Specialty:</strong> {doctor.specialty}</p>
          </div>
        ))
      }
    </div>
  );
};

export default DoctorsPage;