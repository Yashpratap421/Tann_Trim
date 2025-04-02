"use client"
import React from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { TbShoppingBagPlus } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  return (
    <div className="relative w-[23%] h-[48vh] overflow-hidden bg-black text-white shadow-lg rounded-lg border border-gray-700 cursor-pointer transition-transform transform hover:scale-101 hover:shadow-2xl">
      <div className=" h-64 w-full mb-2 p-4 bg-white">
        <img src={product?.image} alt="" className='h-[100%] w-[100%] ' />
        <FaRegBookmark className='h-6 w-5 absolute right-2 text-black font-extrabold top-3'/>
      </div>
      
      {/* Title with max 3 lines and ellipsis */}
      <h2 className="text-[15px] font-light mb-1 px-1 line-clamp-2 overflow-hidden text-ellipsis h-[48px] text-gray-200">
        {product?.title}
      </h2>

      <p className="px-1  text-[16px] font-semibold text-white flex justify-between">
        <span className='text-white mt-1 flex items-center font-bold'><FaIndianRupeeSign /> {product?.price}  <span className="mt-[2px] text-green-500 text-xs font-bold px-1">
    (30% Off)
  </span></span>
        <span className='font-bold mr-2'><TbShoppingBagPlus className="h-7 w-7" strokeWidth={1.5} />

        </span>
      </p>

     
    </div>
  );
};

export default ProductCard;
