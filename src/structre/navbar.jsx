import { useState } from "react";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="w-full   h-[10vh] pt-10 min-w-xs:content-center  " >
                <div className=" min-sm:mx-auto lg:w-lg md:w-md sm:w-sm  flex justify-around items-center min-sm:gap-10  animate-(--animate--down) relative " >
                    <div className="w-1/3 h-[6vh]  flex min-sm:justify-center items-center gap-2 " >
                        <div className="w-[7px] h-[7px] bg-primary rounded-[50%] shadow-lg shadow-primary " ></div>
                        <div className=" w-[45px] h-[45px] inset-shadow-sm inset-shadow-primary-light cursor-pointer hover:scale-105 transition-all duration-300  border-2 border-primary-light rounded-[50%] p-[2px] shadow-md ">
                           <a href="#about">
                           <img className=" rounded-[50%] brightness-50" src="/profile.jpg" alt="" />
                           </a>
                           
                        </div>
                        <div className="w-[7px] h-[7px] bg-primary rounded-[50%] shadow-lg shadow-primary " ></div>
                    </div>
                    <ul className="lg:w-full lg:gap-10 md:w-full md:gap-5 sm:w-full sm:gap-2 max-sm:hidden h-[6vh] bg-primary-dark text-text-lighter font-medium    shadow-md shadow-primary-light  rounded-full flex justify-center items-center ">
                        <li><a href="#about" className=" text-xs transition hover:text-primary" >About</a></li>
                        <li><a href="#project" className=" text-xs transition hover:text-primary" >Project</a></li>
                        <li><a href="#contact" className=" text-xs transition hover:text-primary" >Contact</a></li>
                    </ul>
                    <button onClick={() => setIsOpen(!isOpen)} className="   min-sm:hidden cursor-pointer transition active:scale-90 hover:scale-110 ">
                    <i class="fi fi-rr-apps text-primary-dark text-xl"></i>
                    </button>
                </div>

            </nav>
            {isOpen && (
                <div className="min-sm:hidden transition-all duration-300 animate-(--animate--out-lt) fixed top-0 left-0 w-full h-full   z-100  flex  ">
                   
                    <div className="w-4/5 h-full bg-primary-light opacity-95 " >
                   <div className="w-full p-10 pt-5 pb-0 flex justify-end">
                    <button onClick={() => {
                        setIsOpen(!isOpen)
                    }} className="cursor-pointer transition hover:scale-105 active:scale-90 " >
                    <i class="fi fi-rr-rectangle-xmark text-text-lighter "></i>
                    </button>
                   </div>
                    <ul className="w-full p-10 pt-5 ">
                        <li className="border-b border-text-lighter mb-3 w-full"><a href="#about" className=" text-xs text-text-lighter transition hover:text-primary" >About</a></li>
                        <li className="border-b border-text-lighter mb-3 w-full"><a href="#project" className=" text-xs text-text-lighter transition hover:text-primary" >Project</a></li>
                        <li className="border-b border-text-lighter mb-3 w-full"><a href="#contact" className=" text-xs text-text-lighter transition hover:text-primary" >Contact</a></li>
                    </ul>
                    </div>
                    <div onClick={()=> {
                        setIsOpen(!isOpen)
                    }} className="w-1/5" ></div>
                   
                </div>
            )}

        </>
    )
}

export default NavBar;