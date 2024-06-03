import HomeContainer from "@/containers";
import Movies from "@/mocks/movies.json"

const API_URL = "https://api.themoviedb.org/3/"


const getCategories = async () => {
    const res = await fetch(`${API_URL}/genre/movie/list?api_key=${process.env.API_KEY}&page=1`)
    return res.json();

}

const getSingleCategory = async (genreId) => {
    const res = await fetch(`${API_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`)
    return res.json();

}

const getTopRatedMovies = async () => {
    const res = await fetch(`${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`)
    return res.json();

}

const getPopularMovies = async () => {
    const res = await fetch(`${API_URL}/movie/popular?api_key=${process.env.API_KEY}&page=1`)
    return res.json();

}

export default async function Home({ params }) {
    let selectedCategory;

    const topRatedPromise = getTopRatedMovies();
    const popularPromise = getPopularMovies();
    const categoriesPromise = getCategories();


    const [{ results: topRatedMovies }, { results: popularMovies }, { genres: categories },] = await Promise.all([topRatedPromise, popularPromise, categoriesPromise])


    if (params?.category?.length > 0) {
        const { results } = await getSingleCategory(params.category[0])
        selectedCategory = results;
    }

    console.log(popularMovies)

    return (
        <>
            <HomeContainer
                topRatedMovies={topRatedMovies}
                popularMovies={popularMovies}
                categories={categories}
                selectedCategory={{
                    id: params.category?.[0] ?? "",
                    movies: selectedCategory ? selectedCategory.slice(0, 7) : []
                }} />
        </>
    );
}
