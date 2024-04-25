import { getGenereAndMovies } from "@/server/movies";
import Image from "next/image";
import { Suspense } from "react";

function MovieListCaraousel({ movies }) {
    // TODO: show more than 6 movies by scrolling
    const moviesToShow = movies.slice(0, 6);
    return (
        <div className="grid grid-cols-6 gap-4">
            {moviesToShow.map((movie) => (
                <div key={movie.id} className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <Image
                        src={movie.Poster}
                        alt={movie.Title}
                        className="rounded-lg w-full h-64 object-cover"
                        width={300}
                        height={450}
                    />
                    <div className="mt-4">
                        <h2 className="text-md font-semibold text-gray-800 dark:text-white">
                            {movie.Title}
                        </h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            {movie.Plot}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

async function LoadedGenres() {
    const genre = await getGenereAndMovies();
    return (
        <div className="flex flex-col gap-4">
            {genre.map((genre, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                        <h2 className="text-md font-semibold text-gray-800 dark:text-white">
                            {genre.Title}
                        </h2>
                        <MovieListCaraousel movies={genre.movies} />
                </div>
            ))}
        </div>
    );
}

export default function GenreList() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoadedGenres />
        </Suspense>
    );
}