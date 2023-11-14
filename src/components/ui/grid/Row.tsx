import { PropsWithChildren, FC } from "react";

const Row: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default Row;
