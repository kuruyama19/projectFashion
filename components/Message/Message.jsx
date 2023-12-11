import React from 'react'
import styles from './Message.module.css'

const Message = ({message}) => {
  return (
    <div className={styles.message}>
      <p>{message.mensagem}</p>
    </div>
  )
}

export default Message
