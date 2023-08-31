import cx from "clsx";
import { FC } from "react";

import styles from "./Container.module.css";

interface ContainerProps {
  className?: string | undefined;
}

const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={cx(styles.container, className)}>{children}</div>
);

export default Container;
