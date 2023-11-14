import { PropsWithChildren, FC } from "react";
import styles from "./Row.module.scss";

const Row: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.row}>{children}</div>;
};

export default Row;
