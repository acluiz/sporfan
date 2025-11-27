import { FILTERS } from "./constants";

import styles from "./styles.module.scss";

export const Filters = ({
  onClick = () => {},
}: {
  onClick: (id: string) => void;
}) => {
  return (
    <div className={styles.filters}>
      {FILTERS.map(({ id, label }) => (
        <button
          key={`filter-${id}`}
          className={styles.filter}
          onClick={() => onClick(id)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
