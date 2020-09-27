import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Switch, Route } from "react-router-dom";
import ContactList from "./Container/ContactList";
import ContactDetails from "./Container/ContactDetails";
import FavoriteContact from "./Container/FavouriteContact";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path="/contact/:id" component={ContactDetails} />
        <Route exact path="/favourite" component={FavoriteContact} />
      </Switch>
    </div>
  );
}

export default App;
