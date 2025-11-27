import Image from "next/image";

import styles from "./styles.module.scss";

export const League = ({ name, img }: { name: string; img: string }) => {
  return (
    <div className={styles.league}>
      <Image
        src={img}
        alt={name}
        width={24}
        height={24}
        className={styles.img}
      />

      <p className={styles.name}>{name}</p>
    </div>
  );
};
