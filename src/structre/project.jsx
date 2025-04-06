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

function Cards(idx, limit, animate,keyAnim) {

    let size = Tech.length;


    let athor = reduction(idx, limit, size);




    return (
        <>
            {athor.map((item, i) => {
                return (
                    <div key={`${keyAnim}-${i}`} className={`bg-text-light ${animate == 'left'?"animate-(--animate--left)":"animate-(--animate--right)"} relative transition-all duration-1000 flex  justify-center items-start  rounded-xl shadow-lg shadow-text w-[20%] h-full`} >

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
            <main className="w-full  h-[100vh]  py-15 px-30">
                <h2 className="text-7xl text-text-light underline mb-40 ">Projects & Technologies:</h2>
                <div className="flex justify-between items-center ">
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

                    }} className="outline outline-2 outline-text-light py-4 px-5 rounded-full transition active:scale-90 content-center shadow-lg cursor-pointer">
                        <i className="fi fi-br-arrow-left text-text-light text-xl"></i>
                    </button>
                    <div className="w-[65%] h-[35vh] flex justify-around ">
                        {Cards(count, limit, direction,animationKey)}
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

                    }} className="outline outline-2 outline-text-light py-4 px-5 rounded-full transition active:scale-90 content-center shadow-md cursor-pointer">
                        <i className="fi fi-br-arrow-right text-text-light text-xl"></i>
                    </button>

                </div>


            </main>
        </>
    )
}


export default Project;