import React from "react";

import { Categories, FeaturedMovie, MoviesSection } from "@/components";
import { MovieService } from "@/services";

export const HomeContainer = async () => {
    const { getTopRatedMovies, getPopularMovies, getCategories } = MovieService;
    const topRatedPromise = getTopRatedMovies();
    const popularPromise = getPopularMovies();
    const categoriesPromise = getCategories();

    const [{ results: topRatedMovies }, { results: popularMovies }, { genres: categories }] = await Promise.all([
        topRatedPromise,
        popularPromise,
        categoriesPromise,
    ]);

    return (
        <div>
            <FeaturedMovie movie={topRatedMovies[0]} isCompact />
            <Categories categories={categories.slice(0, 5)} />
            <MoviesSection title="Top rated Movies" movies={topRatedMovies.slice(0, 6)} />
            <MoviesSection title="Popular Movies" movies={popularMovies.slice(7, 13)} />
        </div>
    );
};
