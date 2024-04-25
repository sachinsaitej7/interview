import { getRecentMovies } from "@/server/movies";
import Image from "next/image";
import { Suspense } from "react";

async function LoadedRecentMovies() {
    const movies = await getRecentMovies();
    // TODO: get carousel working.
    return (
        <div className="grid gap-4 lg:grid-cols-5">
            {movies.map((movie) => (
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

export default function RecentMovies() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoadedRecentMovies />
        </Suspense>
    );
}