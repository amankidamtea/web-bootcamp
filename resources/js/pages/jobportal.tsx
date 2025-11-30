
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


const jobList = [
  {
    "title": "Guru Bahasa Inggris",
    "company": "PT Harada Internasional Center",
    "createdAt": "1 hari yang lalu",
    "message" : "Halo saya mau melamar kerja untuk guru bahasa inggris",
    "responsibilities": [
      "Mengajar bahasa Inggris untuk berbagai level (pemula, menengah, lanjutan) dengan metode interaktif.",
      "Menyusun materi ajar, modul, dan rencana pembelajaran sesuai kurikulum.",
      "Mengevaluasi kemampuan siswa melalui tes dan observasi.",
      "Memberikan umpan balik konstruktif kepada siswa.",
      "Membimbing siswa dalam persiapan TOEFL, IELTS, dan Cambridge jika diperlukan."
    ],
    "qualifications": [
      "Minimal pendidikan S1/S2 Pendidikan Bahasa Inggris atau Linguistik.",
      "Kemampuan komunikasi yang baik dan metode mengajar yang menarik.",
      "Mahir listening, speaking, reading, dan writing.",
      "Pengalaman mengajar minimal 1–3 tahun.",
      "Mampu menggunakan teknologi dan media pembelajaran modern.",
      "Bersikap profesional, sabar, dan komunikatif.",
      "Sertifikasi TEFL/TESOL/IELTS/TOEFL menjadi nilai tambah."
    ],
    "additionalSkills": [
      "Berpengalaman mengajar online & offline.",
      "Mampu mengajar anak-anak, remaja, dan dewasa.",
      "Mahir menggunakan media interaktif dan aplikasi pembelajaran."
    ]
  },

  {
    "title": "Guru Bahasa Jepang",
    "company": "PT Harada Internasional Center",
    "createdAt": "2 hari yang lalu",
    "message" : "Halo saya mau melamar kerja untuk guru bahasa inggris",
    "responsibilities": [
      "Mengajar bahasa Jepang untuk level N5–N2 dengan metode interaktif.",
      "Menyusun materi ajar sesuai standar JLPT.",
      "Memandu siswa dalam latihan percakapan, membaca, dan menulis.",
      "Melakukan evaluasi berkala terhadap perkembangan siswa.",
      "Membimbing siswa untuk persiapan ujian JLPT."
    ],
    "qualifications": [
      "Minimal pendidikan S1 Bahasa Jepang atau yang setara.",
      "Lulus JLPT minimal N2.",
      "Memiliki kemampuan komunikasi dan pedagogi yang baik.",
      "Berpengalaman mengajar bahasa Jepang minimal 1 tahun.",
      "Menguasai budaya Jepang dan etika komunikasi Jepang.",
      "Mampu membuat lesson plan sesuai kebutuhan siswa."
    ],
    "additionalSkills": [
      "Berpengalaman mengajar kelas persiapan kerja ke Jepang.",
      "Menguasai materi Kaiwa (percakapan) dan keigo.",
      "Mahir menggunakan media pembelajaran digital."
    ]
  },

  {
    "title": "Guru Bahasa Korea",
    "company": "PT Harada Internasional Center",
    "createdAt": "3 hari yang lalu",
    "message" : "Halo saya mau melamar kerja untuk guru bahasa inggris",
    "responsibilities": [
      "Mengajar bahasa Korea level dasar hingga menengah.",
      "Menyusun materi ajar sesuai standar TOPIK.",
      "Membimbing praktik membaca, menulis hangeul, dan percakapan.",
      "Melakukan evaluasi pembelajaran secara berkala.",
      "Membantu siswa mempersiapkan ujian TOPIK."
    ],
    "qualifications": [
      "Minimal pendidikan S1 Bahasa Korea atau bidang terkait.",
      "Menguasai dasar tata bahasa Korea dan percakapan.",
      "Pengalaman mengajar minimal 1 tahun.",
      "Mampu menggunakan teknik pengajaran modern.",
      "Komunikatif, sabar, dan profesional.",
      "Memahami budaya dan etika Korea."
    ],
    "additionalSkills": [
      "Pernah tinggal atau belajar di Korea menjadi nilai plus.",
      "Berpengalaman mengajar kelas online.",
      "Mampu membuat materi interaktif."
    ]
  },

  {
    "title": "Guru Bahasa Indonesia untuk Penutur Asing (BIPA)",
    "company": "PT Harada Internasional Center",
    "createdAt": "5 hari yang lalu",
    "message" : "Halo saya mau melamar kerja untuk guru bahasa inggris",
    "responsibilities": [
      "Mengajar Bahasa Indonesia untuk siswa asing (pemula hingga mahir).",
      "Menyusun materi sesuai standar kurikulum BIPA.",
      "Melatih kemampuan membaca, menulis, mendengar, dan berbicara.",
      "Melakukan evaluasi keterampilan bahasa siswa.",
      "Memperkenalkan budaya Indonesia sebagai bagian dari pembelajaran."
    ],
    "qualifications": [
      "Pendidikan S1/S2 Pendidikan Bahasa Indonesia atau Sastra Indonesia.",
      "Berpengalaman mengajar siswa asing.",
      "Menguasai metode pengajaran BIPA.",
      "Komunikatif, ramah, dan sabar.",
      "Mampu membuat materi ajar kreatif."
    ],
    "additionalSkills": [
      "Mampu mengajar kelas online.",
      "Mampu menjelaskan budaya Indonesia dengan baik.",
      "Menguasai bahasa Inggris menjadi nilai tambah."
    ]
  }
]


