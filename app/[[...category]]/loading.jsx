import React from 'react'
import CategoriesLoading from '@/components/categories/loading'
import FeaturedLoading from '@/components/featured-movie/loading'
import MoviesSectionLoading from '@/components/movies-section/loading'

const Loading = () => {
    return (
        <>
            <FeaturedLoading />
            <CategoriesLoading />
            <MoviesSectionLoading />
            <MoviesSectionLoading />
            <MoviesSectionLoading />

        </>
    )
}

export default Loading