import React from 'react'
import CategoriesLoading from '@/components/categories/loading'
import FeaturedLoading from '@/components/featured-movie/FeaturedLoading'

const Loading = () => {
    return (
        <>
            <FeaturedLoading />
            <CategoriesLoading />
        </>
    )
}

export default Loading