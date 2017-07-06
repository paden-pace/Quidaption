// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Including our Panel and Container components
//import TournamentAllPanel from "./components/TournamentAllPanel";
//import TournamentContainer from "./tournament/TournamentContainer";
import AllContainer from "./components/AllContainer";
console.log("new app.js")

// Creating an App component which renders a Panel inside of a Container
const App = () => (
  <AllContainer />
);

ReactDOM.render(<App />, document.getElementById("app"));
