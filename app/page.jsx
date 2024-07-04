"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import CardMovie from './CardMovie';
import Search from './Icons8-search.svg';

const API = 'http://www.omdbapi.com?apikey=fdd80443';

const Home = () => {
  const [search, setSearch] = useState('');
  const [movie, setMovie] = useState([]);

  const searchMovie = async (title) => {
    const searchData = await fetch(`${API}&s=${title}`);
    const result = await searchData.json();
    setMovie(result.Search);
  };

  useEffect(() => {
    searchMovie('Batman');
  }, []);

  return (
    <div className="Home flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="font-bold text-3xl my-8 text-[#f2eae0] sm:text-4xl">
        HackOne Movies
      </h1>
      <div className="Search relative w-11/12 lg:w-1/2">
        <input
          placeholder="Search Movie"
          type="text"
          className="w-full rounded-full shadow-2xl bg-[#212121] text-[#f2eae0] px-6 py-3 pl-12"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <Image src={Search} alt="Search Icon" width={30} height={20} onClick={() => searchMovie(search)} />
        </div>
      </div>
      <center>
         <div className="w-full flex flex-col items-center justify-center mt-[3rem]">
        {movie?.length > 0 ? (
          <div className="container grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {movie.map((movie) => (
              <CardMovie key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-lg">No movies found</h1>
          </div>
        )}
      </div>
     </center>
    </div>
  );
};

export default Home;
