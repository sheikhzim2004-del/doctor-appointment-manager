"use client"

import { FieldError, Input, Label, TextField, Select, ListBox, Button } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-toastify';
// import toast, { Toaster } from 'react-hot-toast';

const AppointBookingPage = () => {

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const appointment = Object.fromEntries(formData.entries());
        console.log("appoint data:", appointment)


        // const payload = {
        //     userEmail: formData.get('userEmail'),
        //     doctorName: formData.get('doctorName'),
        //     patientName: formData.get('patientName'),
        //     gender: gender,
        //     phone: formData.get('phone'),
        //     appointmentDate: formData.get('appointmentDate'),
        //     appointmentTime: formData.get('appointmentTime'),
        // };

        setLoading(true);
        try {
            const res = await fetch("http://localhost:8080/appoint", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(appointment)
            })
            const data = await res.json()
            console.log(data, 'data')

            toast.success('Appointment booked successfully!');
            e.target.reset();
        } catch (err) {
            toast.error('Something went wrong. Try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='max-w-3xl mx-auto px-4 py-8'>
            <Toaster position="top-right" />
            {/* fomr er title */}
            <div className="mb-2 text-center">
                <p className="text-sm font-medium text-cyan-500 uppercase tracking-widest mb-1">Healthcare Services</p>
                <h1 className="text-3xl font-bold text-gray-800">
                    Book an <span className="text-cyan-500">Appointment</span>
                </h1>
                <p className="text-gray-400 mt-2 text-sm">Schedule your visit with our experienced doctors</p>
            </div>

            <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-8'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                        {/* Patient Name */}
                        <TextField name="patientName" isRequired>
                            <Label>Patient Name</Label>
                            <Input placeholder="Rahim Uddin" className="rounded-xl" />
                            <FieldError />
                        </TextField>

                        {/* Email */}
                        <TextField name="userEmail" type="email" isRequired>
                            <Label>Email</Label>
                            <Input placeholder="user@gmail.com" className="rounded-xl" />
                            <FieldError />
                        </TextField>

                        {/* Phone */}
                        <TextField name="phone" isRequired>
                            <Label>Phone</Label>
                            <Input placeholder="01712345678" className="rounded-xl" />
                            <FieldError />
                        </TextField>

                        {/* Gender */}
                        <div>
                            <Select
                                name="gender"
                                isRequired
                                className="w-full"
                                placeholder="Select gender"
                                // selectedKey={gender}
                                // onSelectionChange={setGender}
                            >
                                <Label>Gender</Label>
                                <Select.Trigger className="rounded-xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Male" textValue="Male">
                                            Male <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Female" textValue="Female">
                                            Female <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Other" textValue="Other">
                                            Other <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Doctor */}
                        <div>
                            <Select
                                name="doctorName"
                                isRequired
                                className="w-full"
                                placeholder="Select doctor"
                            >
                                <Label>Doctor</Label>
                                <Select.Trigger className="rounded-xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Dr. Ayesha Rahman" textValue="Dr. Ayesha Rahman">
                                            Dr. Ayesha Rahman <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Dr. Karim Hossain" textValue="Dr. Karim Hossain">
                                            Dr. Karim Hossain <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Dr. Nusrat Jahan" textValue="Dr. Nusrat Jahan">
                                            Dr. Nusrat Jahan <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Dr. Tanvir Ahmed" textValue="Dr. Tanvir Ahmed">
                                            Dr. Tanvir Ahmed <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Dr. Sadia Islam" textValue="Dr. Sadia Islam">
                                            Dr. Sadia Islam <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Appointment Time */}
                        <div>
                            <Select
                                name="appointmentTime"
                                isRequired
                                className="w-full"
                                placeholder="Select time"
                            >
                                <Label>Time Slot</Label>
                                <Select.Trigger className="rounded-xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        {['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'].map(t => (
                                            <ListBox.Item key={t} id={t} textValue={t}>
                                                {t} <ListBox.ItemIndicator />
                                            </ListBox.Item>
                                        ))}
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Appointment Date */}
                        <TextField name="appointmentDate" type="date" isRequired>
                            <Label>Appointment Date</Label>
                            <Input type="date" className="rounded-xl" />
                            <FieldError />
                        </TextField>

                    </div>

                    {/* Submit */}
                    <Button
                        type="submit"
                        isDisabled={loading}
                        className="w-full rounded-xl bg-cyan-500 text-white font-medium py-2"
                    >
                        {loading ? 'Booking...' : 'Book Appointment'}
                    </Button>
                    <Link 
                    href={"/all-appoint"} 
                    className="flex justify-center rounded-xl bg-none font-medium">
                        <Button className="bg-white text-blue-900 hover:underline text-md"> Check My Appoint</Button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default AppointBookingPage;
