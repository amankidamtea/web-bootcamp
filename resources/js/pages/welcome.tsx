import SwiperComponent from '@/components/ui/swiper';
import SwiperComponent2 from '@/components/ui/Swiper2';


import { Head} from '@inertiajs/react';

import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { SwiperSlide } from 'swiper/react';
import Navbar from '@/components/ui/navbar';

AOS.init({
  duration: 800,
  once: false,
});



const groupFoto1 = [
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard2.jpg",
        "deskripsi": ""
    },
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard3.jpg",
        "deskripsi": ""
    },
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard4.jpg",
        "deskripsi": ""
    },
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard5.jpg",
        "deskripsi": ""
    },
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard6.jpg",
        "deskripsi": ""
    },
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard7.jpg",
        "deskripsi": ""
    },
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard8.jpg",
        "deskripsi": ""
    },
];

const groupFoto2 = [
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard9.jpg",
        "deskripsi": ""
    },
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard10.jpg",
        "deskripsi": ""
    },
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard11.jpg",
        "deskripsi": ""
    },
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard12.jpg",
        "deskripsi": ""
    },
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard13.jpg",
        "deskripsi": ""
    },
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard14.jpg",
        "deskripsi": ""
    },
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard15.jpg",
        "deskripsi": ""
    },
];

const groupFoto3 = [
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard16.jpg",
        "deskripsi": ""
    },
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard17.jpg",
        "deskripsi": ""
    },
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard18.jpg",
        "deskripsi": ""
    },
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard19.jpg",
        "deskripsi": ""
    },
    {
        "name": "Safitri",
        "image": "/images/foto2/Artboard20.jpg",
        "deskripsi": ""
    },
];

const section2 = [
    {
        "title": "200 Mentor Terbaik & Berkualitas",
        "deskripsi": "Kami sangat selektif dalam memilih mentor dari berbagai top tech companies dengan memberikan arahan, pelatihan mengajar, dan juga evaluasi setelah mengajar secara berkala."
    },
    {
        "title": "Panduan Karir Personalized 101 Selamanya",
        "deskripsi": "Tim Talent Support kami secara profesional akan selalu siap melayani para students Dibimbing.id selama bootcamp berlangsung dan setelah kelulusan."
    },
    {
        "title": "Dedicated Class Manager untuk Kenyamanan Belajar",
        "deskripsi": "class manager kami siap melayani kebutuhan, mendengarkan keluhan, dan juga membantu persiapan pembelajaran student baik di dalam dan di luar kelas."
    },
    {
        "title": "Kesempatan Mengulang Gratis 1 Batch",
        "deskripsi": "Kami berani memberikan garansi mengulang pembelajaran selama 4 bulan jika materi dari mentor kurang mudah dipahami oleh student."
    },
    {
        "title": "Networking Berkualitas Bersama 100.000+ Member Community Dibimbing.Id",
        "deskripsi": "Para alumni Dibimbing.id akan diberikan akses untuk saling berinteraksi dengan alumni dan community dibimbing.id lainnya yang telah bekerja di perusahaan besar untuk memperluas networking."
    },
    {
        "title": "Pengalaman Magang Nyata dan Final Project",
        "deskripsi": "Kami akan memberikan kesempatan kepada para student Dibimbing.id untuk mendapatkan pengalaman kerja secara nyata dan pengerjaan real project untuk dijadikan portofolio yang valuable."
    },
];

const section3 = [
    {
        "title": "Eropa",
        "link": "",
        "image": "/images/foto2/inggris.jpg",
    },
    {
        "title": "Jepang",
        "link": "",
        "image": "/images/foto2/artboard2.jpg",
    },
    {
        "title": "Korea",
        "link": "",
        "image": "/images/foto2/artboard4.jpg",
    },
]

