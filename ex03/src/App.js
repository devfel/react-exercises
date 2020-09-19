// First and main loaded component, the one that will start the others
import React from "react";
import NavBar from "./NavBar.js";
import MainContent from "./MainContent.js";

const App = () => {
  return (
    <>
      <NavBar />
      <MainContent />
    </>
  );
};
export default App;
