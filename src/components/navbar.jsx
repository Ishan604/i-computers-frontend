import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <div className="w-full h-[80px] bg-accent text-white flex flex-row gap-8 justify-center items-center">
            <Link to ="/">Home</Link>
            <Link to ="/products">Products</Link>
            <Link to ="/about">About</Link>
            <Link to ="/admin">Admin</Link>
            <Link to ="/signin">Signin</Link>
            <Link to ="/login">Login</Link>
        </div>
    )
}