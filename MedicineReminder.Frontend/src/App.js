import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegisterForm from "./Components/FirstPage/RegisterForm/RegisterForm";
import LoginForm from "./Components/FirstPage/LoginForm/LoginForm";
import EventForm from "./Components/Events/EventsForm/EventsForm";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <main className="MainContent">
        <Switch>
          <Route path="/register" exact component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/events" component={EventForm} />
          <Route render={() => <h1>Error 404 - Trzeba coś tu zrobić =</h1>} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;