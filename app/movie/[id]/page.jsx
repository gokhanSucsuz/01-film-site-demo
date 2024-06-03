import React from 'react'
import MovieContainer from '@/containers/movie'
import { notFound } from 'next/navigation'
import { getMovie } from "@/services/movie"

const MoviePage = async ({ params, searchParams }) => {

    const res = await getMovie(params.id)

    const movieDetail = res
    if (!movieDetail) {
        notFound();
    }

    // if (searchParams.error === "true") {
    //     throw new Error("Error happened!")   this code is for frontend now backend is active and it is not neccessary 
    // }
    return (
        <MovieContainer movie={movieDetail} />
    )
}

export default MoviePage