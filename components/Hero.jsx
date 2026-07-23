
"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
useEffect(() => {
  if (window.innerWidth >= 1024) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#Home",
        start: "top top",
        end: "+=3000",
        pin: true,
        pinSpacing: true,
        scrub: true,
        invalidateOnRefresh: true,

      },
    });

// Hold Video 1
tl
// Hold Video 1
.to({}, { duration: 1 })

// Push Video 1 upward
.to("#video1", {
  y: "-100%",
  duration: 1,
})

// Small pause
.to({}, { duration: 0.5 })

// Bring Video 2 from bottom
.fromTo(
  "#video2",
  {
    y: "100%",

  },
  {
    y: "0%",
    duration: 1,
  }
)

// Hold Video 2
.to({}, { duration: 2 });
    return () => {
      tl.kill();
    };
  }
}, []);

 

  return (
    <>

<section
  id="Home"
  className="h-screen flex items-center overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <div>
        <h1 className="text-5xl lg:text-7xl font-semibold leading-tight text-white">
          Next-Gen 
          <p><span className="text-blue-500">Expertise</span> For Your</p>
          <span className="text-blue-500">Enterprise</span>
          
        </h1>
        <p className="text-sm font-medium text-gray-500 mb-4">
          
        </p>


        <p className="mt-8 text-lg text-gray-600 max-w-xl leading-relaxed">
          Cultivate high-performance teams through expert learning.
        </p>

    

      </div>

      {/* Right Content */}
<div className="relative w-full h-[500px] overflow-hidden">
  {/* Video 1 */}
  <video
    id="video1"
    src="/animation1_hero.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      rounded-3xl
      shadow-2xl
    "
  />

  {/* Video 2 */}
  <video
    id="video2"
    src="/animation3_hero.mp4"
    autoPlay
    loop
    muted
    playsInline
className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    rounded-3xl
    translate-y-full
    shadow-2xl
"
  />
</div>
    </div>
  </div>
</section>


    
   
    </>
  );
}
