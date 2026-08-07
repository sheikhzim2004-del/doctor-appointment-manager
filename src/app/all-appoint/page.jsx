import AppointmentCard from '@/components/ui/AppointmentCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const allAppointPage = async () => {

   //get token
      const {token} =await auth.api.getToken({
          headers: await headers()
      })
      console.log(token)

  
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVERURL}/appoint`, {
    headers: {
      authorization: `Bearer ${token}`
    },
    cache: "no-store"
  });
  const appoints = await res.json();
  console.log(appoints);

  return (
    <>
      {/* all appoint er title */}
      <div className="my-6 text-center">
        <p className="text-sm font-medium text-cyan-700 uppercase tracking-widest mb-1">My Bookings</p>
        <h1 className="text-3xl font-bold text-gray-800">
          Your <span className="text-cyan-400">Appointments</span>
        </h1>
        <p className="text-gray-400 mt-2 text-sm">Track and manage all your scheduled visits</p>
      </div>


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto mb-6'>
        {
          appoints.map(appointment => <AppointmentCard key={appointment._id} appointment={appointment} />)
        }
      </div>
    </>
  );
};

export default allAppointPage;