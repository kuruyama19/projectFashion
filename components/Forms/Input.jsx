import React from "react";
import styles from "./Input.module.css";

const Input = ({ label, type , register,...props}) => {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <input type={type} {...register} {...props} />
    </div>
  );
};

export default Input;
