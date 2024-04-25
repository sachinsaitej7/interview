"use server";

import { getMovies as getImdb } from "./providers/imdb";
import { getMovies as getRT } from "./providers/rt";

export async function getRecentMovies() {
    const movies = [...await getImdb(), ...await getRT()]
    return movies.slice(0, 5);
}

export async function getGenereAndMovies() {
    // TODO: sort genres by the name. 
    const movies = [...await getImdb(), ...await getRT()]
    const genres = movies.reduce((acc, movie) => {
        const genres = movie.Genre?.split(",").map((genre) => genre.trim());
        genres?.forEach((genre) => {
            if (!acc[genre]) {
                acc[genre] = [];
            }
            acc[genre].push(movie);
        });
        return acc;
    }, {});    
    return Object.entries(genres).map(([genre, movies]) => ({Title: genre, movies}));
}