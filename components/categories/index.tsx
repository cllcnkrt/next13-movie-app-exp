import Link from "next/link";
import React from "react";
import { ICategories } from "./ICategories";
import styles from "./styles.module.css";

export const Categories: React.FC<ICategories.Categories> = ({ categories }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category: ICategories.Category) => (
        <Link key={category.id} className={styles.category} href={`/${category.id}`}>
          <div className={styles.name}>{category.name}</div>
        </Link>
      ))}
    </div>
  );
};
