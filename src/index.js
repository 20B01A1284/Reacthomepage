import React from "react";
import ReactDOM from "react-dom";
import { Nav, Intro, Features} from "./Reactpage";

const App = () => {
  return (
    <div>
      <Nav />
      <Intro />
      <Features />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
