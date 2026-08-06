import DoctorDetailsClient from '@/components/ui/DoctorDetailsClient';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const DoctorDetailsPage = async ({ params }) => {
    const { id } = await params;

    //get token
    const {token} =await auth.api.getToken({
        headers: await headers()
    })
    console.log(token)

    // console.log("Id", id)

    const res = await fetch(`http://localhost:8080/doctors/${id}`,{
        headers: {
            authorization: `Bearer ${token}`
        },
        cache: "no-store"
    })
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    const doctor = await res.json()
    console.log(doctor)
    return (<DoctorDetailsClient doctor={doctor}></DoctorDetailsClient>);
};

export default DoctorDetailsPage;