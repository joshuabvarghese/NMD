import { FC } from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";

import styles from "./Layout.module.css";

const Layout: FC<{}> = ({ children }) => (
  <div className={styles.layout}>
    <Navbar>Hi</Navbar>
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
