import styles from "./styles.module.scss";

export const Banner = ({ text }: { text: string }) => {
  return (
    <div className={styles.banner}>
      <h2 className={styles.title}>{text}</h2>
    </div>
  );
};
