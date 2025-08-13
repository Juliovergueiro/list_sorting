import { useState } from "react";

import goodsFromServer from "./goods.json";
import { GoodList } from "./GoodList";

export const App = () => {
  const [visibleGoods, setVisibleGoods] = useState(goodsFromServer);

  const reset = () => {
    setVisibleGoods(goodsFromServer);
  };

  const sortById = () => {
    setVisibleGoods(
      // visibleGoods.sort((good1, good2) => good1.id - good2.id);
      // Not gonna work because this mutates in place and I did not give a new Array to setVisibleGoods

      [...visibleGoods].sort((good1, good2) => good1.id - good2.id)
      // ...visibleGoods destructure the Array to make a whole new one before we sort. It's a copy, so it's the same
    );
  };
  // We give two comparator items for the sort method. The first one needs to be smaller than the second item, and we sort the ID like this
  // The command won't go anywhere if we don't update the state

  const sortByName = () => {
    setVisibleGoods(
      [...visibleGoods].sort((good1, good2) => {
        const nameA = good1.name.toUpperCase();
        const nameB = good2.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      })
    );
  };

  return (
    <div className="App">
      <header>
        <button onClick={reset}>Reset</button>

        <div>
          Sort by:
          <button onClick={sortById} className="active">
            id
          </button>
          <button onClick={sortByName}>name</button>
        </div>
      </header>

      <GoodList goods={visibleGoods} />
    </div>
  );
};
