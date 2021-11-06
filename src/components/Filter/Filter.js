import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "../../redux/phonebook/phonebook-actions";
import { getPhonebookFilter } from "../../redux/phonebook/phonebook-selectors";
import st from "./Filter.module.css";

const Filter = () => {
  const valueFilter = useSelector(getPhonebookFilter);
  const dispatch = useDispatch();

  return (
    <label className={st.label}>
      Find contact by name
      <input
        type="text"
        className={st.input}
        value={valueFilter}
        onChange={(e) => dispatch(filterContacts(e.target.value))}
      />
    </label>
  );
};

export default Filter;
