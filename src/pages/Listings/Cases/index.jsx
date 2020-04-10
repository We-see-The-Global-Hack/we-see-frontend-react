import React from "react";
import Case from "components/Case";

// styles
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cn = classNames.bind(styles);

const Cases = ({ title }) => {
  return (
    <div className={cn("cases")}>
      <h3 className={cn("cases_title")}>{title}</h3>
      <div className={cn("cases_cards")}>
        <Case />
        <Case />
        <Case />
        <Case />
      </div>
    </div>
  );
};

export default Cases;
