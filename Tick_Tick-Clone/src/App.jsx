import React from "react";
import Nav from "./components/nav/Nav";
import DropMenu from "./components/dropmenu/DropMenu";

const App = () => {
  return (
    <div className="flex">
      <Nav />
      <DropMenu />
    </div>
  );
};

export default App;
