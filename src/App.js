import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./comps/Gallery";
import Login from "./comps/Login";
import PrivateRoute from "./comps/PrivateRoute";
import Title from "./comps/Title";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className='App'>
          <Title />
          <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute exact path='/gallery' component={Gallery} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
