import { FC } from "react";
import styles from "./App.module.scss";
import Nav from "../nav/Nav";
import bacground from "../../../assets/images/background_image.jpg";
import Main from "../main/Main";

const App: FC = () => {
  return (
    <div className={styles.main}>
      <Nav></Nav>
      <Main></Main>
    </div>
  );
};

export default App;
