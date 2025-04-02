"use client";

import React from "react";
import { IoBagOutline } from "react-icons/io5";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { usePathname } from "next/navigation";

// ✅ Font Import
const openSans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

const Navbar = () => {
  const pathname = usePathname(); // ✅ Correct way to get the current route
  const isActive = (route) => pathname === route; // ✅ Fixed function

  return (
    <div className={`h-[17vh] ${openSans.className}`}>
      <div className="bg-black w-full h-[8vh] px-5 py-1 flex items-center justify-between">
        <h1 className="text-[22px] py-2 pb-2 pt-2 text-gray-50 font-sans tracking-[10px]">
          TANN TRIM
        </h1>
        <ul className="flex items-center gap-5">
          <li className="p-2 hover:bg-gray-800 rounded-md cursor-pointer">
            <i className="fas fa-search text-white text-[16px]"></i>
          </li>
          <li className="p-2 hover:bg-gray-800 rounded-md cursor-pointer">
            <i className="far fa-user text-white text-[16px]"></i>
          </li>
          <li className="p-2 hover:bg-gray-800 rounded-md cursor-pointer">
            <i className="far fa-bookmark text-white text-[16px]"></i>
          </li>
          <li className="p-2 hover:bg-gray-800 rounded-md cursor-pointer">
            <IoBagOutline className="text-white w-5 h-5" strokeWidth={3} />
          </li>
        </ul>
      </div>

      <p className="flex justify-center items-center gap-7 pb-1 mt-3.5 text-gray-100 font-medium ">
        {[
          { label: "ALL", path: "/" },
          { label: "Men's Cloth", path: "/mencloth" },
          { label: "Women's Cloth", path: "/womencloth" },
          { label: "Electronic's Device", path: "/electronic" },
          { label: "Jewellery", path: "/jewelery" },
        ].map(({ label, path }) => (
          <Link key={path} href={path} passHref>
            <span
              className={`relative text-[16px] font-normal transition-all duration-300 pb-2 px-2
                ${isActive(path) ? "text-green-400" : "text-white"}
                before:absolute before:left-0 before:bottom-0 before:h-[2px]
                before:w-0 before:bg-green-400 before:transition-all before:duration-300
                hover:before:w-full hover:before:left-0 ${isActive(path) ? "before:bg-green-400 before:w-full" : ""}`}
            >
              {label}
            </span>
          </Link>
        ))}
      </p>
    </div>
  );
};

export default Navbar;
