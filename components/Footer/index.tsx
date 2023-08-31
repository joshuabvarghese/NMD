import Container from "../Container";

import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.flex}>
        <div className={styles.left}>
          Created for CPSC 454.
        </div>
        <div className={styles.right}>
          {process.env.CONFIG_BUILD_ID}
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
