'use client'

import { authClient } from '@/lib/auth-client';
import { Button, Card, Description, FieldError, Form, Input, Label, TextField, Link } from '@heroui/react';
import { User, Mail, Lock } from 'lucide-react';
import {  useRouter } from 'next/navigation';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { HiMiniPhoto } from 'react-icons/hi2';
import { toast } from 'react-toastify';

const RegisterPage = () => {

    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.currentTarget);
            const user = Object.fromEntries(formData.entries());

            //user signup
            const { data, error } = await authClient.signUp.email({
                name: user.name,
                image: user.url,
                email: user.email,
                password: user.password
            });

            console.log({ data, error });

            if (error) {
                toast.error(error.message || "Registration failed. Please try again.");
                return;
            }

            if (data) {
                toast.success("Register Successfully");
                router.push("/");
            }

        } catch (err) {
            console.log(err);
            toast.error("Something went wrong. Please try again.");
        }
    }

    const handleSubmitWithGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
        })
    }


    return (
        <div className='relative min-h-screen overflow-hidden bg-[#F8FAFC] flex items-center justify-center px-4 py-12'>
            <div className='absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#0F766E]/20 rounded-full blur-3xl' />
            <div className='absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#F59E0B]/20 rounded-full blur-3xl' />
            <div className='absolute top-[30%] right-[10%] w-72 h-72 bg-[#99F6E4]/30 rounded-full blur-3xl' />

            <div className='relative w-full max-w-md'>
                <div className='text-center mb-8'>
                    <div className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#0F766E] to-[#14B8A6] shadow-lg shadow-[#0F766E]/30 mb-4'>
                        <User className='text-white' size={26} />
                    </div>
                    <h1 className='text-4xl font-extrabold text-[#0F172A] tracking-tight'>
                        Create A<span className='bg-gradient-to-r from-[#0F766E] to-[#F59E0B] bg-clip-text text-transparent'>cc</span>ount
                    </h1>
                    <p className='text-[#475569] mt-2 text-sm'>Create your account to schedule and manage appointments with ease.</p>
                </div>

                <Card className='border border-white/60 rounded-2xl bg-white/80 backdrop-blur-xl shadow-2xl shadow-[#0F766E]/10 p-8'>
                    <Form onSubmit={onSubmit} className="flex w-full flex-col gap-5">
                        <TextField isRequired name="name" type="text">
                            <Label className='text-[#0F172A] font-medium text-sm'>Name</Label>
                            <div className='relative'>
                                <User className='absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]' size={18} />
                                <Input
                                    placeholder="Enter Your Name"
                                    className='w-full pl-10 rounded-lg border-[#E2E8F0] focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 text-[#0F172A] transition-all duration-300'
                                />
                            </div>
                            <FieldError className='text-[#EF4444]' />
                        </TextField>

                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className='text-[#0F172A] font-medium text-sm'>Email</Label>
                            <div className='relative'>
                                <Mail className='absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]' size={18} />
                                <Input
                                    placeholder="jimdoe@example.com"
                                    className='w-full pl-10 rounded-lg border-[#E2E8F0] focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 text-[#0F172A] transition-all duration-300'
                                />
                            </div>
                            <FieldError className='text-[#EF4444]' />
                        </TextField>

                        <TextField isRequired name="url" type="text">
                            <Label className='text-[#0F172A] font-medium text-sm'>Photo URL</Label>
                            <div className='relative'>
                                <HiMiniPhoto className='absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]' size={18} />
                                <Input
                                    placeholder="Enter Photo URL"
                                    className='w-full pl-10 rounded-lg border-[#E2E8F0] focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 text-[#0F172A] transition-all duration-300'
                                />
                            </div>
                            <FieldError className='text-[#EF4444]' />
                        </TextField>

                        <TextField
                            isRequired
                            minLength={8}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) {
                                    return "Password must be at least 8 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[0-9]/.test(value)) {
                                    return "Password must contain at least one number";
                                }
                                return null;
                            }}
                        >
                            <div className='flex justify-between items-center'>
                                <Label className='text-[#0F172A] font-medium text-sm'>Password</Label>
                                <Link href="" className='text-xs text-[#0F766E] hover:text-[#F59E0B] transition-colors duration-200'>
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className='relative'>
                                <Lock className='absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]' size={18} />
                                <Input
                                    placeholder="Enter your password"
                                    className='w-full pl-10 rounded-lg border-[#E2E8F0] focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20 text-[#0F172A] transition-all duration-300'
                                />
                            </div>
                            <Description className='text-[#94A3B8] text-xs'>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                            <FieldError className='text-[#EF4444]' />
                        </TextField>

                        <Button
                            className="w-full rounded-lg bg-gradient-to-r from-[#0F766E] to-[#14B8A6] hover:from-[#115E59] hover:to-[#0F766E] text-white font-semibold py-2.5 mt-1 shadow-lg shadow-[#0F766E]/30 hover:shadow-xl hover:shadow-[#0F766E]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                            type="submit"
                        >
                            Create Account
                        </Button>

                        <div className='flex items-center gap-3 my-1'>
                            <div className='flex-1 h-px bg-[#E2E8F0]' />
                            <span className='text-xs text-[#94A3B8] font-medium'>OR</span>
                            <div className='flex-1 h-px bg-[#E2E8F0]' />
                        </div>

                        <Button
                            onClick={handleSubmitWithGoogle}
                            className="w-full rounded-lg bg-white border border-[#E2E8F0] hover:border-[#0F766E]/40 hover:bg-[#F0FDFA] text-[#0F172A] font-medium py-2.5 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                            type="button"
                        >
                            <FcGoogle size={20} />
                            Continue with Google
                        </Button>

                        <p className='text-center text-sm text-[#475569] mt-2'>
                            Already have an account?{' '}
                            <Link href="/login" className='text-[#0F766E] font-semibold hover:text-[#F59E0B] transition-colors duration-200'>
                                Login
                            </Link>
                        </p>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default RegisterPage;