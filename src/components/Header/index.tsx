import { Container } from "../Container";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container customClass={styles.container}>
        <p className={styles.logo}>
          SPOR<span>FAN</span>
        </p>

        <nav>
          <ul className={styles.navigation}>
            <li>
              <a href="#" className={styles.link}>
                Partidas de hoje
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Ligas
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
