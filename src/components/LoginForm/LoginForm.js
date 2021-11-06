import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();

  const reset = () => {
    setUser({ email: "", password: "" });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    dispatch(login(user));
    reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <label>
        <p>Login</p>
        <input
          name="email"
          type="text"
          value={user.email}
          onChange={handleChange}
          className={s.input}
        />
      </label>

      <label>
        <p>Password</p>
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
