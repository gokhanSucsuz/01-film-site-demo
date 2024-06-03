const API_URL = "https://api.themoviedb.org/3/";

const fetchMovieApi = async (pathname, query = "") => {
	try {
		const res = await fetch(
			`${API_URL}${pathname}?api_key=${process.env.API_KEY}&${query}`
		);
		return res.json();
	} catch (error) {
		throw new Error(error);
	}
};

const getSingleCategory = async (genreId) => {
	return await fetchMovieApi("/discover/movie", `with_genres=${genreId}`);
};

const getCategories = async () => {
	return await fetchMovieApi("/genre/movie/list");
};

const getTopRatedMovies = async () => {
	return await fetchMovieApi("/movie/top_rated");
};

const getPopularMovies = async () => {
	return await fetchMovieApi("/movie/popular");
};

const getMovie = async (movieId) => {
	return await fetchMovieApi(`/movie/${movieId}`);
};

export {
	fetchMovieApi,
	getSingleCategory,
	getCategories,
	getTopRatedMovies,
	getPopularMovies,
	getMovie,
};
