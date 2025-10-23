import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // State variables for username and password
  const navigate = useNavigate(); // Hook for navigation

  async function handleLogin() {
    // console.log("Login clicked")
    try{
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/login", {
      email : email,
      password : password //the body of the response
    }) //send the request to the backend

    console.log(response);

    if(response.data.role === "admin"){ 
      //window.location.href = "/admin"; 
      navigate("/admin"); //redirect to admin dashboard
    }
    else{
      //window.location.href = "/"; 
      navigate("/"); //redirect to home page
    }

    toast.success("Login Successful");
    //alert("Login Successful");

    }
    catch(err){
      console.log(err);
      //alert("Login Failed");
      toast.error("Login Failed");
    } 
  }

  return (
    <div className="w-full h-screen bg-[url('../public/background.jpg')] bg-center bg-cover bg-no-repeat flex flex-row">
      <div className=" w-[50%] h-screen flex flex-col justify-center items-center text-white text-4xl font-bold">
        <h1 className="text-7xl">ICM <span className="text-accent">Computers</span></h1>
        <h1 className="mt-[30px]">Plug In , Power Up , Play Hard</h1>
      </div>
      <div className=" w-[50%] h-screen flex justify-center items-center">
        <div className="w-[400px] h-[500px] rounded-lg shadow-2xl flex flex-col justify-center items-center gap-8 backdrop-blur-lg bg-white/10 p-8">
          <h1 className="text-4xl font-bold text-white">Login</h1>

          <input 
            type="email" 
            placeholder="Username" 
            className="w-[350px] h-[50px] rounded-md pl-4 text-lg border-[1px] focus:outline-none focus:ring-accent focus:ring-4 "
            onChange={(e) =>{setEmail(e.target.value)}} /> {/*State update on input change*/}

          <input
            onChange={(e) => {setPassword(e.target.value)}} //State update on input change
            type="password" 
            placeholder="Password" 
            className="w-[350px] h-[50px] rounded-md pl-4 text-lg border-[1px] focus:outline-none focus:ring-accent focus:ring-4 "/>

          <h1><Link to={"/forgot-password"} className="text-accent ml-[210px] font-bold hover:cursor-pointer transition duration-300 hover:underline">Forgot Password</Link></h1>
          <button onClick={handleLogin} className="w-[350px] h-[50px] bg-accent text-white rounded-md text-lg font-bold hover:bg-accent/80 hover:cursor-pointer">Login</button>
          <h1 className="text-white">New User? <Link to={"/register"} className="text-accent font-bold hover:cursor-pointer transition duration-300 hover:underline">Register Here</Link></h1>
        </div>
      </div>
    </div>
  )
}
