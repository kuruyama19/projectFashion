import React from "react";
import NavigationInside from "../../../../../components/System/Dashboard/NavAside/NavigationInside/NavigationInside";
import styles from "./page.module.css";
import Categories from "../../../../../components/Shirts/Categories";

const page = () => {
  return (
    <div>
      <div className="container">
        <div className={styles.page}>
          <NavigationInside />
          <Categories/>
        </div>
      </div>
    </div>
  );
};

export default page;
