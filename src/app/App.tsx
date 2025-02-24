import React, { JSX } from "react";
import "@/app/styles/index.scss";
import { Table } from "@/app/components/Table/Table";
import { Header } from "@/app/components/Header/Header";

const App = (): JSX.Element => {

  return (
    <div className="app">
      <Header/>
      <Table/>
    </div>
  );
};

export default App;