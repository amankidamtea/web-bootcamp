
// import SwiperComponent2 from '@/components/ui/Swiper2';


import { Head} from '@inertiajs/react';

import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
// import { SwiperSlide } from 'swiper/react';
// import Navbar from '@/components/ui/navbar';
import MainLayout from './mainLayout';

AOS.init({
  duration: 800,
  once: false,
});

const dataFounder = [
    {
        "name": "Purnama Nuri Santana, SP",
        "image": "/images/foto2/ceo.png",
        "jabatan": "Mentor Bahasa Arab",
        "deskripsi": "Saat ini sedang bekerja menjadi menjadi Mentor bahasa Arab, Instruksi tur kehutanan di Harada International Center. Memiliki pengalaman mengajar 10 Tahun di dunia pendidikan, dan 5 Tahun di Industri Kehutanan ( Djarum Forestry) di Kalimantan timur. Juga aktif sebagai Trainer Nasional Psykorehab ( Bersanad Syaikh Timur Tengah) Yang menunjang pembelajaran bahasa Arab. Selain Pengalaman yang mempuni di bidang pendidikan, juga cara belajar yang Interaktif dan menyenangkan sehingga memudahkan dalam proses transfer ilmu pengetahuan kepada SISWA"
    },
    {
        "name": "Rima Aura Salsabila",
        "image": "/images/foto2/rima.png",
        "jabatan": "Mentor Bahasa Jepang",
        "deskripsi": "Saat ini sedang bekerja menjadi instruktur bahasa Jepang di Harada International Center. Memiliki pengalaman mengajar 5 bulan yang didukung oleh pengalaman kerja langsung di Jepang selama 5 tahun di bidang Quality Control (QC). Mengintegrasikan pemahaman budaya dan bahasa bisnis Jepang yang otentik ke dalam materi pengajaran untuk hasil yang praktis dan aplikatif."
    },
]



