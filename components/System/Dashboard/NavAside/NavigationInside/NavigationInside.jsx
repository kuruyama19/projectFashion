import React from "react";
import LinkInside from "../LinkInside/LinkInside";
import styles from "./NavigationInside.module.css";
const NavigationInside = () => {
  return (
    <aside>
      <nav className={styles.menu}>
        <LinkInside path="shirts">Roupas</LinkInside>
        <LinkInside path="categories">Categorias</LinkInside>
        <LinkInside path="brands">Marcas</LinkInside>
        <LinkInside path="galleries">Galerias</LinkInside>
      </nav>
    </aside>
  );
};

export default NavigationInside;
