import React from "react";
import { store } from "../action-creator";
import { Provider } from "react-redux";
import { AddBlock } from "./Add-block";
import { SirchInput } from "./Sirch-panel";
import { List } from "./List";

export function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className="main-block">
          <h1>ToDo List</h1>
          <SirchInput />
          <List />
          <AddBlock />
        </div>
      </Provider>
    </React.StrictMode>
  );
}
