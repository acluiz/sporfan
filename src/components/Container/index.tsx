import { ReactNode } from "react";

import styles from "./styles.module.scss";

export const Container = ({
  children,
  customClass,
}: {
  children: ReactNode;
  customClass: string;
}) => {
  return <div className={`${styles.container} ${customClass}`}>{children}</div>;
};
