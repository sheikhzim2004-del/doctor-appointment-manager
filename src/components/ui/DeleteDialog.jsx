'use client'
import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

const DeleteDialog = ({ appointment }) => {
    const {_id, patientName, doctorName, appointmentDate } = appointment;

    
    const onSubmit = async(e) =>{
        e.preventDefault()
        const {data: tokenData} = await authClient.token()

        const res =await fetch(`http://localhost:8080/appoint/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            },
        })
        const data = await res.json();
        console.log("delete data", data)

        toast.success('Appointment deleted successfully!');
        redirect("/all-appoint")
    }

    return (
        <div>
            <AlertDialog>
                <Button className="rounded-full text-sm font-medium px-4 py-3" variant="danger"><MdDeleteForever />
                </Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete the Appointment permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete the appointment for <strong>{patientName} </strong> 
                                     with <strong>{doctorName} </strong> on <strong> {appointmentDate}</strong>.
                                    This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={onSubmit} slot="close" variant="danger">
                                    Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteDialog;