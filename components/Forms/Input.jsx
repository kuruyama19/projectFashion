import React from 'react'
import styles from './Input.module.css';

const Input = ({label,type}) => {
  return (
    <div className={styles.inputGroup}>
        <label htmlFor="">{label}</label>
        <input type={type} />
    </div>
  )
}

export default Input
