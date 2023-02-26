const API_URL = "https://api.themoviedb.org/3";

export const MovieService = {
    getTopRatedMovies: async () => {
        try {
            const res = await fetch(`${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`);
            return res.json();
        } catch (err) {
            console.log(err);
        }
    },
    getPopularMovies: async () => {
        try {
            const res = await fetch(`${API_URL}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
            return res.json();
        } catch (err) {
            console.log(err);
        }
    },

    getCategories: async () => {
        try {
            const res = await fetch(`${API_URL}/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US&page=1`);
            return res.json();
        } catch (err) {
            console.log(err);
        }
    },
    getMovieById: async (id: string) => {
        try {
            const res = await fetch(`${API_URL}/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`);
            return res.json();
        } catch (err) {
            console.log(err);
        }
    },
};
