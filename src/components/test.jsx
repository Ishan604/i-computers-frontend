import { useState } from "react";

export default function Test() {

    const [count , setCount] = useState(0) //useState is a hook which is used to manage the state of a component in react
    const [heart , setHeart] = useState("🤍")

    return(
        <div className="w-[700px] h-[500px] flex flex-col justify-center items-center">
            <div className="shadow-2xl w-[500px] h-[300px] flex flex-row justify-center items-center gap-10">
                <button className="bg-red-500 w-[120px] h-[50px] text-white rounded-[20px] hover:bg-red-700 font-bold"
                onClick={() =>{
                    // console.log("Decrement")
                    // count = count - 1;
                    // console.log(count);
                    setCount(count - 1);
                }}>
                    - Decrement
                </button>
                <h1 className="font-bold text-center">{count}</h1>
                <button className="bg-blue-500 w-[120px] h-[50px] text-white rounded-[20px] hover:bg-blue-700 font-bold"
                onClick={() => {
                    // console.log("Increment")
                    // count = count + 1;
                    // console.log(count)
                    setCount(count + 1);
                }}>
                    + Increment
                </button>
            </div>
            <div className="shadow-2xl w-[500px] h-[300px] flex flex-row justify-center items-center gap-10">
                <button className="text-7xl hover:cursor-pointer" onClick={() => {setHeart("❤️")}}>{heart}</button>
            </div>
        </div>
    )
}