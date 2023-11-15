import { FC } from "react";
import Row from "../../ui/grid/Row";
import Column from "../../ui/grid/Column";
import bike from "../../../assets/images/bike_3.png";

const Main: FC = () => {
  return (
    <Row>
      <Column size={6} className="flex items-center">
        <div className="flex flex-col ml-14 mt-[20%]">
          <span className="text-3xl font-bold">RIDE WITH US</span>
          <span className="max-w-[360px] mt-10 text-xl">
            Buy bicycles and accessories at Velocity stores, and also join the
            Veloclub for a ride and good rest in the company of good people.
          </span>
          <div className="mt-8 flex gap-10">
            <button className="btn-gray">TO CATALOG</button>
            <button className="btn-yellow">JOIN THE CLUB</button>
          </div>
        </div>
      </Column>
      <Column size={6} className="relative">
        <img src={bike} alt="bike" />
        <div className="text-yellow-300 absolute p-3 left-[3rem] top-[33.5rem]">
          <div>Model: S-Works Tarmac SL7-Dura Ace Di2</div>
          <div>Price: 2000$</div>
          <div>Type: highway</div>
        </div>
      </Column>
    </Row>
  );
};

export default Main;
