
function About() {
    return (
        <>
            <div className=" w-full flex justify-between  mb-50   mt-25  h-[60vh] py-15 px-30 " >
                <div className="animate-(--animate--out) w-full mr-3  relative  ">
                    <h1 className="text-8xl text-text-light mb-5 underline font-medium " >Mohamed Bouquil</h1>
                    <p className="pt-4 pr-4 mb-10 text-xl text-text-light font-medium" >
                        "Hi, a Full Stack Developer skilled in both frontend and backend technologies. I build fast, scalable, and user-friendly web applications using modern frameworks and clean code. Passionate about problem-solving and innovation, I turn ideas into functional digital solutions. Check out my work below!"
                    </p>
                    <ul className="flex items-center gap-5 text-text-light " >
                        <li className="transition hover:scale-110" ><a className="" href=""><i className="fi fi-brands-github hover:text-text  text-3xl"></i></a></li>
                        <li className="transition hover:scale-110" ><a href=""><i className="fi fi-brands-linkedin hover:text-text text-3xl"></i></a></li>
                    </ul>

                </div>
                <div className="w-4 h-full bg-text-light animate-(--animate--down-lt) relative left-5 "></div>
                <div className=" w-full animate-(--animate--down-lt) flex  pl-10  ">
                    <img src="../public/tec.svg" className=" w-full h-full" alt="" />
                </div>
            </div>

            {/* <div className="w-7/8 mx-auto mb-10  bg-text-light h-2" ></div> */}

        </>
    )
}

export default About;