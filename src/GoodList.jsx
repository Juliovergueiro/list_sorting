import "./GoodList.scss";

import { GoodCard } from "./GoodCard";

export const GoodList = ({ goods }) => (
  <div className="GoodList">
    {goods.map((good) => (
      <GoodCard good={good} key={good.id} />
    ))}
  </div>
);
