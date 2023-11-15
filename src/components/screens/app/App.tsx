import { FC } from "react";
import styles from "./App.module.scss";
import Nav from "../nav/Nav";
import bacground from "../../../assets/images/background_image.jpg";

const App: FC = () => {
  return (
    <div
      className={styles.main}
    >
      {/* <img src={bacground} width={1600} height={1200} alt="test" /> */}
      <Nav></Nav>
      <div className="mb-2"></div>
    </div>
  );
};

export default App;
