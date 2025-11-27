import { Icon } from "../Icon";

import styles from "./styles.module.scss";

export const IconText = ({
  icon,
  text,
  customClass = "",
}: {
  icon: string;
  text: string;
  customClass?: string;
}) => {
  return (
    <div className={`${styles.iconText} ${customClass}`}>
      <Icon name={icon} color="primary" size="small" />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
