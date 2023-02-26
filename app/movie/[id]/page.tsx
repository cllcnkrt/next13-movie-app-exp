import React from "react";
import { notFound } from "next/navigation";

import { FeaturedMovie } from "@/components";
import Movies from "@/mocks/movies.json";
import { MovieService } from "@/services";

type Props = {
    params: {
        id: string;
    };
};

const MoviePage = async ({ params: { id } }: Props) => {
    const movieDetail = await MovieService.getMovieById(id);
    if (!movieDetail) {
        notFound();
    }

    return <>{<FeaturedMovie movie={movieDetail} isCompact={false} />}</>;
};

export default MoviePage;
