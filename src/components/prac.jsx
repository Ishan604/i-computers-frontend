export default function Prac() {
    return(
        <div className="border w-[600px] h-[600px] bg-gray-400 flex justify-center items-center relative">
            <div className="w-[500px] h-[500px] bg-yellow-100 flex flex-col justify-center items-center">
                <div className="w-[100px] h-[100px] bg-red-500 fixed left-[350px]"></div>
                <div className="w-[100px] h-[100px] bg-blue-500 fixed bottom-[478px]"></div>
                <div className="w-[100px] h-[100px] bg-green-500 fixed right-[399px]"></div>
                <div className="w-[100px] h-[100px] bg-pink-500 absolute top-[350px]"></div> {/* absolute is relative to the parent div but fixed is relative for the window */}
            </div>
        </div>
    )
}