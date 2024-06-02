import FeaturedMovie from '@/components/featured-movie'
import React from 'react'

const MovieContainer = ({ movie }) => {
    return (
        <div>
            <FeaturedMovie movie={movie} isCompact={false} />
        </div>
    )
}

export default MovieContainer