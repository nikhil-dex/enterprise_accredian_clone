
"use client";

import { useState } from "react";

export default function Link({href,children}) {






  return (
    <>
    <div>

    <a 
    className = "text-white hover:text-gray-300 transition duration-300"
    
    href={href}>
      {children}
    </a>
        </div>
    </>
    
  );
}
