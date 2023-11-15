import { FC } from "react";
import Row from "../../ui/grid/Row";
import Column from "../../ui/grid/Column";
import logo from "../../../assets/images/logo.svg";

const Nav: FC = () => {
  return (
    <Row className=" text-[#FDE047] p-4">
      <Column size={2}>
        <div className="flex flex-row items-center gap-1 text-3xl ml-10">
          <img src={logo} height={35} width={35} alt="logo" />
          <span>Velocity</span>
        </div>
      </Column>
      <Column className="flex flex-row justify-center gap-5" size={8}>
        <div className="btn select">Main</div>
        <div className="btn">Catalog</div>
        <div className="btn">Accessories</div>
        <div className="btn">Veloclub</div>
        <div className="btn">About us</div>
      </Column>
    </Row>
  );
};

export default Nav;