export default function JobPortal() {
    return (
        <>
            <Head title="Berkarir Lebih Cepat dengan Harada Internasional Center">
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
                        <div className="flex lg:flex-row flex-col bg-[#BAF81B]  rounded-b-[100px] gap-5 lg:px-32 lg:gap-0 items-center  justify-around  w-full  pt-20">
                            <div className='lg:px-0 px-5 w-full'>
                                <h1 className='lg:text-[60px] text-3xl lg:w-[500px] font-bold lg:leading-[70px] text-[#2C3D6D]'>Job Portal Harada Internasional Center</h1>
                                <p className='lg:text-[20px] lg:w-[500px] w-full'>Job Portal Harada Internasional Center merupakan platform pencarian kerja yang dirancang untuk membantu talenta berbakat menemukan peluang karier terbaik.</p>
                            </div>
                            <div className='top-4   w-full px-5 lg:px-0 flex justify-center gap-3 relative overflow-hidden mt-6'>
                                <img src="/images/foto2/telent2.png" className='w-[500px]' alt="" />
                            </div>
                        </div>
                    </div>
                    {/* visi misi */}
                    <div className="flex justify-center w-full lg:py-10 py-5  bg-[#2C3D6D]">
                        <h1 className='text-white text-[30px]'>Yuk Temukan Job yang Anda Inginkan</h1>
                    </div>
                    {/* section 1 */}
                    <div className='bg-[#2C3D6D] w-full h-fit  flex justify-center items-center relative'>
                        <div className="bg-gray-100 w-full h-full lg:rounded-t-[100px] sm:px-10 md:px-10 lg:px-20 xl:px-32 2xl:px-48">
                            <div className="px-32 py-10">
                                {jobList.map((job, index) => (
                                    <div key={index} className="bg-white shadow p-5 rounded-2xl mt-5">
                                        <div className="bg-[#2C3D6D] text-white p-5 rounded-2xl">
                                            <h1 className='font-bold text-xl text-[#BAF81B]'>{job.title}</h1>
                                            <h2 className='text-gray-200'>{job.company}</h2>
                                            <p className='text-gray-400'>{job.createdAt}</p>
                                        </div>
                                        <div className="mt-3">
                                            <p className="font-bold">Tanggung Jawab:</p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                {job.responsibilities.map((item, j) => (
                                                <li key={j}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mt-3">
                                            <p className="font-bold">Tanggung Jawab:</p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                {job.responsibilities.map((item, j) => (
                                                <li key={j}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mt-3">
                                            <p className="font-bold">Kualifikasi & Kemampuan:</p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                {job.qualifications.map((item, j) => (
                                                <li key={j}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mt-3">
                                            <p className="font-bold">Keterampilan Tambahan (Nilai Plus):</p>
                                            <ul className="list-disc pl-5 space-y-2">
                                                {job.additionalSkills.map((item, j) => (
                                                <li key={j}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="w-full flex gap-5 py-3 px-3 mt-5">
                                            <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={`https://wa.me/6287823529583?text=${encodeURIComponent(job.message)}`}
                                            className='bg-[#2C3D6D] text-white px-5 py-1 rounded-full'
                                            >
                                            Lamar Sekarang
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
            </div>
        </>
    );
}

JobPortal.layout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;
