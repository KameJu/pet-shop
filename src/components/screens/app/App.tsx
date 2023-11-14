import { FC } from "react";
import styles from "./App.module.css";
import Nav from "../nav/Nav";

const App: FC = () => {
  return (
    <div className={styles.main}>
      <Nav></Nav>
    </div>
  );
};

export default App;
