import React from "react";
import ReactDOM from "react-dom/client";
import { Table } from "./components/Table";
import "./style.css";
// import mock from "./mock/employee.json";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      {/* <Table data={mock} /> */}
      <Table />
    </>
  </React.StrictMode>
);
export { Table } from "./components/Table";
