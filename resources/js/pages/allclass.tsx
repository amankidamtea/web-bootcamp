
// import SwiperComponent2 from '@/components/ui/Swiper2';


import { Head} from '@inertiajs/react';

import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// import { SwiperSlide } from 'swiper/react';
// import Navbar from '@/components/ui/navbar';
import MainLayout from './mainLayout';
// import { Check, Hourglass } from 'lucide-react';

AOS.init({
  duration: 800,
  once: false,
});



export default function AllClass() {
    // const [online, setOnline] = React.useState(false);
    return (
        <>
            <Head title="Semua Kelas yg Tersedia">
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
                        <div className="flex bg-gradient-to-t from-black to-black/50 h-full absolute top-0 left-0 lg:flex-row flex-col gap-5 lg:px-32 lg:gap-0 items-center   w-full  pt-20">
                            <div className='lg:px-0 px-5 w-full'>
                                <h1 className='lg:text-[60px] text-3xl w-full font-bold lg:leading-[70px] text-[#BAF81B]'>Halo semuanya <br/> udah siap untuk merubah masa depan ? <br/> <span className='text-white'>yuk mulai pilih bahasa apa yang ingin kamu pelajari</span></h1>
                            <p className='lg:text-[20px] mt-5 lg:w-[800px] w-full text-white'>Harada Internasional Center punya beberapa kelas bahasa untuk bantu kamu pergi keluar negri, mulai dari Jepang, Korea, hingga Eropa.</p>
                            <div className="py-5 flex gap-5 w-fit">
                                <a href="https://wa.me/6287823529583?text=hai%20saya%20ingin%20konsultasi" className='bg-[#BAF81B] px-5 py-2 mt-5 rounded-full'>Konsultasi Gratis</a>
                                {/* <a href="" className='bg-white px-5 py-2 mt-5 rounded-full'>Ambil Promo</a> */}
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* body */}
                    <div className="flex  justify-center w-full lg:py-10 py-5  bg-white lg:px-20 px-5">
                    <div className="w-full flex flex-col gap-5 ">
                            <h1 className='text-center text-4xl font-bold text-[#2C3D6D]'>Program Bahasa</h1>
                            <div className="grid lg:grid-cols-4 mt-5 gap-5 items-start lg:px-28">
                                {/* card 1 */}
                                <div className="border border-[#2C3D6D] py-4 rounded-xl flex flex-col items-center gap-2 w-full px-5">
                                    <div className="w-full   h-[200px] overflow-hidden">
                                        <img src="/images/foto2/ceo.png" className='w-full' alt="" />
                                    </div>
                                    <div className="w-full">
                                        <h2 className='text-2xl font-bold'>Program Bahasa <br/> Indonesia</h2>
                                        <p>online / offline</p>
                                    </div>
                                <a href="https://wa.me/6287823529583?text=hai%20saya%20ingin%20konsultasi" className='bg-[#2C3D6D] py-1 px-4 w-full text-center text-white rounded-full'>Konsultasi</a>
                                </div>
                                {/* card 2 */}
                                <div className="border border-[#2C3D6D] py-4 rounded-xl flex flex-col items-center gap-2 w-full px-5">
                                    <div className="w-full h-[200px] overflow-hidden">
                                        <img src="/images/foto2/rima.png" className='w-full' alt="" />
                                    </div>
                                    <div className="w-full">
                                        <h2 className='text-2xl font-bold'>Program Bahasa <br/> Jepang</h2>
                                        <p>online / offline</p>
                                </div>
                                <a href="https://wa.me/6287823529583?text=hai%20saya%20ingin%20konsultasi" className='bg-[#2C3D6D] py-1 px-4 w-full text-center text-white rounded-full'>Konsultasi</a>
                                </div>
                                {/* card 2 */}
                                <div className="border border-[#2C3D6D] py-4 rounded-xl flex flex-col items-center gap-2 w-full px-5">
                                    <div className="w-full h-[200px] overflow-hidden">
                                        <img src="/images/foto2/telent2.png" className='w-full' alt="" />
                                    </div>
                                    <div className="w-full">
                                    <h2 className='text-2xl font-bold'>Program Bahasa <br/> Korea</h2>
                                    <p>online / offline</p>
                                </div>
                                <a href="https://wa.me/6287823529583?text=hai%20saya%20ingin%20konsultasi" className='bg-[#2C3D6D] py-1 px-4 w-full text-center text-white rounded-full'>Konsultasi</a>
                                </div>
                                {/* card 2 */}
                                <div className="border border-[#2C3D6D] py-4 rounded-xl flex flex-col items-center gap-2 w-full px-5">
                                    <div className="w-full h-[200px] overflow-hidden">
                                        <img src="/images/foto2/telentc1.png" className='w-full' alt="" />
                                    </div>
                                    <div className="w-full">
                                        <h2 className='text-2xl font-bold'>Program Bahasa <br/> Inggris</h2>
                                        <p>online / offline</p>
                                </div>
                                <a href="https://wa.me/6287823529583?text=hai%20saya%20ingin%20konsultasi" className='bg-[#2C3D6D] py-1 px-4 w-full text-center text-white rounded-full'>Konsultasi</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

AllClass.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;