export default function About() {
    return (
        <div className='w-full overflow-x-hidden'>
            <Head title="Tentang">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-white  text-[#1b1b18]  dark:bg-[#0a0a0a]">

                {/* <Hero /> */}
                    {/* top */}
                    <div className='bg-white w-full h-fit lg:mb-4 mb-5'>
                        <div className="flex lg:flex-row flex-col gap-5 lg:px-32 lg:gap-0 items-center  justify-around  w-full  pt-20">
                            <div className='lg:px-0 px-5 w-full'>
                                <h1 className='lg:text-[60px] text-3xl lg:w-[500px] font-bold lg:leading-[70px] text-[#2C3D6D]'>Tentang Harada Internasional Center</h1>
                                <p className='lg:text-[20px] lg:w-[500px] w-full'>Harada Internasional Center merupakan pusat pembelajaran dan persiapan karier berbasis teknologi. Sejak didirikan, Harada Internasional Center berkomitmen mendukung individu dengan growth mindset untuk mengembangkan potensi diri dan mencapai karier yang mereka impikan.</p>
                            </div>
                            <div className='top-4   w-full px-5 lg:px-0 flex justify-center gap-3 relative overflow-hidden mt-6'>
                                <img src="/images/foto2/telentb1.png" className='w-[300px]' alt="" />
                                <div className="flex flex-col w-full h-full absolute  top-0 left-0 justify-between px-3">
                                    <div className="flex flex-col bg-[#BAF81B] p-2 rounded-xl w-fit ml-auto">
                                        <span className='text-[#2C3D6D] font-bold text-2xl w-fit'>100+</span>
                                        Hiring Partner
                                    </div>
                                    <div className="flex flex-col bg-[#BAF81B] p-2 rounded-xl w-fit">
                                        <span className='text-[#2C3D6D] font-bold text-2xl'>20+</span>
                                        Pengajar & mentor <br/> Profesional
                                    </div>
                                    <div className="flex flex-col bg-[#BAF81B] p-2 rounded-xl w-fit ml-auto mb-10">
                                        <span className='text-[#2C3D6D] font-bold text-2xl'>200+</span>
                                        Education Agent
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* visi misi */}
                    <div className="flex justify-center w-full lg:py-10 py-5  bg-[#2C3D6D]">
                        <div className="grid lg:grid-cols-2 gap-5 w-full text-white py-5 lg:px-40 px-5">
                            <div data-aos="fade-right" className="flex  flex-col gap-3 items-center">
                                <h3 className='lg:text-[40px] text-xl font-bold text-[#BAF81B]'>Visi</h3>
                                <p className='w-full lg:text-[16px] text-[13px] italic'>
                                " Menjadi lembaga bahasa dan pengembangan sumber daya manusia nomor 1 di Indonesia, tercepat dalam penempatan kerja, yang unggul, berdaya saing global, serta berlandaskan nilai keimanan dan akhlak mulia, dalam mencetak generasi muda Indonesia yang mandiri, profesional, dan berkontribusi bagi umat, bangsa, dan negara. "
                                </p>
                            </div>
                            <div data-aos="fade-left" className="flex flex-col gap-3 items-center">
                                <h3 className='lg:text-[40px] text-xl font-bold text-[#BAF81B]'>Misi</h3>
                                <div className='w-full flex flex-col gap-3 lg:text-[16px] text-[13px] italic'>
                                <p>
                                    Menyelenggarakan pendidikan bahasa berkualitas (Inggris, Jepang, Korea, Arab, dan bahasa internasional lainnya) yang profesional, terstruktur, serta berlandaskan nilai-nilai keimanan dan etika.
                                </p>
                                <p>
                                    Membina karakter peserta didik yang berakhlak mulia, disiplin, jujur, bertanggung jawab, dan bermental tangguh dalam menghadapi tantangan global.
                                </p>
                                <p>
                                    Memberdayakan pemuda-pemudi daerah agar mandiri secara ekonomi dan sosial sebagai bentuk pengabdian kepada Allah SWT serta kontribusi nyata bagi keluarga dan masyarakat.
                                </p>
                                <p>
                                    Menjadi lembaga nomor 1 di Indonesia yang tercepat dalam penempatan kerja melalui sistem pelatihan terarah, pendampingan intensif, dan jejaring kerja nasional serta internasional yang kuat.
                                </p>
                                <p>
                                    Membuka akses peluang kerja dan jejaring internasional secara profesional, amanah, dan transparan.
                                </p>
                                <p>
                                    Menanamkan budaya kerja yang islami dan beretika, menjunjung tinggi kejujuran, integritas, dan kepedulian sosial dalam setiap aktivitas lembaga.
                                </p>
                                <p>
                                    Mengintegrasikan peran pendidik, praktisi, dan pembimbing spiritual dalam membentuk lulusan yang siap kerja, berjiwa pemimpin, dan berorientasi pada kemaslahatan umat.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* section 1 */}
                    <div className='bg-[#2C3D6D] w-full h-fit  flex justify-center items-center relative'>
                        <div className="bg-white w-full h-full lg:rounded-t-[100px] sm:px-10 md:px-10 lg:px-20 xl:px-32 2xl:px-48">
                            <h2 data-aos="fade-up" className='text-center text-[#2C3D6D] lg:py-10 py-5 lg:text-[30px] text-xl font-bold'>Beberapa Sosok Hebat dibalik <br/> Harada Internasional Center</h2>

                            <div className="">
                                <div  className="w-full flex-flex-col gap-5 py-10">
                                    {dataFounder.map((item, index) => (
                                        <div className={ index % 2 === 0 ? "lg:flex-row-reverse flex flex-col mt-7" : "flex lg:flex-row flex-col mt-7"} key={index}>
                                            <div data-aos="fade-up" className="w-full  h-fit px-5">
                                                <h3 className='font-extrabold text-[#2C3D6D]'>{item.name}</h3>
                                                <h4>{item.jabatan}</h4>
                                                <p className='mt-3 text-gray-500 lg:w-[70%]'>{item.deskripsi}</p>
                                            </div>
                                            <div data-aos="fade-up" className="w-full flex justify-center h-fit ">
                                                <img src={item.image} className='w-[300px]' alt="" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

About.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;
