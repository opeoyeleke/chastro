import React, { FC, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { connect } from "react-redux";

import "./App.css";
import Landing from "components/Landing/Landing";
import Login from "components/Login/Login";
import Register from "components/Register/Register";
import Dashboard from "components/Dashboard";
import { setCurrentUser } from "redux/user/user.actions";
import { CurrentUser } from "redux/user/user.types";

interface AppProps {
  setCurrentUser: Function;
}

const App: FC<AppProps> = (props) => {
  const { setCurrentUser } = props;

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {});
        userRef?.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  });

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: CurrentUser) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
