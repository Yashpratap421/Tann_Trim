"use client";

import ProductCard from '@/Components/ProductCard'
import { MdOutlineIosShare } from "react-icons/md";
import { Datacontext } from '@/Context/Data'
import React, { useContext } from 'react'

const Womens = () => {
    const { data } = useContext(Datacontext);


    return (
        <div className='h-[73vh] bg-gray-950'>
            <p className=' px-4 py-2 flex justify-end cursor-pointer '>
                <span className='text-[16px] text-white font-medium px-1'>{data.length}</span>
                <span className='px-1'>Products </span><MdOutlineIosShare className="font-bold text-[16px] " /></p>
            <div className='hide-scrollbar h-[95%] w-[100%] gap-7 px-6 py-2 pb-4 flex flex-wrap overflow-y-scroll bg-gray-950'>
                {data?.length > 0 ? (
                    data.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))
                ) : (
                    <p className="text-white text-lg">No women's clothing available</p>
                )}
            </div>
        </div   >
    );
};

export default Womens;
