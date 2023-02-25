import React from "react";

import { Categories, FeaturedMovie, MoviesSection } from "@/components";
import Genres from "@/mocks/genres.json";
import Movies from "@/mocks/movies.json";

export const HomeContainer: React.FC = () => {
    return (
        <div>
            <FeaturedMovie movie={Movies.results[0]} isCompact />
            <Categories categories={Genres.genres.slice(0, 5)} />
            <MoviesSection title="Popular Films" movies={Movies.results.slice(1, 7)} />
        </div>
    );
};
