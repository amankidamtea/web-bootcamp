import { dashboard, login, register } from '@/routes';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon, Mail, MapPin, MenuIcon, Phone, X } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';
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
];
export default function Navbar({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;
    const [open, setOpen] = React.useState(false);
    return (
        <div className="w-full bg-white fixed top-0 z-50">
            <div className="bg-[#2C3D6D] w-full  md:flex hidden">
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
            {/* navigasi */}
            <nav className={`${open ? 'flex' : 'lg:flex hidden'} lg:flex-row flex-col w-full  items-center justify-between lg:px-48 lg:py-2 py-6 shadow-sm`}>
                <div className="lg:hidden flex justify-end w-full px-5 cursor-pointer">
                    <button type='button' onClick={() => setOpen(!open)}><X size={25} /></button>
                </div>
                <a href="/" className='lg:flex hidden'>
                    <img src={'/images/harada.png'} className='w-32' />
                </a>
                <ul className='flex lg:flex-row flex-col  items-center gap-5 text-gray-500'>
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
                                <div className="grid lg:grid-cols-3 gap-7">
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
                <div className='w-full lg:w-fit px-5 mt-3'>
                    {auth.user ? (
                        <Link
                            href={dashboard()}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <div className='flex lg:gap-2'>
                            <Link
                                href={login()}
                                className="lg:inline-block bg-[#2C3D6D] text-center lg:w-fit w-full rounded-full  px-5 py-1.5 text-sm leading-normal text-white  dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A] font-bold hover:text-gray-500"
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
                </div>
            </nav>

            {/* mobile only */}
            {!open && (
                <div className={`bg-white w-full h-20 lg:hidden flex   items-center justify-between fixed top-0 left-0 z-50 px-5 shadow`}>
                    <a href="/">
                        <img src={'/images/harada.png'} className='w-32' />
                    </a>
                    <button type='button' onClick={()=>setOpen(true)}>
                        <MenuIcon size={25} />
                    </button>
                </div>
            )}
        </div>
    )
}