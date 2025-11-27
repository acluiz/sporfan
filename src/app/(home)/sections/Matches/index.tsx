"use client";

import { Container } from "@/components/Container";

import { Banner } from "@/components/Banner";
import { Filters } from "./components/Filters";
import { Match } from "./components/Match";

import styles from "./styles.module.scss";

export const Matches = () => {
  return (
    <section id="proximas-partidas" className={styles.matches}>
      <Banner text="Partidas de hoje" />

      <Container customClass={styles.container}>
        <Filters onClick={() => {}} />

        <div className={styles.list}>
          <Match />
          <Match />
          <Match />
        </div>
      </Container>
    </section>
  );
};
