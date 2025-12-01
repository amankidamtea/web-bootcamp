// import { X } from "lucide-react";
// import React from "react";

export default function Whatsapp() {
    // const [open, setOpen] = React.useState(true);
    return (
        <div className=" fixed flex flex-col z-50 bottom-6 right-0 p-5 lg:px-10">
            {/* {open && (
                <div className="bg-[#BAF81B] p-3 mb-2 rounded-xl">
                <div className="w-full flex justify-end">
                    <button className="cursor-pointer">
                        <X onClick={() => setOpen(!open)} className="font-bold" size={15}/>
                    </button>
                </div>
                <p>
                    Halo kak,<br/> ada yang bisa saya bantu?
                </p>
            </div>
            )} */}
            <a target="_blank" rel="noopener noreferrer" className="bg-[#2C3D6D] ml-auto w-15 h-15 p-4 shadow-md rounded-full flex items-center justify-center" href="https://wa.me/6287823529583?text=hai%20saya%20ingin%20konsultasi">
                <img src="/images/icon/wa.png" className="w-10" alt="" />
            </a>
        </div>
    )
}