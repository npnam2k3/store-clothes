import React from "react";
import classNames from "classnames";
import styles from "../style.module.scss";

const SelectBox = ({ options, getValue, type }) => {
  const { boxSelect, show, sort } = styles;
  return (
    <select
      onChange={(e) => getValue(e.target.value, type)}
      className={classNames(boxSelect, sort)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
