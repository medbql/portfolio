
function NavBar() {
    return (
        <>
            <nav className="w-full  h-[10vh] pt-8 content-center " >
                <div className="m-auto w-1/3 flex gap-15 animate-(--animate--down) relative " >
                    <div className="w-1/3  flex justify-center items-center gap-2 " >
                        <div className="w-[8px] h-[8px] bg-primary rounded-[50%] shadow-lg shadow-primary " ></div>
                        <div className=" w-[50px] inset-shadow-sm inset-shadow-primary-light  border-2 border-primary-light rounded-[50%] p-[2px] shadow-md ">
                            <img className=" rounded-[50%] brightness-50" src="../public/profile.jpg" alt="" />
                        </div>
                        <div className="w-[8px] h-[8px] bg-primary rounded-[50%] shadow-lg shadow-primary " ></div>
                    </div>
                    <ul className="w-3/4 bg-primary-light text-text-lighter font-bold   p-3 shadow-md shadow-primary-light  rounded-full flex justify-center items-center gap-10">
                        <li><a href="" className="underline" >About</a></li>
                        <li><a href="" className="underline">Project</a></li>
                        <li><a href="" className="underline">Contact</a></li>
                    </ul>
                </div>

            </nav>

        </>
    )
}

export default NavBar;