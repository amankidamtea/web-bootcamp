import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '@/components/ui/navbar';
import Side from '@/components/ui/side';

AOS.init({
  duration: 800,
  once: false,
});

export default function MainLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <div className="flex min-h-screen flex-col items-center bg-white  text-[#1b1b18]  dark:bg-[#0a0a0a]">
                <header className=" w-full relative">
                    <Navbar/>
                </header>
                {/* <Hero /> */}
                <main className='flex-1 w-full mt-17'>
                    {children}
                </main>
                <Side/>
                <footer className="bg-[#2C3D6D] text-white p-4 text-center w-full">
                    Copyright © 2025. PT Harada Internasional Center
                </footer>
            </div>
        </> 
    );
}
