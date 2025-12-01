
// import SwiperComponent2 from '@/components/ui/Swiper2';


import { Head} from '@inertiajs/react';

import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// import { SwiperSlide } from 'swiper/react';
// import Navbar from '@/components/ui/navbar';
import MainLayout from './mainLayout';
import { Check, Hourglass } from 'lucide-react';

AOS.init({
  duration: 800,
  once: false,
});



export default function Eropa() {
    const [online, setOnline] = React.useState(false);
    return (
        <>
            <Head title="Bootcamp Eropa">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-white  text-[#1b1b18]  dark:bg-[#0a0a0a]">

                {/* <Hero /> */}
                    {/* top */}
                <div className='bg-white w-full h-[700px] shadow-xl  overflow-hidden lg:mb-4 relative mb-5'>
                        <img src="/images/foto2/bg.jpg" className='lg:w-full h-full object-cover' alt="" />
                        <div className="flex bg-gradient-to-t from-black to-black/50 h-full absolute top-0 left-0 lg:flex-row flex-col gap-5 lg:px-32 lg:gap-0 items-center  justify-around  w-full  pt-20">
                            <div className='lg:px-0 px-5 w-full'>
                                <h1 className='lg:text-[60px] text-3xl w-full font-bold lg:leading-[70px] text-[#BAF81B]'>Upgrade karier kamu dengan <br/> pergi ke eropa bersama <br/> <span className='text-white'>Harada Internasional Center</span></h1>
                            <p className='lg:text-[20px] mt-5 lg:w-[800px] w-full text-white'>Harada Internasional Center akan membawamu ke eropa dengan mengajarkan segala kebutuhan yang harus dipenuhi yang salasatunya adalah belajar bahasa Inggris untuk berkarir di Eropa.</p>
                            <div className="py-5 flex gap-5 w-fit">
                                <a href="https://wa.me/6287823529583?text=hai%20saya%20ingin%20konsultasi" className='bg-[#BAF81B] px-5 py-2 mt-5 rounded-full'>Konsultasi Gratis</a>
                                {/* <a href="" className='bg-white px-5 py-2 mt-5 rounded-full'>Ambil Promo</a> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* body */}
                    <div className="flex  justify-center w-full lg:py-10 py-5  bg-white lg:px-20 px-5">
                        <div className="w-full flex gap-5 lg:flex-row flex-col">
                            <div className="bg-[#2C3D6D] text-white h-fit p-5 rounded-xl flex flex-col items-center gap-2 w-full lg:w-[30%]">
                                <a href="/jepang" className=' px-5 py-1 '>Jepang</a>
                                <a href="/korea" className=' px-5 py-1'>Korea</a>
                                <a href="/eropa" className=' px-5 py-1 text-[#BAF81B] font-bold'>Eropa</a>
                                <a href="/indonesia" className=' px-5 py-1'>Indonesia</a>
                            </div>
                            <div className="bg-white w-full lg:w-[70%]">
                            <h1 className='text-[30px] font-bold'>Tentang Bootcamp Bahasa Inggris dan pergi ke Eropa</h1>
                            <p className='mt-5'>
                                Bootcamp Bahasa Inggris dari Harada Internasional Center adalah kursus online bersertifikat yang dirancang untuk membekalimu dengan kemampuan praktis dalam berbahasa Inggris. Di kelas Bahasa Inggris ini, kamu akan mempelajari berbagai topik penting, mulai dari keterampilan dasar percakapan, tata bahasa, kosakata, hingga persiapan ujian JLPT (Japanese Language Proficiency Test).

                                Kamu juga akan mendapatkan pengalaman langsung melalui proyek dan latihan nyata yang relevan dengan penggunaan bahasa Inggris dalam kehidupan sehari-hari maupun dunia profesional, membangun portofolio bahasa bersama mentor ahli, dan mendapatkan persiapan karier yang optimal agar siap bersaing di dunia kerja atau pendidikan dengan kemampuan bahasa Inggris yang mumpuni.
                            </p>
                            <h1 className='text-[30px] font-bold my-5'><span className='text-[#2C3D6D]'>Terjangkau Biayanya</span> Pergi Ke Jepang Pastinya</h1>
                            <div className="py-5">
                                <button onClick={()=>setOnline(true)} className={!online ? 'border border-[#2C3D6D] text-[#2C3D6D] px-5 py-1' : 'bg-[#2C3D6D] border border-[#2C3D6D] text-white px-5 py-1'}>Online</button>
                                <button onClick={() => setOnline(false)} className={online ? 'border border-[#2C3D6D] text-[#2C3D6D] px-5 py-1' : 'bg-[#2C3D6D] border border-[#2C3D6D] text-white px-5 py-1'}>Offline</button>
                            </div>

                            {/* promo */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
                                {/* card 1 */}
                                <div className="border-2 p-5 rounded-2xl border-[#2C3D6D] h-fit w-fit">
                                    <h1 className='bg-gray-300 px-6 rounded-md py-1 w-fit text-xl font-bold text-gray-600'>Paket <br/> Reguler</h1>
                                    <div className='mt-5 flex gap-2 items-center text-[14px]'>
                                        <span className='line-through text-gray-400 '>{online ? 'Rp 6.990.000' : 'Rp 8.200.000'}</span>
                                        <span className='bg-[#2C3D6D] text-white text-[12px] py-1 px-4 rounded-full'>
                                            Hemat 28%
                                        </span>
                                    </div>
                                    <h2 className='lg:text-[40px] text-2xl font-bold text-[#2C3D6D]'>{online ? 'Rp. 4.990.000' : 'Rp. 6.200.000'}</h2>
                                    <p className='-mt-2'>28 Nov - 30 Nov 2025</p>
                                    <p className='text-[12px] text-red-400 font-bold mb-5 flex gap-2 items-center'> <Hourglass className='animate-spin' size={15}/>Hari ini hari terakhir untuk harga ini</p>
                                    <div className="w-full flex">
                                        <a href="https://wa.me/6287823529583?text=hai%20saya%20ingin%20daftar%20paket%20reguler" className='border-[#2C3D6D] border-2 w-full text-center py-2 px-5 rounded-full'>
                                        Daftar Sekarang
                                    </a>
                                    </div>
                                    <ul className='capitalize mt-5 flex flex-col gap-3'>
                                        <li className='flex items-center gap-2'><Check className='bg-gray-200 w-5 h-5 rounded-full p-1' size={15}/>pembelajaran  4 level selama 3 bulan</li>
                                        <li className='flex items-center gap-2'><Check className='bg-gray-200 w-5 h-5 rounded-full p-1' size={15}/>silabus, modul dan toolkit</li>
                                        <li className='flex items-center gap-2'><Check className='bg-gray-200 w-5 h-5 rounded-full p-1' size={15}/>matching job</li>
                                        <li className='flex items-center gap-2'><Check className='bg-gray-200 w-5 h-5 rounded-full p-1' size={15}/>pemantapan wawancara</li>
                                        <li className='flex items-center gap-2'><Check className='bg-gray-200 w-5 h-5 rounded-full p-1' size={15}/>garansi mengulang belajar</li>
                                        <li className='flex items-center gap-2'><Check className='bg-gray-200 w-5 h-5 rounded-full p-1' size={15}/>dana talang</li>
                                    </ul>
                                </div>
                                {/* card 2 */}
                                <div className="border-2 relative p-5 rounded-2xl border-[#2C3D6D] h-fit w-fit bg-[#BAF81B]">
                                    <h1 className='bg-[#9fd31a] px-6 rounded-md py-1 w-fit text-xl font-bold text-[#2C3D6D]'>Paket <br /> Premium</h1>
                                    <img src="/images/foto2/pita.png" className='w-28 absolute top-0 right-0' alt="" />
                                    <div className='mt-5 flex gap-2 items-center text-[14px]'>
                                        <span className='line-through text-gray-600 '>{online ? 'Rp.10.990.000' : 'Rp 12.500.000'}</span>
                                        <span className='bg-[#2C3D6D] text-[12px] text-white py-1 px-4 rounded-full'>
                                            Hemat 27%
                                        </span>
                                    </div>
                                    <h2 className='lg:text-[40px] text-2xl font-bold text-[#2C3D6D]'>{online ? 'Rp. 7.990.000' : 'Rp 9.499.000'}</h2>
                                    <p className='-mt-2'>28 Nov - 30 Nov 2025</p>
                                    <p className='text-[12px] text-red-700 font-bold mb-5 flex gap-2 items-center'> <Hourglass className='animate-spin' size={15}/>Hari ini hari terakhir untuk harga ini</p>
                                    <div className="w-full flex">
                                        <a href="https://wa.me/6287823529583?text=hai%20saya%20ingin%20daftar%20paket%20premium" className='bg-[#2C3D6D] text-white w-full text-center py-2 px-5 rounded-full'>
                                        Daftar Sekarang
                                    </a>
                                    </div>
                                    <ul className='capitalize mt-5 flex flex-col gap-3'>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>pembelajaran  4 level selama 3 bulan</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>silabus, modul dan toolkit</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>matching job</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>pemantapan wawancara</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>garansi mengulang belajar</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>dana talang</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>lebih cepat mendapat kerja</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>garansi mendapatkan job</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>Konsultasi 1-on-1 Tanpa <br/> Batas Bersama Instruktur Expert</li>
                                    </ul>
                                </div>
                                {/* card 3 */}
                                <div className="border-2 p-5 rounded-2xl border-[#2C3D6D] h-fit w-fit bg-green-200">
                                    <h1 className='bg-green-400 px-6 rounded-md py-1 w-fit text-xl font-bold text-[#2C3D6D]'>Paket <br/> Bisnis</h1>
                                    <div className='mt-5 flex gap-2 items-center text-[14px]'>
                                        <span className='line-through text-gray-600 '>{online ? 'Rp 15.990.000' : 'Rp 17.500.000'}</span>
                                        <span className='bg-[#2C3D6D] text-[12px] text-white py-1 px-4 rounded-full'>
                                            Hemat 18%
                                        </span>
                                    </div>
                                    <h2 className='lg:text-[40px] text-2xl font-bold text-[#2C3D6D]'>{online ? 'Rp. 12.990.000' : 'Rp. 15.000.000'}</h2>
                                    <p className='-mt-2'>28 Nov - 30 Nov 2025</p>
                                    <p className='text-[12px] text-red-700 font-bold mb-5 flex gap-2 items-center'> <Hourglass className='animate-spin' size={15}/>Hari ini hari terakhir untuk harga ini</p>
                                    <div className="w-full flex">
                                        <a href="https://wa.me/6287823529583?text=hai%20saya%20ingin%20daftar%20paket%20bisnis" className='bg-[#2C3D6D] text-white w-full text-center py-2 px-5 rounded-full'>
                                        Daftar Sekarang
                                    </a>
                                    </div>
                                    <ul className='capitalize mt-5 flex flex-col gap-3'>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>pembelajaran  4 level selama 3 bulan</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>silabus, modul dan toolkit</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>matching job</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>pemantapan wawancara</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>garansi mengulang belajar</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>dana talang</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>lebih cepat mendapat kerja</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>garansi mendapatkan job</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>Konsultasi 1-on-1 Unlimited <br/> Bersama Instruktur Expert</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>class private jika diperlukan</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>6 Bulan Jaminan Kerja <br/>(Refund s.d. 100%)  +<br/> Lifetime Job Vacancy</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>Career & Coaching <br/> untuk Dampingan <br/> Karier Intensif Setelah Lulus</li>
                                        <li className='flex items-center gap-2'><Check className='bg-[#2C3D6D] text-white w-5 h-5 rounded-full p-1' size={15}/>Extra 10 Live Class <br/>Bersama Expert</li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

Eropa.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;
