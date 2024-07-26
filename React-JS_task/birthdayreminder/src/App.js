import List from "./Components/List/List";
import Data from "./Components/Data/Data";

import { useState } from "react";


function App() {

  const [count, setCount] = useState(Data.length);

  const clearAll = () => setCount(0);
  const showAll = () => setCount(Data.length);

  const btnClass = count ? "btn-danger" : "btn-success";
  const btnTxt = count ? "Clear All" : "Show All";
  const btnAction = count ? clearAll : showAll;

  return (
    <div className="App">
      <div className="container mx-auto my-5 w-[25%] border py-4 px-5 bg-light shadow rounded-3">
        <h2 className="text-xl font-semibold">{count} Birthdays Today</h2>
        <hr />
        {Boolean(count) &&
          Data.map((item) => {
            return <List key={item.id} {...item} />;
          })}
        <button className={`btn w-100 fw-bold ${btnClass}`} onClick={btnAction}>
          {btnTxt}
        </button>
      </div>
    </div>
  );
}

export default App;
