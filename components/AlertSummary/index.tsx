import { FC } from "react";
import NextLink from "next/link";

import styles from "./AlertSummary.module.css";

interface AlertSummaryProps {
  id: string;
  name: string;
  description: string;
}

const AlertSummary: FC<AlertSummaryProps> = ({ id, name, description }) => (
  <NextLink href={`/alerts/${id}`}>
    <article className={styles.alert}>
      <div className={styles.content}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.arrow}>
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
        </svg>
      </div>
    </article>
  </NextLink>
);

export default AlertSummary;
