import React from 'react'
import styles from './Login.module.css';
import Title from '../System/Title/Title';
import Input from '../Forms/Input';
import Button from '../Forms/Button';

const Login = () => {
  return (
    <section className='animeRight'>
      <Title>Login</Title>
      <Input label="Usuário" type="text"/>
      <Input label="Senha" type="password"/>
      <Button>Entrar</Button>
    </section>
  )
}

export default Login
