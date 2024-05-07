import React from "react";
import NavBar from "./NavBar";
import Home,{username,city} from "./Home";
import About,{image} from "./About";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
