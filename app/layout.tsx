import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";


const inter = Inter({
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title:
    "Accredian Enterprise | Corporate Upskilling Solutions",

  description:
    "Empower your workforce with industry-leading upskilling programs in AI, Data Science, Product Management, and more.",

  keywords: [
    "Corporate Upskilling",
    "Accredian",
    "AI",
    "Data Science",
    "Product Management",
    "Enterprise Learning",
  ],

  openGraph: {
    title:
      "Accredian Enterprise | Corporate Upskilling Solutions",

    description:
      "Responsive enterprise landing page built using Next.js, Tailwind CSS, GSAP, and MongoDB.",

    url:
      "https://enterprise-accredian-clone-gules.vercel.app/",

    siteName:
      "Accredian Enterprise Clone",

    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased ${inter.className}`}

    >
      <body className="min-h-full flex flex-col">{children}
<Toaster position="top-right" />

      </body>
    </html>
  );
}
