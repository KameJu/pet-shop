import { PropsWithChildren, FC } from "react";
import styles from './Row.module.css'

const Row: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default Row;
