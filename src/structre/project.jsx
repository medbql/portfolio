import { useState } from "react";



const Tech = [
    {
        name: "React.js",
        class: "fi fi-tr-react",
        color: "text-cyan-500"
    },
    {
        name: "laravel",
        img: "public/favicon.ico",
    },
    {
        name: "php",
        class: "fi fi-brands-php",
        color: "text-fuchsia-900"
    },
    {
        name: "MySql",
        class: "fi fi-brands-mysql",
        color: "text-blue-500"
    },
    {
        name: "Javascript",
        class: "fi fi-brands-js",
        color: "text-yellow-400"
    },
    {
        name: "HTML",
        class: "fi fi-brands-html5",
        color: "text-orange-400"
    },
    {
        name: "CSS",
        class: "fi fi-brands-css3-alt",
        color: "text-blue-400"
    },
];

function reduction(idx, limit, size) {
    const ch = [];
    let condt = false;


    if (size - idx < 4) {
        condt = true;
    }
    let c = 0;
    for (let index = idx; index < size; index++) {
        c += 1;
        let calcul = size - index;
        if (index == limit) {
            break;
        } else {
            ch.push(Tech[index]);
            if (condt && calcul == 1) {
                for (let i = 0; i < size; i++) {
                    if (i == (4 - c)) {
                        break;
                    } else {
                        ch.push(Tech[i]);
                    }


                }
            }
        }

    }
    return ch;
}

function Cards(idx, limit, animate, keyAnim) {

    let size = Tech.length;
    let athor = reduction(idx, limit, size);

    return (
        <>
            {athor.map((item, i) => {
                return (
                    <div key={`${keyAnim}-${i}`} className={`bg-text-lighter ${animate == 'left' ? "animate-(--animate--left)" : "animate-(--animate--right)"} relative transition-all duration-1000 flex  justify-center items-start  rounded-xl shadow-md shadow-background/50  w-[20%] h-full`} >
                        {item.name == 'laravel' ? <img src={`${item.img} `} className="pt-15" /> :
                            <i className={`${item.class} ${item.color} pt-15 text-8xl `} ></i>
                        }
                    </div>
                )
            })}
        </>
    )

}





function Project() {
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(4);
    const [direction, setDirection] = useState('left');
    const [animationKey, setAnimationKey] = useState(0);

    return (
        <>
            <main id="project" className="w-full  h-[150vh]  py-15 px-30">
                <h2 className="text-7xl text-text underline mb-20 ">Projects & Technologies:</h2>
                 {/* Project part  */}
                 <div className="w-full h-[50vh] mb-30 grid grid-cols-2  " >
                    <div className=" pt-4 pl-2 relative">
                        <h4 className="font-bold text-xl mb-2 text-primary" >featured project</h4>
                        <h2 className="text-6xl font-semibold mb-5 text-primary-dark" >SPIA CLOUD</h2>
                        <div className="w-full h-3/6 ml-8 p-5 bg-radial-[at_25%_25%] from-white to-zinc-500 to-90% rounded-xl shadow-lg relative z-20" >
                            <p className=" w-full h-full text-text font-meduim  " >the Spia cloud is a platform for manange roles and save data in tables specificing the types of data , with a system of communication between users like . </p>
                        </div>
                        <div className="p-8 ">
                            <button className=" text-2xl cursor-pointer text-primary-dark transition active:scale-90 hover:scale-110 " >
                            <a href="https://spiacloud.com/" target="_blank"  >
                            <i className="fi fi-rr-arrow-up-right-from-square  "></i>
                            </a>
                            </button>
                                            
                        </div>
                    </div>
                    <div className="bg-radial-[at_25%_25%] from-white to-zinc-500 to-75% pl-5 pt-5 rounded-xl shadow-lg -z-10">
                        <div className="bg-white grid grid-cols-3 gap-x-3 gap-y-10 p-5 w-full h-full rounded-t-xl rounded-b-xl rounded-r-none   ">
                            <div className="rounded-xl shadow-lg">
                            <img src="public/Capture d'écran 2025-04-12 141711.png" alt="" className="h-full"  />
                            </div>
                            <div className="rounded-xl shadow-lg">
                            <img src="public/Capture d'écran 2025-04-12 141839.png" alt=""  className="h-full"  />
                            </div>
                            <div className="rounded-xl shadow-lg">
                            <img src="public/Capture d'écran 2025-04-12 141916.png" alt="" className="h-full" />
                            </div>
                            <div className="rounded-xl shadow-lg">
                            <img src="public/Capture d'écran 2025-04-12 141928.png" alt="" className="h-full" />
                            </div>
                            <div className="rounded-xl shadow-lg">
                            <img src="public/Capture d'écran 2025-04-12 141941.png" alt="" className="h-full" />
                            </div>
                            <div className="rounded-xl shadow-lg">
                            <img src="public/Capture d'écran 2025-04-12 141957.png" alt="" className="h-full" />
                            </div>
                              
                        </div>
                    </div>
                </div>
               
                <div className="w-7/8 mx-auto mb-30  bg-secondary-dark h-2" ></div>
                 {/*technologies part  */}
                 <div className="flex justify-between items-center mb-20 ">
                    <button onClick={() => {
                        setAnimationKey(e => e + 1);
                        if (count <= 0) {
                            setCount(4);
                            setLimit(8);
                        } else {
                            setCount(count - 1);
                            setLimit(limit - 1);
                        }
                        setDirection('right')

                    }} className="outline outline-2 outline-accent py-4 px-5 rounded-full transition active:scale-90 content-center shadow-lg cursor-pointer">
                        <i className="fi fi-br-arrow-left text-accent text-xl"></i>
                    </button>
                    <div className="w-[65%] h-[35vh] flex justify-around ">
                        {Cards(count, limit, direction, animationKey)}
                    </div>
                    <button onClick={() => {
                        setAnimationKey(e => e + 1);
                        if (count == 6) {
                            setLimit(4);
                            setCount(0);
                        } else {
                            setCount(count + 1);
                            setLimit(limit + 1);
                        }
                        setDirection('left')

                    }} className="outline outline-2 outline-accent py-4 px-5 rounded-full transition active:scale-90 content-center shadow-md cursor-pointer">
                        <i className="fi fi-br-arrow-right text-accent text-xl"></i>
                    </button>

                </div>
               

            </main>
        </>
    )
}


export default Project;