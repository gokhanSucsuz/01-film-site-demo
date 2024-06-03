import React from 'react'
import MovieContainer from '@/containers/movie'
import { notFound } from 'next/navigation'

const API_URL = "https://api.themoviedb.org/3/"

const getMovie = async (movieId) => {
    const res = await fetch(`${API_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`)
    return res.json();
}

const MoviePage = async ({ params, searchParams }) => {

    const res = await getMovie(params.id)


    const movieDetail = res
    if (!movieDetail) {
        notFound();
    }

    if (searchParams.error === "true") {
        throw new Error("Error happened!")
    }
    return (
        <MovieContainer movie={movieDetail} />
    )
}

export default MoviePage