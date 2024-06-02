import React from 'react'

import styles from "./styles.module.css"
import Loading from '../loading'


const FeaturedLoading = () => {
    return (
        <div style={{ height: 278 }} className={styles.movieWrapper}>
            <Loading />
        </div>
    )
}

export default FeaturedLoading