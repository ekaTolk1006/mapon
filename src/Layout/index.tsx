import React, { FunctionComponent } from "react";
import styles from "./layout.module.scss";
import { ReactComponent as Logo } from "../assets/icons/Group 35.svg";

type layoutType = {
  children: JSX.Element | JSX.Element[];
};

export const Layout: FunctionComponent<layoutType> = ({ children }) => {
  return (
    <div className={styles.layoutBlock}>
      <header className={styles.header}>
        <Logo />
      </header>
      <main>{children}</main>
    </div>
  );
};
