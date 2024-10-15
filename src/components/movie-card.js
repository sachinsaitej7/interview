"use client";
import Image from "next/image";
import { useState } from "react";
import { HeartIcon } from "lucide-react";
import { markFavorite } from "@/server/movies";

export default function MovieCard({ movie }) {
  const [src, setImgSrc] = useState(movie.poster);
  const [isLiked, setIsLiked] = useState(undefined);

  const handleFavorite = async () => {
    const prevIsLiked = isLiked;
    try {
      setIsLiked((prev) => !prev);
      await markFavorite(movie.id);
    } catch (error) {
      console.error({error});
      setIsLiked(prevIsLiked);
    }
  };

  return (
    <div
      key={movie.id}
      className='p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 relative'
    >
      <Image
        src={src}
        alt={movie.title}
        className='rounded-lg w-full h-64 object-cover'
        width={300}
        height={450}
        onError={() => {
          setImgSrc("/placeholder-movie.jpg");
        }}
      />

      <div className='absolute top-4 right-4 cursor-pointer'>
        {isLiked ? (
          <HeartIcon
            className='text-red-500 dark:text-red-400'
            onClick={handleFavorite}
            fill='red'
          />
        ) : (
          <HeartIcon
            className='text-gray-500 dark:text-gray-400'
            onClick={handleFavorite}
          />
        )}
      </div>

      <div className='mt-4'>
        <h2 className='text-md font-semibold text-gray-800 dark:text-white'>
          {movie.title}
        </h2>
        <p className='mt-2 text-gray-600 dark:text-gray-300'>{movie.plot}</p>
      </div>
    </div>
  );
}
