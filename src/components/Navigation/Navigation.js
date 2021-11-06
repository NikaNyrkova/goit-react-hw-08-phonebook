import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isAuth, getUserName } from "../../redux/auth/auth-selectors";
import { logout } from "../../redux/auth/auth-operations";

import routes from "../../routes";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isAuthUser = useSelector(isAuth);
  const nameUser = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <nav className={s.navigation}>
      <div>
        {isAuthUser && (
          <NavLink
            to={routes.contacts}
            className={s.nav_link}
            activeClassName={s.active}
          >
            Contacts
          </NavLink>
        )}
      </div>

      {isAuthUser ? (
        <div className={s.logout}>
          <p>Hello, {nameUser}</p>
          <button onClick={() => dispatch(logout())}>Log out</button>
        </div>
      ) : (
        <div>
          <NavLink
            to={routes.register}
            className={s.nav_link}
            activeClassName={s.active}
          >
            Register
          </NavLink>
          <NavLink
            to={routes.login}
            className={s.nav_link}
            activeClassName={s.active}
          >
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
