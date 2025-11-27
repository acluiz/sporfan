import { Container } from "@/components/Container";

import { Banner } from "@/components/Banner";
import { Match } from "./components/Match";

import styles from "./styles.module.scss";

export const Matches = () => {
  return (
    <section id="proximas-partidas" className={styles.matches}>
      <Banner text="Próximas partidas" />

      <Container customClass={styles.container}>
        <div className={styles.list}>
          <Match />
          <Match />
          <Match />
        </div>
      </Container>
    </section>
  );
};
