import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Login } from "./components/login/login";
import { Todo } from "./components/todo/todo";
import { ToDoProvider } from "./components/todoState";

function App() {
  return (
    <ToDoProvider className="p-0 m-0 w-100 h-100">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route path="/login" component={Login} />
          <Route path="/todo" component={Todo} />
        </Switch>
      </Router>
    </ToDoProvider>
  );
}

export default App;
