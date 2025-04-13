import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full sticky bg-white top-0 z-50 flex flex-col md:flex-row items-center md:bg-[#00B86B] ">
      <div className="hidden md:w-[15%] md:flex">
        <img
          className="h-25 p-5"
          src="https://kingkisanghar.com/assets/images/kisanlogo20.png"
        />
      </div>
      <div className="text-black md:w-[25%] md:text-white py-3 font-semibold  w-full flex justify-center items-center">
        <p>We are not Delevering in Your Address</p>
      </div>
      <div className="flex rounded-xl md:py-1 md:bg-green-300 justify-between mt-5 md:mt-0 border-1 md:border-none w-[93%] md:w-[35%]  items-center">
        <input  className="px-2 text-base border-none outline-none md:text-white" type="text" placeholder="I am searching for"/> 
        <div className="h-8 cursor-pointer rounded-tr-xl rounded-br-xl bg-[#00B86B] md:bg-transparent w-8 md:w-15 flex justify-center items-center md:h-10">
            <span className="text-base text-white">< CiSearch size={24}/></span>
        </div>
      </div>
      <div className="w-[20%] hidden space-x-10 md:flex justify-end items-center ">
        <span onClick={()=>{
            navigate("/cart")
        }} className="text-white cursor-pointer"><IoCartOutline size={25} /></span>
        <span onClick={()=>{
            navigate("/login")
        }} className="text-white cursor-pointer"><FaRegUserCircle   size={25} /></span>
        <span className="text-white cursor-pointer"><FiShoppingBag  size={25} /></span>
      </div>
    </div>
  );
};

export default Navbar;
