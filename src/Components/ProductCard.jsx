"use client"
import React from 'react';
import { IoBagAddOutline } from "react-icons/io5";

const ProductCard = ({ product }) => {
  return (
    <div className="w-[23%] h-[52vh] bg-black text-white shadow-lg rounded-lg overflow-hidden border border-gray-700 cursor-pointer transition-transform transform hover:scale-101 hover:shadow-2xl">
      <div className="bg-gray-900 h-64 w-full rounded-lg mb-2">
        <img src={product?.image} alt="" className='h-[100%] w-[100%] ' />
      </div>
      
      {/* Title with max 3 lines and ellipsis */}
      <h2 className="text-[15px] font-light mb-1 px-1 line-clamp-2 overflow-hidden text-ellipsis h-[48px] text-gray-300">
        {product?.title}
      </h2>

      <p className="px-1  text-[16px] font-semibold text-white flex justify-between">
        <span>${product?.price}</span>
        <span className='mr-3'>⭐ {product?.rating.rate}</span>
      </p>

      <p className='mb-2 mt-1 px-1 flex justify-between items-center text-white font-bold'>
        <span className='p-1 text-[14px] font-thin border-white'><span className='text-gray-400 text-[14px] font-bold'>Availability</span> {product?.rating.count}</span>
        <IoBagAddOutline className="text-white w-6 h-6 mr-2 font-bold" />
      </p>
    </div>
  );
};

export default ProductCard;
