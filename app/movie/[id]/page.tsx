import React from "react";
import type { NextPage } from "next";
import { notFound } from "next/navigation";

import { MovieContainer } from "@/containers";

type Props = {
    params: {
        id: string;
    };
};

const MoviePage: NextPage<Props> = ({ params: { id } }) => {
    if (!id) {
        notFound();
    }

    return (
        <div>
            <MovieContainer />
        </div>
    );
};

export default MoviePage;
