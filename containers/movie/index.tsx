import React from "react";

import { FeaturedMovie } from "@/components";

import { IMovie } from "./IMovie";

export const MovieContainer: React.FC<IMovie.Props> = ({ movie }) => {
    return <FeaturedMovie movie={movie} isCompact={false} />;
};
