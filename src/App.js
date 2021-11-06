import React, { Suspense, lazy, useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AppBar from "./components/AppBar";
import Loader from "./components/Loader";
import { getCurrentUser } from "./redux/auth/auth-operations";
import { isAuth } from "./redux/auth/auth-selectors";

const RegisterView = lazy(() =>
  import("./views/RegisterView" /* webpackChunkName: "register-views" */)
);
const LoginView = lazy(() =>
  import("./views/LoginView" /* webpackChunkName: "login-views" */)
);
const ContactsView = lazy(() =>
  import("./views/ContactsView" /* webpackChunkName: "contacts-views" */)
);

function App() {
  const dispatch = useDispatch();
  const isAuthUser = useSelector(isAuth);
  useEffect(() => {
    isAuthUser && dispatch(getCurrentUser());
  }, [dispatch, isAuthUser]);

  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsView}
          />
          <PublicRoute
            restricted
            path="/login"
            redirectTo="/contacts"
            component={LoginView}
          />
          <PublicRoute
            redirectTo="/contacts"
            restricted
            path="/register"
            exact
            component={RegisterView}
          />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
