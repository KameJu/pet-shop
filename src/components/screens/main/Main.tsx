import { FC } from "react";
import Row from "../../ui/grid/Row";
import Column from "../../ui/grid/Column";
import MenuBike from "./menu-bike/MenuBike";
import MenuNav from "./menu-nav/MenuNav";

const Main: FC = () => {
  return (
    <Row>
      <Column size={6} className="flex items-center">
        <MenuNav />
      </Column>
      <Column size={6} className="relative">
        <MenuBike />
      </Column>
    </Row>
  );
};

export default Main;
