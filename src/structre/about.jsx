
function About() {
    return (
        <>
            <div id="about" className=" w-full max-md:w-[95%] max-md:mx-auto flex justify-between max-md:justify-center mt-20  mb-30     h-[60vh] max-md:h-[85vh] py-15 min-md:px-15  " >
                <div className="animate-(--animate--out) w-full   min-md:mr-3 p-5  relative  ">
                    <h1 className="text-7xl text-text mb-5 underline font-medium " >Mohamed Bouquil</h1>
                    <p className="pt-4 pr-4 mb-10 text-md text-primary font-medium" >
                        "Hi, a Full Stack Developer skilled in both frontend and backend technologies. I build fast, scalable, and user-friendly web applications using modern frameworks and clean code. Passionate about problem-solving and innovation, I turn ideas into functional digital solutions. Check out my work below!"
                    </p>
                    <ul className="flex items-center gap-5 text-primary-light " >
                        <li className="transition hover:scale-110" ><a className="" href="https://github.com/medbql" target="_blank" ><i className="fi fi-brands-github hover:text-text  text-xl"></i></a></li>
                        <li className="transition hover:scale-110" ><a href="https://www.linkedin.com/in/med-bouquil-7527aa2a1/" target="_blank" ><i className="fi fi-brands-linkedin hover:text-text text-xl"></i></a></li>
                    </ul>

                </div>
                <div className="w-4 h-full max-md:hidden bg-primary-dark animate-(--animate--down-lt) relative left-5 "></div>
                <div className=" w-full max-md:hidden animate-(--animate--down-lt) flex  pl-10  ">
                    <img src="tec.svg" className=" w-full h-full" alt="" />
                </div>
            </div>

            

        </>
    )
}

export default About;