
import Link from "next/link"
import styles from "./styles.module.css"
import Image from "next/image"

function MoviesSection({ title, movies }) {
    return (
        <div className={styles.moviesSection}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.movies}>
                {
                    movies.map((movie) =>
                        <div className={styles.movie} key={movie.id}>
                            <Link href={`/movie/${movie.id}`}>
                                <div>
                                    <Image
                                        priority
                                        unoptimized
                                        fill
                                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                </div>
                            </Link>
                        </div>

                    )}
            </div>
        </div>
    )
}
export default MoviesSection