import SwiperComponent from '@/components/ui/swiper';
import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';
import React from 'react';
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
                <header className="mb-6 w-full bg-white px-48 py-3 fixed top-0 z-50  ">
                    <nav className="flex items-center justify-between ">
                        <img src={'/images/logo1.png'} className='w-16' />
                        <ul className='flex items-center gap-5 text-gray-500'>
                            <li>
                                <DropdownMenu>
                                    <DropdownMenuTrigger   className='py-3 outline-none flex items-center gap-1 cursor-pointer'>Program <ChevronDownIcon size={15}/></DropdownMenuTrigger>
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
                                    <DropdownMenuTrigger   className='py-3 outline-none flex items-center gap-1 cursor-pointer'>Corporate Service <ChevronDownIcon size={15}/></DropdownMenuTrigger>
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
                                    <DropdownMenuTrigger   className='py-3 outline-none flex items-center gap-1 cursor-pointer'>Community <ChevronDownIcon size={15}/></DropdownMenuTrigger>
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
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A] font-bold hover:text-gray-500"
                                    >
                                        Log in
                                    </Link>
                                    {canRegister && (
                                        <Link
                                            href={register()}
                                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
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
                    {/* carousel */}
                    <div className='bg-gray-200 w-full h-[700px] relative'>
                        <div className="flex  justify-around  w-full absolute pt-10">
                            <div className=''>
                                <h1 className='text-[60px] w-[500px] leading-[70px]'>Start from scratch, fully supported til’ you land a job</h1>
                                <p className='text-[20px] w-[500px]'>Dive into a bootcamp prepared to guide you from beginner to expert with the most comprehensive learning methods, free class retakes, and guaranteed job placement. </p>
                                <button className='bg-green-400 px-10 rounded-full text-[25px] mt-5'>Join Now</button>
                            </div>
                            <div className='top-4 w-[600px] flex justify-center gap-3'>
                                <SwiperComponent reverse={false} />
                                <SwiperComponent reverse={true} />
                                <SwiperComponent reverse={false} />
                            </div>
                        </div>
                    </div>
                    {/* info */}
                    <div className="flex justify-center w-full py-10  bg-white">
                        <div className="flex gap-10 justify-around">
                            <div className="flex gap-3 items-center">
                                <h3 className='text-[40px]'>1000+</h3>
                                <p className='w-[60px]'>Digital Learnes</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <h3 className='text-[40px]'>1000+</h3>
                                <p className='w-[60px]'>Digital Learnes</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <h3 className='text-[40px]'>1000+</h3>
                                <p className='w-[60px]'>Digital Learnes</p>
                            </div>
                        </div>
                    </div>
                    {/* section 1 */}
                    <div className='bg-gray-300 w-full h-[700px] rounded-t-[100px] flex justify-center items-center '>
                        <h1>section 1</h1>
                    </div>
                    {/* fartner */}
                    <div className='bg-gray-400 w-full h-[400px] flex justify-center items-center'>
                        <h1>fartner</h1>
                    </div>
                    {/* section 2 */}
                    <div className='bg-gray-500 w-full h-[700px] flex justify-center items-center'>
                        <h1>section 2</h1>
                    </div>
                    {/* section 3 */}
                    <div className='bg-gray-600 w-full h-[700px] flex justify-center items-center'>
                        <h1>section 3</h1>
                    </div>
                    {/* section 4 */}
                    <div className='bg-gray-700 w-full h-[700px] flex justify-center items-center'>
                        <h1>section 4</h1>
                    </div>
                    {/* carousel */}
                    <div className='bg-gray-500 w-full h-[700px] flex justify-center items-center'>
                        <h1>section 5</h1>
                    </div>
                    {/* carousel */}
                    <div className='bg-gray-400 w-full h-[700px] flex justify-center items-center'>
                        <h1>section 6</h1>
                    </div>
                </main>
                <footer className="bg-gray-800 text-white p-4 text-center w-full">
                    © 2025 Semua Hak Dilindungi
                </footer>
            </div>
        </>
    );
}
