import React from 'react'
import Skeleton from '../skeleton'
import styles from "./styles.module.css"

const CategoriesLoading = () => {
    return (
        <div className={styles.categories}>
            {
                Array(5).fill(null).map((_, index) =>
                    <Skeleton key={index} height={72} />
                )
            }
        </div>
    )
}

export default CategoriesLoading