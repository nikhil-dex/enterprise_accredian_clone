"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
    {
       number: 10,
suffix: "K+",
        text: "Professionals Trained",
    },
    {
        number: 200,
        suffix: "+",
        text: "Sessions Delivered",
    },
    {
        number: 5,
        suffix: "K+",
        text: "Active Learners",
    },
];

export default function Clients() {
  return (
    <section
      id="Clients"
      className="py-24 px-4 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Our Proven{" "}
            <span className="text-blue-600">
              Partnership
            </span>
          </h2>

          <p className="mt-4 text-lg md:text-2xl text-gray-600">
            Successful Collaborations With the Industry's Best
          </p>
        </div>

        {/* Stats */}
         <div className="grid grid-cols-1 md:grid-cols-1 gap-12 mt-20">
            <img src="/partners.png" alt="Partner 1" className="mx-auto" />
            
          
               

        </div>
       
      </div>
    </section>
  );
}