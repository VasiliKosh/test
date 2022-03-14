import React from "react";
import Select from "./components/Select";
import Graph from "./components/Graph";

function App() {
  return (
    <div className="wrapper">
      <div className="Select">
        <Select />
      </div>
      <div className="Graph">
        <Graph />
      </div>
      </div>
  );
}

export default App;
