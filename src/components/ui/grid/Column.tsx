import { PropsWithChildren, FC } from "react";

interface IColumn {
  size: number;
}

const Column: FC<PropsWithChildren<IColumn>> = ({ children, size }) => {
  return (
    <div style={{ gridColumn: `span ${size} / span ${size}` }}>{children}</div>
  );
};

export default Column;
