import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";
import { IMoviesSection } from "./IMoviesSection";

export const MoviesSection: React.FC<IMoviesSection.Props> = ({ title, movies }) => {
  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies.map((movie: IMoviesSection.Movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
