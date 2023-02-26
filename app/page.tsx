import { Categories, FeaturedMovie, MoviesSection } from "@/components";
import { MovieService } from "@/services";

const Home = async () => {
    const { getTopRatedMovies, getPopularMovies, getCategories } = MovieService;

    const [{ results: topRatedMovies }, { results: popularMovies }, { genres: categories }] = await Promise.all([
        getTopRatedMovies(),
        getPopularMovies(),
        getCategories(),
    ]);
    return (
        <div>
            <FeaturedMovie movie={topRatedMovies[0]} isCompact />
            <Categories categories={categories.slice(0, 5)} />
            <MoviesSection title="Top rated Movies" movies={topRatedMovies.slice(0, 6)} />
            <MoviesSection title="Popular Movies" movies={popularMovies.slice(0, 6)} />
            <MoviesSection title="Your Favorites" movies={popularMovies.slice(7, 13)} />
        </div>
    );
};

export default Home;
