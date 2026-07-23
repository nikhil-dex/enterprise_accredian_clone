
"use client";


export default function Hero() {
;

 

  return (
    <>

<section
  id="Home"
  className="min-h-screen flex items-center"
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
      <div className="relative w-full h-full">
  <video
    src="/animation1_hero.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover rounded-3xl"
  />
</div>
    </div>
  </div>
</section>


    
   
    </>
  );
}
