import React from "react";
import NavigationInside from "../../../../../components/System/Dashboard/NavAside/NavigationInside/NavigationInside";
import styles from "./page.module.css";
import Shirts from "../../../../../components/Shirts/Shirts";

const page = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.page}>
          <NavigationInside />
          <Shirts/>
        </div>
      </div>
    </div>
  );
};

export default page;
