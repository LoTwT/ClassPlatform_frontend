import React from "react";
import Login from "./components/login";
import Header from "./components/header/header"
import { CategoryData } from "./models/category";

interface Props {
  categories: CategoryData[]
}

function App(props: Props) {
  return (
    <>
      <Header categories={props.categories} />
      {/* <Login /> */}
    </>
  );
}

export default App;
