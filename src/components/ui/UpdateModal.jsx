"use client"
import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextField, Select } from '@heroui/react';
import { EditIcon } from 'lucide-react';
import { redirect } from 'next/navigation';
import React from 'react';
// import toast from 'react-hot-toast';
import { FiEdit2 } from 'react-icons/fi';
import { toast } from 'react-toastify';



const UpdateModal = ({ appointment }) => {
    const { _id, patientName, userEmail, phone, gender, doctorName, appointmentTime, appointmentDate } = appointment;



    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log(e.currentTarget)

        //get token
        const {data: tokenData} = await authClient.token()

        const appointment = Object.fromEntries(formData.entries());

        // setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVERURL}/appoint/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Berear ${tokenData?.token}`
                },
                body: JSON.stringify(appointment)
            })
            const data = await res.json()
            console.log(data, 'data')

            toast.success('Appointment Updated successfully!');
            e.target.reset();
        } catch (err) {
            toast.error('Something went wrong. Try again.');
        } finally {
            // setLoading(false);
        }
        redirect('/all-appoint')

    };
    return (
        <div>
            <Modal>
                <Modal.Trigger className='items-center w-full'>
                    <button className="w-full bg-[#0F766E] hover:bg-[#115E59] active:scale-[0.97] text-white rounded-[11px] text-sm font-medium flex px-4 py-3 items-center justify-center gap-2 transition-all duration-150 cursor-pointer">
                        <FiEdit2 size={14} /> Update
                    </button>
                </Modal.Trigger>
                <Modal.Backdrop className="bg-[#0F172A]/40">
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-xl bg-white border border-[#E2E8F0] rounded-2xl">
                            <Modal.CloseTrigger className="text-[#475569] hover:text-[#0F172A]" />
                            <Modal.Header className="bg-[#F0FDFA] border-b border-[#E2E8F0] rounded-t-2xl">
                                <EditIcon className="bg-[#CCFBF1] text-[#0F766E]"></EditIcon>
                                <Modal.Heading className="text-[#0F172A]">Edit Appointment Details</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default" className="bg-white">
                                    <form onSubmit={handleSubmit} className='space-y-6'>
                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                                            {/* Patient Name */}
                                            <TextField defaultValue={patientName} name="patientName" isRequired>
                                                <Label className="text-[#0F172A]">Patient Name</Label>
                                                <Input placeholder="Rahim Uddin" className="rounded-xl border-[#E2E8F0] text-[#0F172A] focus:border-[#0F766E] focus:ring-[#0F766E]" />
                                                <FieldError className="text-[#EF4444]" />
                                            </TextField>

                                            {/* Email */}
                                            <TextField defaultValue={userEmail} name="userEmail" type="email" isRequired>
                                                <Label className="text-[#0F172A]">Email</Label>
                                                <Input placeholder="user@gmail.com" className="rounded-xl border-[#E2E8F0] text-[#0F172A] focus:border-[#0F766E] focus:ring-[#0F766E]" />
                                                <FieldError className="text-[#EF4444]" />
                                            </TextField>

                                            {/* Phone */}
                                            <TextField defaultValue={phone} name="phone" isRequired>
                                                <Label className="text-[#0F172A]">Phone</Label>
                                                <Input placeholder="01712345678" className="rounded-xl border-[#E2E8F0] text-[#0F172A] focus:border-[#0F766E] focus:ring-[#0F766E]" />
                                                <FieldError className="text-[#EF4444]" />
                                            </TextField>

                                            {/* Gender */}
                                            <div>
                                                <Select
                                                    name="gender"
                                                    isRequired
                                                    className="w-full"
                                                    placeholder="Select gender"
                                                    defaultValue={gender}
                                                >
                                                    <Label className="text-[#0F172A]">Gender</Label>
                                                    <Select.Trigger className="rounded-xl border-[#E2E8F0] text-[#0F172A] focus:border-[#0F766E]">
                                                        <Select.Value />
                                                        <Select.Indicator className="text-[#475569]" />
                                                    </Select.Trigger>
                                                    <Select.Popover className="bg-white border border-[#E2E8F0]">
                                                        <ListBox>
                                                            <ListBox.Item id="Male" textValue="Male" className="text-[#0F172A] hover:bg-[#F0FDFA]">
                                                                Male <ListBox.ItemIndicator className="text-[#0F766E]" />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Female" textValue="Female" className="text-[#0F172A] hover:bg-[#F0FDFA]">
                                                                Female <ListBox.ItemIndicator className="text-[#0F766E]" />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Other" textValue="Other" className="text-[#0F172A] hover:bg-[#F0FDFA]">
                                                                Other <ListBox.ItemIndicator className="text-[#0F766E]" />
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
                                                    isDisabled
                                                    className="w-full"
                                                    placeholder="Select doctor"
                                                    defaultValue={doctorName}
                                                >
                                                    <Label className="text-[#0F172A]">Doctor</Label>
                                                    <Select.Trigger className="rounded-xl border-[#E2E8F0] text-[#94A3B8]">
                                                        <Select.Value />
                                                        <Select.Indicator className="text-[#475569]" />
                                                    </Select.Trigger>
                                                    <Select.Popover className="bg-white border border-[#E2E8F0]">
                                                        <ListBox>
                                                            <ListBox.Item id="Dr. Ayesha Rahman" textValue="Dr. Ayesha Rahman" className="text-[#0F172A] hover:bg-[#F0FDFA]">
                                                                Dr. Ayesha Rahman <ListBox.ItemIndicator className="text-[#0F766E]" />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Dr. Karim Hossain" textValue="Dr. Karim Hossain" className="text-[#0F172A] hover:bg-[#F0FDFA]">
                                                                Dr. Karim Hossain <ListBox.ItemIndicator className="text-[#0F766E]" />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Dr. Nusrat Jahan" textValue="Dr. Nusrat Jahan" className="text-[#0F172A] hover:bg-[#F0FDFA]">
                                                                Dr. Nusrat Jahan <ListBox.ItemIndicator className="text-[#0F766E]" />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Dr. Tanvir Ahmed" textValue="Dr. Tanvir Ahmed" className="text-[#0F172A] hover:bg-[#F0FDFA]">
                                                                Dr. Tanvir Ahmed <ListBox.ItemIndicator className="text-[#0F766E]" />
                                                            </ListBox.Item>
                                                            <ListBox.Item id="Dr. Sadia Islam" textValue="Dr. Sadia Islam" className="text-[#0F172A] hover:bg-[#F0FDFA]">
                                                                Dr. Sadia Islam <ListBox.ItemIndicator className="text-[#0F766E]" />
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
                                                    defaultValue={appointmentTime}
                                                >
                                                    <Label className="text-[#0F172A]">Time Slot</Label>
                                                    <Select.Trigger className="rounded-xl border-[#E2E8F0] text-[#0F172A] focus:border-[#0F766E]">
                                                        <Select.Value />
                                                        <Select.Indicator className="text-[#475569]" />
                                                    </Select.Trigger>
                                                    <Select.Popover className="bg-white border border-[#E2E8F0]">
                                                        <ListBox>
                                                            {['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM'].map(t => (
                                                                <ListBox.Item key={t} id={t} textValue={t} className="text-[#0F172A] hover:bg-[#F0FDFA]">
                                                                    {t} <ListBox.ItemIndicator className="text-[#0F766E]" />
                                                                </ListBox.Item>
                                                            ))}
                                                        </ListBox>
                                                    </Select.Popover>
                                                </Select>
                                            </div>

                                            {/* Appointment Date */}
                                            <TextField defaultValue={appointmentDate} name="appointmentDate" type="date" isRequired>
                                                <Label className="text-[#0F172A]">Appointment Date</Label>
                                                <Input type="date" className="rounded-xl border-[#E2E8F0] text-[#0F172A] focus:border-[#0F766E] focus:ring-[#0F766E]" />
                                                <FieldError className="text-[#EF4444]" />
                                            </TextField>

                                        </div>
                                        <Modal.Footer className="border-t border-[#E2E8F0] bg-[#F8FAFC]">
                                            <Button type='submit' slot="close" className="bg-[#0F766E] hover:bg-[#115E59] text-white rounded-xl">Save</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default UpdateModal;