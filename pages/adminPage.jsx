import { Route, Routes, Link } from "react-router-dom";
import { FaRegRectangleList, FaRegUser } from "react-icons/fa6";
import { LuBoxes } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";

export default function AdminPage() {
  return (
    <div className="w-full h-full flex">
      <div className="w-[250px] h-full bg-[#161719]">
        <div className="w-full h-[80px] flex items-center justify-center text-2xl">
          <h1 className="text-white font-bold">Admin Panel</h1>
        </div>
        <div className="w-full h-[250px] pt-1 text-white flex flex-col pl-4 justify-center gap-6">
          <div className="flex flex-row items-center gap-1.5">
            <FaRegRectangleList/>
            <Link to="/admin">Orders</Link>
          </div>
          <div className="flex flex-row items-center gap-1.5">
            <LuBoxes/>
            <Link to="/admin/products">Products</Link>
          </div>
          <div className="flex flex-row items-center gap-1.5">
            <FaRegUser/>
            <Link to="/admin/users">Users</Link>
          </div>
          <div className="flex flex-row items-center gap-1.5">
            <MdOutlineRateReview/>
            <Link to="/admin/reviews">Reviews</Link>
          </div> 
          {/* we use Link instead og a tags in react */}
        </div>
      </div>
      <div className="w-[calc(100%-300px)] bg-primary h-full max-h-full overflow-y-scroll">
        <Routes path="/">
          <Route path="/" element={<h1 className="text-2xl font-bold">Admin Orders Page</h1>}/>
          <Route path="/products" element={<h1 className="text-2xl font-bold">Admin Products Page</h1>}/>
          <Route path="/users" element={<h1 className="text-2xl font-bold">Admin Users Page</h1>}/>
          <Route path="/reviews" element={<h1 className="text-2xl font-bold">Admin Reviews Page</h1>}/>
        </Routes>
      </div>
    </div>
  )
}
