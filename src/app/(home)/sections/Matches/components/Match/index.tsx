import Image from "next/image";

import { IconText } from "@/components/IconText";

import styles from "./styles.module.scss";
import { League } from "@/components/League";

export const Match = () => {
  return (
    <div className={styles.match}>
      <div className={styles.row}>
        <League name="Premier League" img="/images/25.png" />

        <IconText icon="clock" text="21:00" customClass={styles.dateTime} />
      </div>

      <dl className={styles.score}>
        <div className={styles.row}>
          <dt className={styles.team}>Real Madrid</dt>
          <dd>3</dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.team}>Barcelona</dt>
          <dd>2</dd>
        </div>
      </dl>

      <IconText icon="map-pin" text="Rio de Janeiro, Brasil" />
    </div>
  );
};
