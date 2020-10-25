import React, { FC, useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";

import "./App.css";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard";

type FirebaseUserState = firebase.User | null;

const App: FC = () => {
  let [currentUser, setUser] = useState<FirebaseUserState>(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const user = await createUserProfileDocument(userAuth);
        user?.onSnapshot((snapshot) => {
          setUser(userAuth);
        });
      }
    });
  }, []);

  return (
    <div className="App">
      {console.log(currentUser)}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;
