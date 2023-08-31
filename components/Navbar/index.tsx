import { FC } from "react";
import Link from "next/link";

import styles from "./Navbar.module.css";

import Container from "../Container";

const Navbar: FC<{}> = ({ children }) => (
  <header className={styles.navbar}>
    <Container className={styles.navbarContainer}>
      <div className={styles.navbarBrand}><Link href="/">Monitoring Dashboard</Link></div>
    </Container>
  </header>
);

export default Navbar;
