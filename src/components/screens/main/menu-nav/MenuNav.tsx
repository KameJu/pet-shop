import { FC } from "react";
import { useNavigate } from "react-router-dom";

const MenuNav: FC = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="flex flex-col ml-14 mt-[20%]">
        <span className="text-3xl font-bold">RIDE WITH US</span>
        <span className="max-w-[360px] mt-10 text-xl">
          Buy bicycles and accessories at Velocity stores, and also join the
          Veloclub for a ride and good rest in the company of good people.
        </span>
        <div className="mt-8 flex gap-10">
          <button onClick={() => nav("/catalog")} className="btn-gray">
            TO CATALOG
          </button>
          <button onClick={() => nav("/about-us")} className="btn-yellow">
            JOIN THE CLUB
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuNav;