const section4 = [
    {
        "name": "Safitri",
        "deskripsi": "Seluruh program Bootcamp DIbimbing.id ini oke banget! Apalagi aku pertama kali nemu Bootcamp Full-Stack Web Development dengan harga yang paling terjangkau dengan materi paling lengkap!",
        "image" : "/images/foto2/artboard1.jpg"
    },
    {
        "name": "Safitri",
        "deskripsi": "Seluruh program Bootcamp DIbimbing.id ini oke banget! Apalagi aku pertama kali nemu Bootcamp Full-Stack Web Development dengan harga yang paling terjangkau dengan materi paling lengkap!",
        "image" : "/images/foto2/artboard1.jpg"
    },
    {
        "name": "Safitri",
        "deskripsi": "Seluruh program Bootcamp DIbimbing.id ini oke banget! Apalagi aku pertama kali nemu Bootcamp Full-Stack Web Development dengan harga yang paling terjangkau dengan materi paling lengkap!",
        "image" : "/images/foto2/artboard1.jpg"
    },
    {
        "name": "Safitri",
        "deskripsi": "Seluruh program Bootcamp DIbimbing.id ini oke banget! Apalagi aku pertama kali nemu Bootcamp Full-Stack Web Development dengan harga yang paling terjangkau dengan materi paling lengkap!",
        "image" : "/images/foto2/artboard1.jpg"
    },
]


