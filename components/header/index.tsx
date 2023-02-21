import Link from "next/link";
import React from "react";

import { FaPlayCircle } from "react-icons/fa";
import styles from "./styles.module.css";

export const Header: React.FC = () => {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link className={styles.logo} href="/">
          <FaPlayCircle /> MOVIE APP
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="#">MOVIES</Link>
          <Link href="#">SERIES</Link>
          <Link href="#">KIDS</Link>
        </nav>
      </div>
    </header>
  );
};
