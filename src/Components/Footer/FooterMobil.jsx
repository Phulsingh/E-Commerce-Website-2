import React from "react";
import { TbCategoryPlus } from "react-icons/tb";
import { FaArrowsRotate } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const FooterMobil = () => {
  const navigate = useNavigate()
  return (
    <footer className="w-full space-x-1 flex font-bold text-xs justify-between px-2 fixed bottom-0 left-0 bg-yellow-50 items-center md:hidden h-14 z-50">
      <div onClick={()=>{
        navigate("/")
      }} className="flex flex-col justify-center items-center">
        <img
          className="h-5"
          src="https://kingkisanghar.com/assets/images/kisanlogo20.png"
        />
        <p>Home</p>
      </div>
      <div onClick={()=>{
        navigate("/categories")
      }} className="flex flex-col justify-center items-center">
        <TbCategoryPlus size={25} />
        <p>Category</p>
      </div>
      <div className="flex flex-col justify-between items-center">
        <FaArrowsRotate size={23} />
        <p>Order Again</p>
      </div>
      <div onClick={()=>{
        navigate("/cart")
      }} className="flex flex-col justify-between items-center">
        <IoCartOutline size={24} />
        <p>Cart</p>
      </div>
      <div onClick={()=>{
        navigate("/login")
      }} className="flex flex-col justify-between items-center">
        <MdOutlineAccountCircle size={24} />
        <p>Account</p>
      </div>
    </footer>
  );
};

export default FooterMobil;
