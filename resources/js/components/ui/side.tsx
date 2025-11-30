export default function Side() {
    return (
        <div className='bg-[#2C3D6D] w-full h-fit pt-16 flex lg:flex-row flex-col px-5 justify-center items-start text-white gap-10'>
            <div className="flex items-center lg:items-start flex-col">
                <img src="/images/logowhite.png" className='w-28' alt="" />
                <h2 className='font-bold my-5'>PT. Harada Internasional Center</h2>
                <p className='leading-[26px] text-center lg:text-start'>
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
                    <a href='/about'>
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
    )
}