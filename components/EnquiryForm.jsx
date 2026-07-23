"use client";
import {useState} from "react";

import { toast } from "react-hot-toast";


export default function EnquiryForm({isOpenForm,setIsOpenForm}){
    const [loading, setLoading] = useState(false);
const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    domain: "",
    candidates: "",
    mode: "",
    address: "",
});

const domains = [
  "Product Management",
  "Data Science",
  "Artificial Intelligence",
  "Machine Learning",
  "Generative AI",
  "HR",
  "Finance",
  "CFO Leadership",
  "Marketing",
  "Cyber Security",
  "Cloud Computing",
  "DevOps",
  "Software Engineering",
  "Business Analytics",
  "UI/UX",
];
const sampleData = {
  "name": "Nikhil",
  "email": "nikhil@gmail.com",
  "phone": "9876543210",
  "companyName": "OpenAI India",
  "domain": "Artificial Intelligence",
  "candidates": 150,
  "mode": "Hybrid",
  "address": "Gurgaon, Delhi, India"
}
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));
}

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        setLoading(true);

        const res = await fetch("/api/enquiry", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        toast.success(
    "Request submitted successfully!"
);

        setFormData({
            name: "",
            email: "",
            phone: "",
            companyName: "",
            domain: "",
            candidates: "",
            mode: "",
            address: "",
        });

        setIsOpenForm(false);
    } catch (error) {
        console.error(error);

        toast.error(
            "Something went wrong. Please try again."
        );
    } finally {
        setLoading(false);
    }
};
    return(
        <>
        <section
    className={`
        fixed
        top-0
        right-0
       h-screen
        overflow-y-auto
        w-full
        md:w-[500px]
        md:rounded-l-3xl
        bg-[#0A0A0A]
        text-gray-100
        z-50
        p-8
        transition-transform
        duration-500
        ease-in-out
        ${
            isOpenForm
                ? "translate-x-0"
                : "translate-x-full"
        }
        `}
>
        <button
   onClick={() => setIsOpenForm(false)}
    className="
        absolute
        top-5
        right-5
        text-3xl
    "
>
    ×
</button>
            <h3
    className="
        text-3xl
        font-bold
        mb-8
    "
>
    Enquire Now
</h3>
            <form
            onSubmit={handleSubmit}
    className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-4
    "
>

               <input required name="name" placeholder="Enter Name" onChange={handleChange} value={formData.name}     className="
        p-3
        rounded-xl
        bg-gray-900
        border
        border-gray-700
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
    " />
               <input required type="email" name="email" placeholder="Enter Email" onChange={handleChange} value={formData.email}     className="
        p-3
        rounded-xl
        bg-gray-900
        border
        border-gray-700
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
    " />
               <input required name="phone" type="tel" placeholder="Enter Phone Number" onChange={handleChange} value={formData.phone}     className="
        p-3
        rounded-xl
        bg-gray-900
        border
        border-gray-700
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
    " />
               <input required name="companyName" placeholder="Enter Company Name" onChange={handleChange} value={formData.companyName}     className="
        p-3
        rounded-xl
        bg-gray-900
        border
        border-gray-700
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
    " />
               <select required name="domain" onChange={handleChange} value={formData.domain}     className="
               md:col-span-2
        p-3
        rounded-xl
        bg-gray-900
        border
        border-gray-700
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
    ">
                 <option value="">Select Domain</option>
                 {domains.map((domain)=>{
                    return <option key={domain} value={domain}>{domain}</option>
                 })}
               </select>
               <input required name="candidates" type="number" placeholder="Number of Candidates" onChange={handleChange} value={formData.candidates}     className="
        p-3
        rounded-xl
        bg-gray-900
        border
        border-gray-700
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
    " />
               <select required name="mode" placeholder="Mode of Delivery" onChange={handleChange} value={formData.mode}     className="
        p-3
        rounded-xl
        bg-gray-900
        border
        border-gray-700
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
    ">
                 <option value="">Select Mode</option>
                 <option value="Online">Online</option>
                 <option value="Offline">Offline</option>
               </select>
               <textarea required rows={4} name="address" placeholder="Address" onChange={handleChange} value={formData.address}     className="
               md:col-span-2
        p-3
        rounded-xl
        bg-gray-900
        border
        border-gray-700
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
    " />
               <button
    type="submit"
    className="
    md:col-span-2
        bg-blue-600
        hover:bg-blue-700
        py-3
        rounded-xl
        font-semibold
        transition
    "
    disabled={loading}
>
       {loading
        ? "Submitting..."
        : "Request Consultation"}
</button>
               <button type="button" disabled={loading} onClick={() => setFormData(sampleData)}  className="
        md:col-span-2
        border
        border-gray-700
        py-3
        rounded-xl
        hover:bg-gray-900
        transition
    ">
                 Fill Sample Data
               </button>
            </form>



        </section> 
        </>
    )
}