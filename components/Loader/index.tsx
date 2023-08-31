import { FC } from "react";

import styles from "./Loader.module.css";

export interface LoaderProps {
  loading: boolean;
}

const Loader: FC<LoaderProps> = ({children, loading}) => {
  if (loading) {
    return (
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return <>{children}</>;
}

export default Loader;
