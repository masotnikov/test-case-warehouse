import React, { JSX } from "react";
import "@/app/styles/index.scss";
import { Table } from "@/app/components/Table/Table";

const App = (): JSX.Element => {

  return (
    <div className="app">
      <Table/>
    </div>
  );
};

export default App;