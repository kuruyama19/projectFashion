import React from "react";
import Title from "../../../../components/System/Title/Title";
import ImgLeft from "../../../../public/img/img-Left-login.svg";
import Image from "next/image";
import styles from "./page.module.css";
import Login from "../../../../components/Login/Login";
const page = () => {
  return (
    <div className="container">
      <div className={styles.login}>
        <Image src={ImgLeft} title="Fashion" alt="Fashion"  className={`${styles.img} `}/>
        <Login/>
      </div>
    </div>
  );
};

export default page;
