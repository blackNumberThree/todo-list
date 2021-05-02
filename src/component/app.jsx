import React, { useState } from "react";
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import { AddBlock } from "./Add-block";
import { SirchInput } from "./Sirch-panel";

export const store = createStore(reducer);

export function App() {
  let [currentStore, setCurrentStore] = useState(store.getState().caseMassive);
  store.subscribe(() => {
    setCurrentStore(store.getState().caseMassive);
  });

  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className="main-block">
          <h1>ToDo List</h1>
          <SirchInput caseMassive={currentStore} />
          <AddBlock />
        </div>
      </Provider>
    </React.StrictMode>
  );
}
