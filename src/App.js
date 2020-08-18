import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import "./App.css";
import Resources from "./pages/Resources";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app__header">Resources</header>

        <Switch>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/others"></Route>
        </Switch>
        <footer>
          <Link to="/resources">Resources</Link>
          <Link to="/others">Others</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
