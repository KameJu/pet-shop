import { PropsWithChildren, FC } from "react";
import styles from "./Column.module.css";

interface IColumn {
  size: number;
}

const Column: FC<PropsWithChildren<IColumn>> = ({ children, size }) => {
  return (
    <div
      className={styles.column}
      style={{ gridColumn: `span ${size} / span ${size}` }}
    >
      {children}
    </div>
  );
};

export default Column;
