import React from 'react'
import styles from './Error.module.css';
const Error = ({error}) => {
  return (
    <>
        <span className={styles.error}>*{error}</span>
    </>
  )
}

export default Error
