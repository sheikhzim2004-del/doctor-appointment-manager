import AppointmentCard from '@/components/shared/ui/AppointmentCard';
import React from 'react';

const allAppointPage = async () => {

  const res = await fetch("http://localhost:8080/appoint");
  const appoints = await res.json();
  console.log(appoints);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto'>
      {
        appoints.map(appointment => <AppointmentCard key={appointment._id} appointment={appointment} />)
      }
    </div>
  );
};

export default allAppointPage;