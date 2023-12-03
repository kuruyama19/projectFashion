import React from "react";
import styles from "./LinkHeader.module.css";
import Link from "next/link";
import Image from "next/image";



const LinkHeader = ({ path, icon, alt }) => {
  return (
    <li className={styles.LinkHeader}>
      <Link href={path}>
        <Image src={icon} alt={alt}></Image>
      </Link>
    </li>
  );
};

export default LinkHeader;
