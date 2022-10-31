import React, { FunctionComponent } from "react";

import styles from "./btn.module.scss";

type btnTypes = {
  text: string;
  onClick: () => void;
};

export const Button: FunctionComponent<btnTypes> = ({ text, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};
