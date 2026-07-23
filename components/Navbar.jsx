
"use client";

import { useState } from "react";
import Enquiry from "@/components/EnquiryForm";
export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);



  const links = [
    "Home",
    "Stats",
    "Clients",
    "Accredian_Edge",
    "CAT",
    "How It Works",
    "FAQs",
    "Testimonials",
  ];

  const getHref = (link) => {
    return `/#${link.replace(/\s+/g, "")}`;
  };

  return (
    <>
    <nav className="sticky top-0 z-50 bg-white lg:bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            
         
             {/* Logo */}
          <a
            href="/"
            className="text-xl font-semibold text-black lg:text-white"
          >
            Accredian
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-2 ml-1">
            {links.map((link) => (
              <a
                key={link}
                href={getHref(link)}
                onMouseEnter={() => setHovered(link)}
                onMouseLeave={() => setHovered(null)}
                className={`px-2 py-1 transition-all duration-300 text-sm ${
                  hovered === null
                    ? "text-white"
                    : hovered === link
                    ? "text-white"
                    : "text-gray-500"
                }`}
              >
                {link}
              </a>
            ))}
          </div>

          <button 
          className="
hidden
md:block
border
border-black
hover:border-white
text-black
hover:text-white
bg-white
hover:bg-black
font-semibold
py-1
px-2
rounded
transition
duration-300
"
          onClick={() => setIsOpenForm(true)}
          >
            Enquiry Now
            </button> 

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto lg:hidden text-3xl text-black"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          {links.map((link) => (
            <a
              key={link}
              href={getHref(link)}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 text-black text-3xl hover:bg-gray-50 transition"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
{
    isOpenForm && (
        <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpenForm(false)}
        />
    )
}

<Enquiry
    isOpenForm={isOpenForm}
    setIsOpenForm={setIsOpenForm}
/>
    </>
  );
}
