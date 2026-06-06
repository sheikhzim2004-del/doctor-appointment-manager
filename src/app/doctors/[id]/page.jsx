import DoctorDetailsClient from '@/components/shared/ui/DoctorDetailsClient';
import React from 'react';

const DoctorDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log("Id",id)

    const res = await fetch(`http://localhost:8080/doctors/${id}`, {
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