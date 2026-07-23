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

export default function Stats() {
  return (
    <section
      id="Stats"
      className="py-24 px-4 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Our{" "}
            <span className="text-blue-600">
              Track Record
            </span>
          </h2>

          <p className="mt-4 text-lg md:text-2xl text-gray-600">
            The Numbers Behind Our Success
          </p>
        </div>

        {/* Stats */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
        {stats.map((stat, index) => (
    <motion.div
  key={stat.number}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
    delay: index * 0.2,
  }}
  className="
    text-center
    md:border-r
    last:border-r-0
    border-gray-200
    px-6
  "
>
      <div className="
    mx-auto
    w-fit
    bg-blue-100
    text-blue-600
    text-3xl md:text-4xl
    font-bold
    rounded-full
    px-8
    py-4
">
            <CountUp
                end={stat.number}
                duration={2}
            />
            {stat.suffix}
        </div>
<p className="mt-6 text-lg text-center max-w-xs mx-auto">
  {stat.text}
</p>
    </motion.div>
))}
        </div>
      </div>
    </section>
  );
}