import React from 'react'
import Image from 'next/image';
import styles from './Logo.module.css';
import LogoSvg from '../../../public/img/logo-svg.svg'


const Logo = () => {
  return (
    <>
       <div className={styles.logo}><Image src={LogoSvg} alt="Sys Fashion" /><span>Sys Fashion</span></div>
    </>
  )
}

export default Logo
