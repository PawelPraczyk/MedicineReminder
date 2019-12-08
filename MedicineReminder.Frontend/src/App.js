import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegisterForm from "./Components/FirstPage/RegisterForm/RegisterForm";
import LoginForm from "./Components/FirstPage/LoginForm/LoginForm";
import EventForm from "./Components/Events/EventsForm/EventsForm";
import EventsList from "./Components/Events/EventsList/EventsList"
import WelcomePage from "./Components/WelcomePage/WelcomePage";
import EditEvent from "./Components/Events/EventsEdit/EventsEdit";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <main className="MainContent">
        <Switch>
          <Route path="/" exact component={WelcomePage} />
          <Route path="/register" exact component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/events" component={EventsList} />
          <Route path='/add-event' component={EventForm} />
          <Route path='/medicines' component={EditEvent} />
          <Route render={() => <h1 className="ml-3 mt-5">Error 404 - nie można odnaleźć strony o podanym adresie. </h1>} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;