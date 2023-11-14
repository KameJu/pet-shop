import { FC } from "react";
import Row from "../../ui/grid/Row";
import Column from "../../ui/grid/Column";

const Nav: FC = () => {
  return (
    <Row>
      <Column size={2}>
        <div>1</div>
      </Column>
      <Column size={2}>
        <div>2</div>
      </Column>
      <Column size={2}>
        <div>3</div>
      </Column>
    </Row>
  );
};

export default Nav;
