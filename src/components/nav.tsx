"use client"
import Link from "next/link";
import React, { useState } from 'react';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" p-4">
    <div className="flex justify-between">
      <div className="text-primary text-2xl lg:text-4xl font-bold ">Psychgen_Portal</div>
      <div className="flex justify-end items-baseline">
      
      <div className={`flex flex-col lg:flex-col  lg:items-center   ${isOpen ? 'block' : 'hidden'}`}>
        <Link href="/" className="hover:text-white hover:bg-green-700 px-3 py-2 rounded">Home</Link>
        <Link href="/Search" className="hovertext-white hover:bg-green-700 px-3 py-2 rounded">Search</Link>
        <Link href="/Analysis" className="hovertext-white hover:bg-green-700 px-3 py-2 rounded">Analytics</Link>
        <Link href="/Details" className="hover:text-white hover:bg-green-700 px-3 py-2 rounded">Contact</Link>
      </div>
      <div className="flex flex-col lg:flex-row lg:hidden px-3 my-2 ">
        <button onClick={toggleNavbar} className=" focus:outline-none">
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      </div>
     
    </div>
  </nav>
  );
};

export default NavBar;
