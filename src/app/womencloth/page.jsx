"use client";

import ProductCard from '@/Components/ProductCard'
import { Datacontext } from '@/Context/Data'
import { MdOutlineIosShare } from "react-icons/md";
import React, { useContext } from 'react'
import Womenoption from '@/Components/Womenoption';

const Womens = () => {
    const { data } = useContext(Datacontext);

    // Filter data based on category "Women's Clothing"
    const filteredData = data?.filter(item => item.category === "women's clothing");
    console.log(filteredData);

    return (
        <>
            <Womenoption />
            <div className="bg-gray-950 h-[73vh] pb-3">
                <p className=' px-4 py-2 flex justify-end cursor-pointer '>
                    <span className='text-[16px] text-white font-medium px-1'>{filteredData.length}</span>
                    <span className='px-1'>Products </span><MdOutlineIosShare className="font-bold text-[16px] " /></p>
                <div className='hide-scrollbar h-[95%] w-[100%] gap-7 px-6 py-2 pb-4 flex flex-wrap overflow-y-scroll'>
                    {filteredData?.length > 0 ? (
                        filteredData.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))
                    ) : (
                        <p className="text-white text-lg">No women's clothing available</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Womens;
