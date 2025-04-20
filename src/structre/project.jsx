import { useState, useEffect } from "react";



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
    const new_arr = [];
    let return_start = false;

    if (limit > size) {
        return_start = true;
    }

    for (let i = idx; i < size; i++) {
        if (i == limit) {
            break;
        } else {
            new_arr.push(Tech[i]);
            if ((return_start == true) && (i == 6)) {
                for (let j = 0; j < limit - size; j++) {                    
                        new_arr.push(Tech[j]);                    
                }
            }
        }
        
    }

    return new_arr;
}

const Cards = (props) => {
    let size = Tech.length;
    let new_tech = reduction(props.count, props.limit, size);

    return (
        <>
            {new_tech.map((item, i) => {
                return (
                    <div 
                        key={`${props.animate}-${i}`} 
                        className={`
                            bg-text-lighter 
                            ${props.direction === 'left' 
                                ? "animate-slide-left" 
                                : "animate-slide-right"
                            } 
                            relative 
                            transition-all 
                            duration-700 
                            ease-in-out
                            flex 
                            justify-center 
                            items-center 
                            rounded-xl 
                            shadow-md 
                            shadow-background/50  
                            w-[200px] 
                            h-[200px]
                            mx-2
                            hover:scale-105
                            hover:shadow-lg
                            hover:shadow-background/70
                            transform
                            hover:-translate-y-1
                        `}
                    >
                        {item.name === 'laravel' ? (
                            <img 
                                src={`${item.img}`} 
                                className="w-24 h-24 object-contain" 
                                alt="Laravel icon"
                            />
                        ) : (
                            <i 
                                className={`
                                    ${item.class} 
                                    ${item.color} 
                                    text-7xl
                                    transition-transform
                                    duration-300
                                    hover:scale-110
                                `}
                            ></i>
                        )}
                    </div>
                )
            })}
        </>
    )
}





function Project() {
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(4);
    const [direction, setDirection] = useState('right');
    const [animationKey, setAnimationKey] = useState(0);
    const [screenSize, setScreenSize] = useState(window.innerWidth);
   
    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 500) {
            setLimit(1);
        } else if (screenSize < 640) {
            setLimit(2);
        }else if(screenSize <1024){
            setLimit(3);
        }else{
            setLimit(4);
        }
    },[screenSize]);

    useEffect(() => {
        let intervalId;
        setAnimationKey(e => e + 1);
        

        intervalId = setInterval(() => {
            if (direction == 'left') {
               
                
                 if (count == 6) {
                     setCount(0);
                     if (screenSize < 500) {
                        setLimit(1);
                    } else if (screenSize < 640) {
                         setLimit(2);
                     }else if(screenSize <1024){
                         setLimit(3);
                     }else{
                         setLimit(4);
                     }
                 }else{
                  
                         setCount(count + 1);
                         setLimit(limit + 1);
                    
                 }
               
             }else if (direction == 'right') {
                
                    
                     if (count <= 0) {
                         
                        if (screenSize < 500) {
                            setCount(6);
                            setLimit(7);
                        } else if (screenSize < 640) {
                             setCount(6);
                             setLimit(8);
                         }else if(screenSize <1024){
                             setCount(6);
                             setLimit(9);
                         }else{
                             setCount(6);
                             setLimit(10);
                         }
                     }else{
                        
                             setCount(count - 1);
                             setLimit(limit - 1);
                        
                     } 
                 
             }
            },1500)
            return () =>{
                if (intervalId){
                 
                    clearInterval(intervalId);
                }
            }
        
       
    }, [ direction,count]);

    return (
        <>
            <main id="project" className="w-full  h-[150vh] min-md:pt-20   py-15 px-15 max-md:px-0">
                <h2 className="text-5xl text-text max-md:px-5 underline mb-20 ">Projects & Technologies:</h2>
                 {/* Project part  */}
                 <div className="w-full max-md:w-[95%] max-md:flex:justify-center h-[50vh]  px-10 mb-30 max-md:mb-10 min-md:grid min-md:grid-cols-2  " >
                    <div className=" pt-4 pl-2 relative">
                        <h4 className="font-bold text-lg mb-2 text-primary" >featured project</h4>
                        <h2 className="text-4xl font-semibold mb-5 text-primary-dark" >SPIA CLOUD</h2>
                        <div className="w-full h-3/7 ml-8 max-md:ml-3 p-5 bg-radial-[at_25%_25%] from-white to-zinc-300 to-90% rounded-xl shadow-lg relative z-20" >
                            <p className=" w-full h-full text-text font-meduim text-xs  " >the Spia cloud is a platform for manange roles and save data in tables specificing the types of data , with a system of communication between users like . </p>
                        </div>
                        <div className="p-8  max-md:pl-3">
                            <button className=" text-xl cursor-pointer text-primary-dark transition active:scale-90 hover:scale-110 " >
                            <a href="https://spiacloud.com/" target="_blank"  >
                            <i className="fi fi-rr-arrow-up-right-from-square  "></i>
                            </a>
                            </button>
                                            
                        </div>
                    </div>
                    <div className="h-3/3 max-md:hidden bg-radial-[at_25%_25%] from-white to-zinc-400 to-75% pl-5 pt-5 rounded-xl shadow-lg -z-10">
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
                 <div className="w-[80%] mx-auto flex justify-between items-center mb-20">
                    <button 
                        onClick={() => {
                            setDirection('left');
                        }} 
                        className="
                            outline 
                            outline-2 
                            outline-accent 
                            py-2 
                            px-3 
                            rounded-full 
                            transition 
                            active:scale-90 
                            hover:scale-110
                            content-center 
                            shadow-lg 
                            cursor-pointer
                            hover:bg-accent/10
                        "
                    >
                        <i className="fi fi-br-arrow-left text-accent text-xl"></i>
                    </button>
                    <div className="w-[65%] h-[35vh] flex justify-center items-center space-x-4">
                        <Cards 
                            count={count} 
                            limit={limit} 
                            direction={direction} 
                            animate={animationKey} 
                        />
                    </div>
                    <button
                        onClick={() => {                       
                            setDirection('right');
                        }}
                        className="
                            outline 
                            outline-2 
                            outline-accent 
                            py-2 
                            px-3 
                            rounded-full 
                            transition 
                            active:scale-90 
                            hover:scale-110
                            content-center 
                            shadow-md 
                            cursor-pointer
                            hover:bg-accent/10
                        "
                    >
                        <i className="fi fi-br-arrow-right text-accent text-xl"></i>
                    </button>
                </div>
               

            </main>
        </>
    )
}


export default Project;