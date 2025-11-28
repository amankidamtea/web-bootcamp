import SwiperComponent from '@/components/ui/swiper';
import SwiperComponent2 from '@/components/ui/Swiper2';
import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon, Mail, MapPin, Phone} from 'lucide-react';
import React from 'react';
import { SwiperSlide } from 'swiper/react';
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


export default function Welcome({
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
                        <div className="flex gap-6 bg-[#BAF81B] items-center justify-center py-1 rounded-l-full w-[10%]">
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
                        <img src={'/images/harada.png'} className='w-32' />
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
                                <h1 className='text-[60px] w-[500px] font-bold leading-[70px]'>Belajar dari awal, ditemenin sampe dapat kerja</h1>
                                <p className='text-[20px] w-[500px]'>Bootcamp yang siap bimbing kamu dari awam sampai paham dengan metode belajar terlengkap, gratis mengulang kelas, dan penyaluran kerja bergaransi. </p>
                                <button className='bg-[#2C3D6D] text-white px-10 rounded-full text-[25px] mt-5'>Join Now</button>
                            </div>
                            <div className='top-4 w-[600px] flex justify-center gap-3'>
                                <SwiperComponent reverse={false} data={groupFoto1} direction='vertical' slidesPerView={2} spaceBetween={20} allowTouchMove={false}/>
                                <SwiperComponent reverse={true} data={groupFoto2} direction='vertical' slidesPerView={2} spaceBetween={20} allowTouchMove={false}/>
                                <SwiperComponent reverse={false} data={groupFoto3} direction='vertical' slidesPerView={2} spaceBetween={20} allowTouchMove={false} />
                            </div>
                        </div>
                    </div>
                    {/* info */}
                    <div className="flex justify-center w-full py-10  bg-[#2C3D6D]">
                        <div className="flex gap-10 justify-around text-white">
                            <div className="flex gap-3 items-center">
                                <h3 className='text-[40px] font-bold text-[#BAF81B]'>1000+</h3>
                                <p className='w-[60px]'>Digital Learnes</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <h3 className='text-[40px] font-bold text-[#BAF81B]'>96%</h3>
                                <p className='w-[80px]'>Students Got Hired </p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <h3 className='text-[40px] font-bold text-[#BAF81B]'>600+</h3>
                                <p className='w-[60px] '>Hiring Partners </p>
                            </div>
                        </div>
                    </div>
                    {/* section 1 */}
                    <div className='bg-[#2C3D6D] w-full h-fit  flex justify-center items-center relative'>
                        <div className="bg-white w-full h-full rounded-t-[100px] px-48">
                            <h2 className='text-center py-10 text-[30px] font-bold'>Berbeda dari yang Lain, Bootcamp Kami Sangat Terpercaya!</h2>

                            
                            <div className="grid grid-cols-2 gap-10 py-24 items-center">

                                <div className="grid grid-cols-2 gap-10">
                                    {section2.map((item, index) => (
                                        <div className="" key={index}>
                                            <h3 className='font-extrabold'>{item.title}</h3>
                                            <p className='mt-3 text-gray-500'>{item.deskripsi}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="w-full flex justify-center h-fit">
                                    <img src="/images/foto2/section 1.png" className='w-[600px]' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* fartner */}
                    <div className='bg-white w-full h-[400px] flex justify-center py-10'>
                        <h2 className='text-[30px] w-[700px] text-center font-bold'><span className='text-[#2C3D6D]'>Harada Internasional Center</span> telah bekerja sama dengan 840+ Hiring Partners</h2>
                    </div>
                    {/* section 2 */}
                    <div className='bg-gray-500 w-full h-[500px] flex justify-center items-center overflow-hidden relative'>
                        <img src="/images/foto2/bg1.png" className='h-[600px]' alt="" />
                        <div className="absolute flex-col w-full flex justify-center items-center top0 right-0">
                            <h3 className='text-[30px] font-bold text-[#2C3D6D]'> Mulai Belajar Skill Baru, dari Awam sampai Paham!</h3>
                            <div className="flex gap-10 w-full justify-center py-3 mt-6">
                                {/* satu */}
                                {section3.map((item, index) => (
                                    <a key={index} href={item.link} className="w-fit bg-white p-3 shadow-md rounded-2xl">
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
                    <div className='bg-[#2C3D6D] w-full h-[700px] flex justify-center items-center'>
                        <div className="bg-[#BAF81B] w-[70%] h-fit px-20 py-10 rounded-2xl relative">
                            <div className="">
                                <h2 className='w-[70%] font-bold text-[30px] mb-5'>Dari Rekrutmen Sampai Pelatihan, Semua Ada di Corporate Service Harada Internasional Center</h2>
                                <p className='w-[60%] mb-7'>Tingkatkan efisiensi dan produktivitas perusahaan lewat layanan rekrutmen talenta dari level junior sampai senior, program pelatihan end-to-end yang bisa dikustomisasi sesuai kebutuhan, dan platform LMS yang bikin manajemen SDM kamu lebih praktis!</p>
                                <a href="" className='bg-[#2C3D6D]  text-white px-5 py-2 rounded-full'>
                                    Pelajari Selengkapnya
                                </a>
                            </div>
                            <img src="/images/foto2/telent1.png" className='absolute bottom-0 right-0 w-[30%]' alt="" />
                        </div>
                    </div>
                    {/* section 4 */}
                    <div className='bg-white w-full h-fit flex flex-col justify-center items-center py-20'>
                        <h2 className='text-[30px] font-bold text-center'>Cerita Para Alumni <span className='text-[#2C3D6D]'>Harada Internasional Center</span></h2>
                        {/* card */}
                        
                        <div className="max-w-full mt-5">
                            <SwiperComponent2  
                                    reverse={false}
                                    direction="horizontal"
                                    slidesPerView={2}
                                    spaceBetween={10}
                                    allowTouchMove={true}
                                    >
                                    {section4.map((item, index) => (
                                        <SwiperSlide key={index}>
                                        <div className=" bg-[#2C3D6D] px-20 w-[800px] h-[200px] rounded-2xl mt-5 flex  items-center gap-5">
                                            <div className="p-1 rounded-full bg-white w-fit h-fit">
                                                <div className="bg-white w-20 h-20 rounded-full flex justify-center items-center overflow-hidden">
                                                    <img src={item.image} className='w-20' alt="" />
                                                </div>
                                            </div>
                                            <div className="text-white">
                                            <h3 className='font-bold'>{item.name}</h3>
                                            <p className='text-[12px] w-full mt-2 h-[90px] overflow-auto italic'>
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
                        <h1 className='text-[30px] font-bold text-center'>Penghargaan <br/> <span className='text-[#2C3D6D]'>Harada Internasional Center</span></h1>
                    </div>
                    {/* section6 */}
                    <div className='bg-[#BAF81B] w-full h-fit pt-20 flex justify-center items-center'>
                        <div className="text-white bg-[#2C3D6D] p-10 rounded-2xl">
                            <h2 className='text-[30px] font-bold '>Konsultasikan Program <span className='text-[#BAF81B]'>Belajar Secara GRATIS!</span></h2>
                            <p className='mb-6'>Tanyakan sekarang, dapatkan jawabannya langsung dengan menghubungi Tim Admission kami. </p>
                            <a href="" className='bg-[#BAF81B] text-[#2C3D6D] px-5 py-2 rounded-full'>Hubungi Kami</a>
                        </div>
                        <img src="/images/foto2/telent2.png" className='w-96' alt="" />
                    </div>
                    {/* sidebar */}
                    <div className='bg-[#2C3D6D] w-full h-fit pt-16 flex justify-center items-start text-white gap-10'>
                        <div className="">
                            <h2 className='font-bold mb-5 text-[#BAF81B]'>PT. Harada Internasional Center</h2>
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
                    © 2025 Semua Hak Dilindungi
                </footer>
            </div>
        </>
    );
}
