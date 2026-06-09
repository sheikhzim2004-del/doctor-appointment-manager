import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import logo from "../../assets/logo.png";


const Navbar = () => {
  return (
    <nav className="w-full bg-[#0F766E] border-b border-gray-200 px-6 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

        {/* Logo + Name */}
        <div>
          <Image src="/logo.png" alt="Logo" width={250} height={250} />
        </div>

        {/* Nav Links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-6 ">
          <Link href={"/"} className="text-sm font-medium text-white hover:text-teal-200">Home</Link>
          <Link href={"/doctors"} className="text-sm font-medium text-white hover:text-teal-200">Doctors</Link>
          <Link href={"/all-appoint"} className="text-sm font-medium text-white hover:text-teal-200">All Appointment</Link>
          <Link href={"/appoint-booking"} className="text-sm font-medium text-white hover:text-teal-200">Appoint Booking</Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <Link href={"/login"} className="border border-[#99F6E4]/70 text-white px-5 py-2 rounded-xl font-medium hover:bg-[#99F6E4] hover:text-[#0F766E] transition">Login</Link>
          <Link href={"/register"} className="bg-[#F59E0B] text-white px-5 py-2 rounded-xl font-medium shadow-lg shadow-amber-500/20 hover:bg-[#D97706] transition">Register</Link>
        </div>

      </div>

      {/* Mobile Nav Links */}
      <div className="md:hidden flex gap-5 mt-3 border-t text-white border-gray-100 pt-3">
        <Link href={"/"} className="text-sm font-medium text-white hover:text-teal-200">Home</Link>
        <Link href={"/doctors"} className="text-sm font-medium text-white hover:text-teal-200">Doctors</Link>
        <Link href={"/all-appoint"} className="text-sm font-medium text-white hover:text-teal-200">All Appointment</Link>
        <Link href={"/appoint-booking"} className="text-sm font-medium text-white hover:text-teal-200">Appoint Booking</Link>
      </div>
    </nav>
  );
};

export default Navbar;