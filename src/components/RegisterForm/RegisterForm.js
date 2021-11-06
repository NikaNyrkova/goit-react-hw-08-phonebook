import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/auth-operations";
import s from "./RegisterForm.module.css";

const RegisterForm = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();

  const reset = () => {
    setUser({ name: "", email: "", password: "" });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    dispatch(register(user));
    reset();
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label>
        <p>Name</p>
        <input
          name="name"
          type="text"
          value={user.name}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <label>
        <p>E-mail</p>
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

export default RegisterForm;
