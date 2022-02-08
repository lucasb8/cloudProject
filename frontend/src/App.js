import "./App.css";

import React from "react";

import { FilterableContactTable } from "./components/FilterableContactTable";

var CONTACTS = [
  {
    key: 1,
    fName: "Tom",
    lName: "Jackson",
    email: "tom@gmail.com",
  },
  {
    key: 2,
    fName: "Mike",
    lName: "James",
    email: "mikejames@gmail.com",
  },
  {
    key: 3,
    fName: "Janet",
    lName: "Larson",
    email: "janetlarson@gmail.com",
  },
  {
    key: 4,
    fName: "Clark",
    lName: "Thompson",
    email: "clark123@gmail.com",
  },
  {
    key: 5,
    fName: "Emma",
    lName: "Page",
    email: "emma1page@gmail.com",
  },
];

function App() {
  return <FilterableContactTable contacts={CONTACTS} />;
}

export default App;
