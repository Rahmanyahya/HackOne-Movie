"use client";

import './globals.css'
import Image from "next/image";


const CustomCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
      <div className="relative w-[280px] h-[420px]  rounded-[15px] shadow-5xl overflow-hidden group transition-transform transform hover:scale-105 sm:w-[310px] sm:h-[460px]" key={imdbID}>
        <Image 
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} 
          alt={Title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-[15px] shadow-xl "
        />
        <div className="absolute bottom-0 left-0 w-full bg-[#212121] px-[16px] py-[14px] row-start-2 group-hover:bg-transparent transition-all duration-300">
          <div className='font-extrabold float-start text-start grid-rows-2'>
            <p className='text-[15px] text-[#f2eae0] font-sans group-hover:hidden'>{Type}</p>
            <h2 className='text-[25px] text-[#851717] group-hover:hidden'>{Title}</h2>
          </div>    
          <div className="absolute top-0 right-0 bg-[#ffffff] text-[#000000] px-[8px] py-[4px] rounded-[3px]">
            <p className="text-[12px] font-bold">{Year}</p>
          </div>
        </div>
      </div>
  );
}

export default CustomCard;
