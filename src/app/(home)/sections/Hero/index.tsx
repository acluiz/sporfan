import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

import styles from "./styles.module.scss";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container customClass={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            SPOR
            <wbr />
            <span>FAN</span>
          </h1>
          <p className={styles.subtitle}>
            Respire <span>esportes</span>, <br />
            viva cada <span>partida</span>.
          </p>
        </div>

        <Button tagName="a" href="#" customClass={styles.cta}>
          próximas partidas
        </Button>
      </Container>
    </section>
  );
};
