import React from "react";
import LinkHeader from "../LinkHeader/LinkHeader";
import SvgSlides from "../../../../public/img/ProjectorScreen.svg";
import SvgShirts from "../../../../public/img/TShirt.svg";
import SvgChart from "../../../../public/img/ChartBar.svg";
import SvgConfig from "../../../../public/img/Gear.svg";
import SvgHome from "../../../../public/img/Home.svg";
import SvgExit from "../../../../public/img/SignOut.svg";
import styles from "./SubHeaderDashboard.module.css";

const SubHeaderDashboard = () => {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.menu}>
        <ul className={styles.menu_list}>
          <LinkHeader path="dashboard/slides" alt="Slides" icon={SvgSlides} />
          <LinkHeader path="dashboard/shirts" alt="Shirts" icon={SvgShirts} />
          <LinkHeader path="dashboard/chart" alt="Chart" icon={SvgChart} />
          <LinkHeader path="dashboard/settings" alt="Settings" icon={SvgConfig} />
          <LinkHeader path="/system/dashboard" alt="Home" icon={SvgHome}/>
        </ul>
        <ul>
          <LinkHeader path="/sair" alt="Logout" icon={SvgExit}/>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default SubHeaderDashboard;
