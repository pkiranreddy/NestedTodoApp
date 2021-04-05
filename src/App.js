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

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(rest, Component);
  let isAuthenticated =
    JSON.parse(localStorage.getItem("authenticate")) || false;

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const PublicRoute = ({ component: Component, ...rest }) => {
  let isAuthenticated =
    JSON.parse(localStorage.getItem("authenticate")) || false;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Redirect to="/todo" /> : <Component {...props} />
      }
    />
  );
};

const App = () => {
  return (
    <ToDoProvider className="p-0 m-0 w-100 h-100">
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={Login} />
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/todo" component={Todo} />
          <PrivateRoute exact path="/todo/create" component={Todo} />
          <PrivateRoute exact path="/todo/edit/:id" component={Todo} />
          <PrivateRoute exact path="/todo/analysis" component={Todo} />
        </Switch>
      </Router>
    </ToDoProvider>
  );
};

export default App;
