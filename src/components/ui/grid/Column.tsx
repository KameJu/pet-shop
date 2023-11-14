import { PropsWithChildren, FC } from 'react';

const Column: FC<PropsWithChildren> = ({ children }) => {
    return <div>{children}</div>
};

export default Column;