export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-white  text-[#1b1b18]  dark:bg-[#0a0a0a]">
                <header className=" w-full relative">
                    <Navbar/>
                </header>
                {/* <Hero /> */}
                <main className='flex-1 w-full mt-17'>
                    {/* top */}
                    <div className='bg-white w-full h-[700px] '>
                        <div className="flex lg:flex-row flex-col gap-5 lg:px-32 lg:gap-0 items-center  justify-around  w-full  pt-10">
                            <div className='lg:px-0 px-5 w-full'>
                                <h1 className='lg:text-[60px] text-3xl lg:w-[500px] font-bold lg:leading-[70px]'><span className=''>Lembaga Bahasa No 1 di Indonesia</span> Tercepat Untuk Penempatan Kerja</h1>
                                <p className='lg:text-[20px] lg:w-[500px] w-full'>Sebagai lembaga bahasa nomor satu di Indonesia, kami menyediakan pelatihan intensif dengan instruktur berpengalaman untuk hasil yang cepat dan efektif. Program kami dirancang untuk mempercepat penempatan kerja, sehingga lulusan siap bersaing di dunia profesional dalam waktu lebih singkat.</p>
                                <button className='bg-[#2C3D6D] text-white px-10 rounded-full lg:text-[20px] text-[15px] py-1 mt-5'>Yuk Konsultasi</button>
                            </div>
                            <div className='top-4   w-full px-5 lg:px-0 flex justify-center gap-3 overflow-hidden mt-6'>
                                <SwiperComponent reverse={false} data={groupFoto1} direction='vertical' slidesPerView={2} spaceBetween={20} allowTouchMove={false}/>
                                <SwiperComponent reverse={true} data={groupFoto2} direction='vertical' slidesPerView={2} spaceBetween={20} allowTouchMove={false}/>
                                <SwiperComponent reverse={false} data={groupFoto3} direction='vertical' slidesPerView={2} spaceBetween={20} allowTouchMove={false} />
                            </div>
                        </div>
                    </div>
                    {/* info */}
                    <div className="flex justify-center w-full lg:py-10 py-5  bg-[#2C3D6D]">
                        <div className="flex gap-10 justify-around text-white">
                            <div className="flex lg:flex-row flex-col gap-3 items-center">
                                <h3 className='lg:text-[40px] text-xl font-bold text-[#BAF81B]'>1000+</h3>
                                <p className='w-[60px] lg:text-[16px] text-[13px]'>Digital Learnes</p>
                            </div>
                            <div className="flex lg:flex-row flex-col gap-3 items-center">
                                <h3 className='lg:text-[40px] text-xl font-bold text-[#BAF81B]'>96%</h3>
                                <p className='w-[80px] lg:text-[16px] text-[13px]'>Students Got Hired </p>
                            </div>
                            <div className="flex lg:flex-row flex-col gap-3 items-center">
                                <h3 className='lg:text-[40px] text-xl font-bold text-[#BAF81B]'>600+</h3>
                                <p className='w-[60px] lg:text-[16px] text-[13px]'>Hiring Partners </p>
                            </div>
                        </div>
                    </div>
                    {/* section 1 */}
                    <div className='bg-[#2C3D6D] w-full h-fit  flex justify-center items-center relative'>
                        <div className="bg-white w-full h-full lg:rounded-t-[100px] sm:px-10 md:px-10 lg:px-20 xl:px-32 2xl:px-48">
                            <h2 data-aos="fade-up" className='text-center lg:py-10 py-5 lg:text-[30px] text-xl font-bold'>Berbeda dari yang Lain, Bootcamp Kami Sangat Terpercaya!</h2>

                            <div className="grid lg:grid-cols-2 gap-10 2xl:py-24 py-5 items-center lg:text-[15px] text-[12px] px-10">
                                <div data-aos="fade-up" className="grid grid-cols-2 lg:gap-10 gap-3">
                                    {section2.map((item, index) => (
                                        <div className="" key={index}>
                                            <h3 className='font-extrabold'>{item.title}</h3>
                                            <p className='mt-3 text-gray-500'>{item.deskripsi}</p>
                                        </div>
                                    ))}
                                </div>

                                <div data-aos="fade-up" className="w-full lg:flex justify-center h-fit hidden">
                                    <img src="/images/foto2/section 1.png" className='w-[600px]' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* fartner */}
                    <div className='bg-white w-full h-[400px] flex justify-center lg:py-10 py-5'>
                        <h2 data-aos="flip-up" className='lg:text-[30px] text-xl w-[700px] text-center font-bold'><span className='text-[#2C3D6D]'>Harada Internasional Center</span> telah bekerja sama dengan 840+ Hiring Partners</h2>
                    </div>
                    {/* section 2 */}
                    <div className='bg-white w-full lg:h-[500px] h-fit flex justify-center items-center overflow-hidden lg:relative pb-5'>
                        <img src="/images/foto2/bg1.png" className='lg:h-[600px] hidden lg:block' alt="" />
                        <div className="lg:absolute flex-col w-full flex justify-center items-center top0 right-0">
                            <h3 data-aos="zoom-in" className='lg:text-[30px] text-xl text-center font-bold text-[#2C3D6D]'> Mulai Belajar Skill Baru, dari Awam sampai Paham!</h3>
                            <div className="flex lg:flex-row flex-col gap-10 w-full justify-center items-center py-3 mt-6">
                                {/* satu */}
                                {section3.map((item, index) => (
                                    <a data-aos="zoom-in" key={index} href={item.link} className="w-fit bg-white p-3 shadow-md rounded-2xl">
                                        <div className="w-[200px] h-[300px] overflow-hidden rounded-2xl relative">
                                            <img src={item.image} alt="" />
                                            <div className="bg-gradient-to-t from-[#2C3D6D] to-transparent absolute top-0 left-0 w-full h-full flex justify-center items-end">
                                                <p className='py-5 text-white'>{item.title}</p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* section 3 */}
                    <div className='bg-[#2C3D6D] w-full lg:h-[700px] py-5 flex justify-center items-center px-5'>
                        <div className="bg-[#BAF81B] lg:w-[70%] w-full h-fit lg:px-20 px-5 py-10 rounded-2xl relative">
                            <div className="flex lg:block  flex-col justify-center items-center">
                                <h2 data-aos="zoom-in-up" className='lg:w-[70%] w-full font-bold lg:text-[30px] text-xl mb-5'>Dari Rekrutmen Sampai Pelatihan, Semua Ada di Corporate Service Harada Internasional Center</h2>
                                <p data-aos="zoom-in" className='lg:w-[60%] w-full mb-7'>Tingkatkan efisiensi dan produktivitas perusahaan lewat layanan rekrutmen talenta dari level junior sampai senior, program pelatihan end-to-end yang bisa dikustomisasi sesuai kebutuhan, dan platform LMS yang bikin manajemen SDM kamu lebih praktis!</p>
                                <a data-aos="zoom-in" href="" className='bg-[#2C3D6D]  text-white px-5 py-2 rounded-full'>
                                    Pelajari Selengkapnya
                                </a>
                            </div>
                            <img src="/images/foto2/telent3.png" className='absolute hidden lg:block bottom-0 right-0 w-[30%]' alt="" />
                        </div>
                    </div>
                    {/* section 4 */}
                    <div className='bg-white w-full h-fit flex flex-col justify-center items-center py-20'>
                        <h2 data-aos="flip-up" className='text-[30px] font-bold text-center'>Cerita Para Alumni <span className='text-[#2C3D6D]'>Harada Internasional Center</span></h2>
                        {/* card */}
                        
                        <div  className="max-w-full mt-5">
                            <SwiperComponent2  
                                    reverse={false}
                                    direction="horizontal"
                                    slidesPerView={2}
                                    spaceBetween={10}
                                    allowTouchMove={true}
                                    >
                                    {section4.map((item, index) => (
                                        <SwiperSlide key={index}>
                                        <div className=" bg-[#2C3D6D] lg:px-20 px-3 lg:w-[600px] 2xl:w-[800px] lg:h-[200px] h-[300px] rounded-2xl mt-5 flex lg:flex-row flex-col items-center gap-5 py-5">
                                            <div className="p-1 rounded-full bg-white w-fit h-fit">
                                                <div className="bg-white w-20 h-20 rounded-full flex justify-center items-center overflow-hidden">
                                                    <img src={item.image} className='w-20' alt="" />
                                                </div>
                                            </div>
                                            <div className="text-white">
                                                <h3 className='font-bold'>{item.name}</h3>
                                                <p className='text-[12px]  lg:text-[15px] w-full mt-2 h-[90px] overflow-auto italic'>
                                                    "{item.deskripsi}"
                                                </p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                    ))}
                                    </SwiperComponent2>

                            </div>
                            
                        
                    </div>
                    {/* section 5 */}
                    <div className='bg-white w-full h-[500px] flex justify-center '>
                        <h1 data-aos="zoom-in" className='text-[30px] font-bold text-center'>Penghargaan <br/> <span className='text-[#2C3D6D]'>Harada Internasional Center</span></h1>
                    </div>
                    {/* section6 */}
                    <div  className='bg-[#BAF81B] w-full h-fit px-5 lg:py-0 lg:pt-10 py-5 flex justify-center items-center'>
                        <div data-aos="zoom-in-left" className="text-white bg-[#2C3D6D] p-10 rounded-2xl">
                            <h2 className='text-[30px] font-bold '>Konsultasikan Program <span className='text-[#BAF81B]'>Belajar Secara GRATIS!</span></h2>
                            <p className='mb-6 w-[500px]'>Tanyakan sekarang, dapatkan jawabannya langsung dengan menghubungi Tim Admission kami. </p>
                            <a href="" className='bg-[#BAF81B] text-[#2C3D6D] px-5 py-2 rounded-full'>Hubungi Kami</a>
                        </div>
                        <img src="/images/foto2/telent2.png" className='w-96 lg:block hidden' alt="" />
                    </div>
                    {/* sidebar */}
                    <div className='bg-[#2C3D6D] w-full h-fit pt-16 flex justify-center items-start text-white gap-10'>
                        <div className="">
                            <img src="/images/logowhite.png" className='w-28' alt="" />
                            <h2 className='font-bold my-5'>PT. Harada Internasional Center</h2>
                            <p className='leading-[26px]'>
                                Plaza CityView <br/>Jl. Kemang Timur No.1, RT.14/RW.8, Pejaten Barat,<br/> Ps. Minggu, Kota Jakarta Selatan, <br/>Daerah Khusus Ibukota Jakarta 12510
                            </p>
                        </div>
                        <div className="">
                            <h2 className='font-bold mb-5 text-[#BAF81B]'>Layanan Karier </h2>
                            <div className="flex flex-col gap-5">
                                <a href=''>
                                Video Course Online
                                </a>
                                <a href=''>
                                    Bootcamp
                                </a>
                                <a href=''>
                                    Webinar Gratis
                                </a>
                            </div>
                        </div>
                        <div className="">
                            <h2 className='font-bold mb-5 text-[#BAF81B]'>Pages</h2>
                            <div className="flex flex-col gap-5">
                                <a href=''>
                                    Beranda
                                </a>
                                <a href=''>
                                    Tentang Kami
                                </a>
                                <a href=''>
                                    Mentor
                                </a>
                                <a href=''>
                                    Blog
                                </a>
                                <a href=''>
                                    Afiliasi
                                </a>
                                <a href=''>
                                    Job Portal
                                </a>
                                <a href=''>
                                    Karir
                                </a>
                                <a href=''>
                                    Kebijakan Privasi
                                </a>
                            </div>
                        </div>
                        <div className="">
                            <h2 className='font-bold mb-5 text-[#BAF81B]'>Layanan Perusahaan </h2>
                            <div className="flex flex-col gap-5">
                                <a href=''>
                                    Digital Skill Training
                                </a>
                                <a href=''>
                                    Soft Skill Training
                                </a>
                                <a href=''>
                                    BNSP
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#2C3D6D] w-full h-fit pt-10 flex justify-center items-start text-white gap-10'>
                        
                    </div>
                </main>
                <footer className="bg-[#2C3D6D] text-white p-4 text-center w-full">
                    Copyright © 2025. PT Harada Internasional Center
                </footer>
            </div>
        </>
    );
}
