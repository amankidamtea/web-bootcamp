import SwiperComponent from '@/components/ui/swiper';
// import SwiperComponent2 from '@/components/ui/Swiper2';
import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon, Mail, MapPin, Phone} from 'lucide-react';
import React from 'react';
// import { SwiperSlide } from 'swiper/react';
const dataNav1 = [
    {
        title: 'Jepang',
        link: '#',
        desk: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
    {
        title: 'Korea',
        link: '#',
        desk: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
    {
        title: 'Eropa',
        link: '#',
        desk: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
    {
        title: 'Indonesia',
        link: '#',
        desk: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
];

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



export default function About({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;
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
                <header className=" w-full bg-white fixed top-0 z-50  ">
                    <div className="bg-[#2C3D6D] w-full  flex">
                        <div className="flex gap-16  items-center justify-center w-full text-[12px]">
                            <a href="" className='flex gap-2 items-center'>
                                <Phone size={12} color={'white'} />
                                <p className=' text-white'>+62 812 3456 7890</p>
                            </a>
                            <a href="" className='flex gap-2 items-center'>
                                <MapPin size={12} color={'white'} />
                                <p className=' text-white'>Kp Pasar Des.Sindagkerta</p>
                            </a>
                            <a href="" className='flex gap-2 items-center'>
                                <Mail size={12} color={'white'} />
                                <p className=' text-white'>Kp Pasar Des.Sindagkerta</p>
                            </a>
                        </div>
                        <div className="flex gap-6 bg-[#BAF81B] items-center justify-center py-1  w-[10%]" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 5% 100%)' }}>
                            <a href="">
                                <img src={'/images/icon/facebookIcon.png'} className='w-4' alt="" />
                            </a>
                            <a href="">
                                <img src={'/images/icon/igIcon.png'} className='w-4' alt="" />
                            </a>
                            <a href="">
                                <img src={'/images/icon/xIcon.png'} className='w-4' alt="" />
                            </a>
                        </div>
                    </div>

                    <nav className="flex items-center justify-between px-48 py-2">
                        <a href="/">
                            <img src={'/images/harada.png'} className='w-32' />
                        </a>
                        <ul className='flex items-center gap-5 text-gray-500'>
                            <li>
                                <DropdownMenu>
                                    <DropdownMenuTrigger   className='outline-none flex items-center gap-1 cursor-pointer'>Program <ChevronDownIcon size={15}/></DropdownMenuTrigger>
                                    <DropdownMenuContent  className='bg-white shadow p-5 lg:w-[700px] rounded-3xl mt-3'>
                                        <div className="grid grid-cols-3 gap-7">
                                            {dataNav1.map((item, index) => (
                                                <DropdownMenuItem key={index} className='hover:text-blue-300 font-bold cursor-pointer outline-none'>
                                                    <h2>{item.title}</h2>
                                                    <p className='font-light  max-w-[200px] mt-2 text-[12px] text-gray-500'>{item.desk}</p>
                                                </DropdownMenuItem>
                                            ))}
                                        </div>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                            <li>
                                <DropdownMenu>
                                    <DropdownMenuTrigger   className=' outline-none flex items-center gap-1 cursor-pointer'>Corporate Service <ChevronDownIcon size={15}/></DropdownMenuTrigger>
                                    <DropdownMenuContent  className='bg-white shadow p-5 lg:w-[700px] rounded-3xl '>
                                        <div className="grid grid-cols-3 gap-7">
                                            {dataNav1.map((item, index) => (
                                                <DropdownMenuItem key={index} className='hover:text-blue-300 font-bold cursor-pointer outline-none'>
                                                    <h2>{item.title}</h2>
                                                    <p className='font-light  max-w-[200px] mt-2 text-[12px] text-gray-500'>{item.desk}</p>
                                                </DropdownMenuItem>
                                            ))}
                                        </div>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                            <li>
                                <DropdownMenu>
                                    <DropdownMenuTrigger   className=' outline-none flex items-center gap-1 cursor-pointer'>Community <ChevronDownIcon size={15}/></DropdownMenuTrigger>
                                    <DropdownMenuContent  className='bg-white shadow p-5 lg:w-[700px] rounded-3xl '>
                                        <div className="grid grid-cols-3 gap-7">
                                            {dataNav1.map((item, index) => (
                                                <DropdownMenuItem key={index} className='hover:text-blue-300 font-bold cursor-pointer outline-none'>
                                                    <h2>{item.title}</h2>
                                                    <p className='font-light  max-w-[200px] mt-2 text-[12px] text-gray-500'>{item.desk}</p>
                                                </DropdownMenuItem>
                                            ))}
                                        </div>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                            <li>
                                <a href="">Job Portal</a>
                            </li>
                        </ul>
                        <>
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <div className='flex gap-2'>
                                    <Link
                                        href={login()}
                                        className="inline-block bg-[#2C3D6D] rounded-full border border-transparent px-5 py-1.5 text-sm leading-normal text-white hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A] font-bold hover:text-gray-500"
                                    >
                                        Log in
                                    </Link>
                                    {canRegister && (
                                        <Link
                                            href={register()}
                                            className=" hidden rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                        >
                                            Register
                                        </Link>
                                    )}
                                </div>
                            )}
                        </>
                    </nav>
                </header>
                {/* <Hero /> */}
                <main className='flex-1 w-full mt-17'>
                    {/* top */}
                    <div className='bg-white w-full h-[700px] relative'>
                        <div className="flex items-center  justify-around  w-full absolute pt-10">
                            <div className=''>
                                <h1 className='text-[60px] w-[500px] font-bold leading-[70px]'>Mimpi Besar <br/> <span className='bg-[#BAF81B]'>Harada Internasional Center</span></h1>
                                <p className='text-[20px] w-[500px] mt-5'>Platform pembelajaran dan persiapan karier yang telah berdiri lebih dari empat tahun. Sejak awal, dibimbing.id berfokus mendukung pemilik growth mindset untuk mengembangkan diri dan meraih karier impian. </p>
                            </div>
                            <div className='top-4 w-[600px] flex justify-center gap-3'>
                                <SwiperComponent reverse={false} data={groupFoto1} direction='vertical' slidesPerView={2} spaceBetween={20} allowTouchMove={false}/>
                                <SwiperComponent reverse={true} data={groupFoto2} direction='vertical' slidesPerView={2} spaceBetween={20} allowTouchMove={false}/>
                                <SwiperComponent reverse={false} data={groupFoto3} direction='vertical' slidesPerView={2} spaceBetween={20} allowTouchMove={false} />
                            </div>
                        </div>
                    </div>
                    {/* info */}
                    <div className="flex justify-center w-full py-20  bg-[#2C3D6D] rounded-t-[80px]">
                        <div className="flex  gap-10 justify-around text-white">
                            <div className="flex gap-3 items-center flex-col w-[700px] text-center">
                                <h3 className='text-[40px] font-bold text-[#BAF81B]'>Tentang Kami</h3>
                                <p>Dibimbing berdiri sebagai platform pelatihan karier digital.</p>
                                <p>
                                    Kami dipercaya investor untuk mengembangkan layanan lebih luas. Dengan dana ini, kami meningkatkan kualitas mentor, memperluas topik bootcamp, dan mulai membangun sistem manajemen pembelajaran berbasis data.
                                </p>
                                <p>
                                    Dukungan berkelanjutan ini jadi validasi bahwa pendekatan kami berhasil. Kami fokus membangun ekosistem pembelajaran end
                                </p>
                                <p>
                                    Kami sadar bahwa tantangan utama anak muda Indonesia hari ini bukan sekadar akses belajar, tapi bagaimana mereka bisa mendapatkan pekerjaan yang relevan dan berdaya saing. dibimbing.id hadir untuk menjawab tantangan itu. Kami tidak hanya fokus pada penguasaan skill, tapi juga memastikan peserta punya pengalaman belajar yang didampingi mentor, disiapkan dengan career preparation services, dan terhubung langsung dengan industri melalui program penyaluran kerja.
                                    Harapan saya sederhana: setiap orang yang belajar di dibimbing.id bisa naik kelas, bukan cuma secara skill, tapi juga kualitas hidup.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center w-full py-5  bg-[#BAF81B] ">
                        
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
                    <div className='bg-[#2C3D6D] w-full h-fit pt-10 flex flex-col justify-center items-center text-white '>
                        <h3>Metode pembayaran:</h3>
                        <div className="mt-5">
                            <div className="bg-white text-black px-3 py-1 rounded-full">
                                BCA
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="bg-[#2C3D6D] text-white p-4 text-center w-full">
                    Copyright © 2025. PT Harada Internasional Center
                </footer>
            </div>
        </>
    );
}
