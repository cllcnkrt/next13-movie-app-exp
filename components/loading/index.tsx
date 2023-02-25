import React from "react";

import styles from "./styles.module.css";

export const Loading: React.FC = () => {
    return (
        <div className={styles.loadingWrapper}>
            <div className={styles.loading}></div>
        </div>
    );
};
