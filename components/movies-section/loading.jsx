import React from 'react';
import Skeleton from '@/components/skeleton';
import styles from './styles.module.css';

const MoviesSectionLoading = () => {
    return (
        <div className={styles.moviesSection}>
            <Skeleton width={128} height={36} />
            <div className={styles.movies}>
                {
                    Array.from({ length: 5 }).map((_, index) => (
                        <Skeleton key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default MoviesSectionLoading;
