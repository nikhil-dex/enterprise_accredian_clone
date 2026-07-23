"use client";


import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Tailored Solutions",
    description: "Programs customized to your organization's goals.",
    position: "top",
  },
  {
    title: "Expert Guidance",
    description: "Learn from industry leaders.",
    position: "bottom",
  },
  {
    title: "Innovative Framework",
    description: "Application-driven results.",
    position: "top",
  },
  {
    title: "Advanced Technology",
    description: "State-of-the-art LMS experience.",
    position: "bottom",
  },
  {
    title: "Diverse Offerings",
    description: "Courses across industries.",
    position: "top",
  },
  {
    title: "Proven Impact",
    description: "Trusted by leading organizations.",
    position: "bottom",
  },
  {
    title: "Flexible Delivery",
    description: "Online and offline options.",
    position: "top",
  },
];

export default function Accredian_Edge() {

    useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#Accredian_Edge",
      start: "top 70%",
    },
  });

  tl.from(".timeline-line", {
    scaleX: 0,
    duration: 1.5,
  })
    .from(
      ".timeline-item",
      {
        opacity: 0,
        y: 100,
        stagger: 0.2,
      },
      "-=1"
    )
    .from(
      ".timeline-icon",
      {
        scale: 0,
        rotate: 180,
        stagger: 0.2,
      },
      "-=1"
    );
}, []);
  return (
    <section
      id="Accredian_Edge"
      className="py-24 px-4 bg-black text-white height-[100vh]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-semibold">
  Why Choose{" "}
  <span className="text-blue-600">
    Accredian
  </span>
</h2>

<p className="mt-4 text-lg md:text-xl text-gray-400">
  Enterprise solutions designed for measurable outcomes.
</p>

        
        </div>
        

        {/* Stats */}
        <div className="hidden lg:block mt-24">
  <div className="timeline-line h-1 bg-blue-600 w-full relative">
    <div className="grid grid-cols-7">
      {items.map((item) => (
        <div
          key={item.title}
          className="
            timeline-item
            flex
            flex-col
            items-center
            text-center
            px-4
          "
        >
          <div
            className="
              timeline-icon
              w-28
              h-28
              rounded-full
              border-2
              border-blue-500
              bg-white
              mt-[-55px]
            "
          />

          <h3 className="mt-6 font-semibold">
            {item.title}
          </h3>

          <p className="text-gray-400 mt-2">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>

<div className="lg:hidden mt-16">
  {items.map((item) => (
    <div
      key={item.title}
      className="
        flex
        gap-6
        mb-10
      "
    >
      <div className="w-4 bg-blue-600 rounded-full" />

      <div>
        <h3 className="font-semibold">
          {item.title}
        </h3>

        <p className="text-gray-400 mt-2">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>

    


      </div>
    </section>
  );
}