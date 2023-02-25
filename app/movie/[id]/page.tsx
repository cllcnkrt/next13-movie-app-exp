import React from "react";
import type { NextPage } from "next";
import { notFound } from "next/navigation";

import { MovieContainer } from "@/containers";
import Movies from "@/mocks/movies.json";

type Props = {
    params: {
        id: string;
    };
};

const MoviePage: NextPage<Props> = ({ params: { id } }) => {
    const movieDetail = Movies.results.find((movie) => movie.id.toString() === id.toString());

    if (!id) {
        notFound();
    }

    return <div>{movieDetail && <MovieContainer movie={movieDetail} />}</div>;
};

export default MoviePage;
