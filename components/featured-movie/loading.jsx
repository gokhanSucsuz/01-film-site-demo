import React from 'react'
import Loading from "@components/loading"
import styles from "./styles.module.css"

const FeaturedLoading = () => {
    return (
        <div style={{ height: 278 }} className={styles.movieWrapper}>
            <Loading />
        </div>
    )
}

export default FeaturedLoading