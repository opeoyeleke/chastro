import React, { FC, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";

import "./App.css";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

type FirebaseUserState = firebase.User | null;

const App: FC = () => {
  let [currentUser, setUser] = useState<FirebaseUserState>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
};

export default App;
