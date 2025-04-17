
function NavBar() {
    return (
        <>
            <nav className="w-full  h-[10vh] pt-10 content-center sticky top-0 z-55 " >
                <div className="m-auto w-1/3 flex gap-10 animate-(--animate--down) relative " >
                    <div className="w-1/3 h-[6vh]  flex justify-center items-center gap-2 " >
                        <div className="w-[7px] h-[7px] bg-primary rounded-[50%] shadow-lg shadow-primary " ></div>
                        <div className=" w-[45px] h-[45px] inset-shadow-sm inset-shadow-primary-light cursor-pointer hover:scale-105 transition-all duration-300  border-2 border-primary-light rounded-[50%] p-[2px] shadow-md ">
                           <a href="#about">
                           <img className=" rounded-[50%] brightness-50" src="../public/profile.jpg" alt="" />
                           </a>
                           
                        </div>
                        <div className="w-[7px] h-[7px] bg-primary rounded-[50%] shadow-lg shadow-primary " ></div>
                    </div>
                    <ul className="w-3/4 h-[6vh] bg-primary-dark text-text-lighter font-medium    shadow-md shadow-primary-light  rounded-full flex justify-center items-center gap-10">
                        <li><a href="#about" className=" text-xs transition hover:text-primary" >About</a></li>
                        <li><a href="#project" className=" text-xs transition hover:text-primary" >Project</a></li>
                        <li><a href="#contact" className=" text-xs transition hover:text-primary" >Contact</a></li>
                    </ul>
                </div>

            </nav>

        </>
    )
}

export default NavBar;