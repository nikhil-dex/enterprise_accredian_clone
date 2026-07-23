
"use client";

import { useState } from "react";
import Link from "./Link";
import {
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
;

 

  return (
    <>
    
    <section
    id="footer"
    className="bg-black text-white py-10 px-4 sm:px-6 lg:px-10 pb-4 pt-30"
    >
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="mb-10 text-center md:text-left">  
    <div className="text-2xl font-semibold text-white lg:text-white">
            Accredian

            <p className="text-[11px]" >credentials that matter</p>
    </div>
    </div>
    <div className="flex flex-col justify-center items-center gap-2">  
        <a href="#Home" className="btn border border-white hover:border-black text-white hover:text-black hover:bg-white font-semibold py-2 px-4 rounded transition duration-300">
           Speak with our Advisor
            </a> 
            
    
  
    </div>
</div>

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
    <div>   
    <p className="mb-5 text-gray-500">Quick Links</p>
    <Link href="https://accredian.com/About">About</Link>
    <Link href="https://blog.accredian.com/">Blog</Link>
    <Link href="https://accredian.com/whyaccredian">Why Accredian</Link>
    </div>
    <div>   
    <p className="mb-5 text-gray-500">Contact Us</p>
     
    <Link href="mailto:enterprise@accredian.com">Email us: enterprise@accredian.com</Link>
    <p>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana</p>
  
    </div>
</div>


<div>


<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-around">

 

    {/* Social Media */}
    <div className="flex items-center gap-5 text-xl mt-1">
      <a href="https://www.facebook.com/accredianlearn" className="hover:scale-110 transition">
        <FaFacebook />
      </a>

      <a href="https://www.linkedin.com/school/accredianedu/" className="hover:scale-110 transition">
        <FaLinkedin />
      </a>

      <a href="https://x.com/accredianedu" className="hover:scale-110 transition">
        <FaXTwitter />
      </a>

      <a href="https://www.instagram.com/accredian_edu" className="hover:scale-110 transition">
        <FaInstagram />
      </a>

      <a href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA" className="hover:scale-110 transition">
        <FaYoutube />
      </a>
    </div>
       {/* Copyright */}
    <p className="text-sm text-gray-500 mt-5">
       © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
    </p>
</div>


</div>
      

      
    </section>
    </>
  );
}
