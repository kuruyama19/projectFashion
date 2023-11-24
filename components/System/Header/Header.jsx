import React from 'react'
import Logo from '../Logo/Logo'
import styles from './Header.module.css'
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.menu}>
           <Link href='/'><Logo/></Link>
            <div className={styles.nameUser}><span>Entrar</span> </div>
        </div>
      </div>
    </header>
  )
}

export default Header